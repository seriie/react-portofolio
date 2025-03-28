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