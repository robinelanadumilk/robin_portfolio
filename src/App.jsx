import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Loader from './components/Loader';
import Global3DBackground from './components/Global3DBackground';
import JarvisAssistant from './components/JarvisAssistant';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerDiagnosticScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 2800);
  };

  return (
    <div className="app-container">
      <Global3DBackground />

      {/* Holographic Diagnostic Laser Scan Overlay */}
      {isScanning && (
        <div className="jarvis-diagnostic-laser-overlay">
          <div className="diagnostic-scanner-bar"></div>
          <div className="diagnostic-hud-hudtext">
            <span>System check in progress</span>
            <span>Python · Django · MSSQL · React</span>
          </div>
        </div>
      )}

      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}
      <Navbar activeSection={activeSection} onOpenResume={() => setIsResumeOpen(true)} />
      <nav className="section-rail" aria-label="Section index">
        {[
          { id: 'hero', label: 'Intro' },
          { id: 'about', label: 'About' },
          { id: 'projects', label: 'Work' },
          { id: 'skills', label: 'Skills' },
          { id: 'experience', label: 'Career' },
          { id: 'contact', label: 'Contact' },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
            aria-label={item.label}
          >
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <main className="main-content">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer onOpenResume={() => setIsResumeOpen(true)} />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      <JarvisAssistant
        onOpenResume={() => setIsResumeOpen(true)}
        onRunDiagnostics={triggerDiagnosticScan}
      />
    </div>
  );
}

export default App;
