import { motion } from 'framer-motion';
import { Smartphone, CheckCircle } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const MobileDevelopment = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '5rem' }}>
      
      {/* Page Header */}
      <section style={{ background: 'var(--bg-alt)', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
            Service Details
          </div>
          <h1 className="page-title" style={{ textAlign: 'left' }}>Mobile Application <span className="gradient-text">Development</span></h1>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ease The User’s App Experiences!</h3>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: 'var(--bg-color)' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '900px' }}>
            Mobile application advancement is the procedure to develop mobile applications which run on smartphones and other hand-held gadgets. 23 Trillion develops multiplatform and native mobile applications, and mobile utilities, also as integrated mobile solutions for integrated business without disturbing your web services.
          </p>

          <div className="grid" style={{ marginBottom: '4rem' }}>
            <div className="card glass-panel">
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>Our Process</h4>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '0', lineHeight: 2, listStyle: 'none', fontSize: '1.05rem' }}>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> Find the objective behind the strategy</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> Plan the developer and marketing</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> Designing the application</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> Developing the application</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> Assessing and testing</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> Finalizing and Deploying the App to the clients</li>
              </ul>
            </div>
            <div className="card glass-panel">
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>Services We Provide</h4>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: 2, fontSize: '1.05rem' }}>
                <li>Window App Development</li>
                <li>Android App Development</li>
                <li>Mobile Game Development</li>
                <li>iPhone App Development</li>
                <li>Wearable App Development</li>
                <li>IONIC App Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </motion.div>
  );
};

export default MobileDevelopment;
