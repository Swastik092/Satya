import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const ongoingProjects = [
    {
      id: 1,
      title: 'Marginalization of selected folk arts and crafts',
      category: 'Socio-Cultural',
      description: 'Study on the marginalization of selected folk arts and crafts in the socio-cultural life of people.',
      status: 'Ongoing',
      client: 'Shripati Shastri Research Institute, Pune',
      duration: '2025-26',
      location: 'Maharashtra and Gujarat',
      sampleSize: '3000'
    },
    {
      id: 2,
      title: 'Youth Aspiration Mapping Survey',
      category: 'Social Survey',
      description: 'Youth Aspiration Mapping Survey conducted in the Borabanda community.',
      status: 'Ongoing',
      client: 'Lighthouse, Pune',
      duration: '2026',
      location: 'Hyderabad, Telangana',
      sampleSize: '1200'
    },
    {
      id: 3,
      title: 'Future Science Champ Program',
      category: 'Education',
      description: 'Encouraging 6-12th students to enrich their interest in the science field.',
      status: 'Ongoing',
      client: 'SPPU, Pune',
      duration: '2026',
      location: 'PMC & PCMC',
      sampleSize: '300 schools & classes'
    },
    {
      id: 16,
      title: 'Street Vendors in Small and Large Cities',
      category: 'Socio-Economic',
      description: 'The Study of Social Status, Financial Stability, and the Impact of Digital Payments and Government Schemes.',
      status: 'Ongoing',
      client: 'North Maharashtra University',
      duration: '2026',
      location: 'Maharashtra',
      sampleSize: '4500'
    }
  ]

  const completedProjects = [
    {
      id: 4,
      title: 'UMED Empower HER Program',
      category: 'Training & Development',
      description: 'Research commissioned to assess the impact of training program (digital book keeping) to enhance productivity and financial management in women-led MSMEs.',
      status: 'Completed',
      client: 'World Bank',
      duration: '2024-25',
      location: 'Maharashtra',
      sampleSize: '880'
    },
    {
      id: 5,
      title: 'Social Welfare Scheme Data Based',
      category: 'Welfare Analysis',
      description: 'Welfare schemes database creation and comprehensive analysis.',
      status: 'Completed',
      client: 'Tapasya',
      duration: '2025',
      location: 'Pune',
      sampleSize: 'Secondary Data Based'
    },
    {
      id: 6,
      title: 'Sorghum Productivity Cost Analysis',
      category: 'Agriculture',
      description: 'Assessment of sorghum cultivation productivity, cost, and carbon emissions in Maharashtra.',
      status: 'Completed',
      client: 'ICRISAT',
      duration: '2020-2021',
      location: 'Various villages in Maharashtra',
      sampleSize: '600'
    },
    {
      id: 7,
      title: 'Booker Customer Survey',
      category: 'Market Research',
      description: 'B2B survey to gather feedback from retail customers on Booker services in Pune.',
      status: 'Completed',
      client: 'TATA Group’s Booker Wholesale Company',
      duration: '2021-2022',
      location: 'Pune',
      sampleSize: '150'
    },
    {
      id: 8,
      title: 'Skill PMKVY India Mission Analysis',
      category: 'Skill Development',
      description: 'An Analytical Study of the Role, Status, and Challenges of Skill PMKVY India Mission in Generating Self-Employment in Maharashtra.',
      status: 'Completed',
      client: 'Sir Parshurambhau Mahavidyalaya, Pune',
      duration: '2023-2024',
      location: 'Solapur, Pune, Ahmednagar, Satara, Sangali, Kolhapur',
      sampleSize: '3000'
    },
    {
      id: 9,
      title: 'PCMC Smart Sarthi App Survey',
      category: 'Urban Tech Impact',
      description: 'User Experience Survey for Impact Assessment of the PCMC Smart Sarthi App.',
      status: 'Completed',
      client: 'Shri Balaji University, Pune',
      duration: '2024-2025',
      location: 'PCMC Area, Maharashtra',
      sampleSize: '2500'
    },
    {
      id: 10,
      title: 'Success of PMJJBY and PMSBY (Pune)',
      category: 'Policy Assessment',
      description: 'Study of success of PMJJBY and PMSBY with reference to Pune District of Maharashtra.',
      status: 'Completed',
      client: 'National Insurance Academy, Pune',
      duration: '2025',
      location: 'Pune District',
      sampleSize: '1000'
    },
    {
      id: 11,
      title: 'PMFBY - Crop Insurance Impact',
      category: 'Agricultural Economics',
      description: 'Short term empirical research project on the impact of Pradhan Mantri Fasal Bima Yojna (PMFBY) on social-economic development of farmers.',
      status: 'Completed',
      client: 'SYMBIOSIS',
      duration: '2023-24',
      location: 'Maharashtra',
      sampleSize: '1500'
    },
    {
      id: 12,
      title: 'Human Wildlife Conflict',
      category: 'Environmental Study',
      description: 'Estimation of net agricultural losses in Maharashtra - Survey of farmers regarding human wildlife conflict.',
      status: 'Completed',
      client: 'GIPE',
      duration: '2024-2025',
      location: 'Kishan Exhibition, Mulshi',
      sampleSize: '1000'
    },
    {
      id: 13,
      title: 'Net Zero & Climate Resilient Village',
      category: 'Sustainability',
      description: 'Baseline emission report for the Net Zero and climate resilient Village Project.',
      status: 'Completed',
      client: 'GIPE (Centre of Sustainable Development)',
      duration: '2022-2023',
      location: 'Pune',
      sampleSize: 'Village census'
    },
    {
      id: 14,
      title: 'Study of Grammangal Schools',
      category: 'Education Research',
      description: 'Data collection and report writing for Grammangal schools and Anganwadis.',
      status: 'Completed',
      client: 'Centre of Studies in Social Sciences Pune (CSSS)',
      duration: '2024',
      location: 'Palghar',
      sampleSize: '2 schools, 4 Anganwadis'
    },
    {
      id: 15,
      title: 'PMJJBY & PMSBY Beneficiary Study',
      category: 'Insurance Analysis',
      description: 'Data collection of Policy holder/Beneficiaries for Pradhan Mantri Jeevan Jyoti Bima Yojna and PM Suraksha Bima Yojna.',
      status: 'Completed',
      client: 'National Insurance Agency',
      duration: '2025-2026',
      location: 'Pune',
      sampleSize: '500'
    }
  ]

  const [selectedProject, setSelectedProject] = useState(null)

  const ProjectCard = ({ project }) => (
    <motion.div
      className="project-card clickable"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={() => setSelectedProject(project)}
      whileHover={{ y: -5 }}
    >
      <div className="project-status">{project.status}</div>
      <h3 className="project-title">{project.title}</h3>
      <span className="project-category">{project.category}</span>
      <p className="project-description">{project.description}</p>
    </motion.div>
  )

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null

    return (
      <motion.div
        className="project-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="project-modal-content"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={e => e.stopPropagation()}
        >
          <button className="close-modal" onClick={onClose}>
            &times;
          </button>

          <div className="modal-header">
            <span className="modal-category">{project.category}</span>
            <div className="modal-status">{project.status}</div>
          </div>

          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-description">{project.description}</p>

          <div className="modal-details">
            {project.client && (
              <div className="detail-item">
                <span className="detail-label">Client</span>
                <span className="detail-value">{project.client}</span>
              </div>
            )}
            {project.duration && (
              <div className="detail-item">
                <span className="detail-label">Duration</span>
                <span className="detail-value">{project.duration}</span>
              </div>
            )}
            {project.location && (
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">{project.location}</span>
              </div>
            )}
            {project.sampleSize && (
              <div className="detail-item">
                <span className="detail-label">Sample Size</span>
                <span className="detail-value">{project.sampleSize}</span>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="projects-page">
      <section className="projects-hero section">
        <div className="container">
          <motion.div
            className="projects-hero-content"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="page-title">Our Projects</h1>
            <p className="page-subtitle">
              Explore our portfolio of impactful research and consulting
              engagements
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section projects-list-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ongoing Projects</h2>
          </div>
          <div className="projects-grid">
            {ongoingProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-list-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Completed Projects</h2>
          </div>
          <div className="projects-grid">
            {completedProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
