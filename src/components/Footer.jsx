import { Link, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import './Footer.css'

const Footer = () => {
  const navigate = useNavigate()

  const handleLinkClick = (path) => {
    window.scrollTo(0, 0)
    navigate(path)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* LEFT COLUMN: Brand & Contact Info */}
          <div className="footer-column">
            <div className="footer-section">
              <button onClick={() => handleLinkClick('/')} className="footer-logo">
                <Logo size={50} />
                <span className="logo-text">SATYAH</span>
              </button>
              <p className="footer-tagline">
                Driving Insight Through Research.
                <br />
                Empowering Decisions with Data, Strategy, and Sustainability.
              </p>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Contact us</h4>
              <ul className="footer-contact-list">
                <li className="contact-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Office No. 2, 1 st floor, Shree Sadashiv Hsg. Society, Above Shravan Hotel, Ferguson college Road, Model Colony, Pune - 41101</span>
                </li>
                <li className="contact-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>satyah2019@gmail.com</span>
                </li>
                <li className="contact-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>7875695021 / 9175085911</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Quick Links & Connect */}
          <div className="footer-column">
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><button onClick={() => handleLinkClick('/')}>Home</button></li>
                <li><button onClick={() => handleLinkClick('/about')}>About Us</button></li>
                <li><button onClick={() => handleLinkClick('/services')}>Services</button></li>
                <li><button onClick={() => handleLinkClick('/projects')}>Projects</button></li>
                <li><button onClick={() => handleLinkClick('/partners')}>Partners & Clients</button></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Connect</h4>
              <ul className="footer-links">
                <li><button onClick={() => handleLinkClick('/team')}>Meet the Team</button></li>
                <li><button onClick={() => handleLinkClick('/contact')}>Contact Us</button></li>
              </ul>
              <div className="footer-social">
                <a href="#" aria-label="LinkedIn" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" aria-label="Email" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SATYAH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
