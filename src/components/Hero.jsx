import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

import LiquidGrid from './LiquidGrid'

const Hero = () => {
  const heroRef = useRef(null)

  // Parallax for ambient layers
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  // Reduced parallax range for smoother feel, since we have 3D motion now
  const yMath = useTransform(scrollYProgress, [0, 1], [0, -50])

  // yGrid is no longer needed for the 3D component directly, 
  // unless we pass it as a prop, but let's keep it simple first.

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  }

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  }

  // Infinite lifecycle animation: Fade In -> Immediate Fade Out (No Stay) -> Safety Buffer
  const equationAnim = (duration, delay) => ({
    scale: [0.8, 1.1, 1.2],
    opacity: [0, 1, 0, 0], // Peak at 1 then immediately fade out
    filter: ["blur(4px)", "blur(0px)", "blur(4px)", "blur(4px)"],
    y: [0, -40, -40],
    transition: {
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.2, 0.9, 1] // 20% In, 70% Slow Fade Out, 10% Buffer
    }
  })

  const equations = [
    { id: 1, text: "∫ f(x) dx", top: "20%", left: "10%", duration: 13, delay: 0 },
    { id: 2, text: "Σ n⁻² = π²/6", top: "50%", left: "40%", duration: 17, delay: 2 },
    { id: 3, text: "e^{iπ} + 1 = 0", top: "30%", right: "10%", duration: 19, delay: 5 },
    { id: 4, text: "∇ ⋅ E = ρ/ε₀", top: "70%", left: "20%", duration: 15, delay: 1 },
    { id: 5, text: "d/dx(eˣ) = eˣ", top: "60%", right: "20%", duration: 16, delay: 8 },
    { id: 6, text: "x = [-b ± √(b²-4ac)] / 2a", top: "15%", right: "30%", duration: 21, delay: 4 },
    { id: 7, text: "f'(x) = lim(h→0) [f(x+h)-f(x)]/h", top: "80%", right: "0%", duration: 23, delay: 7 },
    // New equations for density & seamless loop
    { id: 8, text: "E = mc²", top: "40%", left: "5%", duration: 14, delay: 3 },
    { id: 9, text: "F = G(m₁m₂)/r²", top: "10%", right: "5%", duration: 25, delay: 9 },
    { id: 10, text: "i² = -1", top: "85%", left: "30%", duration: 18, delay: 6 }
  ]

  return (
    <section className="hero" ref={heroRef}>
      {/* Background Layer: Minimal Gradient + 3D Liquid Grid */}
      <div className="hero-background-ambient">
        <div className="hero-grid-3d-container">
          <LiquidGrid />
        </div>
        <div className="hero-gradient-overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Column: Content */}
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1 className="hero-headline" variants={fadeUp}>
              Research-led insight for smarter decisions.
            </motion.h1>

            <motion.p className="hero-subheading" variants={fadeUp}>
              SATYAH helps organizations turn data, strategy, and sustainability into clear, actionable direction.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeUp}>
              <Link to="/services" className="hero-btn-primary">
                Explore Our Services <span className="arrow">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Mathematical Floating Equations */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ y: yMath }}
          >
            <div className="math-ambient-container">
              {equations.map((eq) => (
                <motion.div
                  key={eq.id}
                  className="math-equation"
                  style={{
                    top: eq.top,
                    left: eq.left,
                    right: eq.right
                  }}
                  animate={equationAnim(eq.duration, eq.delay)}
                >
                  {eq.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
