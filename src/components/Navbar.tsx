import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', maxWidth: '75%' }} onClick={() => setIsOpen(false)}>
          <img src="/23 trillion logo final.png" alt="23 Trillion Logo" style={{ height: '50px', maxWidth: '100%', objectFit: 'contain' }} />
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
          <Link to="/industry" className={`nav-link ${location.pathname === '/industry' ? 'active' : ''}`}>Industry</Link>

          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/careers" className={`nav-link ${location.pathname === '/careers' ? 'active' : ''}`}>Careers</Link>
          <a href="#contact"><button className="glow-btn" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>Let's Talk</button></a>
        </div>
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              className="mobile-menu-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className={`mobile-nav-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/industry" className={`mobile-nav-link ${location.pathname === '/industry' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Industry</Link>

            <Link to="/about" className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/careers" className={`mobile-nav-link ${location.pathname === '/careers' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Careers</Link>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <button className="glow-btn" style={{ width: '100%', marginTop: '1rem', padding: '0.8rem' }}>Let's Talk</button>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
