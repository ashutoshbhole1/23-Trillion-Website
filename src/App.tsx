import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Careers from './pages/Careers';
import Industry from './pages/Industry';
import IndustryDetail from './pages/IndustryDetail';

// Dedicated Service Pages
import WebDevelopment from './pages/services/WebDevelopment';
import MobileDevelopment from './pages/services/MobileDevelopment';
import UiUxDesign from './pages/services/UiUxDesign';
import DigitalMarketing from './pages/services/DigitalMarketing';
import DedicatedDevelopers from './pages/services/DedicatedDevelopers';
import AISolutions from './pages/services/AISolutions';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/services/web-development" element={<PageTransition><WebDevelopment /></PageTransition>} />
        <Route path="/services/mobile-development" element={<PageTransition><MobileDevelopment /></PageTransition>} />
        <Route path="/services/ui-ux-design" element={<PageTransition><UiUxDesign /></PageTransition>} />
        <Route path="/services/digital-marketing" element={<PageTransition><DigitalMarketing /></PageTransition>} />
        <Route path="/services/dedicated-developers" element={<PageTransition><DedicatedDevelopers /></PageTransition>} />
        <Route path="/services/ai" element={<PageTransition><AISolutions /></PageTransition>} />
        <Route path="/industry" element={<PageTransition><Industry /></PageTransition>} />
        <Route path="/industry/:slug" element={<PageTransition><IndustryDetail /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loader animation
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
    }, 1800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      <Router>
        <ScrollToTop />
        <CustomCursor />
        <Navbar />
        <main style={{ minHeight: '100vh' }}>
          <AnimatedRoutes />
        </main>
        <Footer />
        <a 
          href="https://wa.me/918982998208" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            position: 'fixed', 
            bottom: 'clamp(1rem, 3vw, 2rem)', 
            right: 'clamp(1rem, 3vw, 2rem)', 
            backgroundColor: '#25D366', 
            color: 'white', 
            borderRadius: '50%', 
            width: 'clamp(50px, 8vw, 56px)', 
            height: 'clamp(50px, 8vw, 56px)', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)', 
            zIndex: 9999,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'; }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </Router>
    </>
  );
}

export default App;

