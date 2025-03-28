import { useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import arrowUp from '../../assets/icons/arrow_up.png'

export default function GoToTop() {
    const { theme } = useTheme();

    useEffect(() => {
        const goToTop = document.querySelector('.go-to-top');
        document.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 500) {
                goToTop.style.visibility = 'visible';
                goToTop.style.opacity = '1';
            } else {
                goToTop.style.visibility = 'hidden'
                goToTop.style.opacity = '0';
            }
        });
    });
    
    const goToTop = () => {
        scrollTo(0, 0);
    }
    
    return (
        <>
            <div onClick={goToTop} className={`go-to-top invisible cursor-pointer transition-all duration-500 triggered-hover fixed rounded-md p-2 right-4 bottom-4 ${theme == 'dark' ? 'bg-teal-500' : 'bg-sky-500'}`}>
                <img className='w-6 invert-[100]' src={arrowUp} />
            </div>
        </>
    )
}