import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function Packages() {
  const packages = [
    {
      name: "Heritage",
      price: "₹1,25,000",
      description: "Perfect for intimate single-day celebrations.",
      features: ["Single Day Coverage", "Cinematic Teasers", "300+ Edited Photos", "Standard Photo Album"],
      popular: false
    },
    {
      name: "Signature",
      price: "₹2,50,000",
      description: "Our most popular selection for the full experience.",
      features: ["Dual Day Coverage", "Signature Cinematic Edit", "500+ Edited Photos", "Premium Coffee Table Book", "Drone Coverage"],
      popular: true
    },
    {
      name: "Royal",
      price: "₹4,50,000",
      description: "Unparalleled luxury and comprehensive storytelling.",
      features: ["Unlimited Coverage", "Full Feature Film", "All Edited High-Res Photos", "Bespoke Silk Album", "Pre-wedding Session", "Same-day Teasers"],
      popular: false
    }
  ];

  return (
    <section className="py-32 bg-brand-cream min-h-screen pt-40 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest text-brand-slate/40 uppercase">Investment</span>
          <h2 className="font-serif text-5xl text-brand-charcoal mt-4">Packages & Offerings</h2>
          <p className="mt-4 text-brand-slate/60 max-w-xl mx-auto text-center">Transparent pricing designed for quality and cinematic excellence.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-3xl flex flex-col h-full border text-left ${pkg.popular ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal shadow-2xl scale-105' : 'bg-white text-brand-slate border-brand-slate/10'}`}
            >
              <div className="mb-8">
                <h3 className="font-serif text-3xl mb-2">{pkg.name}</h3>
                <p className={`text-2xl font-light mb-4 ${pkg.popular ? 'text-brand-cream/60' : 'text-brand-slate/40'}`}>{pkg.price}</p>
                <p className={`text-sm ${pkg.popular ? 'text-brand-cream/40' : 'text-brand-slate/50'}`}>{pkg.description}</p>
              </div>
              <div className="flex-grow space-y-4 mb-10">
                {pkg.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Check size={14} className={pkg.popular ? "text-brand-cream/40" : "text-brand-slate/20"} />
                    <span className="text-sm font-light">{feature}</span>
                  </div>
                ))}
              </div>
              <a 
                href={`https://wa.me/917593038781?text=${encodeURIComponent(`Hello Nuva Studio! I'm interested in the ${pkg.name} package (${pkg.price}). Could you please share more details?`)}`}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-4 text-center text-[10px] font-bold tracking-widest uppercase rounded-full transition-all ${pkg.popular ? 'bg-brand-cream text-brand-charcoal' : 'bg-brand-charcoal text-brand-cream'}`}
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
