import React from 'react';
import Slider from 'react-slick';
import './GallerySlider.css';

const GallerySlider = () => {
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      title: 'Gated Estate Development'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      title: 'Modern Residential Property'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      title: 'Premium Estate Layout'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      title: 'Luxury Home Interior'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      title: 'Secured Estate Entrance'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
      title: 'Contemporary Living Space'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our completed projects and ongoing developments
          </p>
        </div>

        <Slider {...settings} className="pb-12">
          {galleryImages.map((image) => (
            <div key={image.id} className="px-3">
              <div className="group relative overflow-hidden rounded-2xl shadow-large hover:shadow-xl transition-all duration-300 cursor-pointer">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl md:text-2xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style>{`
        .slick-dots li button:before {
          font-size: 12px;
          color: #22c55e;
          opacity: 0.4;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #22c55e;
        }
        .slick-prev:before,
        .slick-next:before {
          color: #22c55e;
          opacity: 0.7;
          font-size: 40px;
        }
        .slick-prev:hover:before,
        .slick-next:hover:before {
          opacity: 1;
        }
        .slick-prev {
          left: -50px;
        }
        .slick-next {
          right: -50px;
        }
        @media (max-width: 1024px) {
          .slick-prev {
            left: -20px;
          }
          .slick-next {
            right: -20px;
          }
        }
        @media (max-width: 640px) {
          .slick-prev {
            left: 0;
            z-index: 10;
          }
          .slick-next {
            right: 0;
            z-index: 10;
          }
        }
      `}</style>
    </section>
  );
};

export default GallerySlider;
