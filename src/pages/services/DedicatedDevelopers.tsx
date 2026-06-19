import { motion } from 'framer-motion';
import { Users, Code, Server, CheckCircle } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DedicatedDevelopers = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '5rem' }}>
      
      {/* Page Header */}
      <section style={{ background: 'var(--bg-alt)', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(216, 76, 135, 0.1)', color: 'var(--primary)', borderRadius: '9999px', fontWeight: 600, marginBottom: '1rem' }}>
            Service Details
          </div>
          <h1 className="page-title" style={{ textAlign: 'left' }}>Dedicated <span className="gradient-text">Developers</span></h1>
          <h3 style={{ marginBottom: '1rem' }}>Hire expert developers as your extended team.</h3>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: 'var(--bg-color)' }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ marginBottom: '4rem' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Dedicated Model is quickly becoming a buzzword in the IT job market, attracting more global businesses to hire remotely. 23 Trillion already helped some of the premium clients augment their local teams by hiring dedicated developers in Domestic and International Market.
              </p>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/Services/dedicated%20developers.jpg" alt="Dedicated Developers" className="content-image" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover', borderRadius: '1rem' }} />
            </motion.div>
          </div>

          <h3 style={{ marginBottom: '3rem', textAlign: 'center', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Hiring Models</h3>
          
          <div className="grid" style={{ marginBottom: '5rem' }}>
            <div className="card glass-panel" style={{ padding: '3rem 2rem' }}>
              <div style={{ background: 'rgba(216, 76, 135, 0.1)', display: 'inline-flex', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <Users size={32} color="var(--primary)" />
              </div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Remote/Dedicated Resource Model</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Get your work done from anywhere and enjoy the flexibility of remote work with the stability of part or full-time. In this engagement model, you get dedicated infrastructure as well as skilled professionals who work solely on your mobile app development project.</p>
            </div>
            
            <div className="card glass-panel" style={{ padding: '3rem 2rem' }}>
              <div style={{ background: 'rgba(216, 76, 135, 0.1)', display: 'inline-flex', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <Code size={32} color="var(--primary)" />
              </div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Fixed Time & Fixed Cost Developer</h4>
              <p style={{ color: 'var(--text-secondary)' }}>A fixed price model for custom software development pre-defines the responsibilities. This is a low-risk model in which we work with our clients to define expected timelines and deliverables in order to determine a mutually agreed fixed price.</p>
            </div>
            
            <div className="card glass-panel" style={{ padding: '3rem 2rem' }}>
              <div style={{ background: 'rgba(216, 76, 135, 0.1)', display: 'inline-flex', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <Server size={32} color="var(--primary)" />
              </div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Time and Material or Hourly Rate</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Fix your problems with the website or build the whole website at an hourly rate. In this model, you pay an hourly rate. You can revise the team size and project duration to optimize the cost and reduce waste.</p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '3rem' }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', textAlign: 'center', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Our Process</h4>
            <ul style={{ color: 'var(--text-secondary)', listStyle: 'none', paddingLeft: 0 }}>
              <li style={{ marginBottom: '1rem' }}><CheckCircle size={18} style={{ display: 'inline', marginRight: '10px', color: 'var(--primary)', verticalAlign: 'middle' }}/> <strong style={{ verticalAlign: 'middle' }}>Requirement:</strong> Gather your requirements and estimate the efforts needed to deliver the solution.</li>
              <li style={{ marginBottom: '1rem' }}><CheckCircle size={18} style={{ display: 'inline', marginRight: '10px', color: 'var(--primary)', verticalAlign: 'middle' }}/> <strong style={{ verticalAlign: 'middle' }}>Analysis:</strong> Detailed analysis of your requirements and business activities.</li>
              <li style={{ marginBottom: '1rem' }}><CheckCircle size={18} style={{ display: 'inline', marginRight: '10px', color: 'var(--primary)', verticalAlign: 'middle' }}/> <strong style={{ verticalAlign: 'middle' }}>Design:</strong> Brainstorm ideas for best UI and carefully craft aesthetic designs.</li>
              <li style={{ marginBottom: '1rem' }}><CheckCircle size={18} style={{ display: 'inline', marginRight: '10px', color: 'var(--primary)', verticalAlign: 'middle' }}/> <strong style={{ verticalAlign: 'middle' }}>Development & Testing:</strong> Hand-picked resources start development with the latest tools and constant assistance.</li>
              <li style={{ marginBottom: '1rem' }}><CheckCircle size={18} style={{ display: 'inline', marginRight: '10px', color: 'var(--primary)', verticalAlign: 'middle' }}/> <strong style={{ verticalAlign: 'middle' }}>Deployment & Support:</strong> Move to QA/Testing to ensure a bug-free end-product.</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactForm />
    </motion.div>
  );
};

export default DedicatedDevelopers;
