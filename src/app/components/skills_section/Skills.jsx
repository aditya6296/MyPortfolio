"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaServer,
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-400 w-full h-22 text-center" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-600 w-full h-22 text-center" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400 w-full h-22 text-center" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-blue-400 w-full h-22 text-center" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-400 w-full h-22 text-center" />,
    },
    {
      name: "Express.js",
      icon: <FaServer className="text-gray-400 w-full h-22 text-center" />,
    },
    {
      name: "MongoDB",
      icon: <FaDatabase className="text-green-600 w-full h-22 text-center" />,
    },
    {
      name: "Next.js",
      icon: (
        <Image
          src="/Next.js.svg"
          alt="Next.js"
          width={90}
          height={90}
          className="mx-auto"
        />
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <Image
          src="/Tailwind CSS.svg"
          alt="Next.js"
          width={90}
          height={90}
          className="mx-auto"
        />
      ),
    },
  ];

  // T
  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-black">Skills</h2>
      {/* <div className="flex gap-20 m-auto justify-around px-8"> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8 px-8 max-w-5xl mx-auto text-black">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
          >
            <div className="">{skill.icon}</div>
            <p className="mt-2 text-[24px]">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
