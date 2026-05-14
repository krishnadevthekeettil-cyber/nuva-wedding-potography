import { motion } from "motion/react";
import { Send, MapPin, Calendar, Instagram } from "lucide-react";
import { useState, FormEvent, ChangeEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    venue: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const { name, date, venue, message } = formData;
    const phoneNumber = "917593038781"; // Using +91 for India
    
    const text = `Hello Nuva Studio! 
New Inquiry from Contact Form:
Name: ${name}
Date: ${date}
Venue: ${venue}
Message: ${message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-32 bg-white min-h-screen pt-40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold tracking-widest text-brand-slate/40 uppercase">Start a Conversation</span>
            <h2 className="font-serif text-6xl text-brand-charcoal mt-6 mb-10">Tell us your story.</h2>
            <p className="text-brand-slate/60 mb-12 text-lg leading-relaxed">
              We would love to hear about your plans and vision. Our calendar fills up quickly, especially during the peak wedding season in Kerala. Reach out today to secure your date.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-brand-charcoal">
                <div className="w-10 h-10 rounded-full border border-brand-slate/10 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span className="text-sm font-light">Palakkad, Kerala, India</span>
              </div>
              <div className="flex items-center gap-4 text-brand-charcoal">
                <div className="w-10 h-10 rounded-full border border-brand-slate/10 flex items-center justify-center">
                  <Calendar size={18} />
                </div>
                <span className="text-sm font-light">Available for Destination Weddings Worldwide</span>
              </div>
              <div className="flex items-center gap-4 text-brand-charcoal">
                <div className="w-10 h-10 rounded-full border border-brand-slate/10 flex items-center justify-center">
                  <Instagram size={18} />
                </div>
                <span className="text-sm font-light underline">@nuvaweddingphotography</span>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-8 text-left">
              <div className="space-y-2 border-b border-brand-slate/10 pb-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-slate/40 text-left block">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none text-sm" 
                  placeholder="John Doe" 
                  required
                />
              </div>
              <div className="space-y-2 border-b border-brand-slate/10 pb-2 text-left">
                <label className="text-[10px] uppercase tracking-widest text-brand-slate/40 text-left block">Date</label>
                <input 
                  type="text" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none text-sm" 
                  placeholder="MM/DD/YYYY" 
                  required
                />
              </div>
            </div>
            <div className="space-y-2 border-b border-brand-slate/10 pb-2 text-left">
              <label className="text-[10px] uppercase tracking-widest text-brand-slate/40 text-left block">Venue</label>
              <input 
                type="text" 
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none text-sm" 
                placeholder="Location Name" 
                required
              />
            </div>
            <div className="space-y-2 border-b border-brand-slate/10 pb-2 text-left">
              <label className="text-[10px] uppercase tracking-widest text-brand-slate/40 text-left block">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none text-sm resize-none h-20" 
                placeholder="Your wedding vision..." 
                required
              />
            </div>
            <button 
              type="submit"
              className="flex items-center gap-3 bg-brand-charcoal text-brand-cream px-10 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase hover:scale-105 transition-transform group"
            >
              Send Inquiry <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
