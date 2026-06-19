import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const industriesData = {
  'healthcare-software-development': {
    title: 'Healthcare Software Development',
    content: (
      <>
        <p>At 23 Trillion, we’ve transformed healthcare organizations by building digitized ecosystems that put patients at the center. For one global hospital chain, we developed a telemedicine platform that connected thousands of patients with doctors during the pandemic, reducing wait times by 60%. We also implemented AI‑driven diagnostic tools that helped clinicians detect anomalies faster, improving accuracy in patient care.</p>
        <p>Our healthcare solutions are fully compliant with HIPAA and GDPR, ensuring patient data security while enabling seamless interoperability across systems. By integrating Electronic Health Records (EHR), patient engagement portals, and predictive analytics dashboards, we’ve empowered providers to deliver care that is more efficient, transparent, and human‑focused.</p>
      </>
    )
  },
  'finance-technology-solutions': {
    title: 'Finance Technology Solutions',
    content: (
      <>
        <p>23 Trillion has partnered with banks and fintech startups to deliver secure, scalable financial platforms. For a European fintech, we built a mobile banking app with biometric authentication and real‑time fraud detection, which increased customer trust and reduced fraudulent transactions by 40%.</p>
        <p>We’ve also implemented blockchain‑based smart contracts for cross‑border payments, cutting transaction times from days to minutes. Our finance solutions combine compliance, speed, and innovation, helping institutions scale to millions of users while maintaining reliability.</p>
      </>
    )
  },
  'education-technology-development': {
    title: 'Education Technology Development',
    content: (
      <>
        <p>Transform your educational institution with EasySchool ERP, a comprehensive school management solution designed to digitize and automate day-to-day academic and administrative operations. From admissions and attendance to examinations, fee management, staff payroll, and parent communication, the platform centralizes all school activities in a single, user-friendly system.</p>
        <p>Built for schools, colleges, coaching institutes, and educational organizations, EasySchool ERP offers dedicated portals for administrators, teachers, students, and parents, ensuring seamless collaboration and real-time access to information. The solution supports online learning, timetable management, report generation, communication tools, and mobile accessibility to enhance efficiency and improve the overall educational experience.</p>
        <h3 style={{marginTop: '1rem', color: 'var(--text-primary)'}}>Key Features:</h3>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Student Information Management</li>
          <li>Attendance &amp; Timetable Management</li>
          <li>Online Fee Collection &amp; Accounting</li>
          <li>Examination &amp; Result Processing</li>
          <li>Homework &amp; Learning Management</li>
          <li>Staff &amp; Payroll Management</li>
          <li>Parent, Teacher &amp; Student Portals</li>
          <li>Notifications, SMS &amp; Email Integration</li>
          <li>Mobile App Support</li>
          <li>Detailed Reports &amp; Analytics</li>
        </ul>
      </>
    )
  },
  'food-delivery-platforms': {
    title: 'Food Delivery Platforms',
    content: (
      <>
        <p>23 Trillion has powered food delivery businesses with smart, scalable apps. Streamline your restaurant operations and launch your own online food ordering platform with our all-in-one Food Delivery Solution. Designed for single or multi-branch restaurants, this powerful system includes a customer website and mobile app, delivery partner app, and an advanced admin panel for complete business management.</p>
        <p>Manage menus, orders, deliveries, payments, promotions, and customer engagement from a centralized dashboard while offering real-time order tracking and multiple payment options. Built with modern technologies, the solution ensures scalability, seamless user experience, and efficient delivery management to help your food business grow faster.</p>
      </>
    )
  },
  'ecommerce-development-services': {
    title: 'Ecommerce Development Services',
    content: (
      <>
        <p>EasyMart – Multi-Vendor eCommerce Solution helped global retailers scale their online presence with custom ecommerce platforms and scale your own on-demand delivery marketplace with EasyMart, a powerful multi-vendor platform designed for food, grocery, pharmacy, parcel, and eCommerce businesses. It enables entrepreneurs to manage multiple vendors, customers, and delivery partners from a single, centralized system.</p>
        <p>The solution includes dedicated web panels and mobile apps for administrators, vendors, customers, and delivery agents, ensuring seamless order management and real-time tracking. With features such as multi-zone operations, multiple payment gateways, commission management, promotions, analytics, and multilingual support, EasyMart provides everything needed to launch and grow a modern hyperlocal delivery business.</p>
      </>
    )
  },
  'real-estate-technology-solutions': {
    title: 'Real Estate Technology Solutions',
    content: (
      <>
        <p>23 Trillion has digitized property search and management for real estate firms worldwide. For a real estate marketplace, we built a virtual tour platform that allowed buyers to explore properties remotely, increasing engagement by 70%.</p>
        <p>We also integrated CRM systems for agents and smart contract technology to streamline transactions, reducing deal closure times by 30%. Our platforms make property listings more accessible, transparent, and efficient.</p>
      </>
    )
  },
  'ai-machine-learning-solutions': {
    title: 'AI & Machine Learning Solutions',
    content: (
      <>
        <p>Artificial Intelligence is at the core of many of our projects. 23 Trillion has delivered predictive analytics engines for retailers, helping them forecast demand and optimize inventory. For a healthcare client, we built a computer vision system that analyzed medical images with high accuracy, assisting doctors in faster diagnoses.</p>
        <p>We’ve also implemented chatbots and recommendation engines that improved customer engagement and retention. Our AI solutions are practical, scalable, and designed to give businesses a measurable competitive edge.</p>
      </>
    )
  },
  'erp-development-services': {
    title: 'ERP Development Services',
    content: (
      <>
        <p>EasyERP Streamline your business operations with EasyERP, an all-in-one cloud-based ERP solution designed to manage every aspect of your organization from a single platform. It integrates essential business functions, including CRM, HRM, Project Management, Accounting, POS, Inventory, Sales, and Procurement, enabling teams to work more efficiently and make data-driven decisions.</p>
        <p>With an intuitive interface, real-time reporting, workflow automation, and multi-user access, EasyERP helps businesses improve productivity, reduce manual tasks, and gain complete visibility across operations. Whether you are a startup, SME, or growing enterprise, EasyERP provides the flexibility and scalability needed to support your business growth.</p>
        <p><strong>Key Modules:</strong> CRM, HRM, Accounting, Project Management, POS, Inventory, Sales, Purchase, and Reporting.</p>
      </>
    )
  }
};

const IndustryDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const data = slug ? industriesData[slug as keyof typeof industriesData] : null;

  if (!data) {
    return (
      <div style={{ paddingTop: '10rem', textAlign: 'center', height: '60vh' }}>
        <h2>Industry not found</h2>
        <button onClick={() => navigate('/industry')} style={{ marginTop: '2rem', padding: '0.75rem 1.5rem', cursor: 'pointer', border: 'none', background: 'var(--primary)', color: 'white', borderRadius: '0.5rem' }}>Back to Industries</button>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '6rem', background: '#ffffff', minHeight: '100vh' }}>
      <div className="container" style={{ paddingBottom: '4rem' }}>
        <button 
          onClick={() => navigate('/industry')} 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            background: 'none', 
            border: 'none', 
            color: 'var(--primary)', 
            cursor: 'pointer', 
            fontWeight: 600, 
            marginBottom: '2rem' 
          }}
        >
          <ArrowLeft size={18} /> Back to Industries
        </button>
        
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2rem' }}>
          {data.title}
        </h1>
        
        <div style={{ 
          fontSize: '1.1rem', 
          lineHeight: 1.8, 
          color: 'var(--text-secondary)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          {data.content}
        </div>
      </div>
      <ContactForm />
    </motion.div>
  );
};

export default IndustryDetail;
