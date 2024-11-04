// HeroSection.jsx
import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1552960504-34e1e1be3f53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Gradient nakładki */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Treść Hero */}
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Global Business Innovation Summit</h1>
        <p className="text-lg md:text-xl mb-6 opacity-90">Warsaw International Expo Center | 14–16 marca 2024</p>
        <p className="text-md md:text-lg mb-8 opacity-80">
          Dołącz do liderów biznesu z całego świata, aby poznać innowacyjne strategie, uczestniczyć w panelach
          dyskusyjnych i zdobyć nowe kontakty w branży.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#tickets" className="px-6 md:px-8 py-3 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            Kup Bilet
          </a>
          <a href="#agenda" className="px-6 md:px-8 py-3 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-blue-800 transition duration-300 shadow-lg">
            Zobacz Agendę
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;



