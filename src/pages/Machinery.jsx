import React from "react";
import HeroSlider from "@/components/HeroSlider";
import { Reveal, SectionHeader } from "@/components/Primitives";
import { CheckCircle2, Factory, Gauge, Layers, Clock, Target } from "lucide-react";

const MACHINERY_SLIDES = [
  {
    image: "/hero_bg_1.png",
    eyebrow: "Our Machinery",
    title: "Advanced Machinery & Equipment",
    description: "Our manufacturing facility in Faridabad houses heavy-duty power presses and shop floor infrastructure capable of handling high-volume precision automotive programs."
  },
  {
    image: "/hero_bg_2.png",
    eyebrow: "Power Press Capacities",
    title: "80 Ton to 160 Ton Mechanical Presses",
    description: "Heavy-duty mechanical and pneumatic power presses built for continuous, high-speed, and reliable sheet metal stamping."
  },
  {
    image: "/hero_bg_3.png",
    eyebrow: "Precision Maintenance",
    title: "Calibrated Tooling & Regular Maintenance",
    description: "Strict preventive maintenance and in-house tool room support ensure repeatable dimensional accuracy and minimal production downtime."
  }
];

const HIGHLIGHTS = [
  {
    icon: Factory,
    title: "15+ POWER PRESSES",
    desc: "A fleet of dedicated pneumatic machines for stamping.",
  },
  {
    icon: Gauge,
    title: "TONNAGE RANGE 80-160T",
    desc: "Versatile capacities for diverse product specifications.",
  },
  {
    icon: Layers,
    title: "SHEET METAL STAMPING",
    desc: "Precision forming and high-volume part production.",
  },
  {
    icon: Clock,
    title: "HIGH-VOLUME EFFICIENCY",
    desc: "Optimized production cycles for rapid delivery.",
  },
  {
    icon: Target,
    title: "PRECISION FORMING",
    desc: "Intricate miniature component capabilities.",
  },
];

const MACHINES = [
  {
    id: 1,
    name: "110 Ton Mechanical Power Press (Unit 1)",
    image: "/machines/110_ton_mechanical_power_press.png",
    points: [
      "110 Ton press for high-precision sheet metal forming.",
      "Heavy-duty construction with advanced safety features.",
      "Built for efficient, accurate, and continuous production.",
    ],
  },
  {
    id: 2,
    name: "150 Ton Mechanical Power Press (Unit 2)",
    image: "/machines/110_ton_mechanical_power_press_2.png",
    points: [
      "Heavy-duty press built for continuous industrial production.",
      "Stable force distribution for consistent stamping quality.",
      "Designed for high-speed and reliable metal forming.",
    ],
  },
  {
    id: 3,
    name: "110 Ton Mechanical Power Press (Unit 3)",
    image: "/machines/110_ton_mechanical_power_press_3.png",
    points: [
      "Engineered for high-precision metal stamping applications.",
      "Delivers stable performance with reduced machine vibration.",
      "Suitable for continuous, high-quality production runs.",
    ],
  },
  {
    id: 4,
    name: "BMT 80 Ton Mechanical Press (Unit 4)",
    image: "/machines/BMT_80_ton_mechanical_press.png",
    points: [
      "80 Ton mechanical press for precision metal stamping.",
      "Compact design with smooth and stable operation.",
      "Ideal for medium-volume industrial production.",
    ],
  },
  {
    id: 5,
    name: "80 Ton Mechanical Power Press (Unit 5)",
    image: "/machines/80_ton_mechanical_power_press.png",
    points: [
      "Compact footprint with high structural strength for versatile placement.",
      "Digital stroke counter and monitoring controls for precise batch tracking.",
      "Designed for low energy consumption during continuous operations.",
    ],
  },
  {
    id: 6,
    name: "25 Ton Mechanical Power Press (Unit 6)",
    image: "/machines/25_ton_mechanical_power_press.png",
    points: [
      "Compact press for precision sheet metal stamping.",
      "Smooth operation with consistent production output.",
      "Ideal for small to medium manufacturing jobs.",
    ],
  },
  {
    id: 7,
    name: "Precision Surface Grinder (Unit 7)",
    image: "/machines/surface_grinder.png",
    points: [
      "High-precision surface grinding for in-house tool & die maintenance.",
      "Maintains strict tooling accuracy and extends die operational life.",
    ],
  },
  {
    id: 8,
    name: "Industrial Bench Grinder (Unit 8)",
    image: "/machines/bench_grinder.png",
    points: [
      "Heavy-duty bench grinder for rapid tool deburring and component finishing.",
      "Ensures clean tool edges and quick tool room support.",
    ],
  },
  {
    id: 9,
    name: "Precision Lathe Machine (Unit 9)",
    image: "/machines/lathe_machine.png",
    points: [
      "Versatile lathe machine for custom pin, die, and fixture component turning.",
      "Supports rapid in-house fabrication and tool repair operations.",
    ],
  },
  {
    id: 10,
    name: "Heavy-Duty Drilling Machine (Unit 10)",
    image: "/machines/drilling_machine.png",
    points: [
      "Precision vertical drilling machine for accurate hole placement and reaming.",
      "Essential for die plate preparation and uninterrupted manufacturing.",
    ],
  },
];

export default function Machinery() {
  return (
    <div data-testid="machinery-page" className="pb-24">
      {/* HERO SLIDER */}
      <HeroSlider slides={MACHINERY_SLIDES} interval={6000} />

      {/* Static Hero Tagline Bar */}
      <div className="bg-[#0F2B46] text-white py-3 px-4 border-y border-[#1E3A5F] relative z-20 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center gap-2.5 font-semibold text-xs sm:text-sm">
          <span className="w-2 h-2 rounded-full bg-[#B91C1C] shrink-0" />
          <span className="tracking-wide text-gray-100">
            Authorized Vendor — Maruti Suzuki Tier-2 Approved Manufacturer
          </span>
        </div>
      </div>

      {/* HIGHLIGHT FEATURE CARDS (RED BORDER, LIGHT RED GRADIENT BG) */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-gradient-to-b from-red-50/90 via-red-50/30 to-white text-[#0F2B46] border-2 border-[#B91C1C] rounded-3xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                  {/* Top: Icon */}
                  <div className="w-14 h-14 rounded-full border-2 border-[#B91C1C] bg-red-100/60 group-hover:bg-[#B91C1C] group-hover:text-white flex items-center justify-center text-[#B91C1C] shrink-0 mb-4 transition-all duration-300 shadow-xs">
                    <h.icon className="w-7 h-7" />
                  </div>

                  {/* Bottom: Title & Description */}
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-[#0F2B46] group-hover:text-[#B91C1C] leading-tight tracking-tight uppercase transition-colors">
                      {h.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed font-normal">
                      {h.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MACHINERY GRID */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Press Shop Equipment"
            title="Equipped for High-Volume Press Work"
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {MACHINES.map((m, idx) => (
              <Reveal key={m.id} delay={idx * 0.05}>
                <div className="bg-white border-2 border-gray-300 hover:border-[#2563EB] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group overflow-hidden">
                  {/* Machine Image — Full card width, 4:3 ratio, no side padding */}
                  <div className="w-full aspect-[4/3] relative overflow-hidden bg-gray-100">
                    <span className="absolute top-3 left-3 bg-[#0F2B46] text-white text-[11px] font-bold px-2.5 py-1 rounded-full z-10 shadow-sm">
                      Unit {m.id}
                    </span>
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content below image with padding */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">
                      Asset No. {m.id}
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#0F2B46] leading-snug group-hover:text-[#2563EB] transition-colors">
                      {m.name}
                    </h3>

                    <ul className="mt-3 space-y-2 text-xs text-gray-600">
                      {m.points.slice(0, 2).map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
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
