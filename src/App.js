// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutConference from './components/AboutConference';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PaymentPage from './components/PaymentPage';

const App = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handlePurchase = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleBackToTickets = () => {
    setSelectedTicket(null);
  };

  return (
    <div>
      {selectedTicket ? (
        <PaymentPage ticket={selectedTicket} onBack={handleBackToTickets} />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <AboutConference />
          <Agenda />
          <Speakers />
          <Tickets onPurchase={handlePurchase} />
          <FAQ />
          <ContactForm />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;

