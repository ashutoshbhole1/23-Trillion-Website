import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Services = () => {
  const servicesList = [
    {
      path: '/services/web-development',
      image: '/Services/stock_web.jpg',
      title: 'Website & CMS Development',
      desc: 'Enhance your website ranking and visibility with our custom web and CMS solutions. We design eye-catching and fully responsive architectures.'
    },
    {
      path: '/services/mobile-development',
      image: '/Services/stock_mobile.jpg',
      title: 'Mobile Application Development',
      desc: 'Ease the user’s app experiences with multiplatform and native mobile applications that run seamlessly on all smartphones and gadgets.'
    },
    {
      path: '/services/ui-ux-design',
      image: '/Services/stock_uiux.jpg',
      title: 'Hire Expert UI/UX Designers',
      desc: 'Keep users engaged with your brand. We deliver responsive pixel-perfect designs through our Discover, Define, Design, and Deliver process.'
    },
    {
      path: '/services/digital-marketing',
      image: '/Services/stock_marketing.jpg',
      title: 'Digital Marketing',
      desc: 'Results-driven digital marketing that means business! Boost your online presence with our affordable SEO, SMO, and content packages.'
    },
    {
      path: '/services/dedicated-developers',
      image: '/Services/stock_devs.jpg',
      title: 'Dedicated Developers',
      desc: 'Hire expert developers as your extended team via remote, fixed-time, or hourly models to augment your local or international workforce.'
    },
    {
      path: '/services/ai',
      image: '/Services/stock_ai.jpg',
      title: 'AI Solutions',
      desc: 'Empower your business with cutting-edge artificial intelligence, machine learning, and automation.'
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '5rem' }}>

      {/* Page Header */}
      <section style={{ background: 'var(--bg-alt)', paddingBottom: '3rem' }}>
        <div className="container">
          <h1 className="page-title" style={{ textAlign: 'center' }}>Our <span className="gradient-text">Services</span></h1>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>We deliver end-to-end technology solutions tailored to your unique business challenges. Select a service below to learn more about how we can help you grow.</p>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'var(--bg-color)' }}>
        <div className="container">
          <div className="grid">
            {servicesList.map((service, idx) => (
              <Link to={service.path} key={idx} style={{ textDecoration: 'none' }}>
                <motion.div
                  className="card glass-panel service-card"
                  style={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease' }}
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div style={{ width: '100%', height: '180px', marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden' }}>
                    <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 className="card-title" style={{ fontSize: '1.4rem' }}>{service.title}</h3>
                  <p className="card-desc" style={{ flexGrow: 1 }}>{service.desc}</p>

                  <div className="read-more" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, marginTop: '1.5rem' }}>
                    Read More <ArrowRight size={18} />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </motion.div>
  );
};

export default Services;
