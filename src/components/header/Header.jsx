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

  const socialMedia = [
    {
      id: 1,
      name: "GitHub",
      icon: <FaGithub className="w-6 h-6 text-slate-300" />,
      link: "https://github.com/seriie",
    },
    {
      id: 2,
      name: "Linkedin",
      icon: <FaLinkedinIn className="w-6 h-6 text-slate-300" />,
      link: "https://www.linkedin.com/in/mohammad-zidane-rahadian-0b2815290",
    },
    {
      id: 3,
      name: "Gmail",
      icon: <IoMdMail className="w-6 h-6 text-slate-300" />,
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

  const { theme } = useTheme();
  const name = "Zzzeeee05";

  return (
    <div
      className={`header-bg flex flex-col items-center justify-center min-h-screen px-6 transition-all ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-b from-gray-100 to-white text-gray-900"
      }`}
    >
      <ChangeLang />
      <ThemeToggle />

      <div
        className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ${
          theme === "dark"
            ? "hover:shadow-customLight"
            : "hover:shadow-customDark"
        } hover:scale-110 transition-all`}
      >
        <img
          src={profile || defaultProfile}
          alt="Profile"
          className="triggered-hover object-cover w-full h-full"
          onError={(e) => {
            e.target.onError = null;
            e.target.src = defaultProfile;
          }}
        />
      </div>

      <h1 className="header-name mt-6 text-3xl md:text-5xl font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        {name}
      </h1>

      <p className="header-text mt-4 text-sm md:text-lg text-center max-w-md leading-relaxed">
        Web Developer specializing in{" "}
        <span className="font-semibold text-blue-400">ReactJS</span>,{" "}
        <span className="font-semibold text-teal-400">Tailwind CSS</span>, and
        modern web technologies.
      </p>
      <div className="flex gap-4 mt-6">
        {socialMedia.map((item) => (
          <div key={item.id}>
            <a
              href={item.link}
              target="_blank"
              className="triggered-hover group"
            >
              <span className="sr-only">{item.name}</span>
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  theme === "dark" ? "bg-slate-700" : "bg-slate-300"
                } group-hover:bg-blue-500 transition duration-300`}
              >
                <div className="">{item.icon}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
