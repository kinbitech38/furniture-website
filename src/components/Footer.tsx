import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white py-20" id="contact">
      <div className="container-custom">
        {/* CTA Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pb-20 border-b border-white/10 mb-20">
          <h2 className="heading-serif text-4xl md:text-5xl max-w-xl text-center md:text-left">
            Ready to transform your space with artisan design?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#portfolio" className="px-8 py-4 bg-white text-brand-green font-bold rounded-full hover:bg-brand-teal transition-colors">
              Get Started
            </a>
            <a href="mailto:hello@furni.portfolio" className="px-8 py-4 border border-white/20 font-bold rounded-full hover:bg-white/10 transition-colors">
              Contact Sales
            </a>
          </div>
        </div>

        {/* Links Area */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 border-b border-white/10 md:border-none pb-8 md:pb-0">
            <a href="/" className="text-3xl font-serif font-bold tracking-tighter mb-4 block">
              furni.portfolio
            </a>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Design Studio</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Residential</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bespoke</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Studio</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ticket</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/10 text-[10px] uppercase tracking-widest text-white/40">
          <p>© 2026 furni.portfolio. Developed by <span className="text-white font-bold">Kinbi Tech</span></p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="flex items-center gap-4">
            <Facebook size={18} className="cursor-pointer hover:text-white transition-colors" />
            <Twitter size={18} className="cursor-pointer hover:text-white transition-colors" />
            <Instagram size={18} className="cursor-pointer hover:text-white transition-colors" />
            <Linkedin size={18} className="cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
