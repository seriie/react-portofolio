import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function CursorCustom() {
    const [isTriggered, setIsTriggered] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const triggeredHover = document.querySelectorAll('.triggered-hover');
        const cursor = document.querySelector('.cursor');
        const dot = document.querySelector('.cursor .dot');
        const circle = document.querySelector('.cursor .circle');

        if(window.innerWidth > 700) {
            document.addEventListener('mousemove', function(event) {
                dot.style.top = `${event.pageY}px`;
                dot.style.left = `${event.pageX}px`;
                circle.style.top = `${event.pageY}px`;
                circle.style.left = `${event.pageX}px`;
            });
            
            window.addEventListener('scroll', function (event) {
                dot.style.top = `${event.pageY}px`;
                dot.style.left = `${event.pageX}px`;
                circle.style.top = `${event.pageY}px`;
                circle.style.left = `${event.pageX}px`;
            });

            document.addEventListener('mouseleave', function() {
                cursor.style.display = "none";
            });
            
            document.addEventListener('mousemove', function() {
                cursor.style.display = "block";
            });

            triggeredHover.forEach(triggered => {
                triggered.addEventListener('mouseenter', function() {
                    setIsTriggered(true);
                });

                triggered.addEventListener('mouseleave', function() {
                    setIsTriggered(false);
                });
            });
        }
    });

    return (
        <>
            <div className='cursor hidden'>
                <div className={`dot ${isTriggered ? 'hidden' : 'block'} absolute top-[50%] left-[50%] pointer-events-none translate-x-[-50%] translate-y-[-50%] z-[1000] transition-none ${theme === "dark" ? 'bg-green-500' : 'bg-sky-500'} p-[3px] rounded-full`}></div>
                <div className={`circle absolute top-[50%] left-[50%] pointer-events-none translate-x-[-50%] translate-y-[-50%] z-[1000] transition-all duration-[30ms] ease-linear ${isTriggered ? `p-[30px] ${theme === "dark" ? 'bg-green-500' : 'bg-sky-500'} opacity-[.5]` : `p-[15px] border-solid ${theme === "dark" ? 'border-green-500' : 'border-sky-500'} border-2`} rounded-full`}></div>
            </div>
        </>
    )
}
