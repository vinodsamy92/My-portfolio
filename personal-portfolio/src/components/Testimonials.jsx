import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const testimonials = [
  {
    name: 'Nishant Pitha',
    company: 'Adobe | Adobe Experience Platform',
    initials: 'NP',
    feedback:
      'Vinoth has been working for 2 years for Intellidesign Ltd, an official supplier of software for Adobe. From what I can see, the results that have been achieved are of good quality.',
  },
  {
    name: 'Marco Pileri',
    company: 'Intelli-design | Founder',
    initials: 'MP',
    feedback:
      'Vinoth is a responsible person that knows how to work in a team and is always ready to help his colleagues. Highly recommended. He worked for me on a project for Adobe Inc. called Interactive Demo Builder.',
  },
]

const brands = ['Adobe', 'Walgreens', 'Accenture', 'City of Westminster']

function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  const next = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1)

  return (
    <section id="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Testimonials</div>
          <h2 className="section-heading">
            What people <span>say</span>
          </h2>
        </motion.div>

        <div className="testimonials-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              className="testimonial-card"
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="testimonial-text">
                {testimonials[current].feedback}
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonials[current].initials}
                </div>
                <div className="testimonial-info">
                  <h4>{testimonials[current].name}</h4>
                  <p>{testimonials[current].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-nav">
            <button onClick={prev} aria-label="Previous testimonial">
              <HiChevronLeft />
            </button>
            <button onClick={next} aria-label="Next testimonial">
              <HiChevronRight />
            </button>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`testimonial-dot ${i === current ? 'active' : ''}`}
              />
            ))}
          </div>

          <div className="brands-marquee-wrapper">
            <motion.div
              className="brands-marquee"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              {[...brands, ...brands].map((brand, i) => (
                <div className="brand-item" key={`${brand}-${i}`}>
                  {brand}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
