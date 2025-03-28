import { useEffect, useState } from "react";
import plusIcon from "../../assets/icons/plus_icon.png";
import homeIcon from "../../assets/icons/home_icon.png";
import projectIcon from "../../assets/icons/project_icon.png";
import Dashboard from "./dashboard/Dashboard";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: homeIcon },
  { id: "manageProject", label: "Manage Project", icon: projectIcon },
];

export default function Admin() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState("dashboard");
    
    useEffect(() => {
        document.title = `Admin - ${menuItems.find(item => item.id === selectedTab)?.label}`;
    }, [selectedTab]);
    

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
          {menuItems.map(({ id, label, icon }) => (
            <div
              key={id}
              onClick={() => setSelectedTab(id)}
              className={`cursor-pointer mt-2 p-1 rounded-md flex items-center transition-all duration-100 ${
                selectedTab === id ? "bg-indigo-500 text-white" : "hover:bg-teal-400 text-gray-200"
              }`}
            >
              <img className="w-8" src={icon} alt={label} />
              {isOpen && <p className="text-slate-100 font-bold text-lg">{label}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className={`transition-all duration-300 ${isOpen ? "ml-52" : "ml-12"} w-full p-4`}>
        {selectedTab === "dashboard" && <Dashboard />}
        {selectedTab === "manageProject" && <h1 className="text-2xl font-bold">Manage Project Page</h1>}
      </div>
    </div>
  );
}