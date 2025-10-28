'use client'

import { motion } from 'framer-motion'
import { FaCar, FaMapMarkedAlt, FaBriefcase, FaPlaneDeparture, FaStar, FaUsers, FaClock, FaShieldAlt } from 'react-icons/fa'

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')" }}
        ></div>

        <div className="z-20 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Our Car Rental Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Reliable and affordable car rental solutions for all your travel needs in Kolkata and beyond.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Explore Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Local Car Rental */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <FaCar className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Local Car Rental</h3>
              <p className="text-gray-600 text-sm">
                Hourly and daily car rental services for local travel in Kolkata. Perfect for shopping, meetings, and city tours.
              </p>
            </motion.div>

            {/* Outstation Trips */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <FaMapMarkedAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Outstation Trips</h3>
              <p className="text-gray-600 text-sm">
                Comfortable cars for long-distance travel outside Kolkata. Ideal for weekend getaways and family trips.
              </p>
            </motion.div>

            {/* Corporate Travel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <FaBriefcase className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Corporate Travel</h3>
              <p className="text-gray-600 text-sm">
                Professional car services for business meetings, corporate events, and executive travel in Kolkata.
              </p>
            </motion.div>

            {/* Airport Transfer */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <FaPlaneDeparture className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Airport Transfer</h3>
              <p className="text-gray-600 text-sm">
                Timely airport pickup and drop services with professional drivers for a hassle-free travel experience.
              </p>
            </motion.div>

            {/* Hourly Rental */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <FaClock className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Hourly Rental</h3>
              <p className="text-gray-600 text-sm">
                Flexible hourly rental options for short trips, appointments, and quick errands around the city.
              </p>
            </motion.div>

            {/* Special Occasions */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <FaStar className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Special Occasions</h3>
              <p className="text-gray-600 text-sm">
                Reliable car services for family functions, celebrations, and special events in and around Kolkata.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Why Choose Rishi Tour And Travels?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaShieldAlt className="text-3xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-gray-800">Safe & Reliable</h3>
              <p className="text-gray-600 text-sm">Well-maintained cars and experienced drivers for your safety</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaUsers className="text-3xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-gray-800">24/7 Service</h3>
              <p className="text-gray-600 text-sm">Round the clock availability for all your travel needs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaStar className="text-3xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-gray-800">Affordable Rates</h3>
              <p className="text-gray-600 text-sm">Competitive pricing without compromising on quality</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaClock className="text-3xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-gray-800">Punctual Service</h3>
              <p className="text-gray-600 text-sm">On-time pickups and drops for all your appointments</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
          >
            Ready to Book Your Ride?
          </motion.h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Contact us today for reliable and affordable car rental services in Kolkata.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Book Your Car Now
          </a>
        </div>
      </section>

    </div>
  )
}