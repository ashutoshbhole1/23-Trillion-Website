import { motion } from 'framer-motion';
import { LineChart } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DigitalMarketing = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '5rem' }}>
      
      {/* Page Header */}
      <section style={{ background: 'var(--bg-alt)', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
            Service Details
          </div>
          <h1 className="page-title" style={{ textAlign: 'left' }}>Digital <span className="gradient-text">Marketing</span></h1>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Results-Driven Digital Marketing that means business!</h3>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: 'var(--bg-color)' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '900px' }}>
            In the current arena, Digital Marketing has occupied the marketing industry. It's the key to develop, promote your business, and increase online presence. Consumers or clients become familiar with you via Digital Marketing. 23 Trillion understands the need of the market with the latest digital media strategies and required results.
          </p>

          <div className="grid" style={{ marginBottom: '5rem' }}>
            {[
              { title: 'SEO', desc: 'Search engine optimization. Relevant to google searches this strategy is the best to get SERP results.' },
              { title: 'SMO', desc: 'Social Media Optimization. Solidify your website rank and place on social media with great performance.' },
              { title: 'Online Reputation', desc: 'Full-fledged online reputation management is influencing an individual and organization\'s reputation.' },
              { title: 'Content Writing', desc: 'A most effective way to rank higher at the core of your marketing.' },
              { title: 'Link Building', desc: 'Move your business workloads to the cloud to save more space with proven proprietary methodology.' },
              { title: 'UI/UX Designs', desc: 'Impressive and aesthetically best designs are good to capture more audience.' }
            ].map((item, idx) => (
              <div key={idx} className="card glass-panel" style={{ padding: '2rem' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>Affordable Packages for SEO Services!</h3>
          <div className="grid">
            <div className="card glass-panel" style={{ borderTop: '4px solid #C0C0C0', textAlign: 'center', padding: '3rem 2rem' }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>SILVER</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.5rem' }}>$200<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/mo</span></div>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 2 }}>
                <li>Marketing strategy</li><li>Competitive analysis</li><li>Social media audit</li><li>Monthly management</li><li>Monthly reporting</li>
              </ul>
              <button className="glow-btn">Get Started</button>
            </div>
            
            <div className="card glass-panel" style={{ borderTop: '4px solid #FFD700', textAlign: 'center', padding: '3rem 2rem', transform: 'scale(1.05)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>POPULAR</div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>GOLD</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.5rem' }}>$349<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/mo</span></div>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 2 }}>
                <li>Marketing strategy</li><li>Competitive analysis</li><li>Social media audit</li><li>Monthly management</li><li>Monthly reporting</li>
              </ul>
              <button className="glow-btn">Get Started</button>
            </div>
            
            <div className="card glass-panel" style={{ borderTop: '4px solid #E5E4E2', textAlign: 'center', padding: '3rem 2rem' }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>PLATINUM</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.5rem' }}>$499<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/mo</span></div>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 2 }}>
                <li>Marketing strategy</li><li>Competitive analysis</li><li>Social media audit</li><li>Monthly management</li><li>Monthly reporting</li>
              </ul>
              <button className="glow-btn">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </motion.div>
  );
};

export default DigitalMarketing;
