"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Square Foundation",
    description:
      "A comprehensive scholarship management platform built with the MERN stack. Students can explore and apply for scholarships, while administrators manage applications and post opportunities through a dedicated dashboard.",
    image: "/square-foundation.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://square-foundation-frontend.vercel.app",
    githubUrl: "https://github.com/aditya6296",
  },
  {
    title: "Quiz App",
    description:
      "An interactive quiz application featuring auto-switching questions with countdown timer, real-time score tracking, and responsive design across all devices.",
    image: "/quiz-app.png",
    tags: ["React", "JavaScript", "CSS"],
    liveUrl: "https://quiz-project-46fj.vercel.app",
    githubUrl: "https://github.com/aditya6296",
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="Some of the projects I've built and am proud of"
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="group relative rounded-2xl border border-border bg-background-card overflow-hidden hover:border-accent/30 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <div className="relative h-52 sm:h-56 overflow-hidden bg-background-secondary">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent opacity-60" />

              {/* Action buttons overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-accent text-white shadow-lg hover:bg-accent-light transition-colors"
                  aria-label="View live"
                >
                  <FiExternalLink size={20} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-background-card/90 text-foreground border border-border shadow-lg hover:bg-background-card transition-colors"
                  aria-label="View source"
                >
                  <FiGithub size={20} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-accent-glow text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Bottom link */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-accent hover:text-accent-light transition-colors group/link"
              >
                View Project
                <FiExternalLink
                  size={14}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
