import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";

export default function Message() {
    const [messages, setMessages] = useState([]);
    const URL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await axios.get(`${URL}/form`);
            setMessages(response.data);
        } catch (e) {
            console.error("Error fetching messages:", e.message);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Messages</h2>
            <div className="grid grid-cols-1 gap-4">
                {messages.length > 0 ? (
                    messages.map((item, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform">
                          <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white p-4 rounded-t-lg">
                            <h2 className="text-xl font-semibold">Content {index + 1}</h2>
                          </div>
                          <div className="p-4 bg-gray-700">
                            <p className='text-slate-50'><strong className="text-teal-500">Name:</strong> {item.name}</p>
                            <p className='text-slate-50'><strong className="text-teal-500">Email:</strong> {item.email}</p>
                            <p className='text-slate-50'><strong className="text-teal-500">Message:</strong> {item.message}</p>
                            <p className="text-sm text-gray-500 mt-4"><strong>Created At:</strong> {item.datetime}</p>
                          </div>
                        </div>
                      ))
                ) : (
                    <p className="text-center text-gray-500">No messages available</p>
                )}
            </div>
        </div>
    );
}