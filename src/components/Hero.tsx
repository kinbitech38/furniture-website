import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-14 sm:pb-20 lg:pb-28 overflow-hidden" id="home">
      {/* Background Decorative Element for wider screens */}
      <div className="absolute right-0 top-20 w-[45vw] max-w-2xl h-[70%] bg-brand-teal/25 rounded-l-[60px] -z-10 hidden lg:block pointer-events-none" />

      <div className="container-custom grid lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
        {/* Left Side */}
        <div className="relative z-10 lg:col-span-6 xl:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Dot Pattern (clipped cleanly) */}
            <div className="relative mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                Handcrafted Interior Elegance
              </div>
            </div>

            <h1 className="heading-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[2.9rem] xl:text-[3.8rem] 2xl:text-[4.5rem] leading-[1.08] mb-6 sm:mb-8 text-text-primary">
              Transforming <br className="hidden sm:inline" />
              Spaces with <br className="hidden sm:inline" />
              Artisan Design
            </h1>
            
            <p className="text-text-secondary text-sm sm:text-base max-w-lg leading-relaxed mb-8 opacity-90">
              A curated portfolio of bespoke furniture, architectural woodworks, and interior spaces. We harmonize timeless craftsmanship with contemporary living.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a 
                href="#portfolio" 
                className="px-6 sm:px-8 py-3.5 bg-brand-green text-white text-xs sm:text-sm font-bold rounded-full hover:bg-brand-green/90 transition-all shadow-md hover:shadow-lg active:scale-95 text-center"
              >
                Explore Commissions
              </a>
              <a 
                href="#about" 
                className="px-5 sm:px-6 py-3.5 border border-gray-200 hover:border-brand-green/40 text-text-primary text-xs sm:text-sm font-bold rounded-full hover:bg-bg-secondary transition-all text-center"
              >
                Our Philosophy
              </a>
            </div>

            {/* Quick Trust Highlights on Mobile/Laptop */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-gray-100 max-w-md">
              <div>
                <p className="font-bold text-base sm:text-xl text-text-primary">120+</p>
                <p className="text-[10px] sm:text-xs text-text-secondary">Custom Works</p>
              </div>
              <div>
                <p className="font-bold text-base sm:text-xl text-text-primary">100%</p>
                <p className="text-[10px] sm:text-xs text-text-secondary">Solid Wood & HDF</p>
              </div>
              <div>
                <p className="font-bold text-base sm:text-xl text-text-primary">5★</p>
                <p className="text-[10px] sm:text-xs text-text-secondary">Client Praise</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Image Area */}
        <div className="relative lg:col-span-6 xl:col-span-6">
          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-brand-teal rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] aspect-[4/3] sm:aspect-[1.1/1] overflow-hidden shadow-xl sm:shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
              alt="Gamila's interior artisan design space"
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-95"
              referrerPolicy="no-referrer"
            />
            
            {/* Shelf/Furniture Detail Floating */}
            <div className="absolute top-4 sm:top-8 left-4 sm:left-8 flex flex-col gap-2 max-w-[200px] sm:max-w-xs">
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-[10px] sm:text-xs font-medium tracking-wide">
                Gamila's Bespoke Lounge
              </div>
            </div>

            {/* Bottom Arrow Button */}
            <div className="absolute bottom-4 right-4 sm:-bottom-5 sm:right-6 lg:-bottom-6 lg:-left-6 z-30">
               <a 
                 href="#portfolio" 
                 aria-label="Scroll down to portfolio"
                 className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform group border border-gray-100"
               >
                  <ArrowDown size={20} className="text-text-primary group-hover:translate-y-1 transition-transform sm:hidden" />
                  <ArrowDown size={28} className="text-text-primary group-hover:translate-y-1 transition-transform hidden sm:block" />
               </a>
            </div>
          </motion.div>

          {/* Floating Accent Card (Visible on large screens without overlap) */}
          <div className="absolute -left-6 bottom-8 w-48 p-4 bg-white/80 backdrop-blur-xl rounded-2xl z-20 border border-white/40 shadow-lg hidden 2xl:block">
            <p className="text-[10px] font-bold uppercase tracking-wider text-brand-green">Showroom Ready</p>
            <p className="text-xs font-semibold text-text-primary mt-1">Visit our living gallery of curated commissions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
