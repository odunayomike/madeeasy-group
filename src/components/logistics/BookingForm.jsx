import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Phone, Mail, User, Package, Car, Truck, CheckCircle2, AlertCircle } from 'lucide-react';
import { services, locations } from '../../data/logistics/company';

const BookingForm = ({ prefilledData }) => {
  const [formData, setFormData] = useState({
    serviceType: '',
    pickupLocation: '',
    deliveryLocation: '',
    date: '',
    customerName: '',
    email: '',
    phone: '',
    details: ''
  });

  // Update form data when prefilled data is available
  useEffect(() => {
    if (prefilledData) {
      setFormData(prev => ({
        ...prev,
        pickupLocation: prefilledData.pickupLocation || prev.pickupLocation,
        deliveryLocation: prefilledData.deliveryLocation || prev.deliveryLocation,
        date: prefilledData.date || prev.date
      }));
    }
  }, [prefilledData]);

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
    if (!formData.pickupLocation) newErrors.pickupLocation = 'Pickup location is required';
    if (!formData.deliveryLocation) newErrors.deliveryLocation = 'Delivery location is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.customerName) newErrors.customerName = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitting(false);
    setSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        serviceType: '',
        pickupLocation: '',
        deliveryLocation: '',
        date: '',
        customerName: '',
        email: '',
        phone: '',
        details: ''
      });
      setSubmitted(false);
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const serviceIcons = {
    'Vehicle Transport': Car,
    'Parcel & Goods Delivery': Package,
    'Peaceful Transit Motors': Truck
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} className="text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Booking Submitted!</h3>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for choosing Peaceful Transit Motors. We have received your booking request.
        </p>
        <p className="text-gray-600">
          Our team will contact you shortly at <span className="font-semibold">{formData.phone}</span> to confirm your booking.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Book Your Transport
        </h3>
        <p className="text-gray-600 text-lg">
          Fill out the form below and we'll get back to you shortly
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service Type Selection */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3">
            Select Service *
          </label>
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((service) => {
              const IconComponent = serviceIcons[service.title];
              const isSelected = formData.serviceType === service.title;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => handleChange({ target: { name: 'serviceType', value: service.title } })}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50 shadow-lg'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-blue-600' : 'bg-gray-100'
                    }`}>
                      {IconComponent && <IconComponent size={20} className={isSelected ? 'text-white' : 'text-gray-600'} />}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{service.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{service.description.substring(0, 40)}...</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          {errors.serviceType && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle size={16} /> {errors.serviceType}
            </p>
          )}
        </div>

        {/* Location Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              <MapPin size={16} className="inline mr-1" />
              Pickup Location *
            </label>
            <select
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.pickupLocation ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select location</option>
              {locations.map((loc, idx) => (
                <option key={idx} value={loc.city}>{loc.city}</option>
              ))}
              <option value="Other">Other (Specify in details)</option>
            </select>
            {errors.pickupLocation && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle size={16} /> {errors.pickupLocation}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              <MapPin size={16} className="inline mr-1" />
              Delivery Location *
            </label>
            <select
              name="deliveryLocation"
              value={formData.deliveryLocation}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.deliveryLocation ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select location</option>
              {locations.map((loc, idx) => (
                <option key={idx} value={loc.city}>{loc.city}</option>
              ))}
              <option value="Other">Other (Specify in details)</option>
            </select>
            {errors.deliveryLocation && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle size={16} /> {errors.deliveryLocation}
              </p>
            )}
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            <Calendar size={16} className="inline mr-1" />
            Preferred Date *
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle size={16} /> {errors.date}
            </p>
          )}
        </div>

        {/* Customer Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              <User size={16} className="inline mr-1" />
              Full Name *
            </label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.customerName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.customerName && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle size={16} /> {errors.customerName}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              <Phone size={16} className="inline mr-1" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="08012345678"
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle size={16} /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            <Mail size={16} className="inline mr-1" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle size={16} /> {errors.email}
            </p>
          )}
        </div>

        {/* Additional Details */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Additional Details
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows="4"
            placeholder="Please provide any additional information about your booking (e.g., package size, special requirements, specific addresses...)"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all shadow-lg ${
            submitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white hover:-translate-y-1 hover:shadow-xl'
          }`}
        >
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </span>
          ) : (
            'Submit Booking Request'
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          By submitting this form, you agree to be contacted by Peaceful Transit Motors regarding your booking.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
