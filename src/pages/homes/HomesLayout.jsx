import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import AboutUs from '../AboutUs';
import Estates from '../Estates';
import Gallery from '../Gallery';
import Contact from '../Contact';

const HomesLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/estates" element={<Estates />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default HomesLayout;
