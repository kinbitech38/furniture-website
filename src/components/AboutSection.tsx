import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const points = [
    { num: '1.', title: 'Who We Are', desc: 'The gift of a happy life is better than a wealth with a full pocket' },
    { num: '2.', title: 'What Do We Do', desc: 'The gift of a happy life is better than a wealth with a full pocket' },
    { num: '3.', title: 'How Do We Help', desc: 'The gift of a happy life is better than a wealth with a full pocket' },
    { num: '4.', title: 'Create success story', desc: 'The gift of a happy life is better than a wealth with a full pocket' }
  ];

  return (
    <section className="py-24" id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <div className="pt-8">
            <h2 className="heading-serif text-5xl mb-16">About Us</h2>
            
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
              {points.map((point) => (
                <div key={point.num} className="flex flex-col gap-4">
                  <span className="font-bold text-xl">{point.num}</span>
                  <h3 className="font-bold text-base">{point.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-16 flex items-center gap-2 group text-sm font-bold border-b-2 border-brand-green/20 pb-2 hover:border-brand-green transition-colors">
              Learn more
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
               <div className="bg-bg-secondary rounded-2xl overflow-hidden aspect-[3/4]">
                  <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2000&auto=format&fit=crop" alt="Furniture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="bg-bg-secondary rounded-2xl overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2000&auto=format&fit=crop" alt="Furniture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
            </div>
            <div className="space-y-4 pt-12">
               <div className="bg-bg-secondary rounded-2xl overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop" alt="Furniture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="bg-bg-secondary rounded-2xl overflow-hidden aspect-[3/4]">
                  <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2000&auto=format&fit=crop" alt="Furniture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
