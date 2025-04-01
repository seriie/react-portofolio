import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME;
    const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

    const handleLogin = (e) => {
        e.preventDefault();
        if (!isLoggedIn) {
            if (username == ADMIN_USERNAME && password == ADMIN_PASSWORD) {
                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn', "true");
                location.reload();
            } else if (!username || !password) {
                setError("Please fill all fields!");
            } else {
                setError("Invalid username or password!");
            }
        }
    }

    return (
        <>
            <div className="flex justify-center items-center absolute inset-0">
                <form onSubmit={handleLogin} className="bg-teal-500 w-96 text-center p-6 rounded-sm">
                    <h1 className="font-bold text-3xl">Welcome</h1>
                    <p className="font-medium">Login to continue</p>
                    <div className="mt-4">
                        <div className="relative">
                            <input
                                placeholder="Username"
                                className="rounded-md text-slate-800 p-2 w-full"
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                />
                            <FaUser className="absolute right-3 top-3 text-slate-400"/>
                        </div>
                        <div className="relative mt-4">
                            <input 
                                placeholder="Password"
                                className="rounded-md text-slate-800 p-2 w-full"
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer right-3 top-3 text-slate-400">
                                {showPassword ? <GoEyeClosed /> : <GoEye />}
                            </div>
                        </div>
                        {error && <p className="bg-red-200 px-1 py-2 rounded-md text-red-500 mt-4">{error}</p>}
                        <button type="submit" className={`${error ? 'mt-4' : 'mt-8'} p-2 bg-fuchsia-500 rounded-md w-full font-medium`}>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}