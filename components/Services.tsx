'use client';

import { Sparkles, Grid3x3, BookOpen, Heart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Seasonal Collections',
      description: 'Curated hero showcases featuring the latest trends and must-have pieces from each season.',
      highlight: 'New arrivals weekly'
    },
    {
      icon: Grid3x3,
      title: 'Smart Filtering',
      description: 'Navigate effortlessly through women\'s wear, accessories, shoes, and bags with intuitive categories.',
      highlight: 'Find your perfect piece'
    },
    {
      icon: BookOpen,
      title: 'Designer Lookbooks',
      description: 'Explore exclusive designer collections through stunning gallery presentations and editorial stories.',
      highlight: 'Curated excellence'
    },
    {
      icon: Heart,
      title: 'Personal Styling',
      description: 'Expert size guides, styling tips, and personalized recommendations tailored to your unique taste.',
      highlight: 'Your style journey'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-rose-600 text-sm font-semibold tracking-widest uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Elevated Shopping Experience
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover a refined approach to fashion retail, where curation meets convenience
            and style finds sophistication.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-50 p-8 rounded-2xl transition-all duration-300 hover:bg-gray-900 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-rose-600 rounded-xl flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Highlight Badge */}
                <div className="inline-block">
                  <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                    {service.highlight}
                  </span>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-rose-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-6">
            Experience fashion reimagined with our comprehensive suite of services
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Explore Collections
          </button>
        </div>
      </div>
    </section>
  );
}
