import { FaUser } from 'react-icons/fa';
import { CiViewList } from "react-icons/ci";
import { Line, Bar } from "react-chartjs-2";
import axios from 'axios';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
    const [totalSubmitted, setTotalSubmitted] = useState(0);
    const [totalVisitors, setTotalVisitors] = useState(0);
    const [visitors, setVisitors] = useState([]);
    const [todayVisitors, setTodayVisitors] = useState(0);
    const [monthlyVisitors, setMonthlyVisitors] = useState(0);

    const URL = import.meta.env.VITE_BACKEND_URL;
    
    const countItem = [
        { id: 1, name: 'Total Visitor', count: totalVisitors, icon: FaUser, backGround: "bg-sky-500" },
        { id: 2, name: 'Monthly Visitors', count: monthlyVisitors, icon: FaUser, backGround: "bg-fuchsia-500" },
        { id: 3, name: 'Today Visitor', count: todayVisitors, icon: FaUser, backGround: "bg-teal-500" },
        { id: 4, name: 'Form Submitted', count: totalSubmitted, icon: CiViewList, backGround: "bg-yellow-500" },
    ];

    const getTotalSubmitted = async () => {
        try {
            const response = await axios.get(`${URL}/form/total-submitted`);
            setTotalSubmitted(response.data[0].total);
        } catch (e) {
            console.error(e.message);
        }
    };

    const getTotalVisitors = async () => {
        try {
            const response = await axios.get(`${URL}/visitors/total`);
            setTotalVisitors(response.data.length);
        } catch (e) {
            console.error(e.message);
        }
    }

    const getMonthlyVisitors = async () => {
        try {
            const response = await axios.get(`${URL}/visitors/month`);
            setMonthlyVisitors(response.data.length);
        } catch (e) {
            console.error(e.message);
        }
    }

    const getVisitorsStatistics = async () => {
        try {
            const response = await axios.get(`${URL}/visitors/visitors-statistics`);
            setVisitors(response.data);
        } catch (e) {
            console.error(e.message);
        }
    };

    const getTodayVisitors = async () => {
        try {
            const response = await axios.get(`${URL}/visitors/today`);
            setTodayVisitors(response.data[0].total);
        } catch (e) {
            console.error(e.message);
        }
    };

    useEffect(() => {
        getTotalSubmitted();
        getVisitorsStatistics();
        getTodayVisitors();
        getTotalVisitors();
        getMonthlyVisitors();
        
        const interval = setInterval(() => {
            getTotalSubmitted();
            getVisitorsStatistics();
            getTodayVisitors();
            getTotalVisitors();
            getMonthlyVisitors();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const chartData = {
        labels: visitors.map((data) => data.date.slice(0,10)),
        datasets: [
            {
                label: 'Visitors /day',
                data: visitors.map((data) => data.total_visitor),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                tension: 0.3,
            }
        ]
    };

    return (
        <div className="mx-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {countItem.map(({ id, name, count, icon: Icon, backGround }) => (
              <div
                key={id}
                className={`flex items-center justify-between w-full sm:w-[48%] lg:w-[23%] ${backGround} rounded-lg p-5 shadow-lg`}
              >
                <div>
                  <p className="text-5xl font-bold text-white">{count}</p>
                  <p className="text-lg text-white mt-1">{name}</p>
                </div>
                <Icon className="w-16 h-16 text-white" />
              </div>
            ))}
          </div>
        
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h2 className="text-xl font-bold mb-4">Visitor Statistics</h2>
            <div className="w-full h-96">
              <Line data={chartData} />
            </div>
          </div>
        </div>
    );
}