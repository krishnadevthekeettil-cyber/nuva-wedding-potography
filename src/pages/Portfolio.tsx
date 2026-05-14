import { motion } from "motion/react";

export default function Portfolio() {
  const photos = [
    { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAED3TKjirHk94f6kDbEbWfTAoypqy13Me4J7krSdBtZnrOE-Ti2nnhSEjjEJu6JH8agdl9sQSq4Wn--hLsk8LxZhHNJx_cnYgheH65sd3h1l1729CgFKtvwkQ4jN7h610D-OsjxL4sTZng=s1360-w1360-h1020-rw", span: "md:col-span-2", alt: "Ceremony" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipO99oiMegh3WNhvPaW5BsprpjfWRPhZC0e1K5AJ=s1360-w1360-h1020-rw", span: "md:col-span-1", alt: "Bride" },
    { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEGQRpmQpjxjFAHGAIl9ZWWBrWndMiwm9u-YBF4okExM2C97WsrNKnWIyjeGNa6Ig96byqhwiQfQClGzX4S-y_heLQcbJE48VEvxVEZsm_6WzFGWOhRPc1SsJSXcUGKb20uBHTfRnRmTNaQ=s1360-w1360-h1020-rw", span: "md:col-span-1", alt: "Couple" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipMKAnE4JPlUHzcg98TyvrXLUc_M5wzND7a7yS_L=s1360-w1360-h1020-rw", span: "md:col-span-1", alt: "Moments" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipMTcVfYBkZVCeafvxOX8UJTbMiP73Aun8zKING5=s1360-w1360-h1020-rw", span: "md:col-span-2", alt: "Landscape Wedding" },
    { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEiPI_vVroewFTi26TFuXkQBwfd5bDiu9di8IafkYZU68rtK2fMr2GTtsB6AKhL4LdEiaZaRI3BAh8LuO8MN17sWnkCjozjeq0STyRv5LARQMlT8mNNoNGqejhm3Qv3PCjjaPNgkq4l9vq-=s1360-w1360-h1020-rw", span: "md:col-span-1", alt: "Bride" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipO5XxfM906usSWysJ1GwzCVspox8k_VnWW3aYGL=s1360-w1360-h1020-rw", span: "md:col-span-1", alt: "Couple" },
    { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAG5BbNG4ifINSvxjHIgtHfpXAayCgKawX_OIJ6TG7ZhULS3UuY6W2Oc3QWQy_XF3_JJgmh1x5EsxjCRJJ1qEiM8XoxdaHWgTouG5c4iERZ26mP0xQmEFENuZfJoQUbrIddAhp6jW4OFZHg=s1360-w1360-h1020-rw", span: "md:col-span-1", alt: "Moments" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipMMeHcqZWuqLB0yZ4PXph-0AcD3M8Elpt7M4Nad=s1360-w1360-h1020-rw", span: "md:col-span-2", alt: "Landscape Wedding" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipMEwpNkWt939H5Ph6f1yb6ZdcBKpfJu3fernKOX=s1360-w1360-h1020-rw", span: "md:col-span-1", alt: "Bride" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipPHgoIHYslY4-y7RvW-pV-jlH7MdLO_8vO2nwQE=s1360-w1360-h1020-rw", span: "md:col-span-1", alt: "Couple" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipOfcFKLZCOFx-yNczfsSpR2QRI5Aty7rjLufHuN=s1360-w1360-h1020-rw", span: "md:col-span-1", alt: "Moments" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipMHOaq3NtPvPIaVobUfXHo_XIDdMRHcT3UOv5SA=s1360-w1360-h1020-rw", span: "md:col-span-2", alt: "Landscape Wedding" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipM9UCjk_11CDYbNhO-36VG8kV7e7Xm3LQz0tWYa=s1360-w1360-h1020-rw", span: "md:col-span-1", alt: "Tradition" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipO3H4WzLFHbLhy53GJ9K3BH7rvhiQYW3gtIpwd-=s1360-w1360-h1020-rw", span: "md:col-span-1", alt: "Golden Hour" },
    { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGuzwO1mQMkB0e3X7YE4YYqJ5vNEZK4REwEsoyyJ2Jjcb4rUCos-ndjJV6VOD9pbJl7g_zy6fW2uqhwc5ar_i-AYZx7MRctZ3mIvyczruxuVpUg4Mwfh2yHtsUBo4infrHcOaF8pYcg7Wri=s1360-w1360-h1020-rw", span: "md:col-span-1", alt: "Joy" },
  ];

  return (
    <section className="py-32 bg-brand-cream min-h-screen pt-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest text-brand-slate/40 uppercase">Selected Works</span>
            <h2 className="font-serif text-5xl text-brand-charcoal mt-4">The Portfolio</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md text-brand-slate/60 text-right"
          >
            A curated selection of our favorite weddings, captured across Palakkad, Kochi, and international destinations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-xl bg-brand-slate/10 cursor-pointer h-[400px] ${photo.span}`}
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-left">
                <span className="text-brand-cream/60 text-[10px] tracking-widest uppercase mb-2">Kerala Wedding</span>
                <p className="text-brand-cream font-serif text-2xl">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
