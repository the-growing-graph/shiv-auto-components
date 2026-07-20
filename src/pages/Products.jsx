import React from "react";
import { motion } from "framer-motion";
import { SectionHeader, Reveal } from "@/components/Primitives";

const PRODUCTS = [
  {
    id: 1,
    name: "Engine Mounting Bracket",
    category: "Stamped Steel Component",
    desc: "Heavy-gauge steel bracket engineered to absorb engine vibration and provide structural support.",
    image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Suspension Control Arm Link",
    category: "Chassis Component",
    desc: "High-tensile strength control arm link designed for precise suspension geometry and safety.",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Brake Dust Shield",
    category: "Precision Metal Stamping",
    desc: "Custom-stamped circular protective plate preventing dust and heat ingress into critical brake components.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Chassis Reinforcement Plate",
    category: "Heavy Sheet Metal Part",
    desc: "Structural plate designed for crumple-zone protection and frame stiffness in passenger vehicles.",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Exhaust Hanger Bracket",
    category: "Welded Press Assembly",
    desc: "Vibration-resistant brackets designed to hold the exhaust line securely under the chassis.",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "Alternator Mounting Plate",
    category: "CNC Machined Stamping",
    desc: "Accurately laser-cut and CNC bent mounting bracket for automotive auxiliary equipment.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 7,
    name: "Body Panel Stiffener",
    category: "Body-in-White (BIW) Part",
    desc: "High-precision inner structural stiffener used to reinforce outer body panels and doors.",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 8,
    name: "Battery Tray Bracket",
    category: "Anti-Corrosion Coated Bracket",
    desc: "Specially coated steel tray bracket designed to withstand corrosive environments and keep batteries locked in place.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 9,
    name: "Gear Shifter Bracket",
    category: "Precision Transmission Mounting",
    desc: "Sturdy bracket supporting transmission shifter linkage with tight tolerance bushings.",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=600"
  }
];

export default function Products() {
  return (
    <div data-testid="products-page" className="pb-24">
      {/* HERO */}
      <section className="relative py-24 lg:py-32 bg-[#0F2B46] text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610891015188-5369212db097?auto=format&fit=crop&q=80&w=1200')" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="font-eyebrow text-[#60A5FA] mb-4">Product Showcase</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl leading-[1.02] tracking-tight">
            Capabilities Demonstration
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg leading-relaxed">
            We manufacture a wide range of precision components and structural sub-assemblies for passenger cars, electric vehicles, and commercial machinery. 
            <br /><br />
            <span className="text-[#60A5FA] font-semibold">Note:</span> These products are built custom to client drawings and specifications and are displayed to demonstrate our manufacturing capability. They are not for direct retail sale.
          </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Precision Parts" title="Custom Sheet Metal & Machined Components" />
          
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <div className="bg-white border border-gray-150 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col h-full">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                    {/* Brand overlay on top right */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm border border-gray-200/50 flex items-center justify-center shadow-sm z-10">
                      <img src="/logo.png" alt="SAC Logo" className="w-6 h-6 object-contain" />
                    </div>
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between text-left">
                    <div>
                      <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">{p.category}</span>
                      <h3 className="font-display font-bold text-xl text-[#0F2B46] mt-2 leading-snug">{p.name}</h3>
                      <p className="mt-3 text-sm text-[#6B7280] leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
