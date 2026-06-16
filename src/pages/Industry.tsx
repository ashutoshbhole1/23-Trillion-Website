import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Industry = () => {
  const industriesList = [
    {
      title: 'Healthcare',
      desc: 'Smart Analytics | Data-Powered Healthcare | Personalized Health & Optimized Outcomes',
      gradient: 'linear-gradient(135deg, #f0fdf4 0%, #10b981 100%)',
      imgSrc: '/Industry/healthcare.png',
      textColor: '#1f2937',
      btnDark: true
    },
    {
      title: 'Finance',
      desc: 'AI-Driven Decisions | Smarter Lending | Optimized Financial Outcomes',
      gradient: 'linear-gradient(135deg, #f8fafc 0%, #ef4444 100%)',
      imgSrc: '/Industry/finance.png',
      textColor: '#1f2937',
      btnDark: false
    },
    {
      title: 'Sustainability',
      desc: 'ESG Solutions | Ethical Traceability | Resource Conservation & Sustainable Practices',
      gradient: 'linear-gradient(135deg, #f8fafc 0%, #eab308 100%)',
      imgSrc: '/Industry/sustainability.png',
      textColor: '#1f2937',
      btnDark: false
    },
    {
      title: 'Education',
      desc: 'AI-Enhanced Learning | Personalized Growth | Future-Ready Graduates',
      gradient: 'linear-gradient(135deg, #f1f5f9 0%, #8b5cf6 100%)',
      imgSrc: '/Industry/education.png',
      textColor: '#1f2937',
      btnDark: false
    },
    {
      title: 'Retail & E-commerce',
      desc: 'Smart Inventory | Predictive Analytics | Seamless Customer Experiences',
      gradient: 'linear-gradient(135deg, #fffbeb 0%, #f59e0b 100%)',
      imgSrc: '/Industry/ecommerce.png',
      textColor: '#1f2937',
      btnDark: false
    },
    {
      title: 'Real Estate',
      desc: 'Smart Property Management | Virtual Tours | AI-Powered Valuations',
      gradient: 'linear-gradient(135deg, #eff6ff 0%, #3b82f6 100%)',
      imgSrc: '/Industry/realestate.png',
      textColor: '#1f2937',
      btnDark: true
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '5rem', background: '#ffffff' }}>

      {/* Page Header */}
      <section style={{ padding: '4rem 0 2rem 0' }}>
        <div className="container">
          <p style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 600 }}>
            INDUSTRIES WE SERVE
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#d6a2f0ff', lineHeight: 1.1, marginBottom: '3rem', maxWidth: '800px' }}>
            Empowering Excellence Across Diverse Industries
          </h1>
        </div>
      </section>

      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '2.5rem' }}>
            {industriesList.map((industry, idx) => (
              <motion.div
                key={idx}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: industry.gradient,
                  borderRadius: '1.5rem',
                  padding: '3rem 2rem',
                  height: '100%',
                  minHeight: '380px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
                }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div style={{ position: 'relative', zIndex: 10, maxWidth: '60%' }}>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: industry.textColor, marginBottom: '1rem' }}>{industry.title}</h3>
                  <p style={{ color: industry.textColor, opacity: 0.8, lineHeight: 1.5, fontSize: '0.95rem', marginBottom: '2rem' }}>{industry.desc}</p>
                </div>

                <div style={{ position: 'relative', zIndex: 10 }}>
                  <button style={{
                    background: industry.btnDark ? '#000' : 'rgba(255,255,255,0.4)',
                    color: industry.btnDark ? '#fff' : '#000',
                    border: 'none',
                    borderRadius: '2rem',
                    padding: '0.75rem 1.5rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                  }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Explore <ArrowRight size={18} />
                  </button>
                </div>

                <img
                  src={industry.imgSrc}
                  alt={industry.title}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: industry.title === 'Education' || industry.title === 'Sustainability' ? '-2rem' : 0,
                    height: industry.title === 'Healthcare' ? '100%' : '90%',
                    objectFit: 'contain',
                    zIndex: 1,
                    objectPosition: 'bottom right'
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </motion.div>
  );
};

export default Industry;
