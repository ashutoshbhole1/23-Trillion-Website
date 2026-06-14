import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';

const Footer = () => (
  <footer className="footer" style={{ background: 'var(--footer-bg)', color: 'var(--footer-text)', paddingTop: '5rem', paddingBottom: '2rem', borderTop: '4px solid var(--primary)' }}>
    <div className="container">
      <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
        <div>
          <div className="logo gradient-text" style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 800 }}>23 Trillion</div>
          <p style={{ color: 'var(--footer-text)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Empowering businesses with world-class technology solutions, from intuitive web applications to advanced AI systems.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '50%', display: 'flex', transition: 'background 0.3s' }} onMouseOver={e => e.currentTarget.style.background = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}><Facebook size={20} /></a>
            <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '50%', display: 'flex', transition: 'background 0.3s' }} onMouseOver={e => e.currentTarget.style.background = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}><Twitter size={20} /></a>
            <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '50%', display: 'flex', transition: 'background 0.3s' }} onMouseOver={e => e.currentTarget.style.background = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}><Instagram size={20} /></a>
            <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '50%', display: 'flex', transition: 'background 0.3s' }} onMouseOver={e => e.currentTarget.style.background = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}><Linkedin size={20} /></a>
          </div>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Services</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/services/web-development" style={{ color: 'var(--footer-text)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--footer-text)'}>Website & CMS</Link></li>
            <li><Link to="/services/mobile-development" style={{ color: 'var(--footer-text)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--footer-text)'}>Mobile Apps</Link></li>
            <li><Link to="/services/ui-ux-design" style={{ color: 'var(--footer-text)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--footer-text)'}>UI/UX Design</Link></li>
            <li><Link to="/services/digital-marketing" style={{ color: 'var(--footer-text)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--footer-text)'}>Digital Marketing</Link></li>
            <li><Link to="/services/dedicated-developers" style={{ color: 'var(--footer-text)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--footer-text)'}>Dedicated Team</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/about" style={{ color: 'var(--footer-text)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--footer-text)'}>About Us</Link></li>
            <li><Link to="/careers" style={{ color: 'var(--footer-text)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--footer-text)'}>Careers</Link></li>
            <li><Link to="/ai" style={{ color: 'var(--footer-text)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--footer-text)'}>AI Solutions</Link></li>
            <li><a href="#contact" style={{ color: 'var(--footer-text)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--footer-text)'}>Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Newsletter</h4>
          <p style={{ color: 'var(--footer-text)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Subscribe to get the latest tech insights and company news.</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="email" placeholder="Email address" style={{ padding: '0.75rem', borderRadius: '4px', border: 'none', width: '100%', outline: 'none' }} />
            <button className="glow-btn" style={{ padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowRight size={20} />
            </button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', color: 'var(--footer-text)', fontSize: '0.9rem' }}>
            <Mail size={16} /> info@23trillion.com
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--footer-text)' }}>
        &copy; {new Date().getFullYear()} 23 Trillion. All rights reserved. Built for modern enterprises.
      </div>
    </div>
  </footer>
);

export default Footer;
