import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      number: "01",
      title: "100% Secured",
      description: "All our estates are properly gated and fenced with government approval and documentation"
    },
    {
      number: "02",
      title: "10 Years Excellence",
      description: "A decade of proven experience in real estate and property development across Lagos"
    },
    {
      number: "03",
      title: "Customer Focused",
      description: "Dedicated to making property ownership easy, accessible and stress-free for everyone"
    },
    {
      number: "04",
      title: "High ROI Locations",
      description: "Strategic locations with high potential for value appreciation and development"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Why Choose Made Easy Homes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in affordable and secured property ownership across Lagos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 md:mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-large transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-6xl md:text-7xl font-bold text-primary-500/20 group-hover:text-primary-500/30 transition-colors mb-4">
                {feature.number}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-3 space-y-8 flex flex-col">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                About Made Easy Homes & Properties
              </h3>
              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  Made Easy Homes & Properties is a leading real estate company with over 10 years
                  of experience in providing affordable and quality land and property solutions across Lagos State.
                  We specialize in developing gated and fenced estates in strategic locations with
                  flexible payment plans that make property ownership accessible to everyone.
                </p>
                <p>
                  Our estates are strategically located in fast-developing areas with proximity to major expressways,
                  tertiary institutions, industrial zones, and essential amenities. We pride ourselves
                  on transparency, reliability, and excellent customer service.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="group relative bg-white p-6 md:p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-500 transition-all duration-300 hover:shadow-large">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">Our Mission</h4>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      To make property ownership easy and accessible for everyone through transparent processes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white p-6 md:p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-500 transition-all duration-300 hover:shadow-large">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">Our Vision</h4>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      To be the most trusted real estate company in Nigeria, known for quality developments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white p-6 md:p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-500 transition-all duration-300 hover:shadow-large">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">Our Values</h4>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      Integrity, Transparency, Excellence, Customer Satisfaction, and Trust.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-large hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex-1">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Premium Estate Development"
                className="w-full h-full min-h-[300px] lg:min-h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-large hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                alt="Estate Layout"
                className="w-full h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;