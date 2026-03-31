"use client";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { FiBriefcase, FiBookOpen, FiCode } from "react-icons/fi";

const timeline = [
  {
    type: "work",
    title: "Backend Developer",
    org: "FluxusForge",
    period: "Jan 2026 — Present",
    description:
      "Building and maintaining scalable backend services and REST APIs. Working with Node.js, Express, and MongoDB to deliver high-performance server-side solutions in a fast-paced product team.",
    icon: <FiBriefcase />,
    current: true,
  },
  {
    type: "internship",
    title: "Full Stack Developer — Intern & Trainee",
    org: "Programming Pathshala",
    period: "Oct 2024 — Sep 2025",
    description:
      "Completed intensive full stack training and worked on real-world projects. Built production-grade applications using the MERN stack, gained hands-on experience with DSA, and agile workflows.",
    icon: <FiCode />,
    current: false,
  },
  {
    type: "education",
    title: "B.Tech — Information Technology",
    org: "Anna University, Chennai",
    period: "2020 — 2024",
    description:
      "Graduated in Information Technology with foundations in data structures, algorithms, databases, computer networks, and software engineering. Developed multiple web projects during coursework.",
    icon: <FiBookOpen />,
    current: false,
  },
];

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-background-secondary">
      <SectionHeading
        title="Experience & Education"
        subtitle="My journey in tech and learning"
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {timeline.map((item, i) => (
          <motion.div
            key={i}
            className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
              i % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Content Card */}
            <div
              className={`flex-1 ml-16 md:ml-0 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
              }`}
            >
              <div className="p-5 rounded-2xl border border-border bg-background-card hover:border-accent/30 transition-colors duration-300">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-mono rounded-md bg-accent-glow text-accent border border-accent/20">
                    {item.period}
                  </span>
                  {item.current && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md bg-green-500/10 text-green-400 border border-green-500/20">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                      </span>
                      Current
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-accent text-sm font-medium mt-1">
                  {item.org}
                </p>
                <p className="text-foreground-muted text-sm mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background-card border-2 border-accent flex items-center justify-center text-accent z-10">
              {item.icon}
            </div>

            {/* Spacer for alternating layout on desktop */}
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
