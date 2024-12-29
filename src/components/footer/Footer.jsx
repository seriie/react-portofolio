import { useTheme } from "../../context/ThemeContext"; // Import context tema
import { useLanguage } from "../../context/LanguageContext"; // Import context bahasa

export default function Footer() {
    const { translations } = useLanguage(); // Mendapatkan terjemahan dari context bahasa
    const { theme } = useTheme(); // Mendapatkan tema dari context tema

    if(!translations) { // Jika terjemahan belum tersedia, tampilkan "Loading..."
        return <p>Loading...</p>;
    }

    const { support } = translations; // Menyimpan bagian "support" dari terjemahan
    return (
        <footer className={`${theme === "dark" ? 'bg-slate-900 text-slate-50' : 'bg-slate-300 text-slate-900'} py-8`}> {/* Footer dengan penyesuaian tema */}
          <div className="container mx-auto text-center"> {/* Container utama dengan penataan teks */}
            <div className="flex justify-center mb-8 space-x-10"> {/* Mengatur tata letak ikon media sosial */}
              <a href="https://github.com/seriie" target="_blank" className={`triggered-hover ${theme === "dark" ? 'text-slate-400 hover:text-slate-300' : 'text-slate-700 hover:text-slate-900'}`}> {/* Tombol GitHub */}
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/mohammad-zidane-rahadian-0b2815290/" target="_blank" className={`triggered-hover ${theme === "dark" ? 'text-slate-400 hover:text-slate-300' : 'text-slate-700 hover:text-slate-900'}`}> {/* Tombol LinkedIn */}
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://www.instagram.com/zzzeeee05" target="_blank" className={`triggered-hover ${theme === "dark" ? 'text-slate-400 hover:text-slate-300' : 'text-slate-700 hover:text-slate-900'}`}> {/* Tombol Instagram */}
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>

            <p className="text-lg mb-4">{support.title}</p> {/* Menampilkan judul dari bagian support */}
            <div className="flex justify-center mb-8 space-x-10"> {/* Tombol donasi */}
            <a 
              href="https://ko-fi.com/justacoders" 
              target="_blank" 
              className={`${theme === "dark" ? 'text-slate-400 hover:text-slate-300' : 'text-slate-700 hover:text-slate-900'} flex items-center`} // Tombol Ko-fi dengan ikon kopi
            >
              <i className="triggered-hover fas fa-coffee mr-2"></i> 
              {support.link} {/* Menampilkan teks dari terjemahan support.link */}
            </a>
            </div>

            <div className={`text-sm ${theme === "dark" ? 'text-slate-400' : 'text-slate-700'}`}> {/* Teks copyright dengan penyesuaian tema */}
              <p>&copy; {new Date().getFullYear()} Zee. All rights reserved.</p> {/* Menampilkan tahun dan hak cipta */}
            </div>
          </div>
        </footer>
    );
}