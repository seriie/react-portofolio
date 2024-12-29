import { useState } from "react"; // Mengimpor hook useState dari React
import { useLanguage } from "../../context/LanguageContext"; // Mengimpor context bahasa
import { useTheme } from "../../context/ThemeContext"; // Mengimpor context tema

export default function Contact() {
  const [error, setError] = useState(''); // State untuk menyimpan pesan error
  const { translations } = useLanguage(); // Mendapatkan data terjemahan dari context
  const { theme } = useTheme(); // Mendapatkan tema saat ini dari context
  const URL = "https://porto-api-seven.vercel.app/form"; // URL API untuk mengirim form

  if (!translations) { // Jika data terjemahan belum dimuat
    return <p>Loading....</p>; // Menampilkan pesan loading
  }

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = async (event) => {
    event.preventDefault(); // Mencegah reload halaman

    const formData = new FormData(event.target); // Membuat objek FormData dari form
    const formObject = Object.fromEntries(formData.entries()); // Mengonversi FormData menjadi objek biasa

    try {
      const response = await fetch(URL, { // Mengirim request POST ke server
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Mengatur header Content-Type
        },
        body: JSON.stringify(formObject) // Mengonversi objek form menjadi JSON
      });
      
      if (response.ok) { // Jika respons sukses
        setError(false); // Reset error
        console.log("Form submitted successfully!"); // Menampilkan pesan sukses
        location.reload(); // Reload halaman setelah pengiriman form berhasil
      } else { // Jika respons gagal
        console.error("Failed to submit form"); // Menampilkan pesan error di console
        setError("Failed to submit form"); // Menampilkan pesan error
      }
    } catch (error) { // Menangani error jika terjadi kesalahan saat mengirim request
      console.error("Error:", error); // Menampilkan pesan error di console
      setError("Error: " + error.message) // Menampilkan pesan error
    }
  };

  const { contact } = translations; // Mendapatkan terjemahan untuk kontak dari data translations

  return (
    <section
      className={`py-16 px-6 ${
        theme === "dark" ? "bg-slate-800" : "bg-slate-100"
      }`} // Menyesuaikan latar belakang section berdasarkan tema
    >
      <h2
        className={`text-3xl md:text-4xl font-extrabold ${
          theme === "dark" ? "text-slate-50" : "text-slate-900"
        } mb-8 text-center`} // Menyesuaikan gaya judul berdasarkan tema
      >
        {contact.title} {/* Menampilkan judul kontak */}
      </h2>

      <form
        onSubmit={handleSubmit} // Menangani submit form secara manual
        className={`max-w-3xl mx-auto ${
          theme === "dark" ? "bg-slate-900" : "bg-slate-300"
        } p-6 rounded-lg shadow-lg`} // Menyesuaikan gaya form berdasarkan tema
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className={`block text-sm font-medium ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            } mb-1`} // Menyesuaikan label berdasarkan tema
          >
            {contact.name} {/* Menampilkan label untuk nama */}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required // Membutuhkan input nama
            className={`w-full px-4 py-2 rounded-lg ${
              theme === "dark"
                ? "bg-slate-800 text-slate-300"
                : "bg-slate-100 text-slate-900"
            } focus:outline-none focus:ring-2 focus:ring-teal-500`} // Menyesuaikan input berdasarkan tema
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className={`block text-sm font-medium ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            } mb-1`} // Menyesuaikan label berdasarkan tema
          >
            {contact.email} {/* Menampilkan label untuk email */}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required // Membutuhkan input email
            className={`w-full px-4 py-2 rounded-lg ${
              theme === "dark"
                ? "bg-slate-800 text-slate-300"
                : "bg-slate-100 text-slate-900"
            } focus:outline-none focus:ring-2 focus:ring-teal-500`} // Menyesuaikan input berdasarkan tema
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className={`block text-sm font-medium ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            } mb-1`} // Menyesuaikan label berdasarkan tema
          >
            {contact.message} {/* Menampilkan label untuk pesan */}
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required // Membutuhkan input pesan
            className={`w-full px-4 py-2 rounded-lg ${
              theme === "dark"
                ? "bg-slate-800 text-slate-300"
                : "bg-slate-100 text-slate-900"
            } focus:outline-none focus:ring-2 focus:ring-teal-500`} // Menyesuaikan textarea berdasarkan tema
          ></textarea>
        </div>

        {error && <p className="text-red-500">{error}</p>} {/* Menampilkan pesan error jika ada */}

        <button
          type="submit"
          className="triggered-hover focus:outline-teal-400 w-full bg-teal-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-teal-600 transition duration-300" // Tombol submit form dengan animasi hover
        >
          {contact.send} {/* Menampilkan teks tombol submit */}
        </button>
      </form>
    </section>
  );
}