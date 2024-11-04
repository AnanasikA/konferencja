// Speakers.jsx
import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Speakers = () => {
  const mainSpeakers = [
    { 
      name: "Dr. Katarzyna Białek", 
      title: "Główna Prelegentka, Ekspert ds. AI", 
      image: "https://images.pexels.com/photos/7680209/pexels-photo-7680209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Znana specjalistka w dziedzinie sztucznej inteligencji, prowadząca badania nad wpływem AI na przedsiębiorstwa.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    { 
      name: "Tomasz Zieliński", 
      title: "Główny Moderator, CEO Innowacje Biznesowe", 
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Wiodący innowator w dziedzinie nowych technologii i transformacji cyfrowej z ponad 15-letnim doświadczeniem.",
      social: {
        linkedin: "https://linkedin.com",
      }
    },
    { 
      name: "Anna Wiśniewska", 
      title: "Główna Konsultantka, Specjalistka ds. Strategii Biznesowej", 
      image: "https://images.pexels.com/photos/8528852/pexels-photo-8528852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Ekspertka od rozwoju strategii biznesowych, wspierająca firmy w ich ekspansji międzynarodowej.",
      social: {
        linkedin: "https://linkedin.com",
        facebook: "https://facebook.com"
      }
    },
  ];

  const otherSpeakers = [
    { 
      name: "Jan Kowalski", 
      title: "CEO XYZ Sp. z o.o.", 
      image: "https://images.pexels.com/photos/9034254/pexels-photo-9034254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Ekspert w zarządzaniu, specjalizujący się w strategiach rozwoju dla średnich i dużych firm.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        facebook: "https://facebook.com"
      }
    },
    { 
      name: "Ewa Wiśniewska", 
      title: "Dyrektor Finansowy ABC Corp.", 
      image: "https://images.pexels.com/photos/10041273/pexels-photo-10041273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Doświadczona dyrektor finansowy z szeroką wiedzą na temat zarządzania ryzykiem i optymalizacji kosztów.",
      social: {
        linkedin: "https://linkedin.com",
      }
    },
    { 
      name: "Marek Nowak", 
      title: "Kierownik ds. Innowacji, FutureTech", 
      image: "https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Specjalista w zakresie innowacyjnych rozwiązań technologicznych. Prowadzi projekty wdrożeniowe w sektorze przemysłowym.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
  ];

  return (
    <section id="speakers" className="py-16 bg-gray-100" data-aos="fade-in">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">Prelegenci</h2>
        
        <h3 className="text-3xl font-semibold text-gray-700 mb-6">Prowadzący Konferencję</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mainSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <img src={speaker.image} alt={speaker.name} className="rounded-full w-36 h-36 object-cover mx-auto mb-6 border-4 border-blue-500 shadow-md"/>
              <h3 className="text-2xl font-semibold text-gray-800">{speaker.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{speaker.title}</p>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{speaker.bio}</p>
              <div className="flex justify-center space-x-4 text-gray-500 mt-4">
                {speaker.social.linkedin && (
                  <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                    <FaLinkedin size={24} />
                  </a>
                )}
                {speaker.social.twitter && (
                  <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    <FaTwitter size={24} />
                  </a>
                )}
                {speaker.social.facebook && (
                  <a href={speaker.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    <FaFacebook size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-semibold text-gray-700 mb-6">Pozostali Prelegenci</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <img src={speaker.image} alt={speaker.name} className="rounded-full w-28 h-28 object-cover mx-auto mb-4 border-4 border-gray-300 shadow-md"/>
              <h3 className="text-xl font-semibold text-gray-800">{speaker.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{speaker.title}</p>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{speaker.bio}</p>
              <div className="flex justify-center space-x-4 text-gray-500 mt-4">
                {speaker.social.linkedin && (
                  <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                    <FaLinkedin size={24} />
                  </a>
                )}
                {speaker.social.twitter && (
                  <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    <FaTwitter size={24} />
                  </a>
                )}
                {speaker.social.facebook && (
                  <a href={speaker.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    <FaFacebook size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;



