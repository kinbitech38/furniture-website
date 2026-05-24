import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-20 -left-12 w-40 h-40 border-[12px] border-brand-green/10 rounded-full opacity-50" />
      <div className="absolute top-40 -left-6 w-24 h-24 border-[8px] border-brand-green/20 rounded-full" />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="heading-serif text-5xl mb-6">What our happy<br />client say</h2>
          <p className="text-text-secondary text-sm">
            The storage made easy - including anything you want - including anything you want
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center bg-bg-secondary rounded-[40px] overflow-hidden p-8 md:p-12">
          {/* Client Photo */}
          <div className="aspect-square rounded-3xl overflow-hidden bg-brand-teal">
            <img 
               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop" 
               alt="Larry Diamond" 
               className="w-full h-full object-cover grayscale mix-blend-multiply"
               referrerPolicy="no-referrer"
            />
          </div>

          {/* Testimonial Content */}
          <div className="text-left py-4">
            <div className="flex flex-col gap-6">
              <span className="text-brand-green font-bold text-lg">furni.shop</span>
              <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-text-primary/80">
                “This storage made easy - including anything you want - that anything you want anywhere else. You want that”
              </p>
              
              <div>
                <h4 className="font-bold text-lg">Larry Diamond</h4>
                <p className="text-sm text-text-secondary">Chief Executive Officer</p>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <button className="w-10 h-10 rounded-full border border-text-primary/10 flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
                  <ChevronLeft size={18} />
                </button>
                <button className="w-10 h-10 rounded-full border border-text-primary/10 flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
