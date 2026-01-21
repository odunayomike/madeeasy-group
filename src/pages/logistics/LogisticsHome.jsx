import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Package, Car, Shield, DollarSign, Zap, Lock, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { companyInfo, services, locations, highlights } from '../../data/logistics/company';
import logo from '../../assets/images/logistics/peacelogo.png';

const LogisticsHome = () => {
  const iconMap = {
    Shield,
    DollarSign,
    Zap,
    Lock,
    Car,
    Package,
    Truck
  };

  const serviceImages = [
    '/images/delivery-van.jpg',
    '/images/packages.jpg',
    '/images/freight.jpg'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Peaceful Transit Motors Logo" className="h-14 w-14 object-contain" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">Peaceful Transit Motors</span>
              <span className="text-xs text-blue-600 font-medium">Reliable Transport Services</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
            <Link to="/logistics/booking" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Book Now</Link>
            <a href={`tel:${companyInfo.phones[0]}`} className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white py-24 px-4 overflow-hidden mt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/truck-logistics.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/40 to-blue-600/45"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-lg px-6 py-2 rounded-full border border-white/30 mb-6">
            <span className="text-sm font-medium">Reliable Transport Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Peaceful Transit Motors
          </h1>

          <p className="text-2xl md:text-3xl font-medium mb-4 opacity-95">
            {companyInfo.tagline}
          </p>

          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            {companyInfo.description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/logistics/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-xl"
            >
              <Package size={20} /> Book Now
            </Link>
            <a
              href={`tel:${companyInfo.phones[0]}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-lg text-white font-bold rounded-lg border-2 border-white hover:bg-white/30 transition-all hover:-translate-y-1"
            >
              <Phone size={20} /> Contact Us
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-lg text-white font-bold rounded-lg border-2 border-white hover:bg-white/30 transition-all hover:-translate-y-1"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Section with Icons */}
      <section className="py-16 px-4 bg-white -mt-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = iconMap[highlight.icon];
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-2xl text-center hover:-translate-y-2 transition-all group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {IconComponent && <IconComponent size={28} className="text-white" />}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section with Real Images */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive transport and logistics solutions tailored to your needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all group">
                  {/* Real Image Header */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={serviceImages[index]}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-blue-900/70"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        {IconComponent && <IconComponent size={32} className="text-blue-900" />}
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle2 size={18} className="text-blue-600 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas with Visual Map */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Service Areas
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            We provide reliable transport services across major Nigerian cities
          </p>

          {/* Visual Map with Background Image */}
          <div className="relative rounded-2xl p-12 mb-12 overflow-hidden shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/cargo-shipping.jpg)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 to-blue-700/90"></div>
            </div>
            <div className="relative z-10 text-center text-white">
              <MapPin size={48} className="mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">Nationwide Coverage</h3>
              <p className="text-xl opacity-95">Serving {locations.length} major cities across Nigeria</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl text-center border-2 border-gray-200 hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{location.city}</h3>
                <p className="text-sm text-gray-500 mb-3">{location.type}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {location.services.map((service, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-1">
                      <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Background Image */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Why Choose Peaceful Transit Motors?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: '01',
                title: 'Experienced Team',
                description: 'Our professional drivers and logistics staff ensure safe and timely delivery of your goods and vehicles.',
                color: 'blue'
              },
              {
                number: '02',
                title: 'Affordable Rates',
                description: 'Competitive pricing without compromising on quality and service delivery.',
                color: 'green'
              },
              {
                number: '03',
                title: 'Wide Coverage',
                description: 'Serving multiple cities including Benin, Asaba, Onitsha, and Port Harcourt.',
                color: 'indigo'
              },
              {
                number: '04',
                title: 'Customer Support',
                description: 'Dedicated customer service team available to assist you throughout your journey.',
                color: 'blue'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-all relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-900 transform scale-y-0 group-hover:scale-y-100 transition-transform`}></div>
                <div className={`absolute top-4 right-4 text-8xl font-extrabold text-blue-50 opacity-50`}>
                  {item.number}
                </div>
                <div className="relative z-10">
                  <div className="text-6xl font-extrabold text-blue-100 mb-4 leading-none">{item.number}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section with Background */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/delivery-truck.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-blue-700/95"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-10 opacity-95">
            Contact us today for reliable and affordable transport solutions
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Call Us</h4>
              {companyInfo.phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  className="block text-white hover:underline mb-2 font-medium text-lg"
                >
                  {phone}
                </a>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Email Us</h4>
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-white hover:underline font-medium text-lg"
              >
                {companyInfo.email}
              </a>
            </div>
          </div>

          <Link
            to="/"
            className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-xl"
          >
            Back to Made Easy Group
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LogisticsHome;
