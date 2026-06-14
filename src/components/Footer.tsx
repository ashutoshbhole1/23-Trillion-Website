import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

const Facebook = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Twitter = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const Instagram = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Linkedin = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

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
