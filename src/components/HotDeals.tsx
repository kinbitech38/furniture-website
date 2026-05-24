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
    <section className="py-24">
      <div className="container-custom grid lg:grid-cols-4 gap-12 items-start">
        <div className="lg:pr-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="heading-serif text-4xl">Our</h2>
            <Flame className="text-brand-green fill-brand-green/20" size={24} />
          </div>
          <h2 className="heading-serif text-4xl mb-6">expertise</h2>
          <p className="text-text-secondary text-sm">
            Elevating everyday spaces through thoughtful design.
          </p>
        </div>

        {offerings.map((deal, i) => (
          <div key={i} className="flex flex-col gap-5 pt-2">
            <div className="w-12 h-12 rounded-xl bg-bg-secondary flex items-center justify-center">
              {deal.icon}
            </div>
            <h3 className="font-bold text-lg">{deal.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {deal.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
