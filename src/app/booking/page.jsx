'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaShieldAlt, FaStar, FaUsers, FaCar, FaBus, FaCheck, FaClock, FaRoad } from 'react-icons/fa'

export default function BookingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedCar, setSelectedCar] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const phone = formData.get('phone')
    const car = formData.get('car')
    const date = formData.get('date')
    const duration = formData.get('duration')
    const message = formData.get('message')
    
    const whatsappMessage = `Hello, I am ${name}. I want to book ${car} for ${duration} on ${date}. ${message ? `Additional details: ${message}` : ''}. Please contact me at ${phone}.`
    const whatsappUrl = `https://wa.me/918917639029?text=${encodeURIComponent(whatsappMessage)}`
    
    window.open(whatsappUrl, '_blank')
  }

  const carRates = [
    { name: "NNVOA", price: "2500", details: "RS" },
    { name: "CRYSTA", price: "3000", details: "Premium Sedan" },
    { name: "Honda City 2023 Model", price: "5000", details: "Latest Model" },
    { name: "Fortuner", price: "10000", details: "SUV" },
    { name: "Thar", price: "10000", details: "Off-road SUV" },
    { name: "Open Jeep", price: "10000", details: "Adventure Vehicle" },
    { name: "Audi", price: "15000", details: "Luxury Sedan" },
    { name: "Mercedes E Class", price: "15000", details: "Executive Luxury" },
    { name: "Mercedes CLA", price: "18000", details: "Compact Luxury" },
    { name: "BMW 5 Series", price: "15000", details: "Sports Luxury" },
    { name: "Jaguar XF", price: "18000", details: "British Luxury" },
    { name: "Audi Convertible (Red ♥️)", price: "25000", details: "Premium Convertible" },
    { name: "Vintage Car", price: "25000", details: "Classic Collection" },
    { name: "Porsche Panamera", price: "28000", details: "Sports Luxury" },
    { name: "Impala", price: "25000", details: "Classic American" },
    { name: "Mercedes Convertible", price: "35000", details: "Ultimate Luxury Convertible" },
    { name: "WINGAR", price: "5000", details: "Traveler Van" },
    { name: "13st TRAVELER", price: "5500", details: "13-Seater Traveler" },
    { name: "17st TRAVELER", price: "6000", details: "17-Seater Traveler" },
    { name: "26st TRAVELER", price: "6500", details: "26-Seater Traveler" },
    { name: "17st URABANIA", price: "8000", details: "17-Seater Luxury Traveler" }
  ]

  const termsConditions = [
    "Minimum booking terms counts for 10hrs/100km",
    "Garage to Garage will be calculated",
    "All prices are exclusive of fuel, tolls, and parking charges",
    "Driver charges and accommodation included for outstation trips",
    "Advance booking required for luxury and premium vehicles",
    "Cancellation policy: 24 hours notice required for full refund"
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-neutral-700 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-60 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero2.jpg')" }}
        ></div>
        
        <div className="container mx-auto px-4 z-20 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Car Rental Booking
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl"
          >
            Premium Vehicles at Competitive Rates
          </motion.p>
        </div>
      </section>

      {/* Car Rates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Fleet & Rates</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose from our wide range of vehicles for every occasion and budget</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {carRates.map((car, index) => (
              <motion.div
                key={car.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                    <span className="text-2xl font-bold text-blue-600">₹{car.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{car.details}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Per 10hrs/100km</span>
                    <button
                      onClick={() => setSelectedCar(car)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terms & Conditions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-lg p-6 border border-blue-200"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaShieldAlt className="mr-2 text-blue-600" />
              Terms & Conditions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {termsConditions.map((term, index) => (
                <div key={index} className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{term}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Book Your Vehicle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Fill out the form below and we'll get back to you shortly</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <form onSubmit={handleBookingSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="car" className="block text-gray-700 mb-2 font-medium">Select Vehicle *</label>
                    <select 
                      id="car" 
                      name="car"
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={selectedCar ? selectedCar.name : ''}
                      onChange={(e) => {
                        const car = carRates.find(c => c.name === e.target.value)
                        setSelectedCar(car)
                      }}
                    >
                      <option value="">Choose a vehicle</option>
                      {carRates.map((car) => (
                        <option key={car.name} value={car.name}>
                          {car.name} - ₹{car.price}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-gray-700 mb-2 font-medium">Booking Date *</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date"
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="duration" className="block text-gray-700 mb-2 font-medium">Rental Duration *</label>
                    <select 
                      id="duration" 
                      name="duration"
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select duration</option>
                      <option value="10 hours / 100 km">10 hours / 100 km</option>
                      <option value="1 Day">1 Day (Up to 250 km)</option>
                      <option value="2 Days">2 Days (Up to 500 km)</option>
                      <option value="3+ Days">3+ Days (Custom package)</option>
                      <option value="Outstation Trip">Outstation Trip</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="pickup" className="block text-gray-700 mb-2 font-medium">Pickup Location</label>
                    <input 
                      type="text" 
                      id="pickup" 
                      name="pickup"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter pickup location"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Additional Requirements</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any special requirements or additional details..."
                  ></textarea>
                </div>

                {selectedCar && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"
                  >
                    <h4 className="font-semibold text-blue-800 mb-2">Selected Vehicle Summary</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{selectedCar.name}</span>
                      <span className="text-lg font-bold text-blue-600">₹{selectedCar.price} / 10hrs-100km</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{selectedCar.details}</p>
                  </motion.div>
                )}

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-medium text-lg flex items-center justify-center transition"
                >
                  <FaWhatsapp className="mr-3 text-xl" />
                  Book via WhatsApp
                </button>

                <p className="text-center text-gray-600 mt-4 text-sm">
                  By booking, you agree to our terms and conditions. We'll contact you within 30 minutes to confirm your booking.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FaClock className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Round the clock service for all your travel needs</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FaShieldAlt className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Insured</h3>
              <p className="text-gray-600">All vehicles are properly insured and well-maintained</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FaRoad className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Drivers</h3>
              <p className="text-gray-600">Professional drivers with excellent road knowledge</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Need Immediate Assistance?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Call us directly for urgent bookings or inquiries
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a href="tel:8917639029" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition flex items-center justify-center">
              <FaPhone className="mr-2" />
              8917639029
            </a>
            <a href="tel:8017166637" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition flex items-center justify-center">
              <FaPhone className="mr-2" />
              8017166637
            </a>
            <a 
              href="https://wa.me/918917639029" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-medium transition flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}