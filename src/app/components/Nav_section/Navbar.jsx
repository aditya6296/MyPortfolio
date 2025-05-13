"use client";
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold text-blue-600">Aditya Kumar</div>
        <div className="text-center mt-2 "></div>
        <ul className="flex space-x-6 text-gray-700 font-lg">
          <li>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
