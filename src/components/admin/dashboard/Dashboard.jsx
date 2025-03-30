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

    const URL = import.meta.env.VITE_BACKEND_URL;
    
    const countItem = [
        { id: 1, name: 'Total Visitor', count: totalVisitors, icon: FaUser, backGround: "bg-sky-500" },
        { id: 2, name: 'Visitor Today', count: todayVisitors, icon: FaUser, backGround: "bg-teal-500" },
        { id: 3, name: 'Form Submitted', count: totalSubmitted, icon: CiViewList, backGround: "bg-yellow-500" }
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
            const totalDecimal = response.data.length
            setTotalVisitors(totalDecimal.toFixed(0));
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
            setTodayVisitors(response.data[0].total / 3);
        } catch (e) {
            console.error(e.message);
        }
    };

    useEffect(() => {
        getTotalSubmitted();
        getVisitorsStatistics();
        getTodayVisitors();
        getTotalVisitors();
        
        const interval = setInterval(() => {
            getTotalSubmitted();
            getVisitorsStatistics();
            getTodayVisitors();
            getTotalVisitors();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const chartData = {
        labels: visitors.map((data) => data.date.slice(0,10)),
        datasets: [
            {
                label: 'Visitors /day',
                data: visitors.map((data) => data.total_visitor / 3),
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
            <div className="counter flex items-center justify-around mb-8">
                {countItem.map(({ id, name, count, icon: Icon, backGround }) => (
                    <div key={id} className={`flex ${backGround} rounded-md p-4 items-center space-x-4`}>
                        <div className=''>
                            <p className="text-5xl text-white">{count}</p>
                            <p className="text-lg text-white">{name}</p>
                        </div>
                        <Icon className="w-20 h-20 text-white" />
                    </div>
                ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Visitor Statistics</h2>
                <Line data={chartData} />
            </div>
        </div>
    );
}