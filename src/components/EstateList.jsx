import React, { useState } from 'react';
import EstateCard from './EstateCard';
import { estates } from '../data/estates';
import './EstateList.css';

const EstateList = () => {
  const [filter, setFilter] = useState('all');

  const filteredEstates = estates.filter(estate => {
    if (filter === 'all') return true;
    if (filter === 'discount') return estate.discount !== null;
    if (filter === 'low-price') {
      const price = parseInt(estate.fullPlot.outright.replace(/[₦,]/g, ''));
      return price < 5000000;
    }
    if (filter === 'high-price') {
      const price = parseInt(estate.fullPlot.outright.replace(/[₦,]/g, ''));
      return price >= 5000000;
    }
    return true;
  });

  return (
    <section id="estates" className="estates-section section">
      <div className="estates-container">
        <div className="estates-header">
          <div>
            <h2 className="section-title">Our Premium Estates</h2>
            <p className="section-subtitle">
              Explore our collection of {estates.length} gated and fenced estates across Lagos
            </p>
          </div>

          <div className="filter-container">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Estates</option>
              <option value="discount">With Discount</option>
              <option value="low-price">Under ₦5M</option>
              <option value="high-price">₦5M and Above</option>
            </select>
          </div>
        </div>

        <div className="estates-count">
          Showing {filteredEstates.length} of {estates.length} estate{estates.length !== 1 ? 's' : ''}
        </div>

        <div className="estates-grid">
          {filteredEstates.map((estate) => (
            <EstateCard key={estate.id} estate={estate} />
          ))}
        </div>

        {filteredEstates.length === 0 && (
          <div className="no-results">
            <p>No estates found matching your filter criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EstateList;