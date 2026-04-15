import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import adobeImg from "../assets/adobe.png";
import cordovaAdobeImg from "../assets/cordova-adobe.png";
import adobe1Img from "../assets/adobe1.png";
import walgreens from "../assets/walgreens.png";

const projects = [
  {
    title: "Interactive Demo Builder",
    description:
      "A tool developed for Adobe (2019-2021) that enables creating interactive product demos. Built with modern web technologies to showcase Adobe Experience Platform capabilities.",
    image: adobeImg,
    tags: ["Web App", "All"],
  },
  {
    title: "IDB Trigger Application",
    description:
      "A mobile companion app allowing customers to experience interactive product demonstrations on-the-go with real-time synchronization.",
    image: cordovaAdobeImg,
    tags: ["Mobile App", "All"],
  },
  {
    title: "IDB Chrome Extension",
    description:
      "A Chrome extension at the core of IDB that allows Adobe partners to simulate Adobe Platform capabilities directly on live customer websites.",
    image: adobe1Img,
    tags: ["Web App", "All"],
  },
  {
    title: "Walgreens Ecommerce Platform",
    description:
      "A large-scale ecommerce platform for Walgreens enabling online pharmacy ordering, product browsing, prescription management, and seamless checkout experiences serving millions of customers daily.",
    image: walgreens,
    tags: ["Web App", "All"],
  },
  {
    title: "Content Protection App",
    description:
      "A frontend application that scrapes and identifies unlicensed video content distributed across YouTube, Instagram, Spotify, and other major platforms to protect intellectual property rights at scale.",
    image: "https://picsum.photos/seed/content-protect/600/400",
    tags: ["Web App", "All"],
  },
  {
    title: "Detection Workspace App",
    description:
      "An intelligent workspace for detecting and tracking authorized content distributed online, providing real-time monitoring dashboards, compliance reporting, and automated takedown workflows.",
    image: "https://picsum.photos/seed/detection-app/600/400",
    tags: ["Web App", "All"],
  },
];

const filters = ["All", "Web App", "Mobile App"];

function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="work">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Work</div>
          <h2 className="section-heading">
            Selected <span>projects</span>
          </h2>
        </motion.div>

        <div className="work-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`work-filter-btn ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div className="work-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                className="work-card"
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="work-card-image">
                  <img src={project.image} alt={project.title} />
                  <div className="work-card-overlay">
                    <a href="#" aria-label={`View ${project.title}`}>
                      <HiExternalLink />
                    </a>
                    <a href="#" aria-label={`${project.title} source code`}>
                      <FiGithub />
                    </a>
                  </div>
                </div>
                <div className="work-card-content">
                  <div className="work-card-tag">{project.tags[0]}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Work;
