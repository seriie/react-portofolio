import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import defaultProfile from "../../assets/image/profile-2.png";
import ChangeLang from "../change_lang/ChangeLang";
import ThemeToggle from "../theme_toggle/ThemeToggle";

export default function Header() {
  const [profile, setProfile] = useState(null);
  const { theme } = useTheme();

  const name = "Zzzeeee05";

  const getProfileUrl = (index) =>
    `https://raw.githubusercontent.com/seriie/porto-profile-img/refs/heads/main/profile/ryo-${index}.png`;

  const socialMedia = [
    {
      id: 1,
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      link: "https://github.com/seriie",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: <FaLinkedinIn className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/mohammad-zidane-rahadian-0b2815290",
    },
    {
      id: 3,
      name: "Email",
      icon: <IoMdMail className="w-5 h-5" />,
      link: "mailto:mohammadzidane058@gmail.com",
    },
  ];

  useEffect(() => {
    const index = Math.floor(Math.random() * 10) + 1;
    setProfile(getProfileUrl(index));
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-6 transition-all duration-500 ease-in-out ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-b from-gray-50 to-white text-gray-900"
      }`}
    >
      <ChangeLang />
      <ThemeToggle />

      <div
        className={`relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 shadow-md transition-transform duration-300 backdrop-blur-xl bg-white/10 ${
          theme === "dark"
            ? "border-blue-600 hover:shadow-blue-500/40"
            : "border-purple-500 hover:shadow-purple-400/40"
        } hover:scale-110`}
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
        {socialMedia.map(({ id, name, icon, link }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="group relative"
          >
            <div
              className={`w-11 h-11 flex items-center justify-center rounded-full shadow-md backdrop-blur-lg bg-white/10 transition-all duration-300 ease-in-out transform group-hover:scale-110 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              } group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500`}
            >
              {icon}
            </div>
          </a>
        ))}
      </div>

      <a
        href="/resume/Mohammad-Zidane-Rahadian.pdf"
        download
        className={`mt-10 rounded-full border-2 px-6 py-3 font-bold text-xl shadow-md backdrop-blur-xl bg-white/10 transition-all duration-300 ease-in-out hover:scale-110 ${
          theme === "dark"
            ? "border-slate-100 text-slate-100 hover:bg-teal-500 hover:border-teal-500 hover:text-white hover:shadow-teal-500"
            : "border-slate-800 text-slate-800 hover:bg-sky-500 hover:border-sky-500 hover:text-white hover:shadow-sky-500"
        }`}
      >
        Download CV
      </a>
    </div>
  );
}
