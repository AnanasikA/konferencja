// Agenda.jsx
import React, { useState } from 'react';

const Agenda = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const agendaItems = [
    { 
      time: "10:00 - 10:30", 
      title: "Otwarcie Konferencji", 
      duration: "30 min",
      speaker: "Anna Nowak, CEO Biznes Polska",
      details: "Oficjalne powitanie uczestników i prelegentów oraz przedstawienie programu konferencji."
    },
    { 
      time: "11:00 - 12:00", 
      title: "Panel Dyskusyjny: Nowe Wyzwania w Biznesie", 
      duration: "1 godzina",
      speaker: "Panel dyskusyjny: Jan Kowalski, Ewa Wiśniewska, Tomasz Zieliński",
      details: "Eksperci z różnych sektorów omawiają współczesne wyzwania i strategie, jakie przedsiębiorstwa stosują, by sobie z nimi radzić."
    },
    {
      time: "12:30 - 13:30",
      title: "Warsztat: Digitalizacja w Biznesie",
      duration: "1 godzina",
      speaker: "Marta Kaczmarek, Specjalista IT",
      details: "Warsztat praktyczny na temat wprowadzania cyfrowych narzędzi w firmach, w tym przykłady efektywnej automatyzacji procesów."
    },
    {
      time: "14:00 - 15:00",
      title: "Sesja Networkingowa",
      duration: "1 godzina",
      speaker: "Moderowana przez Adam Nowicki",
      details: "Uczestnicy mają okazję spotkać się osobiście, wymienić kontakty i podyskutować o potencjalnych współpracach."
    },
    {
      time: "15:30 - 16:30",
      title: "Prelekcja: Przyszłość AI w Biznesie",
      duration: "1 godzina",
      speaker: "Dr. Katarzyna Białek, Ekspert ds. AI",
      details: "Wykład na temat wpływu sztucznej inteligencji na różne sektory oraz przyszłych zastosowań AI w zarządzaniu przedsiębiorstwami."
    },
    // Dodaj więcej elementów agendy, jeśli potrzeba
  ];

  return (
    <section id="agenda" className="py-12 bg-gray-50" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Agenda Konferencji</h2>
        <ul className="divide-y divide-gray-300">
          {agendaItems.map((item, index) => (
            <li key={index} className="py-6 cursor-pointer" onClick={() => toggleItem(index)}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center text-gray-700">
                <div className="mb-2 md:mb-0">
                  <span className="block text-lg md:text-xl font-semibold">{item.time}</span>
                  <span className="block text-md md:text-lg font-bold text-blue-800">{item.title}</span>
                </div>
                <span className="text-gray-500 text-sm md:text-base md:text-right">{item.duration}</span>
              </div>
              {activeIndex === index && (
                <div className="mt-4 p-4 bg-white rounded-lg shadow-lg text-left text-gray-700">
                  <p className="text-sm md:text-md font-medium text-gray-600">Prowadzący: {item.speaker}</p>
                  <p className="mt-2 text-sm md:text-base">{item.details}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Agenda;



