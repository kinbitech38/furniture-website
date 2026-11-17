import { ShieldCheck, Award, Sparkles, Compass } from 'lucide-react';

export default function TrustedBy() {
  const highlights = [
    {
      icon: <Award className="text-brand-green" size={20} />,
      title: 'Artisan Precision',
      desc: 'Master handcrafted detailing'
    },
    {
      icon: <Sparkles className="text-brand-green" size={20} />,
      title: 'Bespoke Customization',
      desc: 'Engineered for your dimensions'
    },
    {
      icon: <Compass className="text-brand-green" size={20} />,
      title: 'Architectural Flow',
      desc: 'Harmonized spatial layouts'
    },
    {
      icon: <ShieldCheck className="text-brand-green" size={20} />,
      title: 'Premium Materials',
      desc: '100% durable hardwoods & HDF'
    }
  ];

  return (
    <section className="bg-bg-secondary py-8 sm:py-10 border-y border-gray-100/80" id="trusted-divider">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {highlights.map((item, i) => (
            <div key={i} className="flex items-start gap-3 sm:gap-3.5 p-3 rounded-2xl bg-white/60 sm:bg-transparent">
              <div className="p-2 sm:p-2.5 rounded-xl bg-brand-green/10 shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-text-primary leading-tight">{item.title}</h4>
                <p className="text-[11px] sm:text-xs text-text-secondary mt-0.5 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

