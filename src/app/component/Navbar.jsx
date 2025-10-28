"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaPhone, FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
          }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <h1
              className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? "text-gray-800" : "text-white"
                }`}
            >
              Rishi Tour & Travels
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Services", "Gallery", "Contact"].map((item, i) => (
              <a
                key={i}
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                className={`font-medium transition-colors duration-300 ${isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-300"
                  }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Call Now Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:8917639029"
              className={`px-4 py-2 rounded-full flex items-center space-x-2 transition ${isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-blue-600 hover:bg-gray-200"
                }`}
            >
              <FaPhone className="text-sm" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-2xl focus:outline-none transition-colors duration-300 ${isScrolled ? "text-gray-800" : "text-white"
                }`}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full px-6 py-4 space-y-4 z-40">
            <a
              href="/"
              className="block text-gray-800 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-gray-800 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="/services"
              className="block text-gray-800 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/gallery"
              className="block text-gray-800 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              href="/contact"
              className="block text-gray-800 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="tel:8917639029"
              className="block bg-blue-600 text-white px-4 py-2 rounded-full text-center hover:bg-blue-700 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Call Now
            </a>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar