import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TeamList from '../components/TeamList'
import './Team.css'

const Team = () => {
  return (
    <div className="team-page">
      <TeamList showTitle={true} />

      <section className="team-cta section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Join Our Team</h2>
            <p className="cta-text">
              We're always looking for talented researchers, analysts, and
              consultants who share our passion for evidence-based solutions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="cta-button-large">
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Team
