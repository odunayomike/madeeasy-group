import React from 'react';
import Slider from 'react-slick';
import './GallerySlider.css';
import gallery1 from '../assets/images/madeeasypictures/gallery1.jpg';
import gallery2 from '../assets/images/madeeasypictures/gallery2.jpg';
import gallery3 from '../assets/images/madeeasypictures/gallery3.jpg';
import gallery4 from '../assets/images/madeeasypictures/gallery4.jpg';
import gallery5 from '../assets/images/madeeasypictures/gallery5.jpg';

const GallerySlider = () => {
  const galleryImages = [
    {
      id: 1,
      url: gallery1,
      title: 'Estate Land Development'
    },
    {
      id: 2,
      url: gallery2,
      title: 'Property Allocation Event'
    },
    {
      id: 3,
      url: gallery3,
      title: 'Customer Engagement'
    },
    {
      id: 4,
      url: gallery4,
      title: 'Happy Clients'
    },
    {
      id: 5,
      url: gallery5,
      title: 'Satisfied Property Owners'
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
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Events & Gallery
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore memorable moments from our property allocation events and customer celebrations
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
        .slick-dots {
          bottom: -40px;
        }
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
          .slick-prev:before,
          .slick-next:before {
            font-size: 32px;
          }
        }
        @media (max-width: 768px) {
          .slick-prev {
            left: 0px;
            z-index: 10;
          }
          .slick-next {
            right: 0px;
            z-index: 10;
          }
          .slick-prev:before,
          .slick-next:before {
            font-size: 28px;
          }
        }
        @media (max-width: 480px) {
          .slick-prev,
          .slick-next {
            display: none !important;
          }
          .slick-dots {
            bottom: -30px;
          }
        }
      `}</style>
    </section>
  );
};

export default GallerySlider;
