"use client";
import { motion } from "framer-motion";
export default function AboutMe() {
  return (
    <section id="about" className="py-4 px-4 bg-gray-100 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div className="max-w-5xl mx-auto px-6 py-6 text-center ">
          <h2 className="text-4xl font-bold pb-2">About Me</h2>
          <p className="text-xl text-gray-800 leading-9 relative before:content-['“'] after:content-['”'] before:text-5xl after:text-5xl before:absolute after:absolute before:-left-6 after:-right-6">
            I'm{" "}
            <span className="font-semibold text-blue-600">Aditya Kumar</span>, a
            dedicated <span className="font-medium">Full Stack Developer</span>{" "}
            passionate about building fast, user-friendly, and scalable web
            applications. I work primarily with{" "}
            <span className="font-semibold text-green-700"> MongoDB</span>,
            <span className="font-semibold text-gray-600"> Express Js</span>,
            <span className="font-semibold text-blue-500">React Js</span>, and
            <span className="font-semibold text-green-600"> Node Js</span>.
          </p>

          <p className="mt-6 text-xl text-gray-800 leading-9 relative before:content-['“'] after:content-['”'] before:text-5xl after:text-5xl before:absolute after:absolute before:-left-6 after:-right-6">
            I love designing smooth user interfaces and solving backend
            challenges. With experience in{" "}
            <span className="font-semibold text-yellow-500">JavaScript</span>,
            <span className="font-semibold text-blue-500"> React Js</span>, and
            <span className="font-semibold text-indigo-500"> Git</span>, I focus
            on writing clean, maintainable code that scales.
          </p>

          <p className="mt-6 text-xl text-gray-800 leading-9 relative before:content-['“'] after:content-['”'] before:text-5xl after:text-5xl before:absolute after:absolute before:-left-6 after:-right-6">
            My approach is simple:{" "}
            <span className="italic text-gray-700">
              listen, design, build, refine.
            </span>
            I aim to turn ideas into high-performing digital products with
            thoughtful UX and solid architecture.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
