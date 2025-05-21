"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function HeroSection() {
  const heading = "Hi, I’m Aditya Kumar";
  const title = "Full Stack Developer | Tech Enthusiast";

  return (
    <section id="home" className="py-10 px-4 bg-[url('/ba.avif')] bg-cover bg-center bg-no-repeat sm:py-16 md:pt-28 text-center">
      <div className="flex flex-col md:flex-row items-center justify-around max-w-5xl mx-auto">
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={container}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 text-black"
            variants={container}
          >
            <div className="flex flex-wrap gap-2 mt-20">
              {"Hi, I’m".split(" ").map((word, i) => (
                <motion.span key={i} variants={wordAnimation}>
                  {word}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {"Aditya Kumar".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordAnimation}
                  className="text-blue-600"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-6 flex flex-wrap gap-2 text-black"
            variants={container}
          >
            {title.split(" ").map((word, i) => (
              <motion.span key={i} variants={wordAnimation}>
                {word}
              </motion.span>
            ))}
          </motion.p>
          <div initial="hidden" animate="show" className="flex gap-2">
            <motion.a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition inline-block"
              variants={wordAnimation}
            >
              View My Work
            </motion.a>
            <motion.a
              target="_blank"
              href="/resume.pdf"
              className="bg-blue-600 text-white px-4 py-3 rounded-lg shadow hover:bg-blue-700 transition cursor-pointer"
              variants={wordAnimation}
            >
              Download Resume
            </motion.a>
          </div>
          <div className="flex space-x-8 justify-start mt-8">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 transition"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-black transition"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" "
            ></a>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/Aditya_Img.jpg"
            alt="Aditya"
            height={300}
            width={300}
            className="rounded-xl object-cover w-fit"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
