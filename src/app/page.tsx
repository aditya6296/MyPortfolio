import HeroSection from "./components/Hero_section/HeroSection"
import Projects from "../app/components/projects_section/ProjectsSection"
import AboutMe from "../app/components/About_section/AboutMe"
import Contact from "../app/components/contact_section/Contact"
import Footer from "../app/components/Footer_section/Footer"
import Navbar from "../app/components/Nav_section/Navbar"
import Skills from "../app/components/skills_section/Skills"
export default function Home() {
  return (
   <>
   
   <Navbar />
   <main className="">
   <HeroSection />
   
   <Skills />
   <Projects />
   <AboutMe />
   <Contact />
   <Footer />
   </main>
   </>
  );
}
