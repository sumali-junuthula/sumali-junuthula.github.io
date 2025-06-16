import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"

export default function Projects() {
  const projects = [
    {
      title: "AlphaHub",
      description: "A real-time stock forecasting tool using AI and alternative data like Reddit, Google Trends, and satellite imagery.",
      link: "https://github.com/sumali-junuthula/alphahub",
      stack: ["React", "FastAPI", "Tailwind", "LLM", "Finance"]
    },
    {
      title: "DealLab",
      description: "An AI-powered M&A screener that evaluates strategic fit and valuation across sectors for investment banking.",
      link: "https://github.com/sumali-junuthula/deallab",
      stack: ["React", "Python", "Transformer", "Vite", "Google Trends"]
    },
    {
      title: "GlitchGallery",
      description: "An animated personal portfolio where glitch art meets code—pixel-perfect animations and terminal-style UX.",
      link: "#",
      stack: [""]
    },
    {
      title: "Noosphere",
      description: "Shared memory + semantic attention AI agent framework.",
      link: "https://github.com/sumali-junuthula/noosphere",
      stack: ["Python", "LangChain", "RAG", "Redis", "Autonomous Agents"]
    }
  ]

  return (
    <section className="py-20 bg-darkblue text-beige" id="projects">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-spacemono text-beige">projects</h2>
        <p className="text-lg font-spacemono mt-2 text-blue">things i’ve been working on</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto font-spacemono">
        {projects.map((project, idx) => (
          <Tilt
            key={idx}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true} 
            glareColor="#ffffff" 
            glareMaxOpacity={0.1} 
            transitionSpeed={250}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              className="bg-darkblue border border-gray-700 rounded-xl p-5 max-w-xs w-full cursor-pointer hover:shadow-lg hover:border-beige transition-all duration-300 h-full"
            >
              <h3 className="text-xl font-spacemono text-green mb-2">{project.title}</h3>
              <p className="text-sm text-beige mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-xs text-white px-2 py-1 rounded-full font-mono tracking-tight"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue text-sm hover:underline">
                view project →
              </a>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  )
}
