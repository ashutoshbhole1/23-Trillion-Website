import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <div className="logo gradient-text" style={{ marginBottom: '1rem' }}>23 Trillion</div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Empowering businesses with world-class technology solutions, from intuitive web applications to advanced AI systems.
          </p>
        </div>
        <div>
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            <li><Link to="/services">Software Development</Link></li>
            <li><Link to="/ai">AI Solutions</Link></li>
            <li><Link to="/services">Cloud Engineering</Link></li>
            <li><Link to="/services">UI/UX Design</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">Company</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about">Careers</Link></li>
            <li><Link to="/about">Blog</Link></li>
            <li><Link to="/about">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">Connect</h4>
          <ul className="footer-links">
            <li><a href="#">LinkedIn <ArrowUpRight size={14} style={{display:'inline', marginLeft:'4px'}}/></a></li>
            <li><a href="#">Twitter <ArrowUpRight size={14} style={{display:'inline', marginLeft:'4px'}}/></a></li>
            <li><a href="#">GitHub <ArrowUpRight size={14} style={{display:'inline', marginLeft:'4px'}}/></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} 23 Trillion. All rights reserved. Built for modern enterprises.
      </div>
    </div>
  </footer>
);

export default Footer;
