import React from 'react';
import { MapPin, CheckCircle, TrendingUp } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🏆</span>
            <span>10th Year Anniversary - Mega Promo</span>
          </div>
          
          <h1 className="hero-title">
            Your Dream Home Starts Here
          </h1>
          
          <p className="hero-subtitle">
            Premium gated and fenced estates across Lagos with flexible payment plans. 
            Make your property ownership dreams a reality with Made Easy Homes.
          </p>

          <div className="hero-features">
            <div className="hero-feature">
              <CheckCircle className="feature-icon" />
              <span>10 Premium Estates</span>
            </div>
            <div className="hero-feature">
              <MapPin className="feature-icon" />
              <span>Strategic Locations</span>
            </div>
            <div className="hero-feature">
              <TrendingUp className="feature-icon" />
              <span>Up to 20% Discount</span>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#estates" className="btn-primary">Explore Estates</a>
            <a href="#contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <h3>10+</h3>
            <p>Estate Listings</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Gated & Fenced</p>
          </div>
          <div className="stat-card">
            <h3>24</h3>
            <p>Months Payment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;