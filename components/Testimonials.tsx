'use client';

import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sophia Laurent',
      role: 'Fashion Editor',
      avatar: 'https://i.pravatar.cc/150?img=47',
      quote: 'An exquisite collection that perfectly captures the essence of modern elegance. Every piece tells a story of timeless sophistication.',
      rating: 5
    },
    {
      id: 2,
      name: 'Isabella Chen',
      role: 'Style Curator',
      avatar: 'https://i.pravatar.cc/150?img=32',
      quote: 'The attention to detail is remarkable. These pieces have become the cornerstone of my wardrobe, effortlessly elevating every occasion.',
      rating: 5
    },
    {
      id: 3,
      name: 'Amélie Dubois',
      role: 'Creative Director',
      avatar: 'https://i.pravatar.cc/150?img=26',
      quote: 'A rare find in today\'s fashion landscape. The craftsmanship and design philosophy speak to those who truly appreciate quality.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Voices of Style
          </h2>
          <div className="w-16 h-px bg-rose-600 mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative Quote Mark */}
              <div className="absolute -top-6 -left-2 text-8xl font-serif text-rose-600/10 leading-none">
                "
              </div>

              {/* Card */}
              <div className="relative bg-white p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Quote */}
                <p className="text-gray-600 leading-relaxed mb-8 italic font-light">
                  {testimonial.quote}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-rose-600"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-rose-600/20 transition-all duration-300 group-hover:ring-rose-600">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 tracking-wide">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-rose-600 font-light">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
