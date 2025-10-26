import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const values = [
    {
      number: '01',
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and ethical conduct in all our dealings.'
    },
    {
      number: '02',
      title: 'Transparency',
      description: 'Clear, open communication with our clients about pricing, processes, and property details.'
    },
    {
      number: '03',
      title: 'Excellence',
      description: 'Commitment to delivering superior quality in every aspect of our service.'
    },
    {
      number: '04',
      title: 'Customer Focus',
      description: 'Putting our clients first and ensuring their satisfaction is our top priority.'
    }
  ];

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About Made Easy Homes & Properties</h1>
          <p>A Decade of Excellence in Real Estate</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="content-container">
          <div className="overview-grid">
            <div className="overview-text">
              <h2>Who We Are</h2>
              <p>
                Made Easy Homes & Properties is a leading real estate company in Lagos State, Nigeria,
                with over 10 years of experience in providing affordable and quality land and property solutions.
                We specialize in developing gated and fenced estates in strategic locations with flexible
                payment plans that make property ownership accessible to everyone.
              </p>
              <p>
                Our commitment to excellence, transparency, and customer satisfaction has made us one of the
                most trusted names in the Nigerian real estate sector. We pride ourselves on delivering properties
                that meet the highest standards of quality and value.
              </p>
            </div>
            <div className="overview-stats">
              <div className="stat-box">
                <h3>10+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className="stat-box">
                <h3>1000+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-box">
                <h3>10+</h3>
                <p>Estate Locations</p>
              </div>
              <div className="stat-box">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="content-container">
          <div className="mv-grid">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>
                To make property ownership easy and accessible for everyone through transparent processes,
                flexible payment plans, and exceptional customer service. We are committed to providing
                quality properties that meet the needs of individuals and families across Lagos State.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and preferred real estate company in Nigeria, known for quality
                developments, innovative solutions, and outstanding customer satisfaction. We envision
                a future where property ownership is within reach for every Nigerian family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="content-container">
          <h2 className="section-heading">Our Core Values</h2>
          <p className="section-subheading">
            The principles that guide everything we do
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-number">{value.number}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="content-container">
          <h2 className="section-heading">Why Choose Made Easy?</h2>
          <div className="why-grid">
            <div className="why-item">
              <h4>Government Approved</h4>
              <p>All our estates have proper government approval and documentation</p>
            </div>
            <div className="why-item">
              <h4>Flexible Payment</h4>
              <p>Choose from outright payment or 12/24 months installment plans</p>
            </div>
            <div className="why-item">
              <h4>Strategic Locations</h4>
              <p>Properties in fast-developing areas with high ROI potential</p>
            </div>
            <div className="why-item">
              <h4>Gated & Fenced</h4>
              <p>100% of our estates are properly gated and fenced for security</p>
            </div>
            <div className="why-item">
              <h4>Professional Service</h4>
              <p>Dedicated team providing exceptional customer support</p>
            </div>
            <div className="why-item">
              <h4>After-Sales Support</h4>
              <p>Continued support even after your purchase is complete</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
