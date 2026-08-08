import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function AnimatedNumber({ value = 0, duration = 1.6, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const from = 0;
    const to = Number(value) || 0;
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + (to - from) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function SectionHeader({ eyebrow, title, description, align = "left", className = "" }) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-3xl ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase rounded-full bg-blue-50 text-[#2563EB] border border-blue-200/80 mb-4 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2B46] tracking-tight leading-[1.05]">
        {title}
      </h2>
      {description && <p className="mt-5 text-[#374151] font-medium text-base sm:text-lg leading-relaxed">{description}</p>}
    </div>
  );
}

export function Reveal({ children, delay = 0, y = 24, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
