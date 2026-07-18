import React from "react";
import { SectionHeader, Reveal } from "@/components/Primitives";
import { Factory, Warehouse, Zap, ShieldCheck, HardHat, TrendingUp } from "lucide-react";

const ZONES = [
  { title: "Factory Overview", desc: "22,000 sq ft integrated manufacturing facility with modular expansion capacity.", icon: Factory,
    image: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwZmxvb3IlMjBpbmR1c3RyeXxlbnwwfHx8fDE3ODM4NDg2NzB8MA&ixlib=rb-4.1.0&q=85"},
  { title: "Production Floor", desc: "Cellular layout with dedicated lines per customer program.", icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1716643863806-989dd76ae093?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwzfHxmYWN0b3J5JTIwZmxvb3IlMjBpbmR1c3RyeXxlbnwwfHx8fDE3ODM4NDg2NzB8MA&ixlib=rb-4.1.0&q=85"},
  { title: "Warehouse & Logistics", desc: "6,000 sq ft warehouse with FIFO inventory management and just-in-time dispatch.", icon: Warehouse,
    image: "https://images.unsplash.com/photo-1610891015188-5369212db097?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwyfHxmYWN0b3J5JTIwZmxvb3IlMjBpbmR1c3RyeXxlbnwwfHx8fDE3ODM4NDg2NzB8MA&ixlib=rb-4.1.0&q=85"},
  { title: "Utilities & Power", desc: "Dual power feed + 750 kVA DG backup. Compressed air, hydraulics, water treatment onsite.", icon: Zap,
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHxhdXRvbW90aXZlJTIwbWFudWZhY3R1cmluZyUyMHBsYW50fGVufDB8fHx8MTc4Mzg0ODY3MHww&ixlib=rb-4.1.0&q=85"},
  { title: "QC Lab", desc: "Air-conditioned metrology lab with CMM, VMS, roughness testers.", icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1700727448575-6f1680cd7d75?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMGluc3BlY3Rpb24lMjBtYW51ZmFjdHVyaW5nfGVufDB8fHx8MTc4Mzg0ODY3MHww&ixlib=rb-4.1.0&q=85"},
  { title: "Safety & EHS", desc: "OHSAS-aligned safety systems. Zero lost-time incidents in FY24.", icon: HardHat,
    image: "https://images.unsplash.com/photo-1632914146475-bfe6fa6b2a12?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwzfHxxdWFsaXR5JTIwY29udHJvbCUyMGluc3BlY3Rpb24lMjBtYW51ZmFjdHVyaW5nfGVufDB8fHx8MTc4Mzg0ODY3MHww&ixlib=rb-4.1.0&q=85"},
];

export default function Infrastructure() {
  return (
    <div data-testid="infrastructure-page" className="pb-24">
      <section className="py-24 lg:py-32 bg-[#0F2B46] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-eyebrow text-[#60A5FA] mb-4">Infrastructure</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl leading-[1.02] tracking-tight">
            Built to scale. Engineered to last.
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg leading-relaxed">
            A modern, integrated facility purpose-built for global-standard automotive manufacturing.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ZONES.map((z, i) => (
              <Reveal key={z.title} delay={i * 0.06}>
                <div className="border border-gray-200 rounded-sm overflow-hidden group hover:border-[#2563EB] transition-colors">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img src={z.image} alt={z.title} className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform" />
                  </div>
                  <div className="p-6">
                    <z.icon className="w-6 h-6 text-[#2563EB]" strokeWidth={1.75} />
                    <h3 className="mt-3 font-display font-semibold text-lg text-[#0F2B46]">{z.title}</h3>
                    <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">{z.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Expansion Plan" title="Doubling capacity by 2027." description="Adjacent 30,000 sq ft plot secured. Phase-2 will add a dedicated EV components line, an in-house heat-treatment shop, and a paint booth." />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["30,000", "sq ft new build"],
              ["+40", "new machines"],
              ["+150", "new jobs"],
              ["2027", "operational"],
            ].map(([n, l]) => (
              <div key={l} className="border-l-2 border-[#2563EB] pl-4">
                <div className="font-display text-3xl font-bold text-[#0F2B46]">{n}</div>
                <div className="font-eyebrow text-[#6B7280] mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
