import { motion } from 'framer-motion';

import ContactForm from '../components/ContactForm';

const About = () => {
  const reviews = [
    { client: 'Sarah Jenkins', role: 'CTO, TechFlow', text: '23 Trillion delivered our enterprise platform ahead of schedule. Their attention to detail and proactive communication made the entire process seamless. Highly recommended for complex projects.' },
    { client: 'Michael Chen', role: 'Founder, Innovate AI', text: 'Their AI integration expertise transformed our product. They took the time to truly understand our client needs and built a solution that exceeded all expectations.' },
    { client: 'Elena Rodriguez', role: 'VP Digital, Global Retail', text: 'The most professional development team we have worked with. From UX design to backend architecture, everything is mentioned clearly, and execution is flawless.' }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '5rem' }}>
      <section style={{ background: 'var(--bg-tint)' }}>
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

          {/* Meet the Founder Section */}
          <div className="responsive-grid-2" style={{ marginBottom: '6rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-1rem', left: '-1rem', right: '1rem', bottom: '1rem', background: 'var(--primary)', borderRadius: '1rem', opacity: 0.1, zIndex: 0 }}></div>
                <img src="/archana soni founder.jpg" alt="Founder" className="content-image" style={{ width: '100%', height: 'auto', borderRadius: '1rem', objectFit: 'cover', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                Meet Our <span className="gradient-text">Founder</span>
              </h2>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Archana Soni</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '1.5rem' }}>CEO & Founder, 23 Trillion</p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
                "At 23 Trillion, we believe that technology should empower people, not replace them. Our vision from day one was to build a company that marries world-class technical expertise with a deeply human-centric approach. We don't just write code; we build relationships, foster innovation, and commit to the long-term success of our partners."
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                With over 15 years of experience in the tech industry, John has led countless digital transformation initiatives for Fortune 500 companies before founding 23 Trillion to create a more agile, client-focused development agency.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Client Testimonials Section */}
      <section style={{ 
        position: 'relative', 
        padding: '6rem 0',
        backgroundImage: 'url("/about_office.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 0 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ textAlign: 'center', color: 'white', fontSize: '3rem', fontWeight: 700, marginBottom: '4rem' }}>
            Client Testimonials
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            {reviews.map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.08)', 
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.5rem',
                  padding: '3rem 2rem',
                  maxWidth: '800px',
                  width: '100%',
                  textAlign: 'center',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
              >
                <p style={{ color: 'white', fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '1.2rem', lineHeight: 1.6, fontWeight: 500 }}>
                  {review.text}
                </p>
                <div>
                  <h4 style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', fontWeight: 600 }}>
                    {review.client}, {review.role}
                  </h4>
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
