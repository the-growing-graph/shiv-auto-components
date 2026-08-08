import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEFAULT_IMAGES = ["/hero_bg_1.png", "/hero_bg_2.png", "/hero_bg_3.png"];

export default function HeroSlider({ slides, interval = 6000, className = "", extraContent = null }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides, interval]);

  const currentSlide = slides[currentIndex] || {};
  const bgImage = currentSlide.image || DEFAULT_IMAGES[currentIndex % DEFAULT_IMAGES.length];

  // Right to left slide variants for both image & text
  const slideVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 }
  };

  return (
    <div className={`relative overflow-hidden bg-[#0F2B46] text-white min-h-[380px] sm:min-h-[440px] flex flex-col justify-center ${className}`}>
      {/* Background Image Carousel with Right-to-Left Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          {/* Gradient Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B46]/95 via-[#0F2B46]/85 to-[#0F2B46]/75" />
          <div className="absolute inset-0 bg-grid-navy opacity-20" />
        </motion.div>
      </AnimatePresence>

      {/* Foreground Content Carousel with Right-to-Left Animation */}
      <div className="relative z-10 w-full py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="max-w-4xl"
            >
              {currentSlide.eyebrow && (
                <div className="font-['Outfit'] inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold tracking-wider rounded-full bg-blue-500/20 text-[#60A5FA] border border-blue-400/30 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                  <span>{currentSlide.eyebrow}</span>
                </div>
              )}
              {currentSlide.title && (
                <h1 className="font-['Outfit'] font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.02] tracking-tight text-white">
                  {currentSlide.title}
                </h1>
              )}
              {currentSlide.description && (
                <p className="mt-5 max-w-3xl text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                  {currentSlide.description}
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Optional Extra Content (e.g. Buttons & Stats Grid) */}
          {extraContent}
        </div>
      </div>

      {/* Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-7 bg-[#60A5FA]" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
