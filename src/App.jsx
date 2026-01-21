import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/landing/LandingPage';
import HomesLayout from './pages/homes/HomesLayout';
import LogisticsHomeNew from './pages/logistics/LogisticsHomeNew';
import BookingPage from './pages/logistics/BookingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing Page - No Navbar/Footer */}
          <Route path="/" element={<LandingPage />} />

          {/* Logistics Website - No Navbar/Footer (has its own) */}
          <Route path="/logistics" element={<LogisticsHomeNew />} />
          <Route path="/logistics/booking" element={<BookingPage />} />

          {/* Homes & Properties Website - With Navbar/Footer */}
          <Route path="/homes/*" element={
            <>
              <Navbar />
              <HomesLayout />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
