import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white py-12 sm:py-16 lg:py-20" id="contact">
      <div className="container-custom">
        {/* CTA Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-10 pb-12 sm:pb-16 border-b border-white/10 mb-12 sm:mb-16 text-center md:text-left">
          <h2 className="heading-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-xl">
            Ready to transform your space with artisan design?
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto shrink-0">
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-brand-green text-xs sm:text-sm font-bold rounded-full hover:bg-brand-teal transition-all text-center shadow-md active:scale-95"
            >
              Get Started
            </a>
            <a 
              href="mailto:hello@gamilasinterior.com" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-white/30 text-white text-xs sm:text-sm font-bold rounded-full hover:bg-white/10 transition-all text-center"
            >
              Contact Sales
            </a>
          </div>
        </div>

        {/* Links Area */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div className="col-span-2 md:col-span-1 border-b border-white/10 md:border-none pb-6 md:pb-0">
            <a href="/" className="text-2xl sm:text-3xl font-serif font-bold tracking-tight mb-2 block">
              Gamila's interior
            </a>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold mb-3">Design Studio</p>
            <p className="text-xs text-white/60 leading-relaxed max-w-xs">
              Handcrafted furniture, bespoke interior cabinetry, doors, and architectural joinery for fine spaces.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6 text-white/90">Expertise</h4>
            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm text-white/65">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Residential Living</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Executive Office</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Custom Cabinetry</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Doors & Frames</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6 text-white/90">Studio</h4>
            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm text-white/65">
              <li><a href="#about" className="hover:text-white transition-colors">About Gamila's</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Showroom Clips</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Custom Portfolio</a></li>
              <li><a href="#home" className="hover:text-white transition-colors">Philosophy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6 text-white/90">Contact</h4>
            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm text-white/65">
              <li><span className="text-white/40 block text-[10px] uppercase font-mono">Email</span> hello@gamilasinterior.com</li>
              <li><span className="text-white/40 block text-[10px] uppercase font-mono">Consultations</span> Available Nationwide</li>
              <li><span className="text-white/40 block text-[10px] uppercase font-mono">Studio Hours</span> Mon - Sat, 9am - 6pm</li>
            </ul>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10 text-[10px] uppercase tracking-wider text-white/45">
          <p>© 2026 Gamila's interior. Developed by <span className="text-white font-bold">Kinbi Tech</span></p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <Facebook size={16} className="cursor-pointer hover:text-white transition-colors" />
            <Twitter size={16} className="cursor-pointer hover:text-white transition-colors" />
            <Instagram size={16} className="cursor-pointer hover:text-white transition-colors" />
            <Linkedin size={16} className="cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
