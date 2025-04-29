import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import defaultProfile from "../../assets/image/profile-2.png";
import ChangeLang from "../change_lang/ChangeLang";
import ThemeToggle from "../theme_toggle/ThemeToggle";

export default function Header() {
  const [profile, setProfile] = useState(null);
  const getProfileUrl = (index) => {
    return `https://raw.githubusercontent.com/seriie/porto-profile-img/refs/heads/main/profile/ryo-${index}.png`;
  };
  const { theme } = useTheme();

  const socialMedia = [
    {
      id: 1,
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      link: "https://github.com/seriie",
    },
    {
      id: 2,
      name: "Linkedin",
      icon: <FaLinkedinIn className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/mohammad-zidane-rahadian-0b2815290",
    },
    {
      id: 3,
      name: "Gmail",
      icon: <IoMdMail className="w-5 h-5" />,
      link: "mailto:mohammadzidane058@gmail.com",
    },
  ];

  const handleSetProfile = () => {
    const index = Math.floor(Math.random() * 10) + 1;
    setProfile(getProfileUrl(index));
  };

  useEffect(() => {
    handleSetProfile();
  }, []);

  const name = "Zzzeeee05";

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-6 transition-all ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-b from-gray-50 to-white text-gray-900"
      }`}
    >
      <ChangeLang />
      <ThemeToggle />

      <div
        className={`relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 ${
          theme === "dark" ? "border-blue-600 hover:shadow-slate-600" : "border-purple-500"
        } shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-110`}
      >
        <img
          src={profile || defaultProfile}
          alt="Profile"
          className="object-cover w-full h-full"
          onError={(e) => {
            e.target.onError = null;
            e.target.src = defaultProfile;
          }}
        />
      </div>

      <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse">
        {name}
      </h1>

      <p className="mt-4 text-sm md:text-lg text-center max-w-md leading-relaxed opacity-90">
        Web Developer specializing in{" "}
        <span className="font-semibold text-blue-400">ReactJS</span>,{" "}
        <span className="font-semibold text-teal-400">Tailwind CSS</span>, and
        modern web technologies.
      </p>

      <div className="flex gap-5 mt-6">
        {socialMedia.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div
              className={`w-11 h-11 flex items-center justify-center rounded-full shadow-md ${
                theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
              } group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300 transform group-hover:scale-110`}
            >
              {item.icon}
            </div>
          </a>
        ))}
      </div>
      <a href='/resume/Mohammad-Zidane-Rahadian.pdf' download className={`relative triggered-hover mt-10 rounded-full border-2 ${theme === "dark" ? 'border-slate-100 text-slate-100 hover:bg-teal-500 hover:border-teal-500 hover:shadow-teal-500' : 'border-slate-800 text-slate-800 hover:bg-sky-500 hover:border-sky-500 hover:shadow-sky-500 hover:text-slate-100'} shadow-md shadow-slate-500 hover:scale-[1.1] transition-all duration-200 p-4 font-bold text-xl`}>
        <button>Download CV</button>
      </a>
    </div>
  );
}
