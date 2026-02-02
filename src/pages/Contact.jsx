import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

// SVG Icons for Contact Page
const Icons = {
  Mail: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  ),
  Phone: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  ),
  MapPin: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  ),
  Send: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe33ccrXB8T1h_p6Igb9we1jPr3M1Sy-YbJClcQamrxTBTa5g/formResponse'

    try {
      const formBody = new FormData()
      formBody.append('entry.1362376038', formData.name) // Name
      formBody.append('entry.876053468', formData.email) // Email
      formBody.append('entry.1723727918', formData.organization) // Organization
      formBody.append('entry.1851143460', formData.message) // Message

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formBody,
      })

      // With no-cors, we can't check response.ok, so we assume success if no error is thrown
      setSubmitStatus('success')
      setFormData({ name: '', email: '', organization: '', message: '' })

      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error('Form submission failed:', error)
      setSubmitStatus('error') // Optional: Handle error state if needed, though user didn't explicitly ask for UI change on error
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">
              Let's discuss how SATYAH can help drive your organization forward
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* LEFT PANE: FORM */}
            <div className="contact-form-pane">
              <h2 className="form-title">Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="organization">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Company or Institute Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-textarea"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    className="form-success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Message sent successfully!
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  className="form-submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Icons.Send />
                </motion.button>
              </form>
            </div>

            {/* RIGHT PANE: INFO */}
            <div className="contact-info-pane">
              <div className="info-pane-content">
                <h2 className="info-title">Contact Information</h2>
                <p className="info-intro">
                  Ready to start a project? We are here to help you achieve your goals through data-driven insights.
                </p>

                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon"><Icons.Mail /></div>
                    <div className="info-details">
                      <h3>Email</h3>
                      <a href="mailto:satyah2019@gmail.com" className="contact-link-light">
                        satyah2019@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon"><Icons.Phone /></div>
                    <div className="info-details">
                      <h3>Phone</h3>
                      <p>
                        <a href="tel:7875695021" className="contact-link-light">7875695021</a>
                        <span className="separator">/</span>
                        <a href="tel:9175085911" className="contact-link-light">9175085911</a>
                      </p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon"><Icons.MapPin /></div>
                    <div className="info-details">
                      <h3>Office</h3>
                      <p>
                        Office No. 2, 1st Floor, Shree Sadashiv Hsg. Society,
                        Above Shravan Hotel, Fergusson College Road,
                        Model Colony, Pune - 41101
                      </p>
                    </div>
                  </div>
                </div>

                {/* Optional Decorative Elements could go here if using CSS shapes */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
