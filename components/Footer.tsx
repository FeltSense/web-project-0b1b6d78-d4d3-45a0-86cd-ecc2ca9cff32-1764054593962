'use client';

import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'New Arrivals', href: '#collections' },
      { name: 'Collections', href: '#collections' },
      { name: 'Featured', href: '#featured' },
      { name: 'Sale', href: '#collections' }
    ],
    about: [
      { name: 'Our Story', href: '#about' },
      { name: 'Craftsmanship', href: '#about' },
      { name: 'Sustainability', href: '#about' },
      { name: 'Press', href: '#contact' }
    ],
    service: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Shipping Info', href: '#contact' },
      { name: 'Returns', href: '#contact' },
      { name: 'Size Guide', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-light text-white mb-3 tracking-wide">
              Join Our Atelier
            </h3>
            <p className="text-gray-400 mb-8 font-light">
              Subscribe to receive exclusive updates, early access to new collections, and curated style inspiration.
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-500 focus:outline-none focus:border-rose-600 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-rose-600 text-white font-medium hover:bg-rose-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-light text-white mb-4 tracking-wider">
              ATELIER LUXE
            </h2>
            <p className="text-gray-400 mb-6 font-light leading-relaxed max-w-sm">
              Curating timeless elegance through exceptional craftsmanship and sustainable luxury fashion since 2024.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-rose-600 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Fashion Avenue<br />New York, NY 10001
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span className="text-gray-400">hello@atelierluxe.com</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-white font-medium mb-6 tracking-wide">SHOP</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-rose-500 transition-colors text-sm font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-white font-medium mb-6 tracking-wide">ABOUT</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-rose-500 transition-colors text-sm font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="text-white font-medium mb-6 tracking-wide">SERVICE</h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-rose-500 transition-colors text-sm font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-500 text-sm font-light">
              © {currentYear} Atelier Luxe. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-rose-500 transition-colors font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-rose-500 transition-colors font-light">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
