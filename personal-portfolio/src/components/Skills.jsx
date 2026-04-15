import { motion } from 'framer-motion'
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiAngular,
  SiPython,
  SiHtml5,
  SiGit,
  SiGooglecloud,
  SiClaude,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { HiDatabase } from 'react-icons/hi'

const skills = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Angular', icon: <SiAngular /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'HTML/CSS', icon: <SiHtml5 /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'AWS (Certified)', icon: <FaAws /> },
  { name: 'Google SDK', icon: <SiGooglecloud /> },
  { name: 'RAG', icon: <HiDatabase /> },
  { name: 'Pinecone/Vector', icon: <HiDatabase /> },
  { name: 'Claude Code (Certified)', icon: <SiClaude /> },
]

const experiences = [
  {
    year: '2023',
    role: 'Senior Software Engineer',
    company: 'Agilisium Consulting Pvt',
    tech: 'React, AWS, Python, RAG',
  },
  {
    year: '2022',
    role: 'Software Engineer IV',
    company: 'Photon Interactive',
    tech: 'Java, React',
  },
  {
    year: '2019',
    role: 'Fullstack Developer',
    company: 'Intellidesign',
    tech: 'JavaScript, Node.js',
  },
  {
    year: '2018',
    role: 'Software Developer',
    company: 'Parallel Reality',
    tech: 'HTML, CSS, JavaScript',
  },
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Skills & experience</div>
          <h2 className="section-heading">
            Tools I work with and<br /><span>where I have been</span>
          </h2>
        </motion.div>

        <div className="skills-layout">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <motion.div
                  className="skill-item"
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="skill-item-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="experience-list">
            {experiences.map((exp, i) => (
              <motion.div
                className="experience-item"
                key={exp.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="experience-year">{exp.year}</div>
                <div className="experience-details">
                  <h4>{exp.role}</h4>
                  <p>{exp.company}</p>
                  <span className="tech-tag">{exp.tech}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
