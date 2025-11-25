'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-600 to-rose-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-2xl font-light tracking-tight text-gray-900">
              LUXE<span className="font-semibold">ATELIER</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-5 py-2 text-gray-700 hover:text-rose-600 font-light tracking-wide transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-rose-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
            <button className="ml-4 px-6 py-2.5 bg-rose-600 text-white rounded-full hover:bg-rose-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-light tracking-wide">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-1 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all duration-300 font-light tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <button className="mx-4 mt-2 px-6 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors duration-300 font-light tracking-wide">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
