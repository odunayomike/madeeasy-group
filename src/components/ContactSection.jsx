import React from 'react';
import { officeLocations, contactInfo } from '../data/estates';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container">

        <div className="contact-content">
          

          <div className="office-locations">
            <h3 className="locations-title">
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
                            {phone}
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