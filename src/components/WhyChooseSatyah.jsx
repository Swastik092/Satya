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
                                SATYAH Research & Consultancy provides expert research solutions tailored to your business needs. Our experienced team delivers strategic, data-driven insights with integrity and precision.
                            </p>
                            <p className="secondary-text">
                                We combine industry expertise with customized methodologies to ensure timely, impactful results. Beyond delivering exceptional research, we're committed to catalyzing positive change and supporting initiatives that create lasting value for businesses and communities alike.
                            </p>
                            <p className="tertiary-text">
                                Our client-centric approach ensures transparent communication and alignment at every project stage. Partner with us to transform challenges into opportunities for sustainable growth.
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
