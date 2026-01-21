import React from 'react'
import './WhyChooseSatyah.css'
import AbstractGrid from '../assets/abstract_research_grid.png'

const WhyChooseSatyah = () => {
    return (
        <section className="why-choose section" id="why-choose">
            {/* Background Visual Element - Positioned right */}
            <div className="why-choose-bg-visual">
                <div className="radial-glow"></div>
                <img
                    src={AbstractGrid}
                    alt="Abstract Research Pattern"
                    className="abstract-bg"
                />
            </div>

            <div className="container">
                <div className="why-choose-header">
                    <h2 className="section-title">Why Choose SATYAH?</h2>
                    <p className="section-subtitle">
                        A trusted partner for research-driven impact
                    </p>
                    <p className="section-subtitle-secondary">
                        Grounded in evidence. Guided by impact.
                    </p>
                    <div className="header-divider"></div>
                </div>

                <div className="why-choose-content">
                    {/* Left Column: Text Content (Editorial Style) */}
                    <div className="why-choose-text-column">
                        <span className="editorial-label">OUR APPROACH</span>
                        <div className="text-content-wrapper">
                            <p className="primary-text">
                                SATYAH Research & Consultancy stands out as a trusted partner for organizations seeking clarity, credibility, and impact. Our work is driven by rigorous research, innovative thinking, and a deep understanding of sector-specific challenges.
                            </p>
                            <p className="secondary-text">
                                With a seasoned multidisciplinary team and a customized engagement approach, SATYAH delivers purpose-built methodologies and insights. We uphold the highest standards of ethics, confidentiality, and analytical rigor while ensuring timely delivery.
                            </p>
                            <p className="tertiary-text">
                                At SATYAH, research is not just analysis — it is a responsibility. Every engagement is approached with rigor, integrity, and a long-term perspective.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Expanded Value Blocks */}
                    <div className="why-choose-values-column">
                        <div className="values-grid">
                            <div className="value-block">
                                <h4>Proven Expertise</h4>
                                <p>In research, strategy, and sustainability domains.</p>
                            </div>
                            <div className="value-block">
                                <h4>Data-Driven Decisions</h4>
                                <p>Insights derived from rigorous data analysis.</p>
                            </div>
                            <div className="value-block">
                                <h4>Customized Methodologies</h4>
                                <p>Tailored approaches aligned to client objectives.</p>
                            </div>
                            <div className="value-block">
                                <h4>Global Track Record</h4>
                                <p>Trusted by institutions and global organizations.</p>
                            </div>
                            <div className="value-block">
                                <h4>Ethical Standards</h4>
                                <p>Strict confidentiality and transparent practices.</p>
                            </div>
                            <div className="value-block">
                                <h4>Timely Execution</h4>
                                <p>Rapid delivery for critical time-sensitive decisions.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Authority Strip */}
                <div className="authority-strip">
                    <div className="authority-item">Trusted by academic institutions and global organizations</div>
                    <div className="authority-item">Experience across research, policy, and sustainability</div>
                    <div className="authority-item">Multidisciplinary expertise with real-world impact</div>
                    <div className="authority-item">Commitment to ethical, transparent research practices</div>
                </div>

                <div className="why-choose-footer">
                    <p className="closing-line">
                        Choosing SATYAH means partnering with a research institution that values clarity, credibility, and meaningful impact.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseSatyah
