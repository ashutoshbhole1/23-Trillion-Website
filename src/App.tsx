import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Loader from './components/Loader';

import Home from './pages/Home';
import Services from './pages/Services';
import AISolutions from './pages/AISolutions';
import About from './pages/About';
import Careers from './pages/Careers';

// Dedicated Service Pages
import WebDevelopment from './pages/services/WebDevelopment';
import MobileDevelopment from './pages/services/MobileDevelopment';
import UiUxDesign from './pages/services/UiUxDesign';
import DigitalMarketing from './pages/services/DigitalMarketing';
import DedicatedDevelopers from './pages/services/DedicatedDevelopers';

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
        <Route path="/ai" element={<PageTransition><AISolutions /></PageTransition>} />
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
        <CustomCursor />
        <Navbar />
        <main style={{ minHeight: '100vh' }}>
          <AnimatedRoutes />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

