"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-blue-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center ">
            <Image src="/images/Travelux-india.png" alt="Travelux India Logo" width={70} height={100} />
          </Link>

                {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-yellow-400">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/packages" className="hover:underline">Packages</Link></li>
          <li><Link href="/enquiry" className="hover:underline">Enquiry</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-yellow-400 text-2xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden bg-blue-800 p-4 space-y-3 text-center text-yellow-400">
            <li><Link href="/" className="block py-2 hover:bg-blue-700 rounded">Home</Link></li>
            <li><Link href="/about" className="block py-2 hover:bg-blue-700 rounded">About</Link></li>
            <li><Link href="/packages" className="block py-2 hover:bg-blue-700 rounded">Packages</Link></li>
            <li><Link href="/enquiry" className="block py-2 hover:bg-blue-700 rounded">Enquiry</Link></li>
          </ul>
        )}

      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6 mt-20">{children}</main>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">

            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Travelux India</h3>
              <p className="text-sm">
                Discover unforgettable travel experiences with expertly curated packages to Kerala's most stunning destinations.
              </p>
            </div>

      
             {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <p className="text-sm">Email: info.traveluxindia@gmail.com</p>
              <p className="text-sm">Phone: +91 9633111010</p>
            </div>

            {/* Office Address */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Office Address</h3>
              <p className="text-sm">Travelux India</p>
              <p className="text-sm">#4, First Floor, Geo Tower, Kavaraparambu</p>
              <p className="text-sm">Near Cochin International Airport, Kochi, Kerala, India</p>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61551762601021&mibextid=ZbWKwL"
                   className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition">
                  <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
                </a>
                <a href="https://wa.me/919633111010"
                   className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition">
                  <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/travelux_india_tours?igsh=MWc0b2o3bjNvazJ1Ng=="
                   className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition">
                  <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Travelux India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
