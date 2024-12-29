import './App.css';
// Mengimport semua components ke root file
import Header from './components/header/Header';
import AboutMe from './components/about_me/AboutMe';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import CursorCustom from './components/cursor_custom/CursorCustom';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <>
    {/* Memanggil / memakai semua components yang sudah di import */}
    <LanguageProvider>
      <div className='App'>
        <CursorCustom />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
    </>
  )
}

export default App;