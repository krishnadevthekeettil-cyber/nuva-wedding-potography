import { motion } from "motion/react";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Desktop Background */}
          <img 
            src="https://getwallpapers.com/wallpaper/full/3/7/9/1419964-wedding-background-wallpaper-3840x2160-for-1080p.jpg" 
            alt="Wedding Rings"
            className="hidden md:block w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Mobile Background */}
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipMS4Zkm0ViKBj8_ud2yDDxa7Klz1MDNUZsmpJ-c=s1360-w1360-h1020-rw" 
            alt="Wedding Couple"
            className="block md:hidden w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-charcoal/20 backdrop-grayscale-[0.1]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="block text-brand-cream/80 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase mb-8">
              Luxury Wedding Photography
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-brand-cream tracking-tighter leading-[0.85] mb-12 text-balance">
              Capturing <br /> Timeless Moments
            </h1>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-4 bg-transparent border border-brand-cream px-8 sm:px-12 py-4 sm:py-6 text-brand-cream text-[10px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-brand-cream hover:text-brand-charcoal transition-all"
              >
                View Portfolio <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-cream/50 animate-bounce"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase vertical-text">Explore</span>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHVS_UdLfyIUz_DuSIpazZAyTXbmBGM59E7_INbh7V-A5jYYyMFJNqIbK0ds_PhIpDLBVBSkd6fbwvR5Td-AtEczQGtDwMKBIsk7SxmEx1qdZGdIfnSXjLEr_RVLrOkPza3kU1I0wRdfD3B=s1360-w1360-h1020-rw" 
                  alt="Nuva Studio Team"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-charcoal p-12 text-brand-cream hidden lg:block rounded-sm text-left">
                <p className="font-serif text-3xl italic mb-1">Authentic.</p>
                <p className="font-serif text-3xl italic">Timeless.</p>
                <div className="h-px w-12 bg-brand-cream/30 my-4" />
                <p className="text-[10px] tracking-widest uppercase opacity-60">Established 2020</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] text-brand-slate/40 uppercase mb-6 block">The Nuva Story</span>
              <h2 className="font-serif text-5xl md:text-6xl text-brand-charcoal mb-8 leading-[1.1] tracking-tight">
                Crafting visual legacies through a modern lens.
              </h2>
              <div className="space-y-6 text-brand-slate/70 text-lg leading-relaxed font-light">
                <p>
                  Nuva was born from a desire to redefine wedding photography in Kerala. We stepped away from the traditional to embrace an editorial, high-fashion aesthetic that prioritizes emotion over staging.
                </p>
                <p>
                  Based in Palakkad, we travel across the globe to capture stories of love, heritage, and the intimate moments that often go unseen. Our work is a blend of photojournalistic honesty and cinematic grandeur.
                </p>
              </div>
              
              <div className="mt-12 pt-12 border-t border-brand-slate/10 flex items-center gap-10">
                <div>
                  <p className="font-serif text-4xl text-brand-charcoal">150+</p>
                  <p className="text-[10px] tracking-widest uppercase text-brand-slate/40 mt-1">Weddings Captured</p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-brand-charcoal">05</p>
                  <p className="text-[10px] tracking-widest uppercase text-brand-slate/40 mt-1">Countries Explored</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Favorite Works Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 gap-8">
            <h2 className="font-serif text-4xl sm:text-5xl text-[#516173] leading-tight">Our Favorite Works</h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
              <span className="text-sm font-light text-brand-slate/50 max-w-xs">Visit the galleries to see more of our handcrafted stories</span>
              <div className="flex items-center gap-6 group cursor-pointer">
                <ChevronLeft size={20} className="text-brand-slate/40" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-brand-slate/60">Click Through</span>
                <ChevronRight size={20} className="text-brand-slate/40" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              { name: "DEV & VARSHA", location: "Kochi", img: "https://lh3.googleusercontent.com/p/AF1QipO99oiMegh3WNhvPaW5BsprpjfWRPhZC0e1K5AJ=s1360-w1360-h1020-rw" },
              { name: "ARUN & ATHIRA", location: "Palakkad", img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEGQRpmQpjxjFAHGAIl9ZWWBrWndMiwm9u-YBF4okExM2C97WsrNKnWIyjeGNa6Ig96byqhwiQfQClGzX4S-y_heLQcbJE48VEvxVEZsm_6WzFGWOhRPc1SsJSXcUGKb20uBHTfRnRmTNaQ=s1360-w1360-h1020-rw" },
              { name: "ANAS & FATHIMA", location: "Kochi", img: "https://lh3.googleusercontent.com/p/AF1QipPj824EJZY1W4LlnTbdtERKuNQIRo4XF4YiOm9o=s1360-w1360-h1020-rw" }
            ].map((work, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white border border-brand-slate/10 p-4 pb-0 group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-0">
                  <img src={work.img} alt={work.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4/5 bg-[#2C3E50] text-brand-cream py-6 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="font-serif text-xl tracking-tight mb-1">{work.name}</p>
                  <p className="text-[10px] tracking-widest uppercase opacity-60">
                    {work.location === "Kochi" ? "Wedding" : work.location === "Palakkad" ? "Ceremony" : "Engagement"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Videography Section */}
      <section className="py-24 sm:py-32 bg-brand-cream border-t border-brand-slate/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#516173] uppercase tracking-wider mb-8"
            >
              Wedding Videography <span className="block sm:inline">in Palakkad</span>
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              className="h-px bg-brand-slate/20 mx-auto mb-12"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto space-y-8 text-brand-slate/70 text-lg sm:text-xl leading-relaxed font-light"
            >
              <p>
                Our wedding videography brand was founded with a signature aesthetic: emotive, cinematic, and deeply personal. We believe your film should feel like a memory, unfolding with the rhythm of your day.
              </p>
              <p>
                From "same-day edits" that bring your morning to life by late evening, to documentary-style featurettes, we are setting new standards in Kerala's bridal filmmaking.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "https://www.youtube.com/embed/VHI3MLmqs1U?si=wpieAnHsdQ2k9Vtw",
              "https://www.youtube.com/embed/dmr7W3TxhLw?si=sZvA6mFeu4Zmb19n&start=240",
              "https://www.youtube.com/embed/IdGm8I5oK-0?si=46Z8I4pc9Ooz23f0",
              "https://www.youtube.com/embed/3RDdoHoDIs0?si=_KTWMROxHydmT05O"
            ].map((src, i) => (
              <motion.div 
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[14/9] overflow-hidden rounded-sm shadow-sm transition-shadow hover:shadow-xl"
              >
                {src.includes('youtube.com/embed') ? (
                  <iframe 
                    className="w-full h-full border-0"
                    src={src} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    <img 
                      src={src} 
                      alt={`Videography ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <Play size={20} className="text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section - Salini & Guna */}
      <section className="flex flex-col md:flex-row min-h-[700px] bg-[#F9FFF2] overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center p-12 lg:p-24 text-center relative">
          {/* Decorative Background Quote Marks */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.04] select-none scale-[3] text-brand-slate">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V11.5H13.517V9C13.517 7.61929 14.6363 6.5 16.017 6.5H19.017C20.3977 6.5 21.517 7.61929 21.517 9V15C21.517 16.3807 20.3977 17.5 19.017 17.5H16.017C16.017 19.433 14.45 21 12.517 21H14.017ZM2.51703 21L2.51703 18C2.51703 16.8954 3.41246 16 4.51703 16H7.51703C8.06931 16 8.51703 15.5523 8.51703 15V9C8.51703 8.44772 8.06931 8 7.51703 8H4.51703C3.96475 8 3.51703 8.44772 3.51703 9V11.5H2.01703V9C2.01703 7.61929 3.13632 6.5 4.51703 6.5H7.51703C8.89774 6.5 10.017 7.61929 10.017 9V15C10.017 16.3807 8.89774 17.5 7.51703 17.5H4.51703C4.51703 19.433 2.94998 21 1.01703 21H2.51703Z" />
            </svg>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-lg"
          >
            <p className="text-brand-slate/80 text-sm sm:text-base leading-relaxed font-light mb-16 px-4">
              Working with Nuva was one of the best decisions we made for our wedding. All the shoots were very well planned and coordinated by the team. Everything was exactly the way I wanted and I couldn't have asked more. They were extremely professional and very easy to communicate.
            </p>
            
            <div className="space-y-6 mb-16">
              <span className="text-[10px] font-bold tracking-[0.5em] text-brand-slate/30 uppercase">LOTS OF LOVE</span>
              <h3 className="font-serif text-5xl md:text-6xl text-brand-charcoal tracking-tighter font-medium">Salini / Guna</h3>
            </div>
            
            <Link 
              to="/portfolio" 
              className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase border-b border-brand-charcoal/20 pb-2 hover:border-brand-charcoal transition-all"
            >
              READ FULL STORY
            </Link>
          </motion.div>
        </div>
        
        <div className="flex-1 h-[500px] md:h-auto">
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipNw0i2nh3zd8nBYYDGf57tPWsvZSOCyByZZVXwO=s1360-w1360-h1020-rw" 
            alt="Salini and Guna Wedding Story" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </div>
  );
}
