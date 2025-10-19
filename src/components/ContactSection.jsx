import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { officeLocations, contactInfo } from '../data/estates';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Visit any of our offices or reach us through our contact channels.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={28} />
              </div>
              <h3>Call Us</h3>
              <div className="contact-details">
                {contactInfo.phones.map((phone, index) => (
                  <a key={index} href={`tel:${phone}`} className="contact-link">
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={28} />
              </div>
              <h3>Email Us</h3>
              <div className="contact-details">
                <a href={`mailto:${contactInfo.email}`} className="contact-link">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Globe size={28} />
              </div>
              <h3>Visit Website</h3>
              <div className="contact-details">
                <a 
                  href={`https://${contactInfo.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {contactInfo.website}
                </a>
              </div>
            </div>
          </div>

          <div className="office-locations">
            <h3 className="locations-title">
              <MapPin size={24} />
              Our Office Locations
            </h3>

            {officeLocations.map((office, index) => (
              <div key={index} className="location-card">
                <div className="location-header">
                  <span className="location-badge">{office.type}</span>
                </div>
                
                {office.address && (
                  <div className="location-details">
                    <p className="address">{office.address}</p>
                    {office.phone && (
                      <div className="location-phones">
                        {office.phone.map((phone, idx) => (
                          <a key={idx} href={`tel:${phone}`} className="phone-link">
                            📞 {phone}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {office.locations && (
                  <div className="branch-list">
                    {office.locations.map((location, idx) => (
                      <div key={idx} className="branch-item">
                        <span className="branch-marker">📍</span>
                        <p>{location}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="cta-box">
          <h3>Ready to Own Your Dream Property?</h3>
          <p>Contact us today and let's help you take the first step</p>
          <div className="cta-buttons">
            <a href={`tel:${contactInfo.phones[0]}`} className="btn-primary">
              Call Now
            </a>
            <a href={`mailto:${contactInfo.email}`} className="btn-secondary">
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;