import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-greeting">Hello, I am</div>

          <h1 className="hero-name">
            Vinoth<br />Periyasamy
          </h1>

          <p className="hero-title">
            <strong>Fullstack Developer</strong> & Software Engineer
          </p>

          <div className="hero-cta">
            <a href="#work" className="btn-primary">
              View my work
              <HiArrowDown style={{ transform: 'rotate(-90deg)' }} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </div>
        </motion.div>

      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>scroll</span>
        <motion.div
          className="scroll-line"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
