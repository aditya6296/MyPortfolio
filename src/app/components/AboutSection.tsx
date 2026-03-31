"use client";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { FiCode, FiLayers, FiZap } from "react-icons/fi";

const highlights = [
  {
    icon: <FiCode size={24} />,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices and design patterns.",
  },
  {
    icon: <FiLayers size={24} />,
    title: "Full Stack",
    description: "End-to-end development from database design to pixel-perfect UIs.",
  },
  {
    icon: <FiZap size={24} />,
    title: "Performance",
    description: "Optimized applications with fast load times and smooth user experiences.",
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Me"
        subtitle="Get to know the developer behind the code"
      />

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Story */}
        <motion.div
          className="lg:col-span-3 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed text-foreground-muted">
            I&apos;m{" "}
            <span className="text-foreground font-semibold">Aditya Kumar</span>,
            a dedicated Full Stack Developer passionate about building fast,
            user-friendly, and scalable web applications. I work primarily with
            the <span className="text-accent font-medium">MERN stack</span> —
            MongoDB, Express.js, React, and Node.js.
          </p>
          <p className="text-lg leading-relaxed text-foreground-muted">
            I love designing smooth user interfaces and solving backend
            challenges. With deep experience in JavaScript, React, and modern
            tooling like Next.js and Tailwind CSS, I focus on writing clean,
            maintainable code that scales.
          </p>
          <p className="text-lg leading-relaxed text-foreground-muted">
            My approach is simple:{" "}
            <span className="text-foreground italic">
              listen, design, build, refine.
            </span>{" "}
            I turn ideas into high-performing digital products with thoughtful UX
            and solid architecture.
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
              "Git",
              "REST APIs",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm rounded-lg bg-background-card border border-border text-foreground-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Highlight Cards */}
        <div className="lg:col-span-2 space-y-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="group p-5 rounded-2xl border border-border bg-background-card hover:border-accent/30 transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-accent-glow text-accent shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
