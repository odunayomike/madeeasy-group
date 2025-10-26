import React from 'react';
import './CooperativeSection.css';

const CooperativeSection = () => {
  const benefits = [
    {
      title: "High Dividend",
      description: "Earn attractive returns on your investment"
    },
    {
      title: "Quick & Easy Loan",
      description: "Access loans with minimal documentation"
    },
    {
      title: "Low Interest Rate",
      description: "Competitive rates for all members"
    },
    {
      title: "No Collateral",
      description: "Loans available without collateral requirements"
    }
  ];

  return (
    <section id="cooperative" className="cooperative-section section">
      <div className="cooperative-container">
        <div className="cooperative-header">
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
                  <span className="bank-label">Bank</span>
                  <span className="bank-value">MADE EASY FUND LIMITED</span>
                </div>
                <div className="bank-item">
                  <span className="bank-label">UBA</span>
                  <span className="bank-value">1018742216</span>
                </div>
                <div className="bank-item">
                  <span className="bank-label">FIDELITY</span>
                  <span className="bank-value">5600175180</span>
                </div>
              </div>
            </div>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="promo-section">
          <div className="promo-badge">
            10TH YEAR ANNIVERSARY MEGA PROMO
          </div>
          <h3>Buy a Plot Today & Made Easy Home Will Do Your Shopping!</h3>
          <div className="promo-details">
            <div className="promo-item">
              <div>
                <h4>Payment: 500K - 900K</h4>
                <p className="promo-reward">Get Half Bag of Rice</p>
              </div>
            </div>
            <div className="promo-divider">OR</div>
            <div className="promo-item">
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