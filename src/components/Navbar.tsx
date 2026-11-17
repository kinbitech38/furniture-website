import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/50">
      <div className="container-custom h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-8 lg:gap-12 min-w-0">
          <a href="/" className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-text-primary truncate">
            Gamila's interior
          </a>
          
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 shrink-0">
          <button 
            aria-label="Search portfolio" 
            className="p-2 text-text-primary hover:opacity-70 transition-opacity rounded-full hover:bg-bg-secondary"
          >
            <Search size={18} className="sm:w-5 sm:h-5" strokeWidth={2} />
          </button>
          <a 
            href="#portfolio" 
            className="hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-brand-green text-white rounded-full text-xs lg:text-sm font-bold hover:scale-105 transition-transform"
          >
            Hire Us
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary hover:opacity-70 focus:outline-none p-2 rounded-lg hover:bg-bg-secondary transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-16 sm:top-20 bg-text-primary/30 backdrop-blur-xs md:hidden z-40"
            />
            {/* Menu Panel */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-16 sm:top-20 h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] w-4/5 max-w-xs bg-white shadow-2xl p-6 sm:p-8 md:hidden z-40 flex flex-col justify-between border-l border-gray-100 overflow-y-auto"
            >
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/60 pb-2 border-b border-gray-100">Navigation</span>
                {navLinks.map((link) => (
                  <a 
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base sm:text-lg font-medium text-text-secondary hover:text-text-primary transition-colors py-2 border-b border-gray-50 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-text-secondary/40 font-mono">→</span>
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-gray-100">
                <a 
                  href="#portfolio" 
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-brand-green text-white rounded-full text-sm font-bold text-center shadow-md active:scale-98 transition-transform"
                >
                  Hire Us
                </a>
                <p className="text-center text-[10px] text-text-secondary/60">Gamila's interior Design Studio</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
