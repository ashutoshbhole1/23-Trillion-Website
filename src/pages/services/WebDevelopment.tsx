import { motion } from 'framer-motion';
import { Globe, Database, Server } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const WebDevelopment = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '5rem' }}>
      
      {/* Page Header */}
      <section style={{ background: 'var(--bg-alt)', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
            Service Details
          </div>
          <h1 className="page-title" style={{ textAlign: 'left' }}>Website And <span className="gradient-text">CMS Development!</span></h1>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>23 Trillion Design an Eye-Catching Websites for You!</h3>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: 'var(--bg-color)' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '900px' }}>
            Did you realize that website architecture can enormously affect your presentation in web search tools like Google?
            The admirably responsive website architecture is the key to reach out to people. It is the idea to arrange good quality online content. 23 Trillion is the best platform for you.
          </p>

          <div className="grid" style={{ marginBottom: '4rem' }}>
            <div className="card glass-panel">
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>Web Development And CMS Have Many Benefits:</h4>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <li>Web Development enhances your website ranking in searches. This helps your business to be visible ahead of your customers.</li>
                <li>23 Trillion keeps on enhancing your website for a better experience. Your website needs to be on the top page of google to reach the audience with help content management.</li>
                <li>As business pages are easily available on the digital platform and customers finding your page through the program helps your loyal customers remain with you.</li>
                <li>With 23 Trillion, You’ll make your name so known to your customers with CMS quality.</li>
              </ul>
            </div>
            <div className="card glass-panel">
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>Services We Provide</h4>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <li>Website Development</li>
                <li>E-commerce Development</li>
                <li>CMS Development</li>
                <li>Convert Adobe Muse Website WordPress</li>
                <li>Convert Adobe Business Catalyst to WordPress</li>
                <li>Upgrade Magento</li>
              </ul>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '3rem' }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '2rem', fontSize: '1.5rem', textAlign: 'center' }}>Web Development Technologies we are using</h4>
            <div className="grid">
              <div style={{ textAlign: 'center' }}>
                <Server size={32} style={{ color: 'var(--primary)', margin: '0 auto 1rem auto' }}/>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Backend</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Java, .Net, Python, Node.js, PHP, Code Igniter, Laravel</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Globe size={32} style={{ color: 'var(--primary)', margin: '0 auto 1rem auto' }}/>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Frontend</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Angular, AngularJS, ReactJS, Vue.JS, Dojo, HTML, CSS, JQuery</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Database size={32} style={{ color: 'var(--primary)', margin: '0 auto 1rem auto' }}/>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>CMS & DB</strong>
                <span style={{ color: 'var(--text-secondary)' }}>WordPress, Magento, Shopify, OpenCart, Drupal <br/> MySQL, MongoDB, MSSQL, PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </motion.div>
  );
};

export default WebDevelopment;
