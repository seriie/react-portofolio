import './App.css';
import Header from './components/header/Header';
import AboutMe from './components/about_me/AboutMe';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import { LanguageProvider } from './context/LanguageContext';

function App() {

  return (
    <>
    <LanguageProvider>
      <div className='App'>
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
    </>
  )
}

export default App