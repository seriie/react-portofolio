import { useEffect, useState } from "react";
import { LuMessageCircleMore } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import plusIcon from "../../assets/icons/plus_icon.png";
import homeIcon from "../../assets/icons/home_icon.png";
import projectIcon from "../../assets/icons/project_icon.png";
import Login from "./auth/login/Login";
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
  const [isMobile, setIsMobile] = useState(false);
  const [isLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    document.title = `Admin - ${menuItems.find((item) => item.id === selectedTab)?.label}`;
  }, [selectedTab]);

  useEffect(() => {
    window.addEventListener('resize', function () {
      if (window.innerWidth <= 750) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

    if (window.innerWidth <= 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  
  const selectTab = (id) => {
    setSelectedTab(id);
    setIsOpen(false);
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    location.reload();
  }

  if (!isLoggedIn) return <Login />;

  return (
      isMobile ? (
        <div className="flex">
          <div
            className={`${
              isOpen ? "h-52" : "h-12"
            } z-10 transition-all duration-300 overflow-hidden absolute flex flex-col top-0 right-0 left-0 W-full bg-teal-500 shadow-lg shadow-teal-500/50`}
          >
            <img
              onClick={() => setIsOpen((prev) => !prev)}
              className={`cursor-pointer w-8 h-8 mt-2 transform transition-all duration-300 ${
                isOpen ? "rotate-45 mx-auto" : "rotate-0 mx-auto"
              }`}
              src={plusIcon}
              alt="Toggle Sidebar"
            />
    
            <div className="p-1 mt-4">
              {menuItems.map(({ id, label, icon, isComponent }) => (
                <div
                key={id}
                onClick={() => selectTab(id)}
                className={`cursor-pointer mt-2 p-1 rounded-md flex items-center transition-all duration-100 ${
                  selectedTab === id ? "bg-indigo-500 text-white" : "hover:bg-teal-400 text-gray-200"
                  }`}
                  >
                {isComponent ? icon : <img className="w-8" src={icon} alt={label} />}
                {isOpen && <p className="text-slate-100 font-bold text-lg">{label}</p>}
                </div>
              ))}
              <FiLogOut />
            </div>
          </div>
    
          <div className={`mt-10 transition-all duration-300 ${isOpen ? "" : ""} w-full p-4`}>
            {selectedTab === "dashboard" && <Dashboard />}
            {selectedTab === "manageProject" && <ProjectManagement />}
            {selectedTab === "message" && <Message />}
          </div>
        </div>
      ) : (
        <div className="flex">
          <div
            className={`${
              isOpen ? "w-52" : "w-12"
            } z-10 transition-all duration-300 overflow-hidden fixed flex flex-col left-0 h-full bg-teal-500 shadow-lg shadow-teal-500/50`}
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
              <div onClick={handleLogout} className="cursor-pointer hover:bg-red-500 gap-1 mt-2 p-1 rounded-md flex items-center transition-all duration-100">
                <FiLogOut className="text-slate-100 text-3xl"/>
                {isOpen && <p className="text-slate-100 font-bold text-lg">Sign Out</p>}
              </div>
            </div>
          </div>
    
          <div className={`transition-all duration-300 ${isOpen ? "ml-52" : "ml-12"} w-full p-4`}>
            {selectedTab === "dashboard" && <Dashboard />}
            {selectedTab === "manageProject" && <ProjectManagement />}
            {selectedTab === "message" && <Message />}
          </div>
        </div>
      )
  );
}