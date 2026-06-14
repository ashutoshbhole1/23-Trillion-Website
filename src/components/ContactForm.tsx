import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', background: 'var(--bg-alt)' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Start Your <span className="gradient-text">Project</span></h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Partner with us to build scalable, secure, and innovative technology solutions.
            </p>
          </div>

          <motion.div 
            className="glass-panel form-card" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {formStatus === 'success' ? (
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Request Received</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Our engineering team will review your requirements and get back to you within 24 hours.</p>
                <button 
                  className="glow-btn" 
                  style={{ marginTop: '2rem' }}
                  onClick={() => setFormStatus('idle')}
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                <div className="form-grid-2">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Full Name</label>
                    <input type="text" required placeholder="John Doe" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Work Email</label>
                    <input type="email" required placeholder="john@company.com" style={inputStyle} />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Company Name</label>
                    <input type="text" placeholder="Acme Corp" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Project Type</label>
                    <select required style={inputStyle}>
                      <option value="" disabled selected>Select an option</option>
                      <option value="custom">Custom Software Development</option>
                      <option value="ai">AI Integration & ML Models</option>
                      <option value="web">Enterprise Web Platform</option>
                      <option value="mobile">Mobile Application</option>
                      <option value="data">Data Engineering</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Estimated Budget</label>
                  <select required style={inputStyle}>
                    <option value="" disabled selected>Select budget range</option>
                    <option value="10-25">$10,000 - $25,000</option>
                    <option value="25-50">$25,000 - $50,000</option>
                    <option value="50-100">$50,000 - $100,000</option>
                    <option value="100+">$100,000+</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Project Description & Goals</label>
                  <textarea 
                    required 
                    rows={4} 
                    placeholder="Briefly describe your requirements, current challenges, and the business goals for this project..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="glow-btn" 
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', padding: '1rem' }}
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Submit Request'}
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const inputStyle = {
  padding: '0.875rem 1rem',
  borderRadius: '0.5rem',
  border: '1px solid var(--card-border)',
  background: 'white',
  fontSize: '0.95rem',
  fontFamily: 'inherit',
  color: 'var(--text-primary)',
  outline: 'none',
  transition: 'border-color 0.2s',
  width: '100%',
};

export default ContactForm;
