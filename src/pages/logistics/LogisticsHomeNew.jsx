import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Package, MapPin, Calendar, Users, Phone, Mail, Shield, Clock, CheckCircle2, Star, Award } from 'lucide-react';
import { companyInfo, services, locations } from '../../data/logistics/company';
import logo from '../../assets/images/logistics/peacelogo.png';

const LogisticsHomeNew = () => {
  const [bookingData, setBookingData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1'
  });

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuickBook = (e) => {
    e.preventDefault();
    // Navigate to booking page with pre-filled data
    window.location.href = `/logistics/booking?from=${bookingData.from}&to=${bookingData.to}&date=${bookingData.date}&passengers=${bookingData.passengers}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/logistics" className="flex items-center gap-3">
              <img src={logo} alt="Peaceful Transit Motors" className="h-16 w-16 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Peaceful Transit Motors</h1>
                <p className="text-xs text-blue-600">in God we Trust</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</a>
              <a href="#routes" className="text-gray-700 hover:text-blue-600 font-medium transition">Routes</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
              <a href={`tel:${companyInfo.phones[0]}`} className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                <Phone size={18} />
                <span>Call Us</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Booking Form */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/public/images/bus-travel.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/45 to-blue-700/35"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4 border border-white/30">
                Nigeria's Trusted Transport Partner
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                Travel Safe, Travel Peaceful
              </h1>
              <p className="text-lg text-white/90 mb-6 drop-shadow">
                Experience reliable, comfortable, and affordable transport services across Nigeria
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-400" size={20} />
                  <span className="text-white font-medium">Safe & Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-400" size={20} />
                  <span className="text-white font-medium">Affordable Rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-400" size={20} />
                  <span className="text-white font-medium">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right: Quick Booking Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your Trip</h3>
              <form onSubmit={handleQuickBook} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin size={16} className="inline mr-1" /> From
                  </label>
                  <select
                    name="from"
                    value={bookingData.from}
                    onChange={handleBookingChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  >
                    <option value="">Select departure</option>
                    {locations.map((loc, idx) => (
                      <option key={idx} value={loc.city}>{loc.city}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin size={16} className="inline mr-1" /> To
                  </label>
                  <select
                    name="to"
                    value={bookingData.to}
                    onChange={handleBookingChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  >
                    <option value="">Select destination</option>
                    {locations.map((loc, idx) => (
                      <option key={idx} value={loc.city}>{loc.city}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Calendar size={16} className="inline mr-1" /> Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={bookingData.date}
                      onChange={handleBookingChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Users size={16} className="inline mr-1" /> Passengers
                    </label>
                    <select
                      name="passengers"
                      value={bookingData.passengers}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Search Trips
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Peaceful Transit Motors?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Safe & Secure</h3>
              <p className="text-gray-600 text-sm">Well-maintained vehicles with experienced drivers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">On-Time Service</h3>
              <p className="text-gray-600 text-sm">Punctual departures and arrivals guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Affordable Rates</h3>
              <p className="text-gray-600 text-sm">Competitive pricing without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-yellow-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600 text-sm">Dedicated support team ready to assist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600">Comprehensive transport solutions for all your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {idx === 0 && <Truck className="text-blue-600" size={24} />}
                  {idx === 1 && <Package className="text-blue-600" size={24} />}
                  {idx === 2 && <MapPin className="text-blue-600" size={24} />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Routes</h2>
            <p className="text-gray-600">We cover major cities across Nigeria</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {locations.map((location, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition">
                <MapPin className="text-blue-600 mx-auto mb-3" size={32} />
                <h3 className="font-bold text-gray-900 text-lg mb-1">{location.city}</h3>
                <p className="text-sm text-gray-600">{location.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-white/90">We're here to help you with your transport needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <Phone className="mx-auto mb-4 text-white" size={32} />
              <h3 className="font-bold mb-3 text-white">Call Us</h3>
              {companyInfo.phones.map((phone, idx) => (
                <a key={idx} href={`tel:${phone}`} className="block text-white/90 hover:text-white font-medium mb-1 transition-colors">
                  {phone}
                </a>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <Mail className="mx-auto mb-4 text-white" size={32} />
              <h3 className="font-bold mb-3 text-white">Email Us</h3>
              <a href={`mailto:${companyInfo.email}`} className="text-white/90 hover:text-white font-medium transition-colors">
                {companyInfo.email}
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <MapPin className="mx-auto mb-4 text-white" size={32} />
              <h3 className="font-bold mb-3 text-white">Visit Us</h3>
              <p className="text-white/90 text-sm">Available at terminals nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link to="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            Back to Made Easy Group
          </Link>
          <p className="text-gray-400 mt-4">&copy; 2025 Peaceful Transit Motors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LogisticsHomeNew;
