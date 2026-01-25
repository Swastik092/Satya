import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const ongoingProjects = [
    {
      id: 1,
      title: 'Sustainable Urban Development',
      category: 'Urban Planning',
      description: 'Developing frameworks for eco-friendly city expansion and resource management in metropolitan areas.',
      status: 'Ongoing'
    },
    {
      id: 2,
      title: 'Rural Education Initiative',
      category: 'Education',
      description: 'Implementing digital literacy programs in rural communities to bridge the technological gap.',
      status: 'Ongoing'
    },
    {
      id: 3,
      title: 'Clean Water Access Study',
      category: 'Environment',
      description: 'Analyzing groundwater quality and distribution systems to improve access to safe drinking water.',
      status: 'Ongoing'
    }
  ]

  const completedProjects = [
    {
      id: 4,
      title: 'UMED Empower HER Program',
      category: 'Training & Development',
      description: 'Empowering women-led MSMEs with financial management and digital bookkeeping skills.',
      status: 'Completed',
      client: 'World Bank',
      duration: '',
      location: 'Survey Location',
      sampleSize: '880'
    },
    {
      id: 5,
      title: 'Social Welfare Scheme Data Based',
      category: 'Research',
      description: 'Data-based analysis of social welfare schemes.',
      status: 'Completed',
      client: 'Tapasya',
      duration: '',
      location: 'Survey Location',
      sampleSize: 'Secondary data Based'
    },
    {
      id: 6,
      title: 'Sorghum Productivity Cost Analysis',
      category: 'Agriculture',
      description: 'Assessment of sorghum cultivation productivity, cost, and carbon emissions in Maharashtra.',
      status: 'Completed',
      client: 'International Crops Research Institute for the Semi-Arid Tropics (ICRISAT)',
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
      client: 'TATA Group’s Booker Wholesale Company, Mumbai',
      duration: '2021-2022',
      location: 'Pune',
      sampleSize: '150'
    },
    {
      id: 8,
      title: 'Role, Status, and Challenges of Skill PMKVY India Mission',
      category: 'Skill Development',
      description: 'Analytical study on generating self-employment in Maharashtra through PMKVY.',
      status: 'Completed',
      client: 'Sir Parshurambhau Mahavidyalaya, Pune',
      duration: '2023-2024',
      location: 'Solapur, Pune, Ahmednagar, Satara, Sangali, Kolhapur',
      sampleSize: '3000'
    },
    {
      id: 9,
      title: 'PCMC Smart Sarthi App User Experience Survey',
      category: 'Urban Tech',
      description: 'User experience survey for impact assessment of the Smart Sarthi App.',
      status: 'Completed',
      client: 'Shri Balaji University, Pune',
      duration: '2024-2025',
      location: 'PCMC area',
      sampleSize: '2500'
    },
    {
      id: 10,
      title: 'Study of success of PMJJBY and PMSBY',
      category: 'Insurance Policy',
      description: 'Study on the success of PMJJBY and PMSBY with reference to Pune District.',
      status: 'Completed',
      client: 'National Insurance Academy, Pune',
      duration: '2025',
      location: 'Pune District',
      sampleSize: '1000'
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
      layoutId={`project-${project.id}`}
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
      >
        <motion.div
          className="project-modal-content"
          layoutId={`project-${project.id}`}
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
