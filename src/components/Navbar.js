// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-20 transition duration-300 ${scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Konferencja Biznesowa</h1>
        
        {/* Przycisk menu dla urządzeń mobilnych */}
        <button 
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none text-white"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Linki menu */}
        <div className={`md:flex space-x-6 absolute md:relative top-16 md:top-auto left-0 md:left-auto w-full md:w-auto bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out transform ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 md:opacity-100"} md:transform-none md:opacity-100`}>
          <a href="#about" className="block px-4 py-2 md:px-0 md:py-0 text-white hover:text-blue-400 transition">O Konferencji</a>
          <a href="#agenda" className="block px-4 py-2 md:px-0 md:py-0 text-white hover:text-blue-400 transition">Agenda</a>
          <a href="#speakers" className="block px-4 py-2 md:px-0 md:py-0 text-white hover:text-blue-400 transition">Prelegenci</a>
          <a href="#tickets" className="block px-4 py-2 md:px-0 md:py-0 text-white hover:text-blue-400 transition">Bilety</a>
          <a href="#faq" className="block px-4 py-2 md:px-0 md:py-0 text-white hover:text-blue-400 transition">FAQ</a>
          <a href="#contact" className="block px-4 py-2 md:px-0 md:py-0 text-white hover:text-blue-400 transition">Kontakt</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
