import { motion } from 'framer-motion';
import { Code, Database, Globe, LineChart, Shield, Smartphone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Services = () => {
  const servicesList = [
    { icon: <Code size={24} />, title: 'Custom Software Development', desc: 'Enterprise-grade applications built with modern stacks, focusing on scalability, security, and exceptional performance tailored to your specific operational needs.' },
    { icon: <Smartphone size={24} />, title: 'Mobile App Development', desc: 'Native and cross-platform mobile solutions that deliver seamless, engaging user experiences across all devices and operating systems.' },
    { icon: <Globe size={24} />, title: 'Web Development', desc: 'High-conversion web platforms with stunning UI/UX, built on robust architectures ensuring reliability and fast load times.' },
    { icon: <Database size={24} />, title: 'Data Engineering', desc: 'Transforming raw data into actionable insights with secure, scalable pipelines, enabling data-driven decision making across your organization.' },
    { icon: <Shield size={24} />, title: 'Cybersecurity', desc: 'Comprehensive security audits, risk assessments, and robust implementations to protect your valuable digital assets from emerging threats.' },
    { icon: <LineChart size={24} />, title: 'Digital Transformation', desc: 'Strategic consulting and technology adoption to guide legacy businesses into the digital age smoothly and efficiently.' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '5rem' }}>
      <section style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <h1 className="page-title" style={{ textAlign: 'center' }}>Our <span className="gradient-text">Expertise</span></h1>
          <p className="section-subtitle">We deliver end-to-end technology solutions tailored to your unique business challenges, ensuring you stay ahead in a rapidly evolving digital landscape.</p>
          
          <div className="grid" style={{ marginBottom: '4rem' }}>
            {servicesList.map((service, idx) => (
              <motion.div 
                key={idx} 
                className="card glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm />
    </motion.div>
  );
};

export default Services;
