import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Partners.css'


const partners = [
  {
    id: 1,
    name: 'Global Research Institute',
    logo: '🏛️',
    project: 'Educational Policy Analysis',
    description: 'Comprehensive research on educational policy frameworks and their impact on student outcomes across multiple regions.',
    impact: 'Informed policy decisions affecting 50,000+ students',
  },
  {
    id: 2,
    name: 'Sustainable Development Foundation',
    logo: '🌍',
    project: 'Climate Impact Assessment',
    description: 'Multi-year study analyzing climate change impacts and developing sustainable adaptation strategies.',
    impact: 'Guided $2M+ in sustainable development investments',
  },
  {
    id: 3,
    name: 'Tech Innovation Hub',
    logo: '💻',
    project: 'Market Research & Strategy',
    description: 'In-depth market analysis and strategic planning for emerging technology sectors.',
    impact: 'Enabled 15+ startups to secure funding',
  },
  {
    id: 4,
    name: 'Healthcare Policy Center',
    logo: '🏥',
    project: 'Healthcare Data Analysis',
    description: 'Large-scale data collection and analysis of healthcare outcomes and policy effectiveness.',
    impact: 'Improved healthcare access for 100,000+ individuals',
  },
  {
    id: 5,
    name: 'International NGO Network',
    logo: '🤝',
    project: 'Development Impact Study',
    description: 'Comprehensive evaluation of development programs and their long-term social and economic impacts.',
    impact: 'Optimized program delivery across 20+ countries',
  },
]

// Simple SVG Icons for Home Page Variant
const HomeIcons = {
  Institute: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21V11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10" />
    </svg>
  ),
  Earth: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Tech: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  Health: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  Network: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

// Real Partners for Home Page
const realPartners = [
  {
    id: '101',
    name: 'Gokhale Institute of Politics and Economics',
    logo: '/partners/GIPE-removebg-preview.png',
    project: 'Strategic Partnership',
    description: 'Collaborating on economic policy research and data-driven governance frameworks.',
    impact: 'Transforming economic education'
  },
  {
    id: '102',
    name: 'ICRISAT',
    logo: '/partners/ICIRSAT-removebg-preview.png',
    project: 'Sorghum Productivity Cost Analysis',
    description: 'Assessment of sorghum cultivation productivity, cost, and carbon emissions.',
    impact: 'Location: Various villages in Maharashtra | Sample Size: 600 | Duration: 2020-21'
  },

  {
    id: '104',
    name: 'PhonePe',
    logo: '/partners/Phonepe logo.png',
    project: 'Digital Payments Ecosystem',
    description: 'Analyzing market trends and consumer behavior in the digital payments sector.',
    impact: 'Revolutionizing digital transactions'
  },
  {
    id: '105',
    name: 'Savitribai Phule Pune University',
    logo: '/partners/Savitribai_Phule_Pune_University-removebg-preview.png',
    project: 'Future Science Champ Program',
    description: 'Encouraging students (6-12th grade) to enrich their interest in the science field.',
    impact: 'Location: PMC & PCMC | Sample Size: 300 schools & classes | Duration: 2026'
  },
  {
    id: '106',
    name: 'Symbiosis International University',
    logo: '/partners/Symbiosis-removebg-preview.png',
    project: 'Pradhan Mantri Fasal Bima Yojna (PMFBY)',
    description: 'Short term empirical research project impact of PMFBY On social-economic development of farmers.',
    impact: 'Sample Size: 1500 | Duration: 2023-24'
  },
  {
    id: '107',
    name: 'World Bank Group',
    logo: '/partners/WORLD_BANK_GROUP-removebg-preview.png',
    project: 'UMED Empower HER Program',
    description: 'Enhance productivity and financial management in women-led MSMEs through training on digital bookkeeping.',
    impact: 'Location: Maharashtra | Sample Size: 880 | Duration: 2024-25'
  },
]

const Partners = ({ isHomePage = false }) => {
  const [selectedPartner, setSelectedPartner] = useState(null)

  const openModal = (partner) => {
    // Only open modal if there is description/impact data (might need to add this later for real partners)
    if (partner.description) {
      setSelectedPartner(partner)
    }
  }

  const closeModal = () => {
    setSelectedPartner(null)
  }

  // Use real partners globally now
  const displayPartners = realPartners

  return (
    <section id="partners" className={`partners section ${isHomePage ? 'partners-home' : 'partners-dedicated'}`}>
      <div className="container">
        {isHomePage ? (
          // Home Page Header
          <motion.div
            className="partners-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="partners-subheading">OUR PARTNERS & CLIENTS</h2>
            <p className="partners-label">Trusted by leading organizations worldwide</p>
          </motion.div>
        ) : (
          // Dedicated Page Header (Matching Aesthetic)
          <motion.div
            className="partners-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="partners-subheading">Our Global Network</h2>
            <p className="partners-label">Collaborating with world-class institutions</p>
          </motion.div>
        )}

        {isHomePage ? (
          /* ==================== MARQUEE (Home Page) ==================== */
          <div className="partners-marquee-wrapper">
            <motion.div
              className="partners-marquee-track"
            >
              {/* First Set */}
              {displayPartners.map((partner, idx) => (
                <motion.div
                  key={`original-${partner.id}`}
                  className="partner-card"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(partner)}
                >
                  <div className="partner-logo">
                    {typeof partner.logo === 'string' && partner.logo.includes('/') ? (
                      <img src={partner.logo} alt={partner.name} />
                    ) : (
                      partner.logo
                    )}
                  </div>
                  <h3 className="partner-name">{partner.name}</h3>
                </motion.div>
              ))}
              {/* Duplicate Set for Seamless Loop */}
              {displayPartners.map((partner, idx) => (
                <motion.div
                  key={`duplicate-${partner.id}`}
                  className="partner-card"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(partner)}
                >
                  <div className="partner-logo">
                    {typeof partner.logo === 'string' && partner.logo.includes('/') ? (
                      <img src={partner.logo} alt={partner.name} />
                    ) : (
                      partner.logo
                    )}
                  </div>
                  <h3 className="partner-name">{partner.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          /* ==================== GRID (Dedicated Page) ==================== */
          <div className="partners-grid-wrapper">
            {displayPartners.map((partner, idx) => (
              <motion.div
                key={`grid-${partner.id}`}
                className="partner-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openModal(partner)}
              >
                <div className="partner-logo">
                  {typeof partner.logo === 'string' && partner.logo.includes('/') ? (
                    <img src={partner.logo} alt={partner.name} />
                  ) : (
                    partner.logo
                  )}
                </div>
                <h3 className="partner-name">{partner.name}</h3>
              </motion.div>
            ))}
          </div>
        )}

        {/* Centered Modal */}
        <AnimatePresence>
          {selectedPartner && (
            <>
              <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              />
              <div className="modal-container">
                <motion.div
                  className="modal"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                >
                  <button className="modal-close" onClick={closeModal}>
                    ×
                  </button>
                  <div className="modal-content">
                    <div className="modal-logo">
                      {typeof selectedPartner.logo === 'string' && selectedPartner.logo.includes('/') ? (
                        <img src={selectedPartner.logo} alt={selectedPartner.name} />
                      ) : (
                        selectedPartner.logo
                      )}
                    </div>
                    <h3 className="modal-title">{selectedPartner.name}</h3>
                    <h4 className="modal-project">{selectedPartner.project}</h4>
                    <p className="modal-description">
                      {selectedPartner.description}
                    </p>
                    <div className="modal-impact">
                      <strong>Impact:</strong> {selectedPartner.impact}
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Partners
