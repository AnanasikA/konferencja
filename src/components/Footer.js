// Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Informacje o konferencji */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Global Business Innovation Summit</h2>
            <p className="text-gray-400">14–16 marca 2024, Warsaw International Expo Center</p>
            <p className="text-gray-400 mt-2">&copy; 2024 WebCraft Studio. Wszelkie prawa zastrzeżone.</p>
          </div>

          {/* Szybkie linki */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Szybkie Linki</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition">O Konferencji</a></li>
              <li><a href="#agenda" className="text-gray-400 hover:text-white transition">Agenda</a></li>
              <li><a href="#tickets" className="text-gray-400 hover:text-white transition">Bilety</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Kontakt</a></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Kontakt</h3>
            <p className="text-gray-400">Email: kontakt@konferencja.pl</p>
            <p className="text-gray-400">Telefon: +48 123 456 789</p>
          </div>

          {/* Media społecznościowe */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Śledź nas</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><FaLinkedinIn /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500">
          <p>Organizatorzy: Global Business Events Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

