"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Square Foundation",
      description:
        "A full-stack e-commerce website built using React, Node.js, and MongoDB.",
      link: "https://square-foundation-frontend.vercel.app",
      image: "/square-foundation.svg",
    },
    {
      title: "Quiz App",
      description:
        "A blog platform built using the MERN stack that allows users to create, edit, and delete posts.",
      link: "https://quiz-project-46fj.vercel.app",
      image: "/quiz-app.svg",
    },
  ];

  return (
    <section id="projects" className="py-5 px-4 text-center m-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl font-bold mb-10">My Projects</h2>
        <div className="flex max-w-[800px] gap-8 m-auto">
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
