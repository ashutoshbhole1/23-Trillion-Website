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
            23 Trillion - Client Success our growth
          </div>
          <h1 className="hero-title">
            Welcome to the <span className="gradient-text">23 Trillion</span>
          </h1>
          <p className="hero-desc">
            23 Trillion is a fast-growing IT company that provides Dedicated resources per your daily needs. Digital space for us is about technology and people. At 23 Trillion we combined specialist knowledge with industry experience and as a company, we focus on long-term nearshoring. We created dedicated solutions for small, mid-sized, and large companies.
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

    {/* WHY 23 Trillion */}
    <section style={{ padding: '6rem 0', background: 'var(--bg-alt)' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          WHY <span className="gradient-text">23 Trillion?</span>
        </h2>
        <div className="grid">
          <motion.div className="card glass-panel" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="card-title">Fast Onboarding</h3>
            <p className="card-desc">We onboard fiery fast. We have a great team of highly expertise engineers. This makes us more agile and unique in handling onboarding easily while bringing in a fresh perspective and new ideas.</p>
          </motion.div>
          <motion.div className="card glass-panel" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="card-title">Flexible Contracts</h3>
            <p className="card-desc">We have a Flexible contract that fits your needs. 4 weeks cancelation. 3 - 10 days to kick off from the contract signing date. Yes, we can start ASAP. 2 weeks onboarding time for our PMs. We start contributing fast.</p>
          </motion.div>
          <motion.div className="card glass-panel" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h3 className="card-title">Ambitious People</h3>
            <p className="card-desc">23 Trillion is a place full of ambitious people: we have a lot of freedom but also a very strong result-oriented mindset — what matters is getting things done. Our goal is simple; to protect your text.</p>
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
