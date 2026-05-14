import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen selection:bg-brand-slate selection:text-brand-cream bg-brand-cream">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-slate/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuoNbUP9An3LQVnIPp69JE3JjArjr0g22RAw&s" 
              alt="NUVA Logo" 
              className="h-10 w-auto mix-blend-multiply transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <span className="font-serif text-2xl tracking-tighter font-bold text-brand-charcoal">
              NUVA
            </span>
          </Link>
          
          <div className="hidden lg:flex gap-12 text-[10px] font-bold tracking-[0.3em] uppercase text-brand-slate/50">
            <Link to="/portfolio" className="hover:text-brand-slate transition-colors">Portfolio</Link>
            <Link to="/packages" className="hover:text-brand-slate transition-colors">Packages</Link>
            <Link to="/contact" className="hover:text-brand-slate transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden sm:inline-flex text-[10px] font-bold tracking-widest uppercase border border-brand-slate/20 px-8 py-3 rounded-full hover:bg-brand-slate hover:text-brand-cream transition-all">
              Book Session
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-brand-charcoal"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-cream pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              <Link to="/portfolio" className="font-serif text-4xl text-brand-charcoal">Portfolio</Link>
              <Link to="/packages" className="font-serif text-4xl text-brand-charcoal">Packages</Link>
              <Link to="/contact" className="font-serif text-4xl text-brand-charcoal">Contact</Link>
              <div className="pt-12">
                <Link to="/contact" className="inline-block text-[10px] font-bold tracking-widest uppercase border border-brand-slate/20 px-12 py-4 rounded-full bg-brand-charcoal text-brand-cream">
                  Book Session
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <Outlet />
      </main>

      <footer className="py-24 bg-brand-charcoal text-brand-cream/40 px-6 sm:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-6">
            <Link to="/" className="flex items-center justify-center md:justify-start gap-4 group">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/015/282/896/non_2x/nv-initial-wedding-monogram-logo-vector.jpg" 
                alt="NUVA Logo" 
                className="h-14 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-all group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-4xl text-brand-cream tracking-tighter">NUVA</span>
            </Link>
            <p className="text-[10px] max-w-xs leading-relaxed tracking-widest uppercase opacity-60">
              © 2026 Nuva Studio. Capturing authentic human connections through minimalist visual storytelling.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6 text-[10px] tracking-[0.2em] uppercase font-bold">
            <a href="#" className="hover:text-brand-cream transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-cream transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-cream transition-colors">Pinterest</a>
            <a href="#" className="hover:text-brand-cream transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
