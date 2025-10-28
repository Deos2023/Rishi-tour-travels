'use client'

import { motion } from 'framer-motion'
import { FaCar, FaUsers, FaStar, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('./hero3.jpg')" }}
        ></div>
        
        <div className="z-20 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            About Rishi Tour And Travels
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Your trusted partner for reliable and affordable car rental services in Kolkata.
          </motion.p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              Rishi Tour And Travels is a trusted car rental service provider based in Action Area 2B, Kolkata. We specialize in providing reliable and affordable transportation solutions for all your travel needs.
            </p>
            <p className="text-gray-600 mb-6">
              With a fleet of well-maintained cars and professional drivers, we ensure safe, comfortable, and punctual services for local travel, outstation trips, corporate travel, and special occasions across Kolkata and beyond.
            </p>
            <div className="flex items-center text-blue-600 font-medium">
              <FaMapMarkerAlt className="mr-2" />
              <span>Action Area 2B, Kolkata</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <FaCar className="text-3xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-gray-800">Car Rental</h3>
              <p className="text-gray-600 text-sm">Well-maintained cars for all occasions.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <FaUsers className="text-3xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-gray-800">Local Travel</h3>
              <p className="text-gray-600 text-sm">Reliable local transportation services.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <FaShieldAlt className="text-3xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-gray-800">Outstation Trips</h3>
              <p className="text-gray-600 text-sm">Comfortable long-distance travel.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <FaStar className="text-3xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-gray-800">24/7 Service</h3>
              <p className="text-gray-600 text-sm">Round the clock availability.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
          >
            Our Mission & Vision
          </motion.h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-8">
            We aim to provide reliable and affordable car rental services that prioritize customer satisfaction, safety, and comfort. Our vision is to become the most trusted travel partner for individuals and businesses in Kolkata.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaShieldAlt className="text-3xl text-blue-600 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 text-sm">
                To provide safe, reliable, and affordable car rental services that meet the diverse travel needs of our customers in Kolkata and beyond.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaStar className="text-3xl text-blue-600 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Our Vision</h3>
              <p className="text-gray-600 text-sm">
                To be the preferred choice for car rental services in Kolkata, known for our reliability, affordability, and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
          >
            Our Core Values
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Every service we provide is guided by our commitment to reliability, safety, and customer satisfaction.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <FaShieldAlt className="text-3xl text-blue-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Safety First</h3>
              <p className="text-gray-600 text-sm">Ensuring your journey is secure and reliable with well-maintained vehicles.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <FaUsers className="text-3xl text-blue-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Customer Focus</h3>
              <p className="text-gray-600 text-sm">Putting customer needs at the center of everything we do.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <FaStar className="text-3xl text-blue-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Reliability</h3>
              <p className="text-gray-600 text-sm">Delivering punctual and dependable services every time.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}