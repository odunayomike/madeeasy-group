import React from 'react';
import EstateList from '../components/EstateList';
import './Estates.css';

const Estates = () => {
  return (
    <div className="estates-page">
      {/* Hero Section */}
      <section className="estates-hero">
        <div className="estates-hero-overlay"></div>
        <div className="estates-hero-content">
          <h1>Our Premium Estates</h1>
          <p>Explore gated and fenced properties across Lagos with flexible payment plans</p>
        </div>
      </section>

      <EstateList />
    </div>
  );
};

export default Estates;
