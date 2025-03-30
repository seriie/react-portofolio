import { useEffect } from "react";
import axios from "axios";
import Header from "./header/Header";
import AboutMe from './about_me/AboutMe';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import CursorCustom from './cursor_custom/CursorCustom';
import GoToTop from './go_to_top/GoToTop';
import { LanguageProvider } from "../context/LanguageContext";

export default function MainPage() {
    const URL = import.meta.env.VITE_BACKEND_URL;

        useEffect(() => {
          const trackVisitor = async () => {
            try {
              await axios.post(`${URL}/visitors`);
            } catch (error) {
              console.error("Error tracking visitor:", error);
            }
          };
      
          trackVisitor();
        }, []);
      
    return (
        <>
            <LanguageProvider>
                <CursorCustom />
                <Header />
                <AboutMe />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
                <GoToTop />
            </LanguageProvider>
        </>
    )
}