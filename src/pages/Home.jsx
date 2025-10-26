import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import PaymentCalculator from '../components/PaymentCalculator';
import GallerySlider from '../components/GallerySlider';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <PaymentCalculator />
      <GallerySlider />
    </div>
  );
};

export default Home;
