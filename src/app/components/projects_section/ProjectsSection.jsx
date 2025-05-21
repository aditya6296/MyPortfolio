"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Square Foundation",
      description:
        "Square Foundation is a comprehensive web application designed to streamline the process of applying for and managing scholarships. Built using the MERN stack, this platform enables students to explore and apply for scholarships, while administrators can efficiently manage applications, post new opportunities, and oversee users through a dedicated admin dashboard.",
      link: "https://square-foundation-frontend.vercel.app",
      image: "/square-foundation.svg",
    },
    {
      title: "Quiz App",
      description:
        "A simple and elegant quiz app built with React.js that features auto-switching questions using a countdown timer and real-time score tracking. Designed with a responsive layout for all devices.",
      link: "https://quiz-project-46fj.vercel.app",
      image: "/quiz-app.svg",
    },
  ];

  return (
    <section id="projects" className="py-5 px-4 text-center m-auto scroll-mt-15">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl font-bold mb-10">My Projects</h2>
        <div className="flex flex-wrap md:flex-nowrap max-w-[800px] gap-8 m-auto text-black">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition max-w-[400px]"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  height={100}
                  width={100}
                  className="w-fit h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-lg">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
