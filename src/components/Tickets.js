// Tickets.jsx
import React from 'react';

const Tickets = ({ onPurchase }) => {
  const tickets = [
    { 
      type: "Standard", 
      price: "100 PLN", 
      benefits: [
        "Dostęp do wszystkich sesji", 
        "Materiały konferencyjne"
      ],
      style: "bg-white text-gray-800 border border-gray-300"
    },
    { 
      type: "VIP", 
      price: "300 PLN", 
      benefits: [
        "Dostęp do VIP lounge", 
        "Spotkanie z prelegentami",
        "Specjalne upominki"
      ],
      style: "bg-gray-800 text-white border border-gray-700"
    },
    { 
      type: "Premium", 
      price: "500 PLN", 
      benefits: [
        "Priorytetowy dostęp do wszystkich sesji", 
        "Ekskluzywny lunch z prelegentami",
        "Dostęp do strefy networkingowej Premium",
        "Pakiet upominkowy",
        "Dostęp do nagrań z konferencji"
      ],
      style: "bg-blue-900 text-white border border-blue-800"
    }
  ];

  return (
    <section id="tickets" className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">Bilety</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {tickets.map((ticket, index) => (
            <div 
              key={index} 
              className={`${ticket.style} flex-1 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">{ticket.type}</h3>
                <p className="text-3xl font-bold mb-6">{ticket.price}</p>
                <ul className="mb-8 space-y-2 text-left">
                  {ticket.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => onPurchase(ticket)}
                className="px-6 py-3 w-full bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded transition-all duration-200 mt-auto"
              >
                Kup teraz
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tickets;


