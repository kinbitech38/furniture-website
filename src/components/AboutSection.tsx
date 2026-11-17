import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const points = [
    { title: 'Who We Are', desc: 'A premier interior woodworking and furniture design studio dedicated to authentic luxury.' },
    { title: 'What We Do', desc: 'Custom furniture craftsmanship, turnkey residential cabinetry, flush doors, and commercial fitouts.' },
    { title: 'How We Help', desc: 'From 3D spatial planning and sustainable timber selection to on-site precision installation.' },
    { title: 'Our Guarantee', desc: 'Uncompromising attention to joinery, structural longevity, and bespoke elegance.' }
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24" id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block text-[11px] font-bold uppercase tracking-widest text-brand-green mb-3">Our Story</div>
            <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 text-text-primary">
              Crafting environments that inspire daily life.
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-6 sm:gap-y-10">
              {points.map((point) => (
                <div key={point.title} className="flex flex-col gap-1.5 sm:gap-2 p-4 sm:p-0 rounded-2xl bg-bg-secondary/40 sm:bg-transparent">
                  <h3 className="font-bold text-base sm:text-lg text-text-primary">{point.title}</h3>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12">
              <a 
                href="#portfolio"
                className="inline-flex items-center gap-2 group text-xs sm:text-sm font-bold border-b-2 border-brand-green/30 pb-2 hover:border-brand-green hover:text-brand-green transition-all"
              >
                Explore our portfolio of works
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 lg:mt-0">
            <div className="space-y-3 sm:space-y-4">
               <div className="bg-bg-secondary rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] shadow-sm">
                  <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2000&auto=format&fit=crop" alt="Gamila's interior furniture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
               </div>
               <div className="bg-bg-secondary rounded-xl sm:rounded-2xl overflow-hidden aspect-square shadow-sm">
                  <img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2000&auto=format&fit=crop" alt="Gamila's interior furniture detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
               </div>
            </div>
            <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-10">
               <div className="bg-bg-secondary rounded-xl sm:rounded-2xl overflow-hidden aspect-square shadow-sm">
                  <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop" alt="Gamila's interior luxury chair" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
               </div>
               <div className="bg-bg-secondary rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] shadow-sm">
                  <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2000&auto=format&fit=crop" alt="Gamila's interior living space" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
