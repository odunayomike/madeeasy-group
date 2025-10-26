import React from 'react';
import ContactSection from '../components/ContactSection';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>We're here to help you find your dream property</p>
        </div>
      </section>

      <ContactForm />
      <ContactSection />
    </div>
  );
};

export default Contact;
