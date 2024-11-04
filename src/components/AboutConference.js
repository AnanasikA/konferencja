// AboutConference.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import networkingIcon from '../images/networking.png';
import workshopIcon from '../images/workshop.png';
import speechIcon from '../images/speech.png';

const AboutConference = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const points = [
    { icon: networkingIcon, text: "Networking na najwyższym poziomie" },
    { icon: workshopIcon, text: "Praktyczne warsztaty z liderami branży" },
    { icon: speechIcon, text: "Inspirujące wystąpienia specjalistów" },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 py-16" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center px-4 lg:px-0">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">O Konferencji Biznesowej</h2>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          "Global Business Innovation Summit" to wyjątkowe wydarzenie, które łączy profesjonalistów z różnych branż
          biznesowych, oferując unikalną okazję do rozwoju zawodowego i poszerzenia sieci kontaktów. Podczas trzech
          dni intensywnych prelekcji, warsztatów i sesji networkingowych uczestnicy będą mogli zdobyć nowe
          umiejętności oraz wymieniać doświadczenia z ekspertami branżowymi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={point.icon} alt="" className="w-20 h-20 mb-4" />
              <p className="text-xl font-semibold text-gray-800">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutConference;


