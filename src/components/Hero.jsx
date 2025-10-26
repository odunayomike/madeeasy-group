import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: 'Your Dream Home Starts Here',
      subtitle: 'Premium gated and fenced estates across Lagos with flexible payment plans.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80',
      badge: '10TH YEAR ANNIVERSARY - MEGA PROMO'
    },
    {
      id: 2,
      title: 'Strategic Locations Across Lagos',
      subtitle: 'Properties in fast-developing areas with proximity to major expressways and amenities.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
      badge: 'UP TO 20% DISCOUNT'
    },
    {
      id: 3,
      title: 'Flexible Payment Plans',
      subtitle: 'Make property ownership accessible with our 12 and 24-month payment options.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
      badge: '24 MONTHS PAYMENT'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    arrows: true
  };

  return (
    <section id="home" className="hero">
      <Slider {...settings} className="hero-slider">
        {slides.map((slide) => (
          <div key={slide.id}>
            <div className="hero-slide">
              <div className="hero-image-overlay" style={{ backgroundImage: `url(${slide.image})` }}>
                <div className="hero-overlay"></div>
              </div>
              <div className="hero-container">
                <div className="hero-content">
                  <div className="hero-badge">
                    {slide.badge}
                  </div>

                  <h1 className="hero-title">
                    {slide.title}
                  </h1>

                  <p className="hero-subtitle">
                    {slide.subtitle}
                  </p>

                  <div className="hero-features">
                    <div className="hero-feature">10 Premium Estates</div>
                    <div className="hero-feature-divider">•</div>
                    <div className="hero-feature">Strategic Locations</div>
                    <div className="hero-feature-divider">•</div>
                    <div className="hero-feature">Up to 20% Discount</div>
                  </div>

                  <div className="hero-cta">
                    <Link to="/estates" className="btn-primary">Explore Estates</Link>
                    <Link to="/contact" className="btn-secondary">Contact Us</Link>
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
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;