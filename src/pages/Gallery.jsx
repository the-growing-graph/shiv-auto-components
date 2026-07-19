import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const IMAGES = [
  { id: 1, title: "Quality Room", image_url: "/office_image_1.png" },
  { id: 2, title: "Quality Assurance Room", image_url: "/office_image_2.png" },
  { id: 3, title: "Dojo Room", image_url: "/office_image_3.png" },
  { id: 4, title: "Office Entrance", image_url: "/office_image_4.png" },
  { id: 5, title: "Production Floor", image_url: "/office_image_5.png" },
  { id: 6, title: "Forklifter Machine", image_url: "/office_image_6.png" },
  { id: 7, title: "Office Entrance 2", image_url: "/office_image_7.png" },
  { id: 8, title: "Hydraulic Press Machine Operation", image_url: "/office_image_8.png" },
  { id: 9, title: "Power Press Production Line", image_url: "/office_image_9.png" },
  { id: 10, title: "Production floor", image_url: "/office_image_10.png" },
  { id: 11, title: "Corridor Image", image_url: "/office_image_11.png" },
  { id: 12, title: "Accountant area", image_url: "/office_image_12.png" },
  { id: 13, title: "Entrance Image", image_url: "/office_image_13.png" },
  { id: 14, title: "Outside Image", image_url: "/office_image_14.png" },
  { id: 15, title: "Store Room", image_url: "/office_image_15.png" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div data-testid="gallery-page" className="pb-24">
      <section className="py-24 lg:py-32 bg-[#0F2B46] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-eyebrow text-[#60A5FA] mb-4">Gallery</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl leading-[1.02] tracking-tight">
            Step inside the factory.
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {IMAGES.map((g) => (
              <motion.div
                key={g.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full bg-white border border-gray-100 rounded-3xl shadow-xl transition-all duration-300 group hover:-translate-y-1 overflow-hidden"
              >
                <button
                  data-testid={`gallery-item-${g.id}`}
                  onClick={() => setLightbox(g)}
                  className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50 block"
                >
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm border border-gray-200/50 flex items-center justify-center shadow-sm z-10">
                    <img src="/logo.png" alt="SAC Logo" className="w-16 object-contain" />
                  </div>
                  <img src={g.image_url} alt={g.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform" />
                </button>
                <div className="p-5 text-left">
                  <h3 className="font-display font-bold text-lg text-[#0F2B46] mb-1">{g.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            data-testid="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              data-testid="lightbox-close"
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-sm"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              src={lightbox.image_url}
              alt={lightbox.title}
              className="max-w-[92vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
