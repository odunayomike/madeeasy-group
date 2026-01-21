# Made Easy Group - Official Website

**A unified platform showcasing two thriving businesses: Made Easy Homes & Properties and Peaceful Transit Motors**

[Live Demo](#) • [Documentation](#documentation) • [Report Bug](#) • [Request Feature](#)

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Website Structure](#website-structure)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Contact Information](#contact-information)
- [License](#license)

---

## 🏢 About the Project

Made Easy Group is a diversified business conglomerate with over 10 years of experience providing exceptional services across multiple sectors. This unified website platform showcases our two core businesses:

### Made Easy Homes & Properties
A leading real estate company providing affordable and quality land and property solutions across Lagos State, Nigeria.

- **Founded**: 2015 (10th Anniversary in 2025)
- **Specialization**: Gated and fenced residential estates
- **Total Estates**: 10+ Premium locations
- **Payment Plans**: Outright, 12-month, and 24-month options

### Peaceful Transit Motors
Reliable, affordable, fast, and safe transport services across major Nigerian cities.

- **Services**: Vehicle transport, parcel delivery, interstate freight
- **Coverage**: Benin, Asaba, Onitsha, Port Harcourt
- **Focus**: Safety, reliability, and customer satisfaction

---

## 🌐 Website Structure

This project contains **THREE** distinct websites in one codebase:

### 1. Landing Page (`/`)
- Unified group homepage
- Overview of both businesses
- Links to individual business websites
- Company mission and vision
- Contact information

### 2. Homes & Properties Website (`/homes/*`)
- `/homes` - Real estate homepage
- `/homes/about` - About the company
- `/homes/estates` - Estate listings
- `/homes/gallery` - Property gallery
- `/homes/contact` - Contact page

### 3. Logistics Website (`/logistics`)
- Complete logistics company website
- Service offerings
- Service areas
- Contact information
- All in one page

---

## ✨ Key Features

### 🎯 Unified Landing Page
- **Group Overview**: Introduction to Made Easy Group
- **Business Cards**: Visual cards for each division
- **Navigation**: Easy access to both business websites
- **Responsive Design**: Works on all devices
- **Modern UI**: Built with Tailwind CSS

### 🏘️ Real Estate Website
- **10 Premium Estates** with complete details
- **Flexible Payment Plans**: Outright, 12-month, 24-month
- **Special Promotions**: 10th Anniversary discounts
- **Smart Filtering**: Filter estates by price and features
- **Gallery**: Property images and showcase
- **Cooperative Section**: Member benefits and details

### 🚛 Logistics Website
- **Service Showcase**: Vehicle transport, parcel delivery, freight
- **Service Areas**: Coverage across 4 major cities
- **Why Choose Us**: Highlights reliability, affordability, speed
- **Contact Options**: Phone, email with direct links
- **Modern Design**: Blue-themed professional appearance

---

## 🛠️ Tech Stack

### Core Technologies
- **[React 18.2.0](https://react.dev/)** - UI library
- **[Vite 5.1.0](https://vitejs.dev/)** - Build tool
- **[React Router DOM 6.22.0](https://reactrouter.com/)** - Navigation
- **[Tailwind CSS 3.4.18](https://tailwindcss.com/)** - Styling
- **[Lucide React 0.263.1](https://lucide.dev/)** - Icons

### Development Tools
- **[ESLint](https://eslint.org/)** - Code quality
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixes

---

## 🚀 Getting Started

### Prerequisites

```bash
Node.js >= 16.0.0
npm >= 8.0.0
Git >= 2.0.0
```

Check your versions:
```bash
node --version
npm --version
git --version
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/odunayomike/madeeasy-group.git
cd madeeasy-group
```

2. **Install dependencies**
```bash
npm install
```

### Running Locally

**Development server:**
```bash
npm run dev
```

The website will open at `http://localhost:3000`

- Landing page: `http://localhost:3000/`
- Homes website: `http://localhost:3000/homes`
- Logistics website: `http://localhost:3000/logistics`

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

---

## 📁 Project Structure

```
madeeasy-group/
│
├── public/                          # Static assets
│
├── src/
│   ├── pages/
│   │   ├── landing/                 # Landing page
│   │   │   └── LandingPage.jsx     # Main landing page
│   │   │
│   │   ├── homes/                   # Real estate website
│   │   │   └── HomesLayout.jsx     # Homes routing wrapper
│   │   │
│   │   ├── logistics/               # Logistics website
│   │   │   └── LogisticsHome.jsx   # Logistics homepage
│   │   │
│   │   ├── Home.jsx                 # Homes homepage (used in /homes)
│   │   ├── AboutUs.jsx              # About page (used in /homes)
│   │   ├── Estates.jsx              # Estates listing (used in /homes)
│   │   ├── Gallery.jsx              # Gallery page (used in /homes)
│   │   └── Contact.jsx              # Contact page (used in /homes)
│   │
│   ├── components/
│   │   ├── Navbar.jsx               # Navigation (homes website)
│   │   ├── Footer.jsx               # Footer (homes website)
│   │   ├── Hero.jsx                 # Hero section
│   │   ├── About.jsx                # About component
│   │   ├── EstateCard.jsx           # Estate card component
│   │   ├── EstateList.jsx           # Estate list component
│   │   ├── CooperativeSection.jsx   # Cooperative info
│   │   ├── ContactSection.jsx       # Contact component
│   │   ├── ContactForm.jsx          # Contact form
│   │   ├── GallerySlider.jsx        # Gallery slider
│   │   └── PaymentCalculator.jsx    # Payment calculator
│   │
│   ├── data/
│   │   ├── estates.js               # Real estate data
│   │   └── logistics/
│   │       └── company.js           # Logistics company data
│   │
│   ├── App.jsx                      # Main routing configuration
│   ├── App.css                      # App styles
│   ├── index.css                    # Global styles (Tailwind)
│   └── main.jsx                     # Entry point
│
├── index.html                       # HTML template
├── package.json                     # Dependencies
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind configuration
└── README.md                        # This file
```

---

## 🎨 Customization Guide

### Updating Logistics Company Information

Edit `src/data/logistics/company.js`:

```javascript
export const companyInfo = {
  name: "Peaceful Transit Motors",
  tagline: "Your tagline here",
  email: "youremail@example.com",
  phones: ["08012345678", "08098765432"]
};
```

### Updating Real Estate Information

Edit `src/data/estates.js`:

```javascript
// Add or modify estates
{
  id: 11,
  name: "New Estate Name",
  location: "Location, Area",
  // ... other properties
}
```

### Changing Landing Page Content

Edit `src/pages/landing/LandingPage.jsx` - all content is in JSX with Tailwind classes.

### Styling with Tailwind

All new pages use Tailwind CSS. Modify classes directly in JSX:

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Your content
</div>
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://odunayomike.github.io/madeeasy-group",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Deploy:
```bash
npm run deploy
```

---

## 📞 Contact Information

### Made Easy Group

**📧 Email**: info@madeasygroup.net
**📱 Phone**:
- 08086188318
- 08060441161
- 09042943116
- 09136487712

**🏢 Head Office**:
Suite 1621, 1st Floor Yemosa Plaza
26/28, Egbeda Akowonjo Road
Egbeda, Lagos, Nigeria

### Peaceful Transit Motors

**📧 Email**: madeasygroup@company@gmail.com
**📱 Phone**:
- 08161333728
- 08061883318

**🗺️ Service Areas**: Benin, Asaba, Onitsha, Port Harcourt

---

## 📄 License

© 2025 Made Easy Group. All rights reserved.

---

## 🙏 Acknowledgments

- [React Team](https://react.dev)
- [Vite Team](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- Made Easy Group team and stakeholders

---

## 📊 Website Stats

- **Total Websites**: 3 (Landing + Homes + Logistics)
- **Total Pages**: 8+
- **Total Components**: 15+
- **Responsive Breakpoints**: Mobile, Tablet, Desktop
- **Color Themes**: Green (Real Estate), Blue (Logistics)

---

**Built with ❤️ by Made Easy Group Team**

⭐ Star this repo if you find it useful!
