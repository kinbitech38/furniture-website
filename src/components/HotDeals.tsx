import React from 'react';
import { Flame, Wallet, Calendar, PiggyBank } from 'lucide-react';

export default function HotDeals() {
  const offerings = [
    {
      icon: <Wallet className="text-brand-green" size={24} />,
      title: 'Custom Furniture',
      desc: 'Bespoke designs tailored to your unique space and style.'
    },
    {
      icon: <Calendar className="text-brand-green" size={24} />,
      title: 'Interior Planning',
      desc: 'Strategic layout and curation for modern living environments.'
    },
    {
      icon: <PiggyBank className="text-brand-green" size={24} />,
      title: 'Material Sourcing',
      desc: 'Premium, sustainable materials selected for beauty and longevity.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 items-start">
        <div className="lg:pr-4">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <h2 className="heading-serif text-3xl sm:text-4xl text-text-primary">Our</h2>
            <Flame className="text-brand-green fill-brand-green/20" size={24} />
          </div>
          <h2 className="heading-serif text-3xl sm:text-4xl mb-4 sm:mb-6 text-text-primary">Expertise</h2>
          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-xs">
            Elevating living, working, and architectural spaces through dedicated woodworking and interior curation.
          </p>
        </div>

        {offerings.map((deal, i) => (
          <div 
            key={i} 
            className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-4 lg:p-0 rounded-2xl bg-bg-secondary/60 sm:bg-transparent border border-gray-100/60 sm:border-none"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white sm:bg-bg-secondary shadow-xs sm:shadow-none flex items-center justify-center shrink-0">
              {deal.icon}
            </div>
            <h3 className="font-bold text-base sm:text-lg text-text-primary">{deal.title}</h3>
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
              {deal.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
