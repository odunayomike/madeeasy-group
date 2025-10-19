import React from 'react';
import { Users, TrendingUp, Clock, Shield, Gift } from 'lucide-react';
import './CooperativeSection.css';

const CooperativeSection = () => {
  const benefits = [
    {
      icon: <TrendingUp size={32} />,
      title: "High Dividend",
      description: "Earn attractive returns on your investment"
    },
    {
      icon: <Clock size={32} />,
      title: "Quick & Easy Loan",
      description: "Access loans with minimal documentation"
    },
    {
      icon: <Shield size={32} />,
      title: "Low Interest Rate",
      description: "Competitive rates for all members"
    },
    {
      icon: <Gift size={32} />,
      title: "No Collateral",
      description: "Loans available without collateral requirements"
    }
  ];

  return (
    <section id="cooperative" className="cooperative-section section">
      <div className="container">
        <div className="cooperative-header">
          <Users size={48} className="header-icon" />
          <h2 className="section-title">Made Easy Cooperative Multipurpose Society</h2>
          <p className="section-subtitle">
            Join our cooperative today and enjoy exclusive benefits
          </p>
        </div>

        <div className="cooperative-content">
          <div className="cooperative-info">
            <div className="info-card">
              <h3>About Our Cooperative</h3>
              <p>
                Made Easy Cooperative is well registered and licensed by the Lagos State Cooperative 
                Society to carry out Cooperative businesses or transactions.
              </p>
            </div>

            <div className="registration-info">
              <h4>Bank Details</h4>
              <div className="bank-details">
                <div className="bank-item">
                  <span className="bank-label">Bank:</span>
                  <span className="bank-value">MADE EASY FUND LIMITED</span>
                </div>
                <div className="bank-item">
                  <span className="bank-label">UBA:</span>
                  <span className="bank-value">1018742216</span>
                </div>
                <div className="bank-item">
                  <span className="bank-label">FIDELITY:</span>
                  <span className="bank-value">5600175180</span>
                </div>
              </div>
            </div>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="promo-section">
          <div className="promo-badge">
            <span className="promo-icon">🎁</span>
            <span>10th Year Anniversary Mega Promo</span>
          </div>
          <h3>Buy a Plot Today & Made Easy Home Will Do Your Shopping!</h3>
          <div className="promo-details">
            <div className="promo-item">
              <div className="promo-icon-large">🛍️</div>
              <div>
                <h4>Payment: 500K - 900K</h4>
                <p className="promo-reward">Get Half Bag of Rice</p>
              </div>
            </div>
            <div className="promo-divider">OR</div>
            <div className="promo-item">
              <div className="promo-icon-large">🎉</div>
              <div>
                <h4>Payment: 1M & Above</h4>
                <p className="promo-reward">Get 1 Bag of Rice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooperativeSection;