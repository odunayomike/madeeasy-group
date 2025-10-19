import React from 'react';
import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { contactInfo } from '../data/estates';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <Building2 size={32} />
              <div>
                <h3>Made Easy</h3>
                <p>Homes & Properties</p>
              </div>
            </div>
            <p className="footer-description">
              Your trusted partner in affordable and secured property ownership. 
              Making your dream home a reality for over 10 years.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#estates">Our Estates</a></li>
              <li><a href="#cooperative">Cooperative</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li>Land Sales</li>
              <li>Property Development</li>
              <li>Real Estate Brokerage</li>
              <li>Cooperative Society</li>
              <li>Property Consultation</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={18} />
                <div>
                  {contactInfo.phones.slice(0, 2).map((phone, index) => (
                    <a key={index} href={`tel:${phone}`}>{phone}</a>
                  ))}
                </div>
              </li>
              <li>
                <Mail size={18} />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <MapPin size={18} />
                <span>Suite 1621, 1st Floor Yemosa Plaza, Egbeda, Lagos</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Made Easy Homes & Properties. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;