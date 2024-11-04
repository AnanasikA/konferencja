// FAQ.jsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    { question: "Gdzie odbywa się konferencja?", answer: "Konferencja odbędzie się w prestiżowym centrum biznesowym w [lokalizacja]." },
    { question: "Czy istnieje możliwość rejestracji grupowej?", answer: "Tak, oferujemy zniżki dla grup. Prosimy o kontakt w celu uzyskania szczegółów." },
    { question: "Czy można uzyskać zwrot biletu?", answer: "Zwroty biletów są możliwe do 14 dni przed wydarzeniem. Skontaktuj się z nami, aby uzyskać więcej informacji." },
    { question: "Czy będą dostępne nagrania z konferencji?", answer: "Tak, nagrania będą dostępne dla uczestników z biletami VIP i Premium." }
  ];

  return (
    <section id="faq" className="py-12 bg-gray-50" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Najczęściej Zadawane Pytania</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-lg font-semibold ${activeIndex === index ? 'text-blue-600' : 'text-gray-800'}`}>
                  {faq.question}
                </h3>
                <span className="text-blue-600">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 mt-4 transition-opacity duration-300 opacity-90">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

