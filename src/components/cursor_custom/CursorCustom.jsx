import { useEffect } from "react"

export default function CursorCustom() {

    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const dot = document.querySelector('.cursor .dot');
        const circle = document.querySelector('.cursor .circle');

        document.addEventListener('mousemove', function(event) {
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
    });

    return (
        <>
            <div className='cursor hidden'>
                <div className='dot absolute top-[50%] left-[50%] pointer-events-none translate-x-[-50%] translate-y-[-50%] z-[1000] transition-none bg-sky-500 p-[3px] rounded-full'></div>
                <div className='circle absolute top-[50%] left-[50%] pointer-events-none translate-x-[-50%] translate-y-[-50%] z-[1000] transition-all duration-[30ms] ease-linear border-solid border-sky-500 border-2 p-[15px] rounded-full'></div>
            </div>
        </>
    )
} 