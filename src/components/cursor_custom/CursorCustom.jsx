import { useEffect, useState } from "react"; // Mengimpor hooks React
import { useTheme } from "../../context/ThemeContext"; // Mengimpor context tema

export default function CursorCustom() {
    const [isTriggered, setIsTriggered] = useState(false); // State untuk menentukan apakah kursor sedang terpicu
    const { theme } = useTheme(); // Mendapatkan tema saat ini dari context

    useEffect(() => {
        const triggeredHover = document.querySelectorAll('.triggered-hover'); // Menyaring elemen dengan class 'triggered-hover'
        const cursor = document.querySelector('.cursor'); // Menyaring elemen dengan class 'cursor'
        const dot = document.querySelector('.cursor .dot'); // Menyaring elemen dengan class 'dot' di dalam 'cursor'
        const circle = document.querySelector('.cursor .circle'); // Menyaring elemen dengan class 'circle' di dalam 'cursor'

        if(window.innerWidth > 700) { // Mengecek jika lebar layar lebih dari 700px
            document.addEventListener('mousemove', function(event) { // Menambahkan event listener untuk pergerakan mouse
                dot.style.top = `${event.pageY}px`; // Mengatur posisi 'dot' mengikuti posisi Y mouse
                dot.style.left = `${event.pageX}px`; // Mengatur posisi 'dot' mengikuti posisi X mouse
                circle.style.top = `${event.pageY}px`; // Mengatur posisi 'circle' mengikuti posisi Y mouse
                circle.style.left = `${event.pageX}px`; // Mengatur posisi 'circle' mengikuti posisi X mouse
            }); 

            document.addEventListener('mouseleave', function() { // Ketika mouse meninggalkan jendela, sembunyikan cursor
                cursor.style.display = "none";
            });
            
            document.addEventListener('mousemove', function() { // Ketika mouse bergerak, tampilkan cursor
                cursor.style.display = "block";
            });

            triggeredHover.forEach(triggered => { // Menambahkan event listener pada elemen dengan class 'triggered-hover'
                triggered.addEventListener('mouseenter', function() { // Ketika mouse masuk ke elemen
                    setIsTriggered(true); // Set state isTriggered menjadi true
                });

                triggered.addEventListener('mouseleave', function() { // Ketika mouse keluar dari elemen
                    setIsTriggered(false); // Set state isTriggered menjadi false
                });
            });
        }
    });

    return (
        <>
            <div className='cursor hidden'> {/* Elemen cursor yang tersembunyi */}
                <div className={`dot ${isTriggered ? 'hidden' : 'block'} absolute top-[50%] left-[50%] pointer-events-none translate-x-[-50%] translate-y-[-50%] z-[1000] transition-none ${theme === "dark" ? 'bg-green-500' : 'bg-sky-500'} p-[3px] rounded-full`}></div> {/* Elemen titik kecil, berubah warna sesuai tema */}
                <div className={`circle absolute top-[50%] left-[50%] pointer-events-none translate-x-[-50%] translate-y-[-50%] z-[1000] transition-all duration-[30ms] ease-linear ${isTriggered ? `p-[30px] ${theme === "dark" ? 'bg-green-500' : 'bg-sky-500'} opacity-[.5]` : `p-[15px] border-solid ${theme === "dark" ? 'border-green-500' : 'border-sky-500'} border-2`} rounded-full`}></div> {/* Elemen lingkaran, berubah ukuran dan gaya saat triggered */}
            </div>
        </>
    )
}
