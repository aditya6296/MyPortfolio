"use client";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiJest,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#a1a1aa" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Express.js", icon: <SiExpress />, color: "#a1a1aa" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Jest", icon: <SiJest />, color: "#C21325" },
  { name: "REST APIs", icon: <FaDatabase />, color: "#6366f1" },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-background-secondary">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="The tools and technologies I work with daily"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="group relative p-6 rounded-2xl border border-border bg-background-card hover:border-accent/30 text-center transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            {/* Glow on hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at center, ${skill.color}10 0%, transparent 70%)`,
              }}
            />

            <div
              className="relative text-4xl mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <p className="relative text-sm font-medium text-foreground-muted group-hover:text-foreground transition-colors">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
