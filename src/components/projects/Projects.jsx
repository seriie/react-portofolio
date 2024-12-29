import { useLanguage } from '../../context/LanguageContext'; // Mengambil data terjemahan dari context Language
import { useTheme } from '../../context/ThemeContext'; // Mengambil tema dari context Theme
import onetap from '../../assets/project_img/onetap.png'; // Gambar untuk proyek OneTap
import animeweb from '../../assets/project_img/anime_web.png'; // Gambar untuk proyek Anime Web
import mangaweb from '../../assets/project_img/manga_web.png'; // Gambar untuk proyek Manga Web
import earthquakeweb from '../../assets/project_img/earthquake_web.png'; // Gambar untuk proyek Earthquake Web

export default function Projects() {
  const { translations } = useLanguage(); // Mengambil data terjemahan
  const { theme } = useTheme(); // Mengambil tema saat ini

  // Menampilkan loading jika data terjemahan belum dimuat
  if (!translations) {
    return <p>Loading...</p>;
  }

  const { project } = translations; // Mengambil bagian 'project' dari data terjemahan

  // Daftar proyek yang akan ditampilkan
  const projects = [
    {
      title: project.onetap.title, // Judul proyek OneTap
      description: project.onetap.description, // Deskripsi proyek OneTap
      image: onetap, // Gambar proyek OneTap
      tech: ["ReactJS", "Tailwind CSS"], // Teknologi yang digunakan
      link: "https://justonetap.vercel.app", // Link ke proyek
      visit: project.visit, // Teks untuk tombol "Visit"
    },
    {
      title: project.animeweb.title, // Judul proyek Anime Web
      description: project.animeweb.description, // Deskripsi proyek Anime Web
      image: animeweb, // Gambar proyek Anime Web
      tech: ["ReactJS", "Tailwind CSS", "API"], // Teknologi yang digunakan
      link: "https://your-anime-web.vercel.app", // Link ke proyek
      visit: project.visit, // Teks untuk tombol "Visit"
    },
    {
      title: project.mangaweb.title, // Judul proyek Manga Web
      description: project.mangaweb.description, // Deskripsi proyek Manga Web
      image: mangaweb, // Gambar proyek Manga Web
      tech: ["ReactJS", "Tailwind CSS", "API"], // Teknologi yang digunakan
      link: "https://your-manga-web.vercel.app", // Link ke proyek
      visit: project.visit, // Teks untuk tombol "Visit"
    },
    {
      title: project.earthquakeapi.title, // Judul proyek Earthquake API
      description: project.earthquakeapi.description, // Deskripsi proyek Earthquake API
      image: earthquakeweb, // Gambar proyek Earthquake API
      tech: ["ReactJS", "Tailwind CSS", "API"], // Teknologi yang digunakan
      link: "https://earthquakeapi-bmkg.vercel.app", // Link ke proyek
      visit: project.visit, // Teks untuk tombol "Visit"
    }
  ];

  return (
    <section
      className={`py-16 px-6 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-300'}`} // Menentukan warna latar belakang sesuai tema
    >
      {/* Judul halaman proyek */}
      <h2
        className={`text-3xl md:text-4xl font-extrabold ${
          theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
        } mb-8 text-center`}
      >
        {project.title} {/* Menampilkan judul proyek */}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Menampilkan setiap proyek */}
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300`} // Menambahkan efek hover dan styling
            style={{
              backgroundImage: `url(${project.image})`, // Menambahkan gambar sebagai latar belakang proyek
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Overlay transparan untuk teks lebih jelas */}

            <div className="relative p-6 z-10 text-white">
              {/* Menampilkan judul proyek */}
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              {/* Menampilkan deskripsi proyek */}
              <p className="text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {/* Menampilkan teknologi yang digunakan dalam proyek */}
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradientToRight text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link untuk mengunjungi proyek */}
              <a
                href={project.link}
                className="text-teal-400 text-sm font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.visit}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}