import React from 'react';
import { motion } from 'motion/react';
import { ChevronUp, ChevronDown, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" id="home">
      {/* Background Decorative Element */}
      <div className="absolute left-[35%] top-20 w-[60%] h-[75%] bg-brand-teal/30 rounded-[60px] -z-10 hidden lg:block" />

      <div className="container-custom grid lg:grid-cols-[1fr_1.1fr] gap-4 items-center">
        {/* Left Side */}
        <div className="relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Dot Pattern */}
            <div className="absolute -top-16 -left-8 opacity-20 pointer-events-none">
              <div className="grid grid-cols-5 gap-3">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-text-primary" />
                ))}
              </div>
            </div>

            <h1 className="heading-serif text-6xl md:text-[5.5rem] leading-[1] mb-10">
              Transforming<br />
              Spaces with<br />
              Artisan Design
            </h1>
            <p className="text-text-secondary text-sm md:text-base max-w-sm leading-relaxed mb-10 opacity-80">
              A curated portfolio of modern furniture and interior architecture. We blend timeless craftsmanship with contemporary aesthetics.
            </p>
          </motion.div>
        </div>

        {/* Right Side - Image Area */}
        <div className="relative lg:pl-12">
          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-brand-teal rounded-[40px] aspect-[1.1/1] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
              alt="Modern Interior"
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90"
              referrerPolicy="no-referrer"
            />
            
            {/* Shelf/Furniture Detail Floating */}
            <div className="absolute top-12 left-12 flex flex-col gap-4">
              <div className="w-48 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20" />
            </div>

            {/* Bottom Arrow Button */}
            <div className="absolute -bottom-10 right-10 lg:right-auto lg:-left-10 z-30">
               <a href="#portfolio" className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform group">
                  <ArrowDown size={32} className="text-text-primary group-hover:translate-y-1 transition-transform" />
               </a>
            </div>
          </motion.div>

          {/* Floating Card on the transition */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-80 bg-white/50 backdrop-blur-2xl rounded-3xl z-20 border border-white/30 shadow-xl hidden xl:block" />

          {/* Right Rail Navigation */}
          <div className="absolute -right-16 md:-right-24 top-1/2 -translate-y-1/2 flex flex-col items-center gap-12 hidden md:flex">
            <div className="flex flex-col gap-4">
              <button className="p-1 text-text-primary/30 hover:text-text-primary transition-colors cursor-pointer">
                <ChevronUp size={20} />
              </button>
              <button className="p-1 text-text-primary/30 hover:text-text-primary transition-colors cursor-pointer">
                <ChevronDown size={20} />
              </button>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-bold font-serif tracking-widest uppercase">01</span>
              <div className="w-px h-16 bg-text-primary/10" />
              <span className="text-sm text-text-secondary/40 font-bold font-serif tracking-widest uppercase">06</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
