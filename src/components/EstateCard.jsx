import React from 'react';
import { MapPin, CheckCircle, Tag } from 'lucide-react';
import './EstateCard.css';

const EstateCard = ({ estate }) => {
  return (
    <div className="estate-card">
      {estate.discount && (
        <div className="discount-badge">
          <Tag size={16} />
          <span>{estate.discount} OFF</span>
        </div>
      )}

      <div className="estate-header">
        <h3 className="estate-name">{estate.name}</h3>
        {estate.subheading && (
          <p className="estate-subheading">{estate.subheading}</p>
        )}
      </div>

      <div className="estate-location">
        <MapPin size={18} />
        <span>{estate.location}</span>
      </div>

      <p className="estate-description">{estate.description}</p>

      <div className="estate-features">
        {estate.features.map((feature, index) => (
          <div key={index} className="feature-tag">
            <CheckCircle size={14} />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="estate-pricing">
        <div className="pricing-section">
          <h4>Full Plot</h4>
          <div className="price-options">
            <div className="price-item">
              <span className="price-label">Outright</span>
              <span className="price-value">{estate.fullPlot.outright}</span>
            </div>
            <div className="price-item">
              <span className="price-label">12 Months</span>
              <span className="price-value">{estate.fullPlot.months12}</span>
            </div>
            <div className="price-item">
              <span className="price-label">24 Months</span>
              <span className="price-value">{estate.fullPlot.months24}</span>
            </div>
          </div>
        </div>

        <div className="pricing-section">
          <h4>Half Plot</h4>
          <div className="price-options">
            <div className="price-item">
              <span className="price-label">Outright</span>
              <span className="price-value">{estate.halfPlot.outright}</span>
            </div>
            <div className="price-item">
              <span className="price-label">12 Months</span>
              <span className="price-value">{estate.halfPlot.months12}</span>
            </div>
            <div className="price-item">
              <span className="price-label">24 Months</span>
              <span className="price-value">{estate.halfPlot.months24}</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#contact" className="estate-cta">Contact Us</a>
    </div>
  );
};

export default EstateCard;