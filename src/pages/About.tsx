import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const About = () => {
  const reviews = [
    { client: 'Sarah Jenkins', role: 'CTO, TechFlow', text: '23 Trillion delivered our enterprise platform ahead of schedule. Their attention to detail and proactive communication made the entire process seamless. Highly recommended for complex projects.' },
    { client: 'Michael Chen', role: 'Founder, Innovate AI', text: 'Their AI integration expertise transformed our product. They took the time to truly understand our client needs and built a solution that exceeded all expectations.' },
    { client: 'Elena Rodriguez', role: 'VP Digital, Global Retail', text: 'The most professional development team we have worked with. From UX design to backend architecture, everything is mentioned clearly, and execution is flawless.' }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '5rem' }}>
      <section style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ marginBottom: '6rem' }}>
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/about_office.png" alt="Our Office" className="content-image" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="page-title" style={{ textAlign: 'left' }}>
                ABOUT US- <span className="gradient-text">Who We Are</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
                23 Trillion started as an IT outsourcing company in 2022, providing expertise-based services to global clients. As our relationship with clients evolved, we aimed to provide value to clients beyond expertise through innovative solutions, processes, and people.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
                23 Trillion is an Information and Technology organization that provides a relaxed, calm and working environment for its employees. Our motive is to keep the atmosphere healthy and represent "I as US". Employees are the branches of an organization that water it with their constant support, coordination and hard work to grow up as a tree. 23 Trillion is a family more than professional employees.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
                A family-friendly environment boosts up the team to perform the task creatively and professionally. We always reward every member with their excellent enthusiastic performance and contribution to accomplishing new goals. We ensure to make our clients happy with the best resolutions and celebrate the joy of the success.
              </p>
              
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>We believe in-</h3>
              <ul style={{ color: 'var(--text-secondary)', listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <li>Work with transparency and teamwork.</li>
                <li>Learning from the new challenges.</li>
                <li>Numerous opportunities to showcase talent.</li>
                <li>Meet up with the Commitments.</li>
                <li>Extremely Proactive Team</li>
              </ul>
            </motion.div>
          </div>

          <h2 className="section-title">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="section-subtitle">We build long-term partnerships through transparency, excellence, and delivered promises.</p>
          
          <div className="grid">
            {reviews.map((review, idx) => (
              <motion.div 
                key={idx}
                className="card glass-panel"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ background: 'var(--bg-color)' }}
              >
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', color: '#fbbf24' }}>
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                </div>
                <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem', minHeight: '120px' }}>"{review.text}"</p>
                <div>
                  <h4 style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{review.client}</h4>
                  <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 500 }}>{review.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm />
    </motion.div>
  );
}

export default About;
