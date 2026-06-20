import { motion } from 'framer-motion';
import { Globe, Database, Server } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const WebDevelopment = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '5rem' }}>
      
      {/* Page Header */}
      <section style={{ background: 'var(--bg-alt)', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(216, 76, 135, 0.1)', color: 'var(--primary)', borderRadius: '9999px', fontWeight: 600, marginBottom: '1rem' }}>
            Service Details
          </div>
          <h1 className="page-title" style={{ textAlign: 'left' }}>Website And <span className="gradient-text">CMS Development!</span></h1>
          <h3 style={{ marginBottom: '1rem' }}>23 Trillion Design an Eye-Catching Websites for You!</h3>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: 'var(--bg-color)' }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ marginBottom: '4rem' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Did you realize that website architecture can enormously affect your presentation in web search tools like Google?
                The admirably responsive website architecture is the key to reach out to people. It is the idea to arrange good quality online content. 23 Trillion is the best platform for you.
              </p>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/Services/stock_web.jpg" alt="Web Development" className="content-image" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover', borderRadius: '1rem' }} />
            </motion.div>
          </div>

          <div className="grid" style={{ marginBottom: '4rem' }}>
            <div className="card glass-panel">
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Web Development And CMS Have Many Benefits:</h4>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem' }}>
                <li>Web Development enhances your website ranking in searches. This helps your business to be visible ahead of your customers.</li>
                <li>23 Trillion keeps on enhancing your website for a better experience. Your website needs to be on the top page of google to reach the audience with help content management.</li>
                <li>As business pages are easily available on the digital platform and customers finding your page through the program helps your loyal customers remain with you.</li>
                <li>With 23 Trillion, You’ll make your name so known to your customers with CMS quality.</li>
              </ul>
            </div>
            <div className="card glass-panel">
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Services We Provide</h4>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem' }}>
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
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '2rem', textAlign: 'center' }}>Web Development Technologies we are using</h4>
            <div className="grid">
              <div style={{ textAlign: 'center' }}>
                <Server size={32} style={{ color: 'var(--primary)', margin: '0 auto 1rem auto' }}/>
                <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Backend</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Java, .Net, Python, Node.js, PHP, Code Igniter, Laravel</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Globe size={32} style={{ color: 'var(--primary)', margin: '0 auto 1rem auto' }}/>
                <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Frontend</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Angular, AngularJS, ReactJS, Vue.JS, Dojo, HTML, CSS, JQuery</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Database size={32} style={{ color: 'var(--primary)', margin: '0 auto 1rem auto' }}/>
                <strong style={{ display: 'block', marginBottom: '0.5rem' }}>CMS & DB</strong>
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
