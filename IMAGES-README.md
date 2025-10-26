# Adding Custom Images to Your Website

## Hero Slider Images

The hero slider currently uses placeholder images from Unsplash. To add your own images:

### Option 1: Use Local Images

1. Add your images to the `src/assets/images/` folder
2. Update the `Hero.jsx` file:

```javascript
// Import your images at the top
import heroImage1 from '../assets/images/hero-1.jpg';
import heroImage2 from '../assets/images/hero-2.jpg';
import heroImage3 from '../assets/images/hero-3.jpg';

// Update the slides array
const slides = [
  {
    id: 1,
    title: 'Your Dream Home Starts Here',
    subtitle: 'Premium gated and fenced estates across Lagos with flexible payment plans.',
    image: heroImage1, // Use imported image
    badge: '10TH YEAR ANNIVERSARY - MEGA PROMO'
  },
  // ... update other slides similarly
];
```

### Option 2: Use External URLs

Simply replace the Unsplash URLs in the `slides` array with your own image URLs:

```javascript
const slides = [
  {
    id: 1,
    title: 'Your Dream Home Starts Here',
    subtitle: 'Premium gated and fenced estates across Lagos...',
    image: 'https://yourdomain.com/images/hero-1.jpg',
    badge: '10TH YEAR ANNIVERSARY - MEGA PROMO'
  },
  // ...
];
```

## Recommended Image Specifications

- **Format**: JPG or WebP
- **Dimensions**: 1920x1080px (16:9 aspect ratio) or larger
- **File Size**: Optimized to < 500KB per image
- **Content**: High-quality photos of properties, estates, or real estate

## Estate/Property Images

To add images to estate cards:

1. Add images to `src/assets/images/estates/`
2. Update the `src/data/estates.js` file to include image references
3. Update `EstateCard.jsx` to display the images

## Future Enhancements

Consider adding:
- Image lazy loading
- WebP format with fallbacks
- Responsive images for different screen sizes
- Alt text for accessibility
