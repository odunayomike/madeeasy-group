import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Phone } from 'lucide-react';
import BookingForm from '../../components/logistics/BookingForm';
import { companyInfo } from '../../data/logistics/company';
import logo from '../../assets/images/logistics/peacelogo.png';

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const [prefilledData, setPrefilledData] = useState(null);

  useEffect(() => {
    // Get URL parameters
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    const date = searchParams.get('date');
    const passengers = searchParams.get('passengers');

    // Set prefilled data if any parameters exist
    if (from || to || date || passengers) {
      setPrefilledData({
        pickupLocation: from || '',
        deliveryLocation: to || '',
        date: date || '',
        passengers: passengers || '1'
      });
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/logistics" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Peaceful Transit Motors Logo" className="h-14 w-14 object-contain" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">Peaceful Transit Motors</span>
              <span className="text-xs text-blue-600 font-medium">Reliable Transport Services</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/logistics" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Back to Home</Link>
            <a href={`tel:${companyInfo.phones[0]}`} className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Phone size={18} />
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Booking Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <BookingForm prefilledData={prefilledData} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="opacity-90">&copy; 2025 Peaceful Transit Motors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BookingPage;
