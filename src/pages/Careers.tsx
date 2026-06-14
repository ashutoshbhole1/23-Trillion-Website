import { motion } from 'framer-motion';
import { Briefcase, MapPin, Heart, Shield, Users, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Careers = () => {
  const jobs = [
    { title: 'Business Developers', exp: '1-3 years' },
    { title: 'React.js Developer', exp: '1-3, 3-5 years' },
    { title: 'Angular Developer', exp: '1-3, 3-5 years' },
    { title: 'Full Stack Developer', exp: '3-5 years' },
    { title: 'Android Developer', exp: '3-5 years' },
    { title: 'iOS Developer', exp: '3-5 years' },
    { title: 'React Native Developer', exp: '3-5 years' },
    { title: 'Node.js Developer', exp: '3-5 years' },
    { title: 'Python Developer', exp: '5-7 years' },
    { title: 'Java Developer', exp: '3-5, 5-7 years' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '5rem' }}>
      
      {/* Header */}
      <section style={{ background: 'var(--bg-alt)', paddingBottom: '3rem' }}>
        <div className="container">
          <h1 className="page-title" style={{ textAlign: 'center' }}>Join Our <span className="gradient-text">Team</span></h1>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            23 Trillion is Fully Remote by Choice! We provide you the freedom and flexibility by going Remote by Choice. If you are dynamic, a go-getter, and willing to grab opportunities that come your way, 23 Trillion is the place to be.
          </p>
          <div style={{ textAlign: 'center' }}>
            <a href="#opportunities"><button className="glow-btn">View Open Positions</button></a>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-color)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Our Core <span className="gradient-text">Values</span></h2>
          <div className="grid">
            <div className="card glass-panel" style={{ textAlign: 'center' }}>
              <Heart size={40} color="var(--primary)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ marginBottom: '1rem' }}>Care to Help</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Helping our colleagues at work is extremely important at 23 Trillion to maintaining a stable workplace. When you support your colleagues, they may be more likely to support you.</p>
            </div>
            <div className="card glass-panel" style={{ textAlign: 'center' }}>
              <Users size={40} color="var(--primary)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ marginBottom: '1rem' }}>Humble</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Humble employees can be more open to working with other people. Humility is a trait that is most valuable to us.</p>
            </div>
            <div className="card glass-panel" style={{ textAlign: 'center' }}>
              <Shield size={40} color="var(--primary)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ marginBottom: '1rem' }}>Trust</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Building trust is important at 23 Trillion because it builds commitment. A trustful workplace typically has a culture that is developed through values, hard work and strong teamwork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section id="opportunities" style={{ padding: '4rem 0', background: 'var(--bg-alt)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Opportunities For <span className="gradient-text">You</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>We are looking for talented individuals to join our growing team.</p>
          
          <div className="grid">
            {jobs.map((job, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{job.title}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    <Briefcase size={16} /> Experience: {job.exp}
                  </div>
                </div>
                <button style={{ background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  Apply Now <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-color)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Perks & <span className="gradient-text">Benefits</span></h2>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto', fontSize: '1.1rem' }}>
            We believe in the well-being of our people and make conscious efforts to facilitate our work family with a favorable work environment and amenities that enable our people to give their best.
          </p>

          <div className="grid">
            <motion.div 
              className="card glass-panel" 
              style={{ padding: 0, overflow: 'hidden' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div style={{ height: '200px', background: 'linear-gradient(45deg, #4f46e5, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={64} color="white" opacity={0.8} />
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: 0 }}>Work from Anywhere</h3>
              </div>
            </motion.div>

            <motion.div 
              className="card glass-panel" 
              style={{ padding: 0, overflow: 'hidden' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div style={{ height: '200px', background: 'linear-gradient(45deg, #10b981, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Briefcase size={64} color="white" opacity={0.8} />
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: 0 }}>Learning and Development</h3>
              </div>
            </motion.div>

            <motion.div 
              className="card glass-panel" 
              style={{ padding: 0, overflow: 'hidden' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div style={{ height: '200px', background: 'linear-gradient(45deg, #f59e0b, #ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Heart size={64} color="white" opacity={0.8} />
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: 0 }}>Incentive Opportunities</h3>
              </div>
            </motion.div>

            <motion.div 
              className="card glass-panel" 
              style={{ padding: 0, overflow: 'hidden' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div style={{ height: '200px', background: 'linear-gradient(45deg, #8b5cf6, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={64} color="white" opacity={0.8} />
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: 0 }}>Open Door Policy</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactForm />
    </motion.div>
  );
};

export default Careers;
