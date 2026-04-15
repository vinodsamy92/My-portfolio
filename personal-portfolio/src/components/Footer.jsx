import { FiGithub, FiLinkedin } from 'react-icons/fi'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-copy">
          {year} Vinoth Periyasamy
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="https://github.com/vinodsamy92" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/vinoth-periyasamy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
