import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Industry = () => {
  const navigate = useNavigate();
  const industriesList = [
    {
      title: 'Healthcare Software',
      desc: 'Smart Analytics | Data-Powered Healthcare | Personalized Health & Optimized Outcomes',
      gradient: 'linear-gradient(135deg, #f0fdf4 0%, #10b981 100%)',
      imgSrc: '/Industry/healthcare.png',
      textColor: '#1f2937',
      btnDark: true,
      slug: 'healthcare-software-development'
    },
    {
      title: 'Finance Tech Solutions',
      desc: 'AI-Driven Decisions | Smarter Lending | Optimized Financial Outcomes',
      gradient: 'linear-gradient(135deg, #f8fafc 0%, #ef4444 100%)',
      imgSrc: '/Industry/finance - Industry.png',
      textColor: '#1f2937',
      btnDark: false,
      slug: 'finance-technology-solutions'
    },
    {
      title: 'Education Technology',
      desc: 'AI-Enhanced Learning | Personalized Growth | Future-Ready Graduates',
      gradient: 'linear-gradient(135deg, #f1f5f9 0%, #8b5cf6 100%)',
      imgSrc: '/Industry/education.png',
      textColor: '#1f2937',
      btnDark: false,
      slug: 'education-technology-development'
    },
    {
      title: 'Food Delivery Platforms',
      desc: 'Smart Scalable Apps | Advanced Admin Panels | Real-Time Tracking',
      gradient: 'linear-gradient(135deg, #fff1f2 0%, #f43f5e 100%)',
      imgSrc: '/Industry/food delivery - Industry.png',
      textColor: '#1f2937',
      btnDark: true,
      slug: 'food-delivery-platforms'
    },
    {
      title: 'Ecommerce Services',
      desc: 'Smart Inventory | Predictive Analytics | Seamless Customer Experiences',
      gradient: 'linear-gradient(135deg, #fffbeb 0%, #f59e0b 100%)',
      imgSrc: '/Industry/ecommerce.png',
      textColor: '#1f2937',
      btnDark: false,
      slug: 'ecommerce-development-services'
    },
    {
      title: 'Real Estate Technology',
      desc: 'Smart Property Management | Virtual Tours | AI-Powered Valuations',
      gradient: 'linear-gradient(135deg, #eff6ff 0%, #3b82f6 100%)',
      imgSrc: '/Industry/realestate.png',
      textColor: '#1f2937',
      btnDark: true,
      slug: 'real-estate-technology-solutions'
    },
    {
      title: 'AI & Machine Learning',
      desc: 'Predictive Analytics | Computer Vision | Intelligent Chatbots',
      gradient: 'linear-gradient(135deg, #f5f3ff 0%, #c084fc 100%)',
      imgSrc: '/Industry/ai and ml solution - industry.png',
      textColor: '#1f2937',
      btnDark: true,
      slug: 'ai-machine-learning-solutions'
    },
    {
      title: 'ERP Development',
      desc: 'Cloud-based ERP | Real-time Reporting | Workflow Automation',
      gradient: 'linear-gradient(135deg, #f0f9ff 0%, #0ea5e9 100%)',
      imgSrc: '/Industry/ERP - Industry.png',
      textColor: '#1f2937',
      btnDark: true,
      slug: 'erp-development-services'
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
          <div className="industry-grid">
            {industriesList.map((industry, idx) => (
              <motion.div
                key={idx}
                className="industry-card"
                style={{
                  background: industry.gradient,
                }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div style={{ position: 'relative', zIndex: 10, maxWidth: '60%' }}>
                  <h3 className="industry-card-title" style={{ fontWeight: 700, color: industry.textColor, marginBottom: '1rem' }}>{industry.title}</h3>
                  <p style={{ color: industry.textColor, opacity: 0.8, lineHeight: 1.5, fontSize: '0.95rem', marginBottom: '2rem' }}>{industry.desc}</p>
                </div>

                <div style={{ position: 'relative', zIndex: 10 }}>
                  <button 
                    onClick={() => navigate(`/industry/${industry.slug}`)}
                    style={{
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
                  className="industry-card-img"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: industry.title.includes('Healthcare') ? '-4rem' : industry.title.includes('Education') ? '-2rem' : 0,
                    height: industry.title.includes('Healthcare') ? '95%' : '80%',
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
