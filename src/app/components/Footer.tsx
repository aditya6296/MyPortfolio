"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <a href="#home" className="text-lg font-bold tracking-tight">
              <span className="gradient-text">Aditya</span>
              <span className="text-foreground-muted font-normal">.dev</span>
            </a>
            <p className="text-sm text-foreground-muted mt-1">
              Building digital experiences with passion.
            </p>
          </div>

          {/* Social + Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/aditya-kumar-26a163255/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-foreground-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/aditya6296"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-foreground-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>

            <div className="w-px h-5 bg-border mx-1" />

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg border border-border text-foreground-muted hover:text-accent hover:border-accent/50 transition-all"
              aria-label="Back to top"
            >
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} Aditya Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
