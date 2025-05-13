"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Thank you for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <section
      id="contact"
      className=" sm:py-16 md:py-20 px-4 bg-gray-100 text-center"
    >
      <motion.section
        id="contact"
        className="py-10 bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <motion.h2
            className="text-3xl font-bold md:mb-8 text-black"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Contact Me
          </motion.h2>
          <p className="text-xl text-gray-600 mb-6">
            Feel free to reach out to me!
          </p>
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl px-5 sm:px-20 md:px-20 py-8 bg-gray-200 m-auto text-black"
            >
              <motion.div
                className="flex flex-col"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <label
                  htmlFor="name"
                  className="text-lg font-semibold text-start"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="border border-gray-300 rounded-lg p-3  px-4 bg-[rgba(248,250,252,1)]"
                  required
                />
              </motion.div>

              <motion.div
                className="flex flex-col"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label
                  htmlFor="email"
                  className="text-lg font-semibold text-start"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-lg p-3 px-4 bg-[rgba(248,250,252,1)] text-black"
                  required
                />
              </motion.div>

              <motion.div
                className="flex flex-col"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className="text-lg font-semibold text-start"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type here your message"
                  className="border border-gray-300 rounded-lg p-3  px-4 bg-[rgba(248,250,252,1)]"
                  rows="4"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Send Message
              </motion.button>
            </form>
            {formStatus && <p className="mt-4 text-green-600">{formStatus}</p>}
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
}
