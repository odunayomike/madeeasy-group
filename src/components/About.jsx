import React from 'react';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <Shield size={40} />,
      title: "100% Secured",
      description: "All our estates are properly gated and fenced with government approval and documentation"
    },
    {
      icon: <Award size={40} />,
      title: "10 Years Excellence",
      description: "A decade of proven experience in real estate and property development across Lagos"
    },
    {
      icon: <Users size={40} />,
      title: "Customer Focused",
      description: "Dedicated to making property ownership easy, accessible and stress-free for everyone"
    },
    {
      icon: <TrendingUp size={40} />,
      title: "High ROI Locations",
      description: "Strategic locations with high potential for value appreciation and development"
    }
  ];

  return (
    <section className="about section">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">Why Choose Made Easy Homes</h2>
          <p className="section-subtitle">
            Your trusted partner in affordable and secured property ownership across Lagos
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card fade-in">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>About Made Easy Homes & Properties</h3>
            <p>
              Made Easy Homes & Properties is a leading real estate company with over 10 years 
              of experience in providing affordable and quality land and property solutions across Lagos State. 
              We specialize in developing gated and fenced estates in strategic locations with 
              flexible payment plans that make property ownership accessible to everyone.
            </p>
            <p>
              Our estates are strategically located in fast-developing areas with proximity to major expressways, 
              tertiary institutions, industrial zones, and essential amenities. We pride ourselves 
              on transparency, reliability, and excellent customer service.
            </p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <h4>🎯 Our Mission</h4>
              <p>To make property ownership easy and accessible for everyone through transparent processes.</p>
            </div>
            <div className="highlight-item">
              <h4>👁️ Our Vision</h4>
              <p>To be the most trusted real estate company in Nigeria, known for quality developments.</p>
            </div>
            <div className="highlight-item">
              <h4>💎 Our Values</h4>
              <p>Integrity, Transparency, Excellence, Customer Satisfaction, and Trust.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;