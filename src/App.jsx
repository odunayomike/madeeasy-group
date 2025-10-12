import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EstateList from './components/EstateList';
import CooperativeSection from './components/CooperativeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <EstateList />
      <CooperativeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
