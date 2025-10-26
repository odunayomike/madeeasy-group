import React from 'react';
import { Link } from 'react-router-dom';
import './EstateCard.css';

const EstateCard = ({ estate }) => {
  return (
    <div className="estate-card">
      {estate.discount && (
        <div className="discount-badge">
          {estate.discount} OFF
        </div>
      )}

      <div className="estate-header">
        <h3 className="estate-name">{estate.name}</h3>
        {estate.subheading && (
          <p className="estate-subheading">{estate.subheading}</p>
        )}
      </div>

      <div className="estate-location">
        {estate.location}
      </div>

      <p className="estate-description">{estate.description}</p>

      <div className="estate-features">
        {estate.features.map((feature, index) => (
          <div key={index} className="feature-tag">
            {feature}
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

      <Link to="/contact" className="estate-cta">Contact Us</Link>
    </div>
  );
};

export default EstateCard;