// ContactForm.jsx
import React from 'react';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Skontaktuj się z nami</h2>
        <p className="text-lg text-gray-600 mb-12">Masz pytania? Wypełnij formularz poniżej, a odpowiemy najszybciej, jak to możliwe.</p>
        
        <form className="space-y-6">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Imię i nazwisko" 
              className="w-full pl-10 p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 outline-none"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full pl-10 p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 outline-none"
            />
          </div>
          <div className="relative">
            <FaCommentDots className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <textarea 
              placeholder="Wiadomość" 
              className="w-full pl-10 p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 outline-none" 
              rows="4"
            ></textarea>
          </div>
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-200">
            Wyślij
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
