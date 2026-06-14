import { motion } from 'framer-motion';
import { PenTool } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const UiUxDesign = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '5rem' }}>
      
      {/* Page Header */}
      <section style={{ background: 'var(--bg-alt)', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '9999px', fontWeight: 600, marginBottom: '1rem' }}>
            Service Details
          </div>
          <h1 className="page-title" style={{ textAlign: 'left' }}>Hire Expert <span className="gradient-text">UI/UX Designers</span></h1>
          <h3 style={{ marginBottom: '1rem' }}>UI/UX Design Keeps Users Engaged with The Brand!</h3>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: 'var(--bg-color)' }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ marginBottom: '4rem' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Hire UI/UX designers on a Dedicated, full-time, hourly, or fixed-cost project basis and manage them as your extended team. 
                To make Your Business reachable to targeted customers or wants to draw in more people towards your brand. Interactive content on your website will assist you to grab the eye of the latest users on your page. 23Trillion UI/UX design services help you to form a relationship together with your users.
              </p>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/uiux_design.png" alt="UI/UX Design" className="content-image" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} />
            </motion.div>
          </div>

          <h3 style={{ marginBottom: '3rem', textAlign: 'center', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Here's How it all Works</h3>
          
          <div className="grid">
            <div className="card glass-panel" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', opacity: 0.5, marginBottom: '1rem' }}>1</div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Discover</h4>
              <p style={{ color: 'var(--text-secondary)' }}>We believe that the first step toward solving a problem is thoroughly understanding the issue. Thorough user and market research and analysis to understand user goals.</p>
            </div>
            
            <div className="card glass-panel" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', opacity: 0.5, marginBottom: '1rem' }}>2</div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Define</h4>
              <p style={{ color: 'var(--text-secondary)' }}>The next step is defining user personas, use cases, user flows, and user journey maps to ensure we target the exact audience.</p>
            </div>
            
            <div className="card glass-panel" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', opacity: 0.5, marginBottom: '1rem' }}>3</div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Design</h4>
              <p style={{ color: 'var(--text-secondary)' }}>We kick off the design process with ideation, draw paper sketches, wireframes, prototypes, and test to turn ideas into functional designs.</p>
            </div>
            
            <div className="card glass-panel" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', opacity: 0.5, marginBottom: '1rem' }}>4</div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Deliver</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Finally, we are ready to deliver responsive pixel-perfect designs, design QA, Mockups, and a functional Demo.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </motion.div>
  );
};

export default UiUxDesign;
