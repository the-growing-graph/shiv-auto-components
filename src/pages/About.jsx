import React from "react";
import { motion } from "framer-motion";
import HeroSlider from "@/components/HeroSlider";
import { SectionHeader, Reveal } from "@/components/Primitives";
import { Eye, Target, Cog, ShieldCheck, Box, Truck, MapPin, Users, Factory, Handshake, Cpu, PackageCheck } from "lucide-react";

const ABOUT_SLIDES = [
  {
    image: "/hero_bg_1.png",
    eyebrow: "About Us",
    title: "Company Introduction",
    description: "At Shiv Auto Components, we manufacture high-quality precision auto components using premium raw materials, advanced machinery, and modern manufacturing processes. Our focus is on delivering reliable products with consistent quality, accuracy, and performance for every customer."
  },
  {
    image: "/hero_bg_2.png",
    eyebrow: "Quality & Standards",
    title: "Certified Maruti Suzuki Vendor",
    description: "Operating with strict adherence to automotive OEM quality guidelines, multi-stage inspection, and reliable production processes."
  },
  {
    image: "/hero_bg_3.png",
    eyebrow: "Manufacturing Strength",
    title: "Skilled Workforce & Power Press Lines",
    description: "Combining modern power press machinery with strict quality controls to deliver consistent accuracy and long-term customer trust."
  }
];

const VALUES = [
  {
    icon: Cog,
    title: "Precision Manufacturing",
    desc: "High-quality components built with ±0.01mm accuracy and tight tolerances.",
    isRed: true,
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Strict multi-stage quality inspection to ensure 100% zero-defect reliability.",
    isRed: false,
  },
  {
    icon: Box,
    title: "Custom Solutions",
    desc: "Tailored manufacturing solutions as per customer drawings and specifications.",
    isRed: true,
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    desc: "On-time delivery performance with robust logistics",
    isRed: false,
  },
];

const ADVANTAGES = [
  {
    icon: Cpu,
    title: "Precision Manufacturing",
    desc: "Precision manufacturing with modern power press machines",
    isRed: true,
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    desc: "Dedicated quality inspection at every stage",
    isRed: false,
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    desc: "Skilled workforce and reliable production processes",
    isRed: true,
  },
  {
    icon: PackageCheck,
    title: "Packaging & Dispatch",
    desc: "Timely packaging and on-time dispatch",
    isRed: false,
  },
  {
    icon: Handshake,
    title: "Customer Approach",
    desc: "Customer-focused approach and consistent quality",
    isRed: true,
  },
];

export default function About() {
  return (
    <div data-testid="about-page" className="pb-24">
      {/* HERO SLIDER */}
      <HeroSlider slides={ABOUT_SLIDES} interval={6000} />

      {/* Static Hero Tagline Bar */}
      <div className="bg-[#0F2B46] text-white py-3 px-4 border-y border-[#1E3A5F] relative z-20 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center gap-2.5 font-semibold text-xs sm:text-sm">
          <span className="w-2 h-2 rounded-full bg-[#B91C1C] shrink-0" />
          <span className="tracking-wide text-gray-100">
            Authorized Vendor — Maruti Suzuki Tier-2 Approved Manufacturer
          </span>
        </div>
      </div>

      {/* VISION & MISSION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To be a leading manufacturer of auto components, recognized for our quality, innovation, and customer trust, contributing to a stronger and self-reliant automotive industry.",
                accent: "border-l-[#B91C1C] hover:border-[#B91C1C]",
                bgGradient: "bg-gradient-to-b from-red-50/90 via-red-50/30 to-white",
                iconBg: "bg-[#B91C1C] text-white shadow-sm shadow-red-500/20",
              },
              {
                icon: Target,
                title: "Our Mission",
                desc: "To deliver precision-engineered components with uncompromised quality, through continuous improvement, advanced technology, and a skilled workforce.",
                accent: "border-l-[#2563EB] hover:border-[#2563EB]",
                bgGradient: "bg-gradient-to-b from-blue-50/90 via-blue-50/30 to-white",
                iconBg: "bg-[#2563EB] text-white shadow-sm shadow-blue-500/20",
              },
            ].map((v, i) => {
              const IconComp = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.1}>
                  <div className={`${v.bgGradient} border-2 border-gray-300 border-l-4 ${v.accent} p-8 lg:p-10 h-full rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between`}>
                    <div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${v.iconBg}`}>
                        <IconComp className="w-6 h-6" strokeWidth={2} />
                      </div>
                      <h3 className="font-display font-bold text-2xl text-[#0F2B46] mb-3">{v.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETAILED COMPANY PROFILE & MANUFACTURING STRENGTH SECTIONS */}
      <section className="py-16 bg-[#F8F9FA] border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section 1: Manufacturing Strength */}
          <Reveal>
            <div className="bg-white border-2 border-gray-300 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-red-50 text-[#B91C1C] border border-red-200/80 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
                    <span>Infrastructure &amp; Capabilities</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F2B46] tracking-tight">
                    Our Manufacturing Strength
                  </h2>
                  <div className="mt-6 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                    <p>
                      Shiv Auto Components operates a modern manufacturing facility located in Sector 58, Faridabad (Haryana). Our plant is equipped with high-performance pneumatic power press machines ranging from 80 to 160 tonnes capacity, enabling continuous and large-scale production with high accuracy.
                    </p>
                    <p>
                      Supported by an experienced team and in-house tooling capabilities, we handle precision component manufacturing from initial design to final production. Our processes are designed for high efficiency, quality consistency, and timely fulfillment of customer requirements.
                    </p>
                  </div>
                </div>
                
                {/* Feature stats card */}
                <div className="bg-[#0F2B46] text-white p-6 rounded-2xl border-l-4 border-l-[#B91C1C] shrink-0 lg:w-80 space-y-4 shadow-md">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#60A5FA]">Facility Highlights</div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#B91C1C]" />
                      <span className="font-medium text-white">80T - 160T Power Press Machines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                      <span className="font-medium text-white">In Factory Tooling &amp; Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#B91C1C]" />
                      <span className="font-medium text-white">Located in Faridabad, Haryana</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Section 2: Quality & Certification */}
          <Reveal delay={0.1}>
            <div className="bg-white border-2 border-gray-300 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-blue-50 text-[#2563EB] border border-blue-200/80 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <span>Quality Management</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F2B46] tracking-tight">
                    Quality &amp; Precision Control
                  </h2>
                  <div className="mt-6 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                    <p>
                      Quality is at the core of everything we do at Shiv Auto Components. Our quality management system oversees every stage of manufacturing—from raw material testing and tool setup to final inspection before delivery.
                    </p>
                    <p>
                      Our quality inspection department uses calibrated measuring instruments and gauges to ensure dimensional accuracy for every component. Continuous quality checks help us consistently deliver reliable and defect-free products to our clients.
                    </p>
                  </div>
                </div>

                {/* Feature stats card */}
                <div className="bg-[#0F2B46] text-white p-6 rounded-2xl border-l-4 border-l-[#2563EB] shrink-0 lg:w-80 space-y-4 shadow-md">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#60A5FA]">Quality Focus</div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                      <span className="font-medium text-white">Calibrated Measuring Instruments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#B91C1C]" />
                      <span className="font-medium text-white">Step-by-Step Quality Checks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                      <span className="font-medium text-white">Reliable &amp; Defect-Free Production</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Section 3: Innovation & Customer Commitment */}
          <Reveal delay={0.2}>
            <div className="bg-white border-2 border-gray-300 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-red-50 text-[#B91C1C] border border-red-200/80 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
                    <span>Customer Excellence</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F2B46] tracking-tight">
                    Innovation &amp; Future Readiness
                  </h2>
                  <div className="mt-6 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                    <p>
                      At Shiv Auto Components, we continuously improve our manufacturing techniques and production processes. We regularly upgrade our machines and tooling methods to meet the growing quality standards of the automotive industry.
                    </p>
                    <p>
                      Our customer-focused approach ensures quick sample development, clear communication, and reliable on-time delivery. We focus on building long-term business relationships by delivering high-quality auto components every time.
                    </p>
                  </div>
                </div>

                {/* Feature stats card */}
                <div className="bg-[#0F2B46] text-white p-6 rounded-2xl border-l-4 border-l-[#B91C1C] shrink-0 lg:w-80 space-y-4 shadow-md">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#60A5FA]">Service Commitment</div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#B91C1C]" />
                      <span className="font-medium text-white">Fast Sample Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                      <span className="font-medium text-white">Reliable On-Time Delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#B91C1C]" />
                      <span className="font-medium text-white">Long-Term Customer Trust</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* VENDOR APPROVAL */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F2B46] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold tracking-wider rounded-full bg-blue-500/20 text-[#60A5FA] border border-blue-400/30 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                <span>Authorized Vendor</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Maruti Suzuki Tier-2 Approved Vendor</h2>
              <p className="text-white/80 mt-4 leading-relaxed">
                We are proud to be a certified Tier-2 approved vendor for Maruti Suzuki India Limited. This validation reflects our adherence to stringent quality management, robust manufacturing standards, and consistent delivery performances required by the nation's leading automotive brand.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-white text-[#0F2B46] px-8 py-6 rounded-2xl border-2 border-blue-500 shadow-md shrink-0">
              <img src="/Maruti_Suzuki.jpg" alt="Maruti Suzuki" className="h-12 w-auto object-contain" />
              <div className="hidden sm:block h-12 w-px bg-gray-300" />
              <div className="flex items-center gap-3">
                <img src="/verification_badge.png" alt="Verification Badge" className="h-14 w-auto object-contain" />
                <div className="text-left leading-tight">
                  <div className="text-[11px] font-bold text-[#0F2B46] uppercase tracking-wider">Maruti Suzuki</div>
                  <div className="font-display font-black text-[#0F2B46] text-xl leading-none">2 Tier</div>
                  <div className="text-[10px] font-bold text-[#0F2B46] uppercase tracking-wider">Approved Vendor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 bg-[#F8F9FA] border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Values" title="What we optimize for, every single shift." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => {
              const IconComp = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div
                    className={`border-2 border-gray-300 border-l-4 p-6 h-full rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group ${
                      v.isRed
                        ? "bg-gradient-to-b from-red-50/80 via-red-50/25 to-white border-l-[#B91C1C] hover:border-[#B91C1C]"
                        : "bg-gradient-to-b from-blue-50/80 via-blue-50/25 to-white border-l-[#2563EB] hover:border-[#2563EB]"
                    }`}
                  >
                    <div>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 ${
                        v.isRed ? "bg-[#B91C1C] text-white shadow-sm shadow-red-500/20" : "bg-[#2563EB] text-white shadow-sm shadow-blue-500/20"
                      }`}>
                        <IconComp className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <h3 className={`font-display font-bold text-lg text-[#0F2B46] mb-2.5 transition-colors ${
                        v.isRed ? "group-hover:text-[#B91C1C]" : "group-hover:text-[#2563EB]"
                      }`}>{v.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* STRATEGIC ADVANTAGES */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Market Edge" title="Strategic Advantages of Partnering with SAC" />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {ADVANTAGES.map((v, i) => {
              const IconComp = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div
                    className={`border-2 border-gray-300 border-l-4 p-6 h-full rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between ${
                      v.isRed
                        ? "bg-gradient-to-b from-red-50/80 via-red-50/25 to-white border-l-[#B91C1C] hover:border-[#B91C1C]"
                        : "bg-gradient-to-b from-blue-50/80 via-blue-50/25 to-white border-l-[#2563EB] hover:border-[#2563EB]"
                    }`}
                  >
                    <div>
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                        v.isRed ? "bg-[#B91C1C] text-white shadow-sm shadow-red-500/20" : "bg-[#2563EB] text-white shadow-sm shadow-blue-500/20"
                      }`}>
                        <IconComp className="w-5.5 h-5.5" strokeWidth={2} />
                      </div>
                      <h3 className={`font-display font-bold text-base text-[#0F2B46] mb-2.5 transition-colors duration-200 ${
                        v.isRed ? "group-hover:text-[#B91C1C]" : "group-hover:text-[#2563EB]"
                      }`}>
                        {v.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
