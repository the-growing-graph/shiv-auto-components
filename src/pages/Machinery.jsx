import React from "react";
import { Reveal, SectionHeader } from "@/components/Primitives";
import { CheckCircle2 } from "lucide-react";

const MACHINES = [
  {
    id: 1,
    name: "110 Ton Mechanical Power Press (Unit 1)",
    image: "/machines/110_ton_mechanical_power_press.png",
    points: [
      "110 Ton press for high-precision sheet metal forming.",
      "Heavy-duty construction with advanced safety features.",
      "Built for efficient, accurate, and continuous production."
    ]
  },
  {
    id: 2,
    name: "150 Ton Mechanical Power Press (Unit 2)",
    image: "/machines/110_ton_mechanical_power_press_2.png",
    points: [
      "Heavy-duty press built for continuous industrial production.",
      "Stable force distribution for consistent stamping quality.",
      "Designed for high-speed and reliable metal forming."
    ]
  },
  {
    id: 3,
    name: "110 Ton Mechanical Power Press (Unit 3)",
    image: "/machines/110_ton_mechanical_power_press_3.png",
    points: [
      "Engineered for high-precision metal stamping applications.",
      "Delivers stable performance with reduced machine vibration.",
      "Suitable for continuous, high-quality production runs."
    ]
  },
  {
    id: 4,
    name: "BMT 80 Ton Mechanical Press (Unit 4)",
    image: "/machines/BMT_80_ton_mechanical_press.png",
    points: [
      "80 Ton mechanical press for precision metal stamping.",
      "Compact design with smooth and stable operation.",
      "Ideal for medium-volume industrial production."
    ]
  },
  {
    id: 5,
    name: "80 Ton Mechanical Power Press (Unit 5)",
    image: "/machines/80_ton_mechanical_power_press.png",
    points: [
      "Compact footprint with high structural strength for versatile placement.",
      "Digital stroke counter and monitoring controls for precise batch tracking.",
      "Designed for low energy consumption during continuous operations."
    ]
  },
  {
    id: 6,
    name: "25 Ton Mechanical Power Press (Unit 6)",
    image: "/machines/25_ton_mechanical_power_press.png",
    points: [
      "Compact press for precision sheet metal stamping.",
      "Smooth operation with consistent production output.",
      "Ideal for small to medium manufacturing jobs."
    ]
  },
  {
    id: 7,
    name: "Heavy-Duty Warehouse Forklift (Unit 7)",
    image: "/machines/fork_lifter_machine.jpg",
    points: [
      "Efficiently handles heavy materials with ease.",
      "Improves workflow with reliable lifting performance.",
      "Ensures smooth transportation of heavy loads.."
    ]
  }
];

export default function Machinery() {
  return (
    <div data-testid="machinery-page" className="pb-24">
      {/* HERO SECTION */}
      <section className="relative py-24 lg:py-32 bg-[#0F2B46] text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610891015188-5369212db097?auto=format&fit=crop&q=80&w=1200')" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="font-eyebrow text-[#60A5FA] mb-4">Our Infrastructure</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl leading-[1.02] tracking-tight">
            Advanced Machinery & Equipment
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg leading-relaxed">
            Our manufacturing facility in Faridabad houses heavy-duty power presses and shop floor infrastructure. We maintain certified machinery capable of handling high-volume precision automotive programs.
          </p>
        </div>
      </section>

      {/* MACHINERY LIST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Press Shop" title="Equipped for High-Volume Press Work" />
          
          <div className="mt-16 space-y-12">
            {MACHINES.map((m, idx) => (
              <Reveal key={m.id} delay={idx * 0.05}>
                <div className="flex flex-col-reverse lg:flex-row items-center gap-8 bg-white border border-gray-150 rounded-3xl p-6 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                  
                  {/* Left Side: Content */}
                  <div className="flex-1 text-left">
                    <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">Asset No. {m.id}</span>
                    <h3 className="font-display font-bold text-2xl lg:text-3xl text-[#0F2B46] mt-2 mb-6">{m.name}</h3>
                    
                    <ul className="space-y-4">
                      {m.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                          <span className="text-sm lg:text-base text-[#6B7280] leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Side: Image (shows on top on mobile screens via flex-col-reverse) */}
                  <div className="w-full lg:w-[45%] aspect-[4/3] rounded-2xl overflow-hidden bg-[#F8F9FA] border border-gray-150 shrink-0 flex items-center justify-center p-3">
                    <img 
                      src={m.image} 
                      alt={m.name} 
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                    />
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
