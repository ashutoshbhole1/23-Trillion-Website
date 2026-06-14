import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const AISolutions = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '5rem' }}>
    <section>
      <div className="container">
        <div className="responsive-grid-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
              Next-Gen AI Solutions
            </div>
            <h1 className="page-title" style={{ textAlign: 'left' }}>
              Empower Your Business with <span className="gradient-text">AI</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              Our AI engineering team builds intelligent systems that automate workflows, predict trends, and create personalized experiences. We make complex AI technologies accessible and actionable for your business.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {['Machine Learning Models tailored to your data', 'Natural Language Processing (NLP) for customer insights', 'Generative AI Integration into legacy systems', 'Predictive Analytics for market forecasting'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem', fontWeight: 500 }}>
                  <div style={{ background: 'var(--primary)', borderRadius: '50%', padding: '0.25rem' }}>
                    <ChevronRight size={16} color="white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ height: '100%', position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '250px', height: '250px', background: 'var(--secondary)', filter: 'blur(70px)', opacity: 0.15, borderRadius: '50%', zIndex: -1 }}></div>
            <img src="/ai_section.png" alt="AI Visualization" className="content-image" style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover' }} />
          </motion.div>
        </div>
      </div>
    </section>
    <ContactForm />
  </motion.div>
);

export default AISolutions;
