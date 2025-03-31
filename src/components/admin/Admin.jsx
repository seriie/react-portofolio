import { useEffect, useState } from "react";
import { LuMessageCircleMore } from "react-icons/lu";
import plusIcon from "../../assets/icons/plus_icon.png";
import homeIcon from "../../assets/icons/home_icon.png";
import projectIcon from "../../assets/icons/project_icon.png";
import Dashboard from "./dashboard/Dashboard";
import ProjectManagement from "./project_management/ProjectManagement";
import Message from "./message/Message";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: homeIcon, isComponent: false },
  { id: "manageProject", label: "Manage Project", icon: projectIcon, isComponent: false },
  { id: "message", label: "Message", icon: <LuMessageCircleMore className="w-8 h-8 text-white" />, isComponent: true },
];

export default function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME;
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  useEffect(() => {
    document.title = `Admin - ${menuItems.find((item) => item.id === selectedTab)?.label}`;
  }, [selectedTab]);

  useEffect(() => {
    // if (window.innerHeight <= )
    if (!isLoggedIn) {
      const username = prompt("Username:");
      const password = prompt("Password:");

      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
      } else {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
        alert("Login failed!");
      }
    }
  }, []);

  if (!isLoggedIn) return <h1 className="text-center mt-10 text-2xl font-bold">Access Denied</h1>;

  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "w-52" : "w-12"
        } transition-all duration-300 overflow-hidden fixed flex flex-col left-0 h-full bg-teal-500 shadow-lg shadow-teal-500/50`}
      >
        <img
          onClick={() => setIsOpen((prev) => !prev)}
          className={`cursor-pointer w-8 h-8 mt-2 transform transition-all duration-300 ${
            isOpen ? "rotate-45 ml-auto mr-2" : "rotate-0 ml-auto mr-2"
          }`}
          src={plusIcon}
          alt="Toggle Sidebar"
        />

        <div className="p-1 mt-4">
          {menuItems.map(({ id, label, icon, isComponent }) => (
            <div
            key={id}
            onClick={() => setSelectedTab(id)}
            className={`cursor-pointer mt-2 p-1 rounded-md flex items-center transition-all duration-100 ${
              selectedTab === id ? "bg-indigo-500 text-white" : "hover:bg-teal-400 text-gray-200"
              }`}
              >
            {isComponent ? icon : <img className="w-8" src={icon} alt={label} />}
            {isOpen && <p className="text-slate-100 font-bold text-lg">{label}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className={`transition-all duration-300 ${isOpen ? "ml-52" : "ml-12"} w-full p-4`}>
        {selectedTab === "dashboard" && <Dashboard />}
        {selectedTab === "manageProject" && <ProjectManagement />}
        {selectedTab === "message" && <Message />}
      </div>
    </div>
  );
}