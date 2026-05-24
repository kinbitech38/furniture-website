/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import HotDeals from './components/HotDeals';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/ProductsSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-teal selection:text-brand-green">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <HotDeals />
        <AboutSection />
        <PortfolioSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

