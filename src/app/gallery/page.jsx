"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCar, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

const imageList = [
  "1.jpeg","2.jpeg","3.jpeg","21.jpeg","22.jpeg","23.jpeg","24.jpeg","25.jpeg",
  "4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg","11.jpeg",
  "12.jpeg","13.jpeg","14.jpeg","15.jpeg","16.jpeg","17.jpeg","18.jpeg","19.jpeg","20.jpeg"
];

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [filter, setFilter] = useState("all");

  // Group images by categories (you can customize this based on your actual images)
  const categorizedImages = {
    all: imageList,
    cars: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"],
    interior: ["7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg", "11.jpeg"],
    service: ["12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg"],
    travel: ["17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg", "21.jpeg"]
  };

  const filteredImages = categorizedImages[filter] || imageList;

  const filters = [
    { key: "all", label: "All Vehicles" },
    { key: "cars", label: "Our Cars" },
    { key: "interior", label: "Interior" },
    { key: "service", label: "Service" },
    { key: "travel", label: "Travel" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100  px-4">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center mb-12 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')" }}
        ></div>

        <div className="z-20 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our Fleet Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-6"
          >
            Explore our well-maintained cars and professional services
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="tel:8917639029"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300"
            >
              <FaPhone className="text-sm" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/918917639029"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300"
            >
              <FaWhatsapp className="text-sm" />
              <span>WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto"
      >
        {filters.map((filterItem) => (
          <button
            key={filterItem.key}
            onClick={() => setFilter(filterItem.key)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              filter === filterItem.key
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-600 border border-gray-200"
            }`}
          >
            {filterItem.label}
          </button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mx-auto max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.03 } } }}
      >
        {filteredImages.map((img, idx) => (
          <motion.div
            key={img}
            className="rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl cursor-pointer transition-all duration-300 relative group"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            onClick={() => setSelectedImg(img)}
          >
            <div className="relative overflow-hidden">
              <img
                src={`/img/${img}`}
                alt={`Rishi Tour And Travels car ${idx + 1}`}
                className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Overlay Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              >
                <div className="flex items-center space-x-2">
                  <FaCar className="text-blue-300" />
                  <span className="text-sm font-medium">View Details</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Book Your Car?
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Contact us today for reliable and affordable car rental services in Kolkata
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:8917639029"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <FaPhone />
            <span>Call: 89176 39029</span>
          </a>
          <a
            href="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Get Quote
          </a>
        </div>
      </motion.section>

      {/* Modal for Enlarged Image */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md cursor-pointer p-4"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl max-h-[90vh]"
            >
              <img
                src={`/img/${selectedImg}`}
                alt="Enlarged view"
                className="rounded-xl shadow-2xl max-w-full max-h-[80vh] object-contain"
              />
              
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="absolute -top-4 -right-4 bg-white hover:bg-gray-100 text-blue-600 rounded-full p-3 shadow-2xl transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImg(null);
                }}
              >
                <FaTimes className="text-xl" />
              </motion.button>
              
              {/* Image Navigation would go here if you had multiple images in modal */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}