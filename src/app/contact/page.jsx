'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const phone = formData.get('phone')
    const service = formData.get('service')
    const message = formData.get('message')

    const whatsappMessage = `Hello, I am ${name}. I am interested in ${service}. ${message}. Please contact me at ${phone}.`
    const whatsappUrl = `https://wa.me/918917639029?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen text-neutral-700 bg-gray-50 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')" }}
        ></div>

        <div className="z-20 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Get in touch with Rishi Tour And Travels today. We're here to assist you with all your car rental needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Service</label>
                <select
                  name="service"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                >
                  <option>Local Car Rental</option>
                  <option>Outstation Trip</option>
                  <option>Airport Transfer</option>
                  <option>Corporate Travel</option>
                  <option>Special Occasion</option>
                  <option>Hourly Rental</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition"
              >
                Send on WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Business Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Business Details</h2>
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
              <p className="text-gray-600">
                Rishi Tour And Travels <br />
                Plot No 3244, Street No 0510 Akankha More, <br />
                Action Area 2B, Kolkata, <br />
                North 24 Parganas, 700156
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-blue-600 text-xl" />
              <p className="text-gray-600">+91 89176 39029</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-blue-600 text-xl" />
              <p className="text-gray-600">+91 80171 66637</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-blue-600 text-xl" />
              <p className="text-gray-600">+91 89176 39029</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <p className="text-gray-600">sanjuktamohanty67890@gmail.com</p>
            </div>

            {/* Google Map */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8756795745294!2d88.4695587!3d22.5837526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02754406c0b0f5%3A0xd40646ec37a5d797!2sRishi%20Tour%26%20Travels!5e0!3m2!1sen!2sin!4v1761652875159!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-md"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rishi Tour And Travels Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}