import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      category: 'estates',
      title: 'Gated Estate Development'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      category: 'properties',
      title: 'Modern Residential Property'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      category: 'estates',
      title: 'Premium Estate Layout'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      category: 'properties',
      title: 'Luxury Home Interior'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      category: 'estates',
      title: 'Secured Estate Entrance'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
      category: 'properties',
      title: 'Contemporary Living Space'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80',
      category: 'completed',
      title: 'Completed Project 1'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
      category: 'completed',
      title: 'Completed Project 2'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
      category: 'properties',
      title: 'Elegant Property Design'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80',
      category: 'estates',
      title: 'Estate Infrastructure'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80',
      category: 'completed',
      title: 'Completed Project 3'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
      category: 'properties',
      title: 'Modern Architecture'
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'estates', name: 'Estates' },
    { id: 'properties', name: 'Properties' },
    { id: 'completed', name: 'Completed Projects' }
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

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
          {/* Filter Buttons */}
          <div className="gallery-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

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
