import { useState } from 'react'
import { motion } from 'framer-motion'
import './Careers.css'

const Careers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        experience: '',
        jobType: 'Internship',
        linkedin: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleChange = (e) => {
        const { name, value, files } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdRXuQaDRN19aV0C1FqkhSzchOXw0WE3-JqfUyarzmYpdHm9w/formResponse'

        const formBody = new FormData()
        formBody.append('entry.1810266826', formData.name)
        formBody.append('entry.1674509327', formData.email)
        formBody.append('entry.1521215244', formData.phone)
        formBody.append('entry.680196200', formData.qualification)
        formBody.append('entry.547342027', formData.experience)
        formBody.append('entry.773464392', formData.jobType)
        formBody.append('entry.1747510109', formData.linkedin)

        try {
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formBody
            })

            // Since no-cors gives an opaque response, we assume success if no network error occurred
            setSubmitStatus('success')
            setFormData({
                name: '',
                email: '',
                phone: '',
                qualification: '',
                experience: '',
                jobType: 'Internship',
                linkedin: ''
            })

            setTimeout(() => setSubmitStatus(null), 5000)
        } catch (error) {
            console.error('Submission error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }



    // Icons as clean SVGs
    const Icons = {
        innovation: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"></path>
                <path d="M9 21h6"></path>
            </svg>
        ),
        rocket: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
        ),
        users: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        ),
        globe: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
        clock: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        )
    }

    const perks = [
        {
            id: 1,
            title: "Innovation First",
            icon: Icons.innovation,
            description: "Work on cutting-edge research and data-driven projects that challenge the status quo."
        },
        {
            id: 2,
            title: "Growth Culture",
            icon: Icons.rocket,
            description: "Continuous learning opportunities through workshops, mentorship, and hands-on field experience."
        },
        {
            id: 3,
            title: "Collaborative Environment",
            icon: Icons.users,
            description: "A supportive, inclusive team where every voice is valued and diverse perspectives drive solutions."
        },
        {
            id: 4,
            title: "Impactful Work",
            icon: Icons.globe,
            description: "Contribute directly to projects that drive tangible social change and community development."
        },
        {
            id: 5,
            title: "Flexible Work",
            icon: Icons.clock,
            description: "We believe in output over hours. Enjoy a flexible work culture that respects your work-life balance."
        }
    ]

    return (
        <div className="careers-page">
            <section className="careers-hero">
                <div className="container">
                    <motion.div
                        className="careers-hero-content"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="page-title">Careers at SATYAH</h1>
                        <p className="page-subtitle">
                            Join our team and contribute to research-driven, data-backed decision making.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container careers-content">
                <section className="jobs-section">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Perks of Joining SATYAH
                    </motion.h2>

                    <div className="jobs-grid">
                        {perks.map((perk, index) => (
                            <motion.div
                                key={perk.id}
                                className="job-card perk-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="perk-header">
                                    <div className="perk-icon-wrapper">
                                        {perk.icon}
                                    </div>
                                    <h3 className="job-title perk-title">{perk.title}</h3>
                                </div>
                                <p className="job-description">{perk.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="application-section">
                    <motion.div
                        className="form-container"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>Apply Now</h2>

                        <form className="careers-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email ID *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="+91 99999 99999"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="qualification">Qualification *</label>
                                <input
                                    type="text"
                                    id="qualification"
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="Highest Degree / Qualification"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="experience">Experience *</label>
                                <input
                                    type="text"
                                    id="experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="Write NA if no experience"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="jobType">Job Type *</label>
                                <div className="select-wrapper">
                                    <select
                                        id="jobType"
                                        name="jobType"
                                        value={formData.jobType}
                                        onChange={handleChange}
                                        className="form-select"
                                    >
                                        <option value="Internship">Internship</option>
                                        <option value="Full-time">Full-time</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="linkedin">LinkedIn Profile (Optional)</label>
                                <input
                                    type="url"
                                    id="linkedin"
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="https://linkedin.com/in/..."
                                />
                            </div>



                            {submitStatus === 'success' && (
                                <div className="form-success">
                                    Application submitted successfully! We will get back to you soon.
                                </div>
                            )}

                            <button
                                type="submit"
                                className="form-submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </form>
                    </motion.div>
                </section>
            </div>
        </div>
    )
}

export default Careers
