// PaymentPage.jsx
import React from 'react';
import { FaCreditCard, FaShieldAlt } from 'react-icons/fa';

const PaymentPage = ({ ticket, onBack }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg relative">
        {/* Tło dla górnej części */}
        <div className="absolute inset-x-0 top-0 h-2 rounded-t-lg bg-gradient-to-r from-blue-500 to-purple-600"></div>

        {/* Tytuł i szczegóły biletu */}
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Płatność za bilet {ticket.type}</h2>
        <div className="mb-8 bg-gray-50 p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold text-gray-700">Szczegóły zamówienia</h3>
          <p className="text-2xl font-bold text-blue-700 mt-2">{ticket.price}</p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            {ticket.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        {/* Formularz płatności */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Imię i nazwisko</label>
            <input type="text" required className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" required className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
              <FaCreditCard className="text-gray-500" /> Numer karty kredytowej
            </label>
            <input type="text" required className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Data ważności</label>
              <input type="text" required className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="MM/RR" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Kod CVV</label>
              <input type="text" required className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="123" />
            </div>
          </div>
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition duration-200">
            Zapłać {ticket.price}
          </button>
        </form>

        {/* Informacje o bezpieczeństwie */}
        <div className="mt-6 flex items-center justify-center text-gray-500 text-sm">
          <FaShieldAlt className="mr-2 text-blue-500" />
          <p>Bezpieczna i szyfrowana transakcja</p>
        </div>
        
        <button onClick={onBack} className="w-full py-3 mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition duration-200">
          Wróć do biletów
        </button>
      </div>
    </section>
  );
};

export default PaymentPage;


