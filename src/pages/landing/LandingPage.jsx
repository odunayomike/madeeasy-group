import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Home, Truck, ArrowRight, Phone, Mail, Building2, MapPin, Award, Users } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LandingPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
  };

  const heroSlides = [
    {
      image: '/images/hero-slide-1.jpg',
      title: 'Making Life Easier, One Service at a Time',
      subtitle: 'Your trusted partner for quality real estate solutions and reliable transport services',
    },
    {
      image: '/images/hero-slide-2.jpg',
      title: 'Premium Real Estate Solutions',
      subtitle: '10+ gated estates across Lagos with flexible payment plans',
    },
    {
      image: '/images/hero-slide-3.jpg',
      title: 'Reliable Transport Services',
      subtitle: 'Fast, safe, and affordable logistics across major Nigerian cities',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider Section */}
      <section className="relative overflow-hidden">
        <Slider {...sliderSettings}>
          {heroSlides.map((slide, index) => (
            <div key={index}>
              <div className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-green-600 text-white py-20 px-4 md:py-32 overflow-hidden h-[600px] md:h-[700px]">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-700/40 to-green-600/50"></div>
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

                <div className="max-w-6xl mx-auto relative z-10 h-full flex flex-col justify-center">
                  <div className="text-center mb-8 animate-fadeIn">
                    <div className="inline-block bg-white px-10 py-5 rounded-xl shadow-2xl mb-8 transform hover:scale-105 transition-transform">
                      <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-900 to-green-500 bg-clip-text text-transparent">
                        MADE EASY GROUP
                      </span>
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 leading-tight animate-slideUp">
                    {slide.title}
                  </h1>

                  <p className="text-xl md:text-2xl text-center mb-12 opacity-95 max-w-3xl mx-auto animate-slideUp animation-delay-200">
                    {slide.subtitle}
                  </p>

                  {/* Stats - Only show on first slide */}
                  {index === 0 && (
                    <div className="flex flex-wrap justify-center gap-6 mt-12 animate-slideUp animation-delay-400">
                      <div className="bg-white/20 backdrop-blur-lg px-10 py-6 rounded-xl border border-white/30 min-w-[150px] transform hover:scale-105 transition-transform">
                        <div className="text-4xl font-bold mb-1">10+</div>
                        <div className="text-sm opacity-90">Years Experience</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-lg px-10 py-6 rounded-xl border border-white/30 min-w-[150px] transform hover:scale-105 transition-transform">
                        <div className="text-4xl font-bold mb-1">2</div>
                        <div className="text-sm opacity-90">Business Divisions</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-lg px-10 py-6 rounded-xl border border-white/30 min-w-[150px] transform hover:scale-105 transition-transform">
                        <div className="text-4xl font-bold mb-1">100%</div>
                        <div className="text-sm opacity-90">Customer Focused</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Slider Dots Styling */}
        <style>{`
          .slick-dots {
            bottom: 30px;
            z-index: 20;
          }
          .slick-dots li button:before {
            font-size: 12px;
            color: white;
            opacity: 0.5;
          }
          .slick-dots li.slick-active button:before {
            opacity: 1;
            color: white;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
          .animate-slideUp {
            animation: slideUp 1s ease-out;
          }
          .animation-delay-200 {
            animation-delay: 0.2s;
            animation-fill-mode: both;
          }
          .animation-delay-400 {
            animation-delay: 0.4s;
            animation-fill-mode: both;
          }
        `}</style>
      </section>

      {/* About Section with Image */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
            About Made Easy Group
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Text Content */}
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Made Easy Group is a diversified business conglomerate committed to providing exceptional
                services across multiple sectors. With over 10 years of experience, we have built a
                reputation for reliability, affordability, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our core businesses include real estate development and logistics services, both designed
                to make life easier for our valued customers across Nigeria.
              </p>
            </div>

            {/* Image with Stats Overlay */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/modern-building.jpg"
                  alt="Modern buildings and real estate"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-green-500/40"></div>
                <div className="absolute inset-0 p-8">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl text-center flex flex-col justify-center transform hover:scale-105 transition-transform">
                      <Building2 size={40} className="text-blue-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-900">10+</div>
                      <div className="text-sm text-gray-600">Estates</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl text-center flex flex-col justify-center transform hover:scale-105 transition-transform">
                      <Truck size={40} className="text-green-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-900">4</div>
                      <div className="text-sm text-gray-600">Cities</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl text-center flex flex-col justify-center transform hover:scale-105 transition-transform">
                      <Award size={40} className="text-blue-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-900">10yrs</div>
                      <div className="text-sm text-gray-600">Experience</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl text-center flex flex-col justify-center transform hover:scale-105 transition-transform">
                      <Users size={40} className="text-green-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-900">100%</div>
                      <div className="text-sm text-gray-600">Satisfied</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-10 rounded-xl shadow-lg border-l-4 border-green-500 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver quality, affordable services that simplify and enhance the lives of our
                customers across all our business divisions.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-lg border-l-4 border-blue-500 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading diversified service provider in Nigeria, known for excellence,
                integrity, and customer-centric solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Divisions with Real Images */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Our Business Divisions
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Choose the service that meets your needs
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-16">
            {/* Homes & Properties Card with Real Image */}
            <div className="bg-white rounded-2xl shadow-2xl border-t-4 border-green-500 hover:-translate-y-3 transition-all duration-300 overflow-hidden group">
              {/* Image Header */}
              <div className="h-64 relative overflow-hidden">
                <img
                  src="/images/homes-hero.jpg"
                  alt="Real estate and homes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/40 to-green-800/35"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Home size={48} className="text-green-600" />
                  </div>
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Made Easy Homes & Properties
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Premium gated and fenced estates across Lagos. Over 10 years of experience
                  providing affordable and quality land and property solutions.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold mr-3">✓</span>
                    10+ Premium Estates
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold mr-3">✓</span>
                    100% Secured Properties
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold mr-3">✓</span>
                    Flexible Payment Plans
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold mr-3">✓</span>
                    Strategic Locations
                  </li>
                </ul>

                <Link
                  to="/homes"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all hover:translate-x-1 shadow-lg"
                >
                  Explore Estates <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Logistics Card with Real Image */}
            <div className="bg-white rounded-2xl shadow-2xl border-t-4 border-blue-500 hover:-translate-y-3 transition-all duration-300 overflow-hidden group">
              {/* Image Header */}
              <div className="h-64 relative overflow-hidden">
                <img
                  src="/images/logistics-hero.jpg"
                  alt="Logistics and transportation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-blue-900/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Truck size={48} className="text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Peaceful Transit Motors
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Reliable, affordable, fast and safe transport services. Vehicle hire, parcel
                  delivery, and freight services across major Nigerian cities.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold mr-3">✓</span>
                    Vehicle Transport
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold mr-3">✓</span>
                    Parcel & Goods Delivery
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold mr-3">✓</span>
                    Interstate Freight
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold mr-3">✓</span>
                    Nationwide Coverage
                  </li>
                </ul>

                <Link
                  to="/logistics"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-500 to-blue-900 text-white font-semibold rounded-lg hover:from-blue-900 hover:to-blue-800 transition-all hover:translate-x-1 shadow-lg"
                >
                  View Services <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Get In Touch
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            Ready to get started with any of our services? Contact us today!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Call Us</h4>
              <p className="mb-2">
                <a href="tel:08086188318" className="text-blue-600 hover:underline font-medium">08086188318</a>
              </p>
              <p>
                <a href="tel:08060441161" className="text-blue-600 hover:underline font-medium">08060441161</a>
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Email Us</h4>
              <p>
                <a href="mailto:info@madeasygroup.net" className="text-blue-600 hover:underline font-medium">
                  info@madeasygroup.net
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-gray-700" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Head Office</h4>
                <p className="text-gray-600">Suite 1621, 1st Floor Yemosa Plaza</p>
                <p className="text-gray-600">26/28, Egbeda Akowonjo Road, Egbeda, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="opacity-90">&copy; 2025 Made Easy Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
