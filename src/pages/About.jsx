import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TeamList from '../components/TeamList'
import './About.css'

// Icons for Part C (Pillars)
const Icons = {
  Research: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  Strategy: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  Data: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Sustainability: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.74 5.74-5.74 5.74-5.74-5.74z" />
      <path d="M2 22h20" />
      <path d="M12 14.17v7.83" />
    </svg>
  )
  ,
  PanIndia: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

const About = () => {
  return (
    <div className="about-page">
      {/* PART A: HERO & INTRODUCTION */}
      <section className="about-hero-section">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="about-title">ABOUT SATYAH</h1>
            <h2 className="about-acronym">
              Scientific Analytical Tools from Young Academics of Hindustan (SATYAH (सत्य:)) Research & Consultancy
            </h2>
            <p className="about-mission-intro">
              A Pune-based research and consultancy firm established in 2019 and registered as an MSME in 2022.
              Founded by Ms. Abhilasha Suryavanshi, SATYAH bridges academia and industry through evidence-based
              research solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PART B: NARRATIVE SPLIT */}
      <section className="about-narrative-section">
        <div className="container">
          <motion.div
            className="narrative-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="narrative-block">
              <h3 className="narrative-subtitle">Our Impact</h3>
              <p>
                With over 20 completed projects, SATYAH has become a trusted partner for
                institutions, government agencies, NGOs, and private organizations. Our
                multidisciplinary team delivers comprehensive research support, data analytics, and
                strategic consulting tailored to each client's needs.
              </p>
            </div>

            <div className="narrative-block">
              <h3 className="narrative-subtitle">Our Philosophy</h3>
              <p>
                Guided by our tagline "Survey Bhavantu Sukhinah" (Survey for the happiness of
                all), we believe in survey-driven insights and direct engagement to empower
                researchers and organizations in making meaningful contributions to science,
                technology, and societal development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PART C: CORE PILLARS */}
      <section className="about-pillars-section">
        <div className="container">
          <div className="pillars-grid">
            <motion.div className="pillar-card" whileHover={{ y: -5 }}>
              <div className="pillar-icon"><Icons.Research /></div>
              <h4 className="pillar-title">Evidence-Based Research</h4>
              <p className="pillar-desc">Recommendations backed by rigorous validation and accuracy.</p>
            </motion.div>

            <motion.div className="pillar-card" whileHover={{ y: -5 }}>
              <div className="pillar-icon"><Icons.Strategy /></div>
              <h4 className="pillar-title">Strategic Formulation</h4>
              <p className="pillar-desc">Actionable strategies delivering measurable organizational goals.</p>
            </motion.div>

            <motion.div className="pillar-card" whileHover={{ y: -5 }}>
              <div className="pillar-icon"><Icons.Data /></div>
              <h4 className="pillar-title">Data-Driven Insights</h4>
              <p className="pillar-desc">Illuminating pathways to confident, informed decision-making.</p>
            </motion.div>

            <motion.div className="pillar-card" whileHover={{ y: -5 }}>
              <div className="pillar-icon"><Icons.Sustainability /></div>
              <h4 className="pillar-title">Sustainable Development</h4>
              <p className="pillar-desc">Prioritizing long-term economic, social, and environmental balance.</p>
            </motion.div>

            <motion.div className="pillar-card" whileHover={{ y: -5 }}>
              <div className="pillar-icon"><Icons.PanIndia /></div>
              <h4 className="pillar-title">PAN India Services</h4>
              <p className="pillar-desc">Delivering professional research and consultancy services across the nation with precision and excellence.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM SECTION */}
      <TeamList showTitle={true} />

      {/* PART D: CTA SECTION */}
      <section className="about-cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="cta-title">Ready to Transform Your Vision?</h2>
            <Link to="/contact" className="cta-button">Get in Touch</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
