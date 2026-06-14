import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Cpu, Database, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <section className="hero">
      <img src="/hero_bg.png" alt="Hero Background" className="hero-bg-img" />
      <div className="hero-glow"></div>
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            Premium Engineering Agency
          </div>
          <h1 className="hero-title">
            Engineering the <span className="gradient-text">Future</span> of Digital Business
          </h1>
          <p className="hero-desc">
            We are a premium IT and software development agency empowering global enterprises with design-led engineering, next-generation AI, and scalable cloud solutions.
          </p>
          <div className="hero-buttons">
            <Link to="/services">
              <button className="glow-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Explore Our Work <ArrowRight size={18} />
              </button>
            </Link>
            <Link to="/about">
              <button className="glass-panel" style={{ padding: '0.875rem 1.75rem', color: 'var(--text-primary)', border: '1px solid var(--card-border)', borderRadius: '9999px', background: 'white', fontWeight: 600 }}>
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Snapshot of About */}
    <section style={{ padding: '6rem 0', background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="responsive-grid-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              Who <span className="gradient-text">We Are</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '1.5rem' }}>
              At 23 Trillion, we bridge the gap between complex business challenges and scalable technology. With a relentless focus on excellence, we partner with enterprises to engineer secure and high-performing digital platforms.
            </p>
            <Link to="/about" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Discover Our Approach <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src="/about_office.png" alt="Our Team" className="content-image" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Snapshot of Services */}
    <section style={{ padding: '6rem 0', background: 'var(--bg-color)' }}>
      <div className="container">
        <div className="responsive-header" style={{ marginBottom: '3rem' }}>
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Core <span className="gradient-text">Services</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>Empowering your digital transformation journey.</p>
          </div>
          <Link to="/services" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid">
          <div className="card glass-panel">
            <div className="card-icon"><Code size={24} /></div>
            <h3 className="card-title">Custom Software</h3>
            <p className="card-desc">Enterprise-grade applications built with modern stacks, focusing on scalability and performance.</p>
          </div>
          <div className="card glass-panel">
            <div className="card-icon"><Cpu size={24} /></div>
            <h3 className="card-title">AI Integration</h3>
            <p className="card-desc">Intelligent systems that automate workflows, predict trends, and create personalized experiences.</p>
          </div>
          <div className="card glass-panel">
            <div className="card-icon"><Database size={24} /></div>
            <h3 className="card-title">Data Engineering</h3>
            <p className="card-desc">Transforming raw data into actionable insights with secure and scalable pipelines.</p>
          </div>
        </div>
      </div>
    </section>

    <ContactForm />
  </motion.div>
);

export default Home;
