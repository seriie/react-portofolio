import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [forgotPwClicked, setForgotPwClicked] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME;
    const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
    const ADMIN_NAME = import.meta.env.VITE_ADMIN_NAME;

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
                setPasswordInvalid(true);
            }
        }
    }

    const handleForgotPassword = () => {
        const name = prompt("Who are you?");

        if (name == ADMIN_NAME.split(",").join(" ")) {
            alert("Password is: " + ADMIN_PASSWORD);
            location.reload();
        } else {
            alert("You are not the admin!");
            location.reload();
        }
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.altKey && e.key === "f") {
                handleForgotPassword();
            }
        };
    
        document.addEventListener("keydown", handleKeyDown);
    
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

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
                        {passwordInvalid && <p onClick={() => setForgotPwClicked(true)} className="">Forgot password? <span className="text-teal-100 cursor-pointer hover:underline font-bold">Click here!</span></p>}
                        {forgotPwClicked && <p className="text-red-500 font-black text-xl">CTRL + ALT + F</p>}
                    </div>
                </form>
            </div>
        </>
    )
}