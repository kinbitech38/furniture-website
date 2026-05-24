import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container-custom h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="text-2xl font-serif font-bold tracking-tighter">
            furni.portfolio
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">About</a>
            <a href="#portfolio" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Portfolio</a>
            <a href="#contact" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="text-text-primary hover:opacity-70 transition-opacity">
            <Search size={20} strokeWidth={2} />
          </button>
          <a 
            href="#portfolio" 
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-brand-green text-white rounded-full text-sm font-bold hover:scale-105 transition-transform"
          >
            Hire Us
          </a>
          <button className="md:hidden text-text-primary">
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current" />
          </button>
        </div>
      </div>
    </nav>
  );
}
