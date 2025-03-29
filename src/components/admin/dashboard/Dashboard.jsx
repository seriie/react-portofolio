import { FaUser } from 'react-icons/fa';
import { CiViewList } from "react-icons/ci";
import { Line, Bar } from "react-chartjs-2";
import axios from 'axios';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
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
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
    const [totalSubmitted, setTotalSubmitted] = useState([]);
    const URL = import.meta.env.VITE_BACKEND_URL;
    const countItem = [
        { id: 1, name: 'Total Visitor', count: 100, icon: FaUser, backGround: "bg-sky-500" },
        { id: 2, name: 'Visitor Today', count: 5, icon: FaUser, backGround: "bg-teal-500" },
        { id: 3, name: 'Form Submitted', count: totalSubmitted, icon: CiViewList, backGround: "bg-yellow-500" }
    ];

    const getTotalSubmitted = async () => {
        try {
            const response = await axios.get(`${URL}/form/total-submitted`);
    
            setTotalSubmitted(response.data[0].total);
            console.log(response.data[0])
        } catch (e) {
            console.error(e.message);
        }
    }

    useEffect(() => {
        getTotalSubmitted();

        const interval = setInterval(() => {
            getTotalSubmitted();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="counter mx-4 flex items-center justify-around">
            {countItem.map(({ id, name, count, icon: Icon, backGround }) => (
                <div key={id} className={`flex ${backGround} rounded-md p-4 items-center space-x-4`}>
                    <div>
                        <p className="text-5xl text-white">{count}</p>
                        <p className="text-lg text-white">{name}</p>
                    </div>
                    <Icon className="w-20 h-20 text-white" />
                </div>
            ))}
        </div>
    );
}