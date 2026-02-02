import { motion } from 'framer-motion'
import './TeamList.css'

const teamMembers = [
    {
        name: 'Hansraj Survanyshi',
        role: 'Co-Ordinator',
        description:
            'M. Phil in Economics, 10+ Years of Research Experience, worked with UN (United Nations), TISS (Tata Institute of Social Sciences) & GIPE (Gokhale Institute of Politics and Economics).',
        image: '/images/hansraj-suryavanshi.jpg',
    },

    {
        name: 'Srushti Jagtap',
        role: 'Program Officer',
        description: 'M.S.C Economics holder.',
        image: '👩‍💼',
    },
    {
        name: 'Adv. Rushikesh Bade',
        role: 'Legal Advisor',
        description: 'Legal Officer.',
        image: '👨‍⚖️',
    },
    {
        name: 'Dr. Arun Kulkarni',
        role: 'Mentor/Advisor',
        description:
            'Expert in Agro-Economics, Co-working with World Bank Consultant.',
        image: '👨‍🏫',
    },
    {
        name: 'Dr. Nilesh Padwal',
        role: 'Project Co-ordinator',
        description: 'PhD in Environmental Economics.',
        image: '👨‍🔬',
    },
    {
        name: 'Dr. Rajat Singh Yadav',
        role: 'Data Analysis Expert',
        description: 'PhD in Economics.',
        image: '👨‍💻',
    },
    {
        name: 'Dr. Anirudh More',
        role: 'Agricultural Economist',
        description: 'PhD in Economics.',
        image: '👨‍🌾',
    },
    {
        name: 'A.N. Alawali',
        role: 'Water Development Expert',
        description: 'Ex-Chief Engineer of Maharashtra.',
        image: '👷‍♂️',
    },
    {
        name: 'Ruchi Agarwal',
        role: 'Research Assistant',
        description: 'Research Assistant at SATYAH.',
        image: '👩‍💼',
    },
]

const TeamList = ({ showTitle = true }) => {
    const featuredMember = teamMembers[0]
    const otherMembers = teamMembers.slice(1)

    return (
        <div className="team-list-component">
            {showTitle && (
                <section className="team-hero section">
                    <div className="container">
                        <motion.div
                            className="team-hero-content"
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <h1 className="page-title">Meet the Team</h1>
                            <p className="page-subtitle">
                                Our multidisciplinary team brings together expertise from research,
                                data analysis, strategy, and sustainability
                            </p>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Featured Member Section */}
            <section className="team-featured-section section">
                <div className="container">
                    <motion.div
                        className="team-featured-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="featured-image-container">
                            <img
                                src={featuredMember.image}
                                alt={featuredMember.name}
                                className="featured-member-photo"
                            />
                        </div>
                        <div className="featured-info">
                            <h2 className="featured-name">{featuredMember.name}</h2>
                            <p className="featured-role">{featuredMember.role}</p>
                            <p className="featured-description">{featuredMember.description}</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="team-grid-section section">
                <div className="container">
                    <div className="team-grid">
                        {otherMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="team-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            >
                                <div className="team-info">
                                    <h3 className="team-name">{member.name}</h3>
                                    <p className="team-role">{member.role}</p>
                                    <p className="team-description">{member.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TeamList
