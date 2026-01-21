# Made Easy Group - Website Structure Guide

## 🎯 Overview

This repository now contains **3 websites in 1** unified codebase:

1. **Landing Page** - Group homepage linking both businesses
2. **Made Easy Homes & Properties** - Real estate website
3. **Peaceful Transit Motors** - Logistics/transport website

---

## 🌐 URL Structure

### Production URLs
```
https://yourdomain.com/                 → Landing Page
https://yourdomain.com/homes            → Real Estate Homepage
https://yourdomain.com/homes/about      → Real Estate About
https://yourdomain.com/homes/estates    → Estate Listings
https://yourdomain.com/homes/gallery    → Property Gallery
https://yourdomain.com/homes/contact    → Real Estate Contact
https://yourdomain.com/logistics        → Logistics Website
```

### Local Development URLs
```
http://localhost:3000/                  → Landing Page
http://localhost:3000/homes             → Real Estate Homepage
http://localhost:3000/homes/about       → Real Estate About
http://localhost:3000/homes/estates     → Estate Listings
http://localhost:3000/homes/gallery     → Property Gallery
http://localhost:3000/homes/contact     → Real Estate Contact
http://localhost:3000/logistics         → Logistics Website
```

---

## 📂 File Organization

### Landing Page Files
```
src/pages/landing/
└── LandingPage.jsx          # Main landing page component
```

**Features:**
- Group overview and introduction
- Visual cards for both businesses
- Mission and vision statements
- Contact information
- Links to both business websites

**Styling:** Tailwind CSS (inline classes)

---

### Real Estate Website Files
```
src/pages/
├── Home.jsx                 # Homepage
├── AboutUs.jsx              # About page
├── Estates.jsx              # Estate listings
├── Gallery.jsx              # Gallery
└── Contact.jsx              # Contact page

src/pages/homes/
└── HomesLayout.jsx          # Routing wrapper

src/components/
├── Navbar.jsx               # Navigation bar
├── Footer.jsx               # Footer
├── Hero.jsx                 # Hero section
├── About.jsx                # About component
├── EstateCard.jsx           # Estate card
├── EstateList.jsx           # Estate list
├── CooperativeSection.jsx   # Cooperative info
├── ContactSection.jsx       # Contact section
├── ContactForm.jsx          # Contact form
├── GallerySlider.jsx        # Gallery slider
└── PaymentCalculator.jsx    # Payment calculator

src/data/
└── estates.js               # Estate data
```

**Features:**
- 10 premium estate listings
- Flexible payment plans
- Property gallery
- Cooperative society information
- Contact forms

**Styling:** Custom CSS files + some Tailwind

---

### Logistics Website Files
```
src/pages/logistics/
└── LogisticsHome.jsx        # Complete logistics website (single page)

src/data/logistics/
└── company.js               # Company data and services
```

**Features:**
- Service showcase (vehicle transport, parcels, freight)
- Service areas (Benin, Asaba, Onitsha, Port Harcourt)
- Why choose us section
- Contact information
- Modern blue-themed design

**Styling:** Tailwind CSS (inline classes)

---

## 🎨 Design System

### Color Schemes

**Landing Page:**
- Gradient: Blue to Green
- Represents both businesses

**Real Estate (Homes):**
- Primary: Green (#22c55e)
- Represents growth, stability, nature

**Logistics:**
- Primary: Blue (#3b82f6)
- Represents trust, reliability, professionalism

### Typography
- All websites use system fonts
- Responsive font sizes
- Mobile-first approach

---

## 🔧 How to Add Content

### Add New Estate
Edit `src/data/estates.js`:
```javascript
{
  id: 11,
  name: "New Estate Name",
  location: "Location, Area",
  description: "Description here",
  fullPlot: {
    outright: "₦5,000,000",
    months12: "₦6,000,000",
    months24: "₦7,000,000"
  },
  halfPlot: {
    outright: "₦3,000,000",
    months12: "₦3,500,000",
    months24: "₦4,000,000"
  },
  discount: "10%",  // or null
  features: ["Gated", "Fenced", "Government Approved"]
}
```

### Update Logistics Services
Edit `src/data/logistics/company.js`:
```javascript
export const services = [
  {
    id: 1,
    title: "Service Name",
    description: "Service description",
    icon: "Car", // Car, Package, or Truck
    features: ["Feature 1", "Feature 2", "Feature 3"]
  }
];
```

### Modify Landing Page
Edit `src/pages/landing/LandingPage.jsx` - all content is in JSX with Tailwind classes.

---

## 🚀 Deployment Notes

### Important Configuration

**Vite Config** (`vite.config.js`):
```javascript
export default defineConfig({
  base: '/', // Keep as root
  // ... rest of config
});
```

**Routing**:
- Uses React Router DOM with BrowserRouter
- No hash routing needed
- Server must handle client-side routing (return index.html for all routes)

### Deployment Checklist

- [ ] Build the project: `npm run build`
- [ ] Test production build: `npm run preview`
- [ ] Configure server for SPA routing
- [ ] Set up redirects for Netlify/Vercel
- [ ] Test all three websites work correctly
- [ ] Verify mobile responsiveness

### Server Configuration

**For Netlify** - Create `public/_redirects`:
```
/*    /index.html   200
```

**For Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 🧪 Testing Guide

### Manual Testing Checklist

**Landing Page:**
- [ ] Page loads correctly
- [ ] Both business cards display
- [ ] Links navigate to correct websites
- [ ] Contact information shows
- [ ] Responsive on mobile

**Real Estate Website:**
- [ ] Homepage loads at /homes
- [ ] All nav links work
- [ ] Estate filtering works
- [ ] Gallery displays images
- [ ] Contact form functional
- [ ] Payment calculator works

**Logistics Website:**
- [ ] Page loads at /logistics
- [ ] Services display correctly
- [ ] Service areas show
- [ ] Contact links work
- [ ] "Back to Made Easy Group" returns to landing

**Navigation Flow:**
- [ ] Landing → Homes works
- [ ] Landing → Logistics works
- [ ] Homes → Landing (logo click) works
- [ ] Logistics → Landing works

---

## 💡 Tips for Developers

### Understanding the Routing

**App.jsx** is the main router:
```javascript
/                 → LandingPage (standalone)
/logistics        → LogisticsHome (standalone)
/homes/*          → HomesLayout (with Navbar/Footer)
  ├── /           → Home
  ├── /about      → AboutUs
  ├── /estates    → Estates
  ├── /gallery    → Gallery
  └── /contact    → Contact
```

### Why This Structure?

1. **Landing Page**: No navbar/footer - clean entry point
2. **Logistics**: Single-page design - all content visible, no extra navigation
3. **Real Estate**: Multi-page with persistent navbar/footer - traditional website structure

### Common Tasks

**Change group name:**
- Edit `src/pages/landing/LandingPage.jsx`

**Update contact info:**
- Real Estate: `src/data/estates.js`
- Logistics: `src/data/logistics/company.js`

**Add new page to real estate site:**
1. Create component in `src/pages/`
2. Add route in `src/pages/homes/HomesLayout.jsx`
3. Add link in `src/components/Navbar.jsx`

---

## 🐛 Troubleshooting

### Issue: Page not found on refresh
**Solution:** Configure server for SPA routing (see Deployment Notes)

### Issue: Styles not loading
**Solution:** Run `npm run build` and check Tailwind config

### Issue: Links not working
**Solution:** Make sure you're using `<Link>` from react-router-dom, not `<a>`

### Issue: Navbar shows on landing page
**Solution:** Check App.jsx - landing route should not include Navbar

---

## 📈 Future Enhancements

Potential additions:
- [ ] Add search functionality to estate listings
- [ ] Implement online booking for logistics
- [ ] Add blog section to landing page
- [ ] Create admin dashboard
- [ ] Add payment gateway integration
- [ ] Implement virtual property tours
- [ ] Add customer testimonials
- [ ] Create newsletter subscription

---

**Last Updated:** October 26, 2025
**Maintained by:** Made Easy Group Development Team
