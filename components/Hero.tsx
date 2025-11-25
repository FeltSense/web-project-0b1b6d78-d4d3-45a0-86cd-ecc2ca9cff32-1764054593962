import Image from 'next/image';

export default function Hero() {
  const collections = [
    {
      id: 1,
      title: 'Spring',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80',
      accent: 'Bloom'
    },
    {
      id: 2,
      title: 'Summer',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=80',
      accent: 'Radiance'
    },
    {
      id: 3,
      title: 'Autumn',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80',
      accent: 'Elegance'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-rose-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="text-rose-600 font-light tracking-[0.3em] text-sm uppercase">
              Seasonal Collection 2024
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Timeless
            <span className="block font-serif italic text-rose-600 mt-2">Sophistication</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Discover curated pieces that transcend seasons. Each collection tells a story of refined elegance and modern minimalism.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <Image
                src={collection.image}
                alt={`${collection.title} Collection`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-rose-400 font-light tracking-[0.2em] text-xs uppercase mb-2 block">
                    {collection.accent}
                  </span>
                  <h3 className="text-4xl font-light text-white mb-3 tracking-tight">
                    {collection.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-rose-500 group-hover:w-24 transition-all duration-500"></div>
                </div>
                
                {/* Hover Button */}
                <button className="mt-6 px-6 py-2.5 border border-white/30 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-white/10 font-light tracking-wide">
                  Explore Collection
                </button>
              </div>

              {/* Accent Corner */}
              <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-rose-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
          <button className="px-8 py-4 bg-rose-600 text-white rounded-full hover:bg-rose-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-light tracking-wide text-lg">
            View Full Collection
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-rose-600 hover:text-rose-600 transform hover:scale-105 transition-all duration-300 font-light tracking-wide text-lg">
            Book Consultation
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 right-10 w-32 h-32 border border-rose-200/30 rounded-full hidden xl:block"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 border border-rose-200/30 rounded-full hidden xl:block"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-gray-400 font-light tracking-widest mb-2">SCROLL</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-rose-400 to-transparent"></div>
      </div>
    </section>
  );
}
