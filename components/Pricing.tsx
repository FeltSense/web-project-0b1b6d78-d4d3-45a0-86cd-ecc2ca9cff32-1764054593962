'use client';

import { Check, Sparkles } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Lifetime access to all features',
    'Priority customer support',
    'Early access to new collections',
    'Exclusive member-only events',
    'Personal styling consultations',
    'Free shipping on all orders'
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-rose-600" />
            <span className="text-sm font-medium text-rose-600">Limited Time Offer</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Exclusive Pre-Order
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our founding members and unlock lifetime access to luxury fashion at an unbeatable price
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-rose-200 hover:border-rose-400 transition-all duration-300 hover:shadow-rose-200/50">
            {/* Premium Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm">
              BEST VALUE
            </div>

            <div className="p-10">
              {/* Price */}
              <div className="text-center mb-8 pt-4">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-2xl text-gray-400 line-through font-medium">$99</span>
                  <span className="text-6xl font-bold text-gray-900">$29</span>
                </div>
                <p className="text-rose-600 font-semibold text-lg">Save 70% • Pre-Order Price</p>
                <p className="text-gray-500 mt-2">One-time payment, lifetime access</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center group-hover:bg-rose-600 transition-colors duration-300">
                      <Check className="w-4 h-4 text-rose-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Pre-Order Now - $29
              </button>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span>30-Day Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              <span className="font-bold text-rose-600">487 members</span> have already joined
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
