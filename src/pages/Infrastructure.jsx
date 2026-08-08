import React from "react";
import HeroSlider from "@/components/HeroSlider";
import { SectionHeader, Reveal } from "@/components/Primitives";
import {
  MapPin,
  Zap,
  Wind,
  ShieldCheck,
  Users,
  Cpu,
  TrendingUp,
  Award,
  Truck,
  BookOpen,
  CheckCircle2,
  PackageCheck,
  Navigation,
  Box,
  RefreshCw,
  Factory,
  Ruler,
  ClipboardCheck,
} from "lucide-react";

const INFRASTRUCTURE_SLIDES = [
  {
    image: "/hero_bg_1.png",
    eyebrow: "Infrastructure",
    title: "Facility & Industrial Plant",
    description: "Our dedicated manufacturing facilities in Sector 58, Faridabad are designed for efficiency, precision machining, and heavy-duty press operations."
  },
  {
    image: "/hero_bg_2.png",
    eyebrow: "Production Expertise",
    title: "Skilled Production & Engineering Team",
    description: "Powered by machine operation experts fully trained on pneumatic power press PLC control systems for high-volume automotive parts."
  },
  {
    image: "/hero_bg_3.png",
    eyebrow: "Skill Development",
    title: "Dojo Training & Skill Facility",
    description: "Continuous hands-on learning, safety training, and equipment exposure to empower our workforce for zero-defect manufacturing."
  }
];

export default function Infrastructure() {
  return (
    <div data-testid="infrastructure-page" className="pb-24 bg-[#F8F9FA]">
      {/* HERO SLIDER */}
      <HeroSlider slides={INFRASTRUCTURE_SLIDES} interval={6000} />

      {/* Static Hero Tagline Bar */}
      <div className="bg-[#0F2B46] text-white py-3 px-4 border-y border-[#1E3A5F] relative z-20 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center gap-2.5 font-semibold text-xs sm:text-sm">
          <span className="w-2 h-2 rounded-full bg-[#B91C1C] shrink-0" />
          <span className="tracking-wide text-gray-100">
            Authorized Vendor — Maruti Suzuki Tier-2 Approved Manufacturer
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">

        {/* SECTION 1: FACILITY AND INFRASTRUCTURE */}
        <section>
          <Reveal>
            <div className="bg-white border-2 border-gray-300 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-red-50 text-[#B91C1C] border border-red-200/80 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
                <span>Plant Setup &amp; Facilities</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F2B46] tracking-tight">
                Facility &amp; Infrastructure
              </h2>
              
              <p className="mt-4 max-w-4xl text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                At <strong className="text-[#0F2B46]">Shiv Auto Components</strong>, our dedicated manufacturing facilities in Sector 58, Faridabad, are designed for efficiency and precision. We combine raw material processing with precision machining and heavy-duty infrastructure to deliver high-quality components. Our plant features robust power and air systems, ensuring uninterrupted operations for our skilled workforce.
              </p>

              {/* Facility Images Grid */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm relative group">
                  <img
                    src="/infra/outer_1.png"
                    alt="Facility Exterior & Building"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B46]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white font-bold text-sm sm:text-base">
                    Plant Entrance &amp; Factory Infrastructure (Sector 58, Faridabad)
                  </div>
                </div>

                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm relative group">
                  <img
                    src="/infra/outer_2.png"
                    alt="Utilities & Air Compressor Plant"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B46]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white font-bold text-sm sm:text-base">
                    Industrial Air Receiver Tanks &amp; Cummins Generator Backup
                  </div>
                </div>
              </div>

              {/* 4 Feature Highlights Cards */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  {
                    icon: MapPin,
                    title: "PLANT LOCATION",
                    desc: "Located in Sector 58, Faridabad industrial hub.",
                    isRed: true,
                  },
                  {
                    icon: Zap,
                    title: "UNINTERRUPTED POWER",
                    desc: "Heavy-duty Cummins generator for 24/7 operations.",
                    isRed: false,
                  },
                  {
                    icon: Wind,
                    title: "COMPRESSED AIR",
                    desc: "High-capacity receiver tanks for pneumatic tools.",
                    isRed: true,
                  },
                  {
                    icon: ShieldCheck,
                    title: "SAFETY FOCUS",
                    desc: "Standardized safety protocols and visible signage.",
                    isRed: false,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`border-2 border-gray-300 border-l-4 p-5 rounded-2xl h-full shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between ${
                      item.isRed
                        ? "bg-gradient-to-b from-red-50/80 via-red-50/25 to-white border-l-[#B91C1C] hover:border-[#B91C1C]"
                        : "bg-gradient-to-b from-blue-50/80 via-blue-50/25 to-white border-l-[#2563EB] hover:border-[#2563EB]"
                    }`}
                  >
                    <div>
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center text-white mb-4 shadow-xs ${
                          item.isRed ? "bg-[#B91C1C]" : "bg-[#2563EB]"
                        }`}
                      >
                        <item.icon className="w-5.5 h-5.5" strokeWidth={2} />
                      </div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-[#0F2B46] uppercase tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1.5 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>
        </section>

        {/* SECTION 2: PRODUCTION TEAM */}
        <section>
          <Reveal>
            <div className="bg-white border-2 border-gray-300 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-blue-50 text-[#2563EB] border border-blue-200/80 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span>Workforce &amp; Process Control</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F2B46] tracking-tight">
                Production Team &amp; Process Expertise
              </h2>
              
              <div className="mt-4 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed font-normal max-w-5xl">
                <p>
                  At <strong className="text-[#0F2B46]">Shiv Auto Components</strong>, our production floor is powered by a team of skilled workers and machine operation experts. They are the driving force behind turning raw materials into precision-engineered components with consistent efficiency.
                </p>
                <p>
                  Our experts possess deep knowledge of complex machining, automation, and manufacturing processes. They focus on maintaining strict process control to ensure the seamless flow of high-quality parts, meeting the most demanding specifications.
                </p>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 bg-[#0F2B46] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#B91C1C]" />
                <span>Fully trained on power press pneumatic PLC control machines.</span>
              </div>

              {/* Production Image Showcase */}
              <div className="mt-8 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm relative group">
                <img
                  src="/office_image_5.png"
                  alt="Production Floor & Power Press Operator Line"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B46]/90 via-[#0F2B46]/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 text-white font-bold text-xs sm:text-base md:text-lg leading-snug">
                  Dedicated Press Shop Line — Skilled Operators &amp; PLC Power Press Operators
                </div>
              </div>

              {/* 5 Highlights Cards */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {[
                  {
                    icon: Users,
                    title: "SKILLED OPERATORS",
                    desc: "Dedicated, trained professionals with deep machine expertise.",
                    isRed: true,
                  },
                  {
                    icon: Cpu,
                    title: "ADVANCED MACHINING",
                    desc: "Utilizing state-of-the-art technology for complex components.",
                    isRed: false,
                  },
                  {
                    icon: TrendingUp,
                    title: "PROCESS OPTIMIZATION",
                    desc: "Continuous refinement of workflows for maximum efficiency.",
                    isRed: true,
                  },
                  {
                    icon: Award,
                    title: "EXPERT SUPERVISION",
                    desc: "Seasoned veterans mentoring and overseeing production processes.",
                    isRed: false,
                  },
                  {
                    icon: Truck,
                    title: "ON-TIME DELIVERY",
                    desc: "Efficient scheduling to meet critical deadlines.",
                    isRed: true,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`border-2 border-gray-300 border-l-4 p-5 rounded-2xl h-full shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between ${
                      item.isRed
                        ? "bg-gradient-to-b from-red-50/80 via-red-50/25 to-white border-l-[#B91C1C] hover:border-[#B91C1C]"
                        : "bg-gradient-to-b from-blue-50/80 via-blue-50/25 to-white border-l-[#2563EB] hover:border-[#2563EB]"
                    }`}
                  >
                    <div>
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center text-white mb-4 shadow-xs ${
                          item.isRed ? "bg-[#B91C1C]" : "bg-[#2563EB]"
                        }`}
                      >
                        <item.icon className="w-5.5 h-5.5" strokeWidth={2} />
                      </div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-[#0F2B46] uppercase tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1.5 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>
        </section>

        {/* SECTION 3: DOJO TRAINING ROOM */}
        <section>
          <Reveal>
            <div className="bg-white border-2 border-gray-300 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-red-50 text-[#B91C1C] border border-red-200/80 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
                <span>Hands-on Skill Development</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F2B46] tracking-tight">
                Dojo Training Room
              </h2>
              
              <p className="mt-4 max-w-4xl text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                At <strong className="text-[#0F2B46]">Shiv Auto Components</strong>, we believe in continuous improvement and building a skilled, safety-conscious workforce. Our dedicated Dojo Training Room is a space for hands-on learning, skill development, and knowledge sharing. Through structured training and real equipment exposure, we empower our team to achieve excellence in every process.
              </p>

              {/* Dojo Images Showcase */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm relative group">
                  <img
                    src="/infra/dogo_training_1.png"
                    alt="Dojo Training Safety & Skill Development"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B46]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white font-bold text-sm sm:text-base">
                    DOJO TRAINING — SAFETY &amp; SKILL DEVELOPMENT
                  </div>
                </div>

                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm relative group">
                  <img
                    src="/infra/dogo_training_2.png"
                    alt="Dojo Training Equipment Knowledge Board"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B46]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white font-bold text-sm sm:text-base">
                    DOJO TRAINING — EQUIPMENT KNOWLEDGE &amp; PROCESS CONTROL
                  </div>
                </div>
              </div>

              {/* 4 Feature Highlights Cards */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  {
                    icon: BookOpen,
                    title: "HANDS-ON LEARNING",
                    desc: "Structured practical training on actual press shop equipment.",
                    isRed: true,
                  },
                  {
                    icon: ShieldCheck,
                    title: "SAFETY FIRST",
                    desc: "Rigorous safety protocols and workplace hazard awareness.",
                    isRed: false,
                  },
                  {
                    icon: Award,
                    title: "SKILL CERTIFICATION",
                    desc: "Continuous evaluation and operator skill upgrades.",
                    isRed: true,
                  },
                  {
                    icon: CheckCircle2,
                    title: "PROCESS DISCIPLINE",
                    desc: "Standard operating procedures for zero-defect production.",
                    isRed: false,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`border-2 border-gray-300 border-l-4 p-5 rounded-2xl h-full shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between ${
                      item.isRed
                        ? "bg-gradient-to-b from-red-50/80 via-red-50/25 to-white border-l-[#B91C1C] hover:border-[#B91C1C]"
                        : "bg-gradient-to-b from-blue-50/80 via-blue-50/25 to-white border-l-[#2563EB] hover:border-[#2563EB]"
                    }`}
                  >
                    <div>
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center text-white mb-4 shadow-xs ${
                          item.isRed ? "bg-[#B91C1C]" : "bg-[#2563EB]"
                        }`}
                      >
                        <item.icon className="w-5.5 h-5.5" strokeWidth={2} />
                      </div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-[#0F2B46] uppercase tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1.5 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>
        </section>

        {/* SECTION 4: IN HOUSE TRANSPORTATION */}
        <section>
          <Reveal>
            <div className="bg-white border-2 border-gray-300 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-blue-50 text-[#2563EB] border border-blue-200/80 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span>Internal Logistics &amp; Material Handling</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F2B46] tracking-tight">
                In House Transportation
              </h2>
              
              <p className="mt-4 max-w-4xl text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                In-house transportation of materials is managed through an internal logistics system that ensures the timely and efficient movement of raw materials, work-in-progress (WIP), and finished goods between storage areas, production lines, and dispatch locations. This process minimizes handling delays, supports continuous production flow, and helps maintain operational efficiency and inventory control.
              </p>

              {/* Transportation & Forklift Fleet Showcase */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm relative group">
                  <img
                    src="/infra/in_house_transportation.png"
                    alt="In House Transportation Vehicle"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B46]/90 via-[#0F2B46]/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5 text-white font-bold text-xs sm:text-base leading-snug">
                    Internal Logistics &amp; Goods Transport Fleet
                  </div>
                </div>

                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm relative group">
                  <img
                    src="/machines/fork_lifter_machine.jpg"
                    alt="Heavy-Duty Material Handling Forklift"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B46]/90 via-[#0F2B46]/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5 text-white font-bold text-xs sm:text-base leading-snug">
                    Heavy-Duty Warehouse Forklift &amp; Material Handler
                  </div>
                </div>
              </div>

              {/* 5 Highlights Cards */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {[
                  {
                    icon: PackageCheck,
                    title: "SEAMLESS MATERIAL FLOW",
                    desc: "Ensures smooth movement of raw materials, WIP, and finished goods.",
                    isRed: true,
                  },
                  {
                    icon: Navigation,
                    title: "OPTIMIZED ROUTES",
                    desc: "Planned internal routes reduce travel time and handling delays.",
                    isRed: false,
                  },
                  {
                    icon: Box,
                    title: "RIGHT EQUIPMENT FOR EVERY NEED",
                    desc: "Use of trolleys, hand pallets, tow tuggers, and forklifts for efficient handling.",
                    isRed: true,
                  },
                  {
                    icon: RefreshCw,
                    title: "CONTINUOUS PRODUCTION SUPPORT",
                    desc: "Supports line-side feeding and maintains smooth production flow.",
                    isRed: false,
                  },
                  {
                    icon: ShieldCheck,
                    title: "SAFE & RELIABLE",
                    desc: "Safe handling practices ensure material integrity and workplace safety.",
                    isRed: true,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`border-2 border-gray-300 border-l-4 p-5 rounded-2xl h-full shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between ${
                      item.isRed
                        ? "bg-gradient-to-b from-red-50/80 via-red-50/25 to-white border-l-[#B91C1C] hover:border-[#B91C1C]"
                        : "bg-gradient-to-b from-blue-50/80 via-blue-50/25 to-white border-l-[#2563EB] hover:border-[#2563EB]"
                    }`}
                  >
                    <div>
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center text-white mb-4 shadow-xs ${
                          item.isRed ? "bg-[#B91C1C]" : "bg-[#2563EB]"
                        }`}
                      >
                        <item.icon className="w-5.5 h-5.5" strokeWidth={2} />
                      </div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-[#0F2B46] uppercase tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1.5 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>
        </section>

        {/* SECTION 5: PRECISION MEASUREMENT */}
        <section>
          <Reveal>
            <div className="bg-white border-2 border-gray-300 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-red-50 text-[#B91C1C] border border-red-200/80 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
                <span>Metrology Lab &amp; Gauging</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F2B46] tracking-tight">
                Precision Measurement
              </h2>
              
              <div className="mt-4 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed font-normal max-w-5xl">
                <p>
                  At <strong className="text-[#0F2B46]">Shiv Auto Components</strong>, we ensure every component meets exact specifications through advanced measuring techniques and precise inspection processes.
                </p>
                <p>
                  Our measurement lab is equipped with high-accuracy instruments and standard gauges to maintain dimensional accuracy, consistency and reliability at every stage of manufacturing.
                </p>
                <p>
                  We follow strict measurement protocols and calibration standards to deliver defect-free components that meet customer and industry requirements.
                </p>
              </div>

              {/* Precision Measurement Image Showcase */}
              <div className="mt-8 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm relative group">
                <img
                  src="/office_image_1.png"
                  alt="Precision Measurement Lab & Calibrated Instruments"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B46]/90 via-[#0F2B46]/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 text-white font-bold text-xs sm:text-base md:text-lg leading-snug">
                  Precision Measurement &amp; Metrology Lab — Calibrated Instruments &amp; Surface Plates
                </div>
              </div>

              {/* 5 Highlights Cards */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {[
                  {
                    icon: ShieldCheck,
                    title: "QUALITY FOCUS",
                    desc: "Commitment to zero defects and continuous improvement.",
                    isRed: true,
                  },
                  {
                    icon: Ruler,
                    title: "PRECISION MEASUREMENT",
                    desc: "Advanced measuring instruments for accurate inspection.",
                    isRed: false,
                  },
                  {
                    icon: ClipboardCheck,
                    title: "STANDARD PROCEDURES",
                    desc: "Strict quality control process at every stage of production.",
                    isRed: true,
                  },
                  {
                    icon: Users,
                    title: "SKILLED TEAM",
                    desc: "Experienced professionals ensuring consistent quality and reliability.",
                    isRed: false,
                  },
                  {
                    icon: Award,
                    title: "CUSTOMER SATISFACTION",
                    desc: "Delivering high-quality products that meet customer expectations.",
                    isRed: true,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`border-2 border-gray-300 border-l-4 p-5 rounded-2xl h-full shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between ${
                      item.isRed
                        ? "bg-gradient-to-b from-red-50/80 via-red-50/25 to-white border-l-[#B91C1C] hover:border-[#B91C1C]"
                        : "bg-gradient-to-b from-blue-50/80 via-blue-50/25 to-white border-l-[#2563EB] hover:border-[#2563EB]"
                    }`}
                  >
                    <div>
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center text-white mb-4 shadow-xs ${
                          item.isRed ? "bg-[#B91C1C]" : "bg-[#2563EB]"
                        }`}
                      >
                        <item.icon className="w-5.5 h-5.5" strokeWidth={2} />
                      </div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-[#0F2B46] uppercase tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1.5 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>
        </section>

        {/* SECTION 6: QUALITY ASSURANCE */}
        <section>
          <Reveal>
            <div className="bg-white border-2 border-gray-300 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-blue-50 text-[#2563EB] border border-blue-200/80 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span>Quality Management System</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F2B46] tracking-tight">
                Quality Assurance
              </h2>
              
              <div className="mt-4 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed font-normal max-w-5xl">
                <p>
                  At <strong className="text-[#0F2B46]">Shiv Auto Components</strong>, quality is at the core of our operations. Our Quality Assurance department ensures that every component meets the highest standards of precision, reliability, and performance.
                </p>
                <p>
                  We follow stringent quality control procedures at every stage – from raw material inspection to final dispatch – using advanced measuring instruments and a skilled team to deliver defect-free products to our customers.
                </p>
              </div>

              {/* Quality Assurance Image Showcase */}
              <div className="mt-8 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm relative group">
                <img
                  src="/office_image_2.png"
                  alt="Quality Assurance Station & CMM Inspection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B46]/90 via-[#0F2B46]/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 text-white font-bold text-xs sm:text-base md:text-lg leading-snug">
                  Quality Assurance Department — Inspection Station &amp; Quality Control Systems
                </div>
              </div>

              {/* 5 Highlights Cards */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {[
                  {
                    icon: ShieldCheck,
                    title: "QUALITY FOCUS",
                    desc: "Commitment to zero defects and continuous improvement.",
                    isRed: true,
                  },
                  {
                    icon: Ruler,
                    title: "PRECISION MEASUREMENT",
                    desc: "Advanced measuring instruments for accurate inspection.",
                    isRed: false,
                  },
                  {
                    icon: ClipboardCheck,
                    title: "STANDARD PROCEDURES",
                    desc: "Strict quality control process at every stage of production.",
                    isRed: true,
                  },
                  {
                    icon: Users,
                    title: "SKILLED TEAM",
                    desc: "Experienced professionals ensuring consistent quality and reliability.",
                    isRed: false,
                  },
                  {
                    icon: Award,
                    title: "CUSTOMER SATISFACTION",
                    desc: "Delivering high-quality products that meet customer expectations.",
                    isRed: true,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`border-2 border-gray-300 border-l-4 p-5 rounded-2xl h-full shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between ${
                      item.isRed
                        ? "bg-gradient-to-b from-red-50/80 via-red-50/25 to-white border-l-[#B91C1C] hover:border-[#B91C1C]"
                        : "bg-gradient-to-b from-blue-50/80 via-blue-50/25 to-white border-l-[#2563EB] hover:border-[#2563EB]"
                    }`}
                  >
                    <div>
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center text-white mb-4 shadow-xs ${
                          item.isRed ? "bg-[#B91C1C]" : "bg-[#2563EB]"
                        }`}
                      >
                        <item.icon className="w-5.5 h-5.5" strokeWidth={2} />
                      </div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-[#0F2B46] uppercase tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1.5 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>
        </section>

      </div>
    </div>
  );
}
