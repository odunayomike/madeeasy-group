import React, { useState } from 'react';
import './Gallery.css';
import gallery1 from '../assets/images/madeeasypictures/gallery1.jpg';
import gallery2 from '../assets/images/madeeasypictures/gallery2.jpg';
import gallery3 from '../assets/images/madeeasypictures/gallery3.jpg';
import gallery4 from '../assets/images/madeeasypictures/gallery4.jpg';
import gallery5 from '../assets/images/madeeasypictures/gallery5.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const images = [
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

  const filteredImages = images;

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <h1>Our Gallery</h1>
          <p>Explore our portfolio of premium estates and properties</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="gallery-content">
        <div className="gallery-container">
          {/* Image Grid */}
          <div className="gallery-grid">
            {filteredImages.map(image => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => openLightbox(image)}
              >
                <img src={image.url} alt={image.title} />
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="no-images">
              <p>No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}>‹</button>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}>›</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
