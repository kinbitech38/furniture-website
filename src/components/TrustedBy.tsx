import React from 'react';

export default function TrustedBy() {
  const logos = [
    { name: 'Microsoft', type: 'text' },
    { name: 'Entrepreneur', type: 'text' },
    { name: 'FORTUNE', type: 'text' },
    { name: 'Business Insider', type: 'text' },
    { name: 'Mashable', type: 'text' }
  ];

  return (
    <section className="bg-bg-secondary py-20">
      <div className="container-custom">
        <p className="text-center text-[10px] font-bold tracking-[0.3em] text-text-secondary/40 uppercase mb-16">
          Trusted by over 1k+ companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-32 opacity-20 grayscale grayscale-100 contrast-125">
          {logos.map((logo) => (
            <span key={logo.name} className="text-lg md:text-xl font-bold tracking-tight font-sans">
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
