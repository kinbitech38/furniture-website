import React, { useState, useRef, useEffect } from 'react';
import { Camera, X } from 'lucide-react';
import defaultCeoPhoto from '../assets/images/ceo_profile_pic_1789403223702.jpg';

export default function Testimonials() {
  const [photoUrl, setPhotoUrl] = useState<string>(defaultCeoPhoto);
  const [showChangePhoto, setShowChangePhoto] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('gamila_ceo_photo');
    if (saved) {
      setPhotoUrl(saved);
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPhotoUrl(reader.result);
          try {
            localStorage.setItem('gamila_ceo_photo', reader.result);
          } catch {
            // Storage quota warning fallback
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative Circles with balanced medium border thickness */}
      <div className="absolute top-20 -left-12 w-44 h-44 border-[6px] border-brand-green/20 rounded-full opacity-60 pointer-events-none hidden sm:block" />
      <div className="absolute top-44 -left-6 w-24 h-24 border-[4px] border-brand-green/25 rounded-full opacity-60 pointer-events-none hidden sm:block" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-green mb-2 block">
            Leadership &amp; Vision
          </span>
          <h2 className="heading-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-text-primary">
            What our clients &amp; leadership say
          </h2>
          <p className="text-text-secondary text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Every piece crafted at Gamila's interior is guided by our dedication to timeless architectural presence and enduring quality.
          </p>
        </div>

        {/* Balanced medium-tone card (not too deep, clean border frame) */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center bg-gradient-to-br from-[#1B3B36]/[0.07] via-bg-secondary to-[#BDD2D2]/30 border-2 border-brand-green/25 rounded-2xl sm:rounded-[32px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg relative">
          
          {/* Client / CEO Photo with balanced medium border frame */}
          <div className="relative group max-w-[220px] sm:max-w-[260px] lg:max-w-none mx-auto w-full">
            <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-brand-green/40 shadow-md bg-brand-green/10">
              <img 
                 src={photoUrl} 
                 alt="Akinola Busayo - CEO Gamila's interior" 
                 className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                 referrerPolicy="no-referrer"
              />

              {/* Hidden file input */}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handlePhotoUpload} 
                accept="image/*" 
                className="hidden" 
              />

              {/* Select photo overlay pops out only when Akinola Busayo is clicked */}
              {showChangePhoto && (
                <div className="absolute inset-x-2.5 bottom-2.5 sm:inset-x-3 sm:bottom-3 flex items-center justify-between gap-1.5 z-20 bg-white/95 backdrop-blur-md p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-brand-green/30 shadow-xl transition-all duration-300">
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 bg-brand-green hover:bg-[#122A26] text-white py-2 px-3 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-1.5 text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
                    title="Select and upload a photo"
                  >
                    <Camera size={15} className="text-emerald-300" />
                    <span>Select photo</span>
                  </button>
                  <button
                    onClick={() => setShowChangePhoto(false)}
                    className="w-8 h-8 rounded-lg sm:rounded-xl bg-gray-100 hover:bg-gray-200 text-text-primary flex items-center justify-center transition-colors cursor-pointer shrink-0"
                    title="Close"
                    aria-label="Close"
                  >
                    <X size={15} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="text-center lg:text-left py-2 sm:py-4">
            <div className="flex flex-col gap-4 sm:gap-5">
              <div>
                <span className="text-brand-green font-bold text-base sm:text-lg tracking-wide">
                  Gamila's interior
                </span>
              </div>

              <div className="relative">
                <span className="text-3xl sm:text-4xl font-serif text-brand-green/50 select-none block -mb-2">“</span>
                <blockquote className="text-base sm:text-xl md:text-2xl font-serif italic text-text-primary/90 font-medium leading-relaxed">
                  A space or an office is empty without the right furniture.
                </blockquote>
              </div>
              
              {/* Only the clean name Akinola Busayo, clicking it pops out the select photo control */}
              <div className="pt-2 border-t border-brand-green/20">
                <h4 
                  onClick={() => setShowChangePhoto(prev => !prev)}
                  className="font-bold text-base sm:text-lg text-text-primary hover:text-brand-green transition-colors cursor-pointer inline-block select-none"
                  title="Click to select photo"
                >
                  Akinola Busayo
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary mt-0.5">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
