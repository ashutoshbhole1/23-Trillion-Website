import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: '-100vh',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="loader-glow"></div>
      
      <div className="loader-logo-wrapper">
        {/* Animated logo image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img 
            src="/23 trillion logo final.png" 
            alt="23 Trillion Logo" 
            style={{ height: '100px', objectFit: 'contain' }}
          />
        </motion.div>

        {/* Loading Progress Bar */}
        <div className="loader-progress-track">
          <motion.div 
            className="loader-progress-bar"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
        </div>
        
        {/* Subtle subtext */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 1] }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ 
            fontSize: '0.75rem', 
            color: 'var(--text-secondary)', 
            fontWeight: 600, 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase', 
            marginTop: '0.5rem',
            fontFamily: 'var(--font-title)'
          }}
        >
          Engineering Excellence
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Loader;
