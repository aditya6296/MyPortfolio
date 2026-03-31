"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Tech Enthusiast",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && text === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(
        isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--gradient-start)] rounded-full opacity-10 blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--gradient-end)] rounded-full opacity-10 blur-[128px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="text-foreground">Hi, I&apos;m</span>
              <br />
              <span className="gradient-text">Aditya Kumar</span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              className="mt-6 h-10 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-xl sm:text-2xl text-foreground-muted font-mono">
                {text}
                <span className="animate-pulse text-accent">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="mt-6 text-foreground-muted text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I craft modern web experiences with clean code and thoughtful
              design. Specializing in the MERN stack and Next.js ecosystem.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent hover:bg-accent-light text-white font-medium transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
              >
                View My Work
                <FiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="/Aditya_Kumar__Resume.pdf"
                download="Aditya_Kumar__Resume.pdf"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border hover:border-border-hover text-foreground font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-background-card"
              >
                <FiDownload className="group-hover:-translate-y-0.5 transition-transform" />
                Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <a
                href="https://www.linkedin.com/in/aditya-kumar-26a163255/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-accent/50 text-foreground-muted hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/aditya6296"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-accent/50 text-foreground-muted hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-20 blur-2xl animate-pulse" />
              {/* Border Ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-50" />
              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background">
                <Image
                  src="/Aditya_Img.jpg"
                  alt="Aditya Kumar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl glass border border-glass-border shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <span className="text-sm font-medium">
                🚀 <span className="gradient-text font-semibold">MERN Stack</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-foreground-muted hover:text-accent transition-colors"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <FiArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
