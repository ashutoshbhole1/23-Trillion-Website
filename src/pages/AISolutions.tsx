import { motion } from 'framer-motion';
import { Cpu, BrainCircuit, BarChart3, Users, Cloud, Zap, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const AISolutions = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '5rem' }}>
      
      {/* Page Header */}
      <section style={{ background: 'var(--bg-alt)', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
            Next-Gen Tech
          </div>
          <h1 className="page-title" style={{ textAlign: 'left' }}>Intelligent <span className="gradient-text">Solutions</span></h1>
          <p className="section-subtitle" style={{ textAlign: 'left', maxWidth: '800px' }}>
            We develop smart, scalable, and future-proof websites, applications, and automated systems that foster measurable business growth using Advanced AI and Data Analytics.
          </p>
        </div>
      </section>

      {/* AI Marketing & Web */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-color)' }}>
        <div className="container">
          <div className="responsive-grid-2">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <BrainCircuit size={28} color="var(--primary)" />
                <h3 style={{ fontSize: '1.5rem', marginBottom: 0 }}>AI-Driven Digital Marketing Solutions</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Maximize your outreach, increase sales, and take charge of your market with innovative AI marketing strategies tailored for the dynamic business environment.
              </p>
              <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> AI-Enhanced SEO Strategy</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> Intelligent Ad Campaigns</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> Social Media Expansion</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> Content & Video Production</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> AI-Driven Email Marketing</li>
              </ul>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Cpu size={28} color="var(--primary)" />
                <h3 style={{ fontSize: '1.5rem', marginBottom: 0 }}>Next-Generation Web & App Development</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Prepare for the Future with AI-Integrated Digital Solutions. We develop smart, scalable, and future-proof websites and applications.
              </p>
              <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> <strong>AI-Driven Websites:</strong> Rapid, secure, and SEO-optimized.</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> <strong>Intelligent Mobile Applications:</strong> Chatbots, predictive analytics.</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> <strong>E-Commerce Solutions:</strong> Product recommendations & automation.</li>
                <li><CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--primary)' }}/> <strong>Landing Pages with AI:</strong> Optimal conversions & performance.</li>
              </ul>
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(79, 70, 229, 0.05)', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
                <strong>Case Study:</strong> A prominent fashion retailer increased online sales by 320% utilizing our AI-driven e-commerce platform and personalization.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents & Automation */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-tint)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Zap size={32} color="var(--primary)" />
            <h2 className="section-title" style={{ marginBottom: 0, textAlign: 'left' }}>AI Agents & Automation</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Your Digital Workforce for Continuous Productivity. Enhance efficiency, lower costs, and scale rapidly with AI-driven virtual agents, intelligent workflows, and real-time analytics.
          </p>
          
          <div className="grid">
            <div className="card glass-panel">
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>AI Chatbots & Virtual Assistants</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Deliver 24/7 customer support with natural language AI, immediate responses, and seamless integration.</p>
            </div>
            <div className="card glass-panel">
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Business Process Automation</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Simplify repetitive tasks, minimize manual workload, and save hundreds of hours each year.</p>
            </div>
            <div className="card glass-panel">
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Predictive AI Analytics</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Obtain real-time insights and forecasts to make more informed, quicker, and precise business decisions.</p>
            </div>
            <div className="card glass-panel">
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>AI Sales & Lead Generation</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Automate lead capture, qualification, and follow-ups to maintain a full and active pipeline.</p>
            </div>
            <div className="card glass-panel">
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>AI HR & Recruitment</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Speed up hiring processes with AI-enhanced candidate screening, shortlisting, and onboarding.</p>
            </div>
            <div className="card glass-panel">
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>AI Process Optimization</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Evaluate and improve processes to drive efficiency and lower operational costs seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data, CRM, Salesforce */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-color)' }}>
        <div className="container">
          <div className="grid">
            
            <div className="card glass-panel">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <BarChart3 size={24} color="var(--primary)" />
                <h3 style={{ fontSize: '1.25rem', marginBottom: 0 }}>Data Analytics</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>Convert raw data into meaningful business insights. Our Data Analytics services assist organizations in recognizing trends and discovering growth opportunities.</p>
              <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                <li>• Business Intelligence & Reporting</li>
                <li>• Interactive Dashboards & Viz</li>
                <li>• Predictive Analytics & Data Warehousing</li>
              </ul>
            </div>

            <div className="card glass-panel">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Users size={24} color="var(--primary)" />
                <h3 style={{ fontSize: '1.25rem', marginBottom: 0 }}>CRM Solutions</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>Enhance customer relationships with tailored CRM solutions aimed at optimizing sales, marketing, and customer support functions to maximize revenue.</p>
              <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                <li>• CRM Implementation & Customization</li>
                <li>• Customer Journey Management</li>
                <li>• Lead & Opportunity Tracking</li>
              </ul>
            </div>

            <div className="card glass-panel">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Cloud size={24} color="var(--primary)" />
                <h3 style={{ fontSize: '1.25rem', marginBottom: 0 }}>Salesforce Services</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>Optimize your Salesforce investment with professional consulting, implementation, customization, and integration services from certified experts.</p>
              <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                <li>• Salesforce Consulting & Implementation</li>
                <li>• Sales Cloud & Service Cloud Solutions</li>
                <li>• Salesforce Integration & Support</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <ContactForm />
    </motion.div>
  );
};

export default AISolutions;
