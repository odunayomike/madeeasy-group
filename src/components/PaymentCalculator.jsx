import React, { useState } from 'react';
import { estates } from '../data/estates';
import './PaymentCalculator.css';

const PaymentCalculator = () => {
  const [selectedEstate, setSelectedEstate] = useState('');
  const [plotType, setPlotType] = useState('fullPlot');
  const [paymentPlan, setPaymentPlan] = useState('months12');
  const [downPayment, setDownPayment] = useState('');
  const [calculatedPayment, setCalculatedPayment] = useState(null);

  // Convert price string to number
  const parsePrice = (priceString) => {
    return parseInt(priceString.replace(/[₦,]/g, ''), 10);
  };

  // Format number to currency
  const formatCurrency = (amount) => {
    return '₦' + amount.toLocaleString('en-NG');
  };

  const calculateMonthlyPayment = () => {
    if (!selectedEstate || !downPayment) {
      alert('Please fill in all fields');
      return;
    }

    const estate = estates.find(e => e.id === parseInt(selectedEstate));
    const totalPrice = parsePrice(estate[plotType][paymentPlan]);
    const downPaymentAmount = parseInt(downPayment.replace(/[₦,]/g, ''), 10);

    if (downPaymentAmount >= totalPrice) {
      alert('Down payment cannot be equal to or greater than total price');
      return;
    }

    if (downPaymentAmount < 0) {
      alert('Down payment must be a positive number');
      return;
    }

    const balance = totalPrice - downPaymentAmount;
    const months = paymentPlan === 'months12' ? 12 : paymentPlan === 'months24' ? 24 : 0;

    if (months === 0) {
      alert('Outright payment does not require monthly calculations');
      return;
    }

    const monthlyPayment = balance / months;
    const days = months * 30; // Approximate days in the period
    const weeks = months * 4; // Approximate weeks in the period
    const dailyPayment = balance / days;
    const weeklyPayment = balance / weeks;

    setCalculatedPayment({
      estate: estate.name,
      plotType: plotType === 'fullPlot' ? 'Full Plot' : 'Half Plot',
      totalPrice: formatCurrency(totalPrice),
      downPayment: formatCurrency(downPaymentAmount),
      balance: formatCurrency(balance),
      months: months,
      days: days,
      weeks: weeks,
      dailyPayment: formatCurrency(Math.ceil(dailyPayment)),
      weeklyPayment: formatCurrency(Math.ceil(weeklyPayment)),
      monthlyPayment: formatCurrency(Math.ceil(monthlyPayment))
    });
  };

  const resetCalculator = () => {
    setSelectedEstate('');
    setPlotType('fullPlot');
    setPaymentPlan('months12');
    setDownPayment('');
    setCalculatedPayment(null);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Begin Your Journey to Becoming a Landlord Today
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Own your dream home with flexible payment plans. Calculate your affordable monthly payments and take the first step towards property ownership.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          <div className="bg-white rounded-2xl shadow-large p-6 md:p-8 lg:p-10 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="estate-select" className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Estate
                </label>
                <select
                  id="estate-select"
                  value={selectedEstate}
                  onChange={(e) => setSelectedEstate(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                >
                  <option value="">Choose an estate...</option>
                  {estates.map((estate) => (
                    <option key={estate.id} value={estate.id}>
                      {estate.name} - {estate.location}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="plot-type" className="block text-sm font-semibold text-gray-700 mb-2">
                  Plot Type
                </label>
                <select
                  id="plot-type"
                  value={plotType}
                  onChange={(e) => setPlotType(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                >
                  <option value="fullPlot">Full Plot</option>
                  <option value="halfPlot">Half Plot</option>
                </select>
              </div>

              <div>
                <label htmlFor="payment-plan" className="block text-sm font-semibold text-gray-700 mb-2">
                  Payment Plan
                </label>
                <select
                  id="payment-plan"
                  value={paymentPlan}
                  onChange={(e) => setPaymentPlan(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                >
                  <option value="months12">12 Months</option>
                  <option value="months24">24 Months</option>
                </select>
              </div>

              <div>
                <label htmlFor="down-payment" className="block text-sm font-semibold text-gray-700 mb-2">
                  Down Payment (₦)
                </label>
                <input
                  type="text"
                  id="down-payment"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="Enter down payment amount"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                />
              </div>
            </div>

            {selectedEstate && (
              <div className="mb-6 bg-gradient-to-r from-primary-50 to-primary-100 border-l-4 border-primary-500 rounded-xl p-4 md:p-5">
                <p className="text-base md:text-lg text-gray-800">
                  <span className="font-semibold text-primary-700">Total Price:</span>{' '}
                  <span className="font-bold text-gray-900">
                    {formatCurrency(
                      parsePrice(
                        estates.find(e => e.id === parseInt(selectedEstate))[plotType][paymentPlan]
                      )
                    )}
                  </span>
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={calculateMonthlyPayment}
                className="flex-1 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-opacity-50"
              >
                Calculate Payment
              </button>
              <button
                onClick={resetCalculator}
                className="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-8 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
              >
                Reset
              </button>
            </div>
          </div>

          {calculatedPayment && (
            <div className="mt-8 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-600 rounded-2xl shadow-large p-6 md:p-8 lg:p-10 text-white animate-slideIn">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Payment Breakdown</h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-6 md:mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-200 hover:scale-105">
                  <span className="block text-xs md:text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">Estate</span>
                  <span className="block text-base md:text-lg font-bold">{calculatedPayment.estate}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-200 hover:scale-105">
                  <span className="block text-xs md:text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">Plot Type</span>
                  <span className="block text-base md:text-lg font-bold">{calculatedPayment.plotType}</span>
                </div>
                <div className="bg-white/15 backdrop-blur-sm p-5 rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-200 hover:scale-105">
                  <span className="block text-xs md:text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">Total Price</span>
                  <span className="block text-base md:text-lg font-bold">{calculatedPayment.totalPrice}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-200 hover:scale-105">
                  <span className="block text-xs md:text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">Down Payment</span>
                  <span className="block text-base md:text-lg font-bold">{calculatedPayment.downPayment}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-200 hover:scale-105">
                  <span className="block text-xs md:text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">Balance</span>
                  <span className="block text-base md:text-lg font-bold">{calculatedPayment.balance}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-200 hover:scale-105">
                  <span className="block text-xs md:text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">Payment Period</span>
                  <span className="block text-base md:text-lg font-bold">{calculatedPayment.months} Months</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="text-xl md:text-2xl font-bold text-center mb-4">Flexible Payment Options</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border-2 border-white/40 text-center hover:bg-white/25 transition-all duration-200 hover:scale-105">
                    <div className="mb-3">
                      <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">Daily</span>
                    </div>
                    <span className="block text-3xl md:text-4xl font-bold mb-2">{calculatedPayment.dailyPayment}</span>
                    <p className="text-white/90 text-sm">per day for {calculatedPayment.days} days</p>
                  </div>

                  <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border-2 border-white/40 text-center hover:bg-white/25 transition-all duration-200 hover:scale-105">
                    <div className="mb-3">
                      <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">Weekly</span>
                    </div>
                    <span className="block text-3xl md:text-4xl font-bold mb-2">{calculatedPayment.weeklyPayment}</span>
                    <p className="text-white/90 text-sm">per week for {calculatedPayment.weeks} weeks</p>
                  </div>

                  <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border-2 border-white/40 text-center hover:bg-white/25 transition-all duration-200 hover:scale-105">
                    <div className="mb-3">
                      <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">Monthly</span>
                    </div>
                    <span className="block text-3xl md:text-4xl font-bold mb-2">{calculatedPayment.monthlyPayment}</span>
                    <p className="text-white/90 text-sm">per month for {calculatedPayment.months} months</p>
                  </div>
                </div>
              </div>

             
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default PaymentCalculator;
