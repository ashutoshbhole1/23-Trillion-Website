import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const MobileDevelopment = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '5rem' }}>
      
      {/* Page Header */}
      <section style={{ background: 'var(--bg-alt)', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(216, 76, 135, 0.1)', color: 'var(--primary)', borderRadius: '9999px', fontWeight: 600, marginBottom: '1rem' }}>
            Service Details
          </div>
          <h1 className="page-title" style={{ textAlign: 'left' }}>Mobile Application <span className="gradient-text">Development</span></h1>
          <h3 style={{ marginBottom: '1rem' }}>Ease The User’s App Experiences!</h3>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: 'var(--bg-color)' }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ marginBottom: '4rem' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Mobile application advancement is the procedure to develop mobile applications which run on smartphones and other hand-held gadgets. 23 Trillion develops multiplatform and native mobile applications, and mobile utilities, also as integrated mobile solutions for integrated business without disturbing your web services.
              </p>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/Services/stock_mobile.jpg" alt="Mobile Development" className="content-image" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover', borderRadius: '1rem' }} />
            </motion.div>
          </div>

          <div className="grid" style={{ marginBottom: '4rem' }}>
            <div className="card glass-panel">
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Our Process</h4>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '0', listStyle: 'none' }}>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> Find the objective behind the strategy</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> Plan the developer and marketing</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> Designing the application</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> Developing the application</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> Assessing and testing</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> Finalizing and Deploying the App to the clients</li>
              </ul>
            </div>
            <div className="card glass-panel">
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Services We Provide</h4>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem' }}>
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
