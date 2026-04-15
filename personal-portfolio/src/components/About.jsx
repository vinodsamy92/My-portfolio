import { motion } from 'framer-motion'
import { HiCode, HiServer, HiDatabase } from 'react-icons/hi'

const aboutCards = [
  {
    icon: <HiCode />,
    title: 'Frontend development',
    description:
      'Building responsive, performant user interfaces with React, Angular, and modern JavaScript. Crafting pixel-perfect experiences that users enjoy.',
  },
  {
    icon: <HiServer />,
    title: 'Backend development',
    description:
      'Designing robust APIs and server-side architectures with Node.js and Java. Building systems that scale reliably under production load.',
  },
  {
    icon: <HiDatabase />,
    title: 'Database & infrastructure',
    description:
      'Structuring data models, optimizing queries, and managing deployments. Ensuring data integrity and system reliability from storage to delivery.',
  },
]

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">About</div>
          <h2 className="section-heading">
            Good development means<br /><span>good business</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          {aboutCards.map((card, i) => (
            <motion.div
              className="about-card"
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="about-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
