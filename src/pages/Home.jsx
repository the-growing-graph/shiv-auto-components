import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSlider from "@/components/HeroSlider";
import {
  ArrowRight,
  Cog,
  Cpu,
  Wrench,
  Layers,
  ShieldCheck,
  ScanSearch,
  Factory,
  Truck,
  PackageCheck,
  Ruler,
  LineChart,
  Award,
  CheckCircle2,
  Box,
  MapPin,
  Users,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SectionHeader,
  Reveal,
  AnimatedNumber,
  BadgePill,
} from "@/components/Primitives";
import { QuoteDialog } from "@/components/forms/QuoteDialog";

const HOME_SLIDES = [
  {
    image: "/hero_bg_1.png",
    eyebrow: "Maruti Suzuki Tier-2 Approved Vendor",
    title: (
      <>
        Welcome to Shiv Auto Components, <br className="hidden sm:block" />
        <span className="text-[#60A5FA]">Excellence in Every Delivery.</span>
      </>
    ),
    description: "We specialize in the manufacturing and supply of high-quality auto components that power performance and ensure reliability."
  },
  {
    image: "/hero_bg_2.png",
    eyebrow: "State-of-the-Art Infrastructure",
    title: (
      <>
        Heavy Power Press Capacity, <br className="hidden sm:block" />
        <span className="text-[#60A5FA]">80T to 160T Precision Stamping.</span>
      </>
    ),
    description: "Advanced manufacturing facility in Faridabad delivering consistent accuracy, heavy-duty production, and zero-defect quality control."
  },
  {
    image: "/hero_bg_3.png",
    eyebrow: "Quality Assurance & Engineering",
    title: (
      <>
        High-Volume Manufacturing, <br className="hidden sm:block" />
        <span className="text-[#60A5FA]">Trusted Automotive Solutions.</span>
      </>
    ),
    description: "End-to-end component production using premium raw materials, in-house tooling, dedicated quality inspection, and on-time delivery."
  }
];

const CAPABILITIES = [
  {
    icon: Cpu,
    title: "CNC Machining",
    desc: "Turning, milling & 5-axis for ±0.01mm tolerance parts.",
  },
  {
    icon: Ruler,
    title: "Precision Components",
    desc: "Shafts, hubs, gears — mass production ready.",
  },
  {
    icon: Wrench,
    title: "Sheet Metal Fabrication",
    desc: "Laser cut, press brake, robotic welding cells.",
  },
  {
    icon: Layers,
    title: "Assembly & Sub-assembly",
    desc: "Poka-yoke driven line assemblies for OEMs.",
  },
  {
    icon: Cog,
    title: "Tool Room",
    desc: "Fixtures, jigs and dies engineered in-house.",
  },
  {
    icon: ShieldCheck,
    title: "Surface Finishing",
    desc: "Powder coat, plating, phosphating, painting.",
  },
  {
    icon: ScanSearch,
    title: "Inspection & Metrology",
    desc: "CMM, VMS, gauges — 100% traceability.",
  },
  {
    icon: Factory,
    title: "Custom Manufacturing",
    desc: "Prototype to million-part programs.",
  },
];

const WORKFLOW = [
  { step: "01", icon: ScanSearch, label: "Requirement" },
  { step: "02", icon: Ruler, label: "Design & R & D" },
  { step: "03", icon: Cog, label: "Tooling" },
  { step: "04", icon: ShieldCheck, label: "Inspection & Quality Check" },
  { step: "05", icon: PackageCheck, label: "Packaging" },
  { step: "06", icon: Truck, label: "Dispatch" },
];

const INDUSTRIES = [
  {
    name: "Passenger Vehicles",
    tag: "PV",
    desc: "Chassis, engine & driveline components.",
  },
  {
    name: "Commercial Vehicles",
    tag: "CV",
    desc: "Heavy-duty structural & powertrain parts.",
  },
  {
    name: "Electric Vehicles",
    tag: "EV",
    desc: "Battery housings, motor mounts, e-drive parts.",
  },
  {
    name: "Agricultural",
    tag: "Agri",
    desc: "Tractor components and implement assemblies.",
  },
  {
    name: "Industrial",
    tag: "Industrial",
    desc: "Pumps, gearboxes, hydraulics parts.",
  },
  {
    name: "General Auto",
    tag: "GA",
    desc: "Aftermarket & accessory components.",
  },
];

export default function Home() {
  const [stats, setStats] = useState({
    years_experience: 15,
    monthly_capacity_tons: 250,
    machines: 25,
    workforce: 80,
    certifications: 6,
  });
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div data-testid="home-page">
      {/* HERO SLIDER */}
      <HeroSlider
        slides={HOME_SLIDES}
        interval={6000}
        extraContent={
          <div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                data-testid="hero-quote-btn"
                onClick={() => setQuoteOpen(true)}
                size="lg"
                className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-xl px-8 py-6 text-base shadow-md transition-all active:scale-98"
              >
                Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl">
              {[
                { v: stats.years_experience, s: "+", l: "Experience" },
                { v: stats.monthly_capacity_tons, s: "+", l: "Ton Capacity" },
                { v: stats.machines, s: "+", l: "Machines" },
                { v: stats.workforce, s: "+", l: "Workforce" },
                { v: stats.certifications, s: "+", l: "Certifications" },
              ].map((s, i) => (
                <div
                  key={i}
                  data-testid={`hero-stat-${i}`}
                  className="border-l-2 border-[#B91C1C] pl-4"
                >
                  <div className="font-display text-3xl lg:text-4xl font-bold text-white">
                    <AnimatedNumber value={s.v} suffix={s.s} />
                  </div>
                  <div className="font-eyebrow text-white/80 mt-2 text-sm font-medium capitalize">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* Static Hero Tagline Bar */}
      <div className="bg-[#0F2B46] text-white py-3 px-4 border-y border-[#1E3A5F] relative z-20 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center gap-2.5 font-semibold text-xs sm:text-sm">
          <span className="w-2 h-2 rounded-full bg-[#B91C1C] shrink-0" />
          <span className="tracking-wide text-gray-100">
            Authorized Vendor — Maruti Suzuki Tier-2 Approved Manufacturer
          </span>
        </div>
      </div>

      {/* WHY US */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionHeader
                eyebrow="Production Facility"
                title="Advanced Manufacturing Infrastructure"
                description="Our production floor is engineered for high-precision manufacturing, catering to major automotive OEMs and Tier-1 suppliers."
              />
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Precision Machinery",
                    text: "Modern pneumatic power press machines ranging from 80 to 160 tonnes, ensuring efficient, high-volume production with consistent dimensional accuracy.",
                    icon: Cpu,
                    accent: "border-l-[#B91C1C] text-[#B91C1C] bg-red-50",
                  },
                  {
                    title: "Quality Control",
                    text: "Our quality department uses calibrated measuring instruments and inspection gauges to verify dimensional accuracy and maintain consistent product quality.",
                    icon: ShieldCheck,
                    accent: "border-l-[#2563EB] text-[#2563EB] bg-blue-50",
                  },
                ].map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <Reveal key={card.title} delay={i * 0.1}>
                      <div
                        className={`p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 border-l-4 ${card.accent.split(" ")[0]}`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-2.5 rounded-lg shrink-0 ${card.accent.split(" ").slice(1).join(" ")}`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-lg text-[#0F2B46] mb-1">
                              {card.title}
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {card.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-6 h-full">
              <Reveal className="h-full min-h-[360px] lg:min-h-[440px] overflow-hidden bg-gray-100 rounded-2xl shadow-xl border border-gray-200">
                <img
                  src="/office_image_9.png"
                  alt="Shiv Auto Components Production Infrastructure"
                  className="w-full h-full object-cover hover:scale-105 duration-500 transition-transform"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      {/* <section className="py-24 lg:py-32 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Capabilities"
            title="Eight manufacturing pillars. One integrated production floor."
            description="Every capability is co-located under one roof — cutting handoff time, shrinking lead times, and giving you a single line of responsibility."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.04}>
                <div className="bg-white p-8 h-full hover:bg-[#0F2B46] hover:text-white transition-colors duration-300 group cursor-default">
                  <c.icon className="w-8 h-8 text-[#2563EB] group-hover:text-[#60A5FA]" strokeWidth={1.75} />
                  <h3 className="mt-6 font-display font-semibold text-lg text-[#0F2B46] group-hover:text-white">{c.title}</h3>
                  <p className="mt-3 text-sm text-[#6B7280] group-hover:text-white/70 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/capabilities" className="inline-flex items-center gap-2 text-[#2563EB] font-medium hover:gap-3 transition-all">
              Explore all capabilities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section> */}

      {/* VALUES / WHAT WE DO */}
      <section className="py-24 bg-gradient-to-b from-[#F8F9FA] via-white to-[#F8F9FA] border-y border-gray-200/60 relative overflow-hidden">
        {/* Decorative ambient background blur dots */}
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Values"
            title="What we optimize for, every single shift."
            description="Built on precision engineering, rigorous quality standards, and customer commitment."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cog,
                title: "Precision Manufacturing",
                desc: "High-quality components built with ±0.01mm accuracy and tight tolerances.",
                iconBg: "bg-[#B91C1C] text-white shadow-sm shadow-red-500/20",
              },
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                desc: "Strict multi-stage quality inspection to ensure 100% zero-defect reliability.",
                iconBg: "bg-[#2563EB] text-white shadow-sm shadow-blue-500/20",
              },
              {
                icon: Box,
                title: "Custom Solutions",
                desc: "Tailored manufacturing solutions as per customer drawings and specifications.",
                iconBg: "bg-[#B91C1C] text-white shadow-sm shadow-red-500/20",
              },
              {
                icon: Truck,
                title: "Timely Delivery",
                desc: "On-time delivery performance with robust logistics and OEM supply management.",
                iconBg: "bg-[#2563EB] text-white shadow-sm shadow-blue-500/20",
              },
            ].map((v, i) => {
              const IconComp = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="bg-white border-2 border-gray-300 p-6 h-full rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                    <div>
                      {/* Icon Badge */}
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 ${v.iconBg}`}
                      >
                        <IconComp className="w-5 h-5" strokeWidth={2} />
                      </div>

                      {/* Card Title */}
                      <h3 className="font-display font-bold text-lg text-[#0F2B46] mb-2.5">
                        {v.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Manufacturing Workflow"
            title="Requirement to dispatch — engineered as one flow."
            description="Our 6-step manufacturing workflow ensures precision quality control and reliable delivery performance."
          />
          <div className="mt-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
              {WORKFLOW.map((w, i) => {
                const IconComponent = w.icon;
                const isRed = i % 2 === 0;
                return (
                  <Reveal key={w.label} delay={i * 0.08}>
                    <div className="bg-white border-2 border-gray-200 hover:border-[#0F2B46] p-5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative flex flex-col items-center text-center h-full group">
                      {/* Step Number Badge */}
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-4 ${
                          isRed
                            ? "bg-red-100 text-[#B91C1C]"
                            : "bg-blue-100 text-[#2563EB]"
                        }`}
                      >
                        STEP {w.step}
                      </span>

                      {/* Icon Badge */}
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                          isRed
                            ? "bg-[#B91C1C] text-white"
                            : "bg-[#2563EB] text-white"
                        }`}
                      >
                        <IconComponent className="w-6 h-6" strokeWidth={2} />
                      </div>

                      {/* Label */}
                      <h4 className="font-display font-bold text-[#0F2B46] text-sm leading-snug">
                        {w.label}
                      </h4>

                      {/* Connecting Arrow for Desktop */}
                      {i < WORKFLOW.length - 1 && (
                        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-gray-300 items-center justify-center shadow-xs">
                          <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ADVANTAGES */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Strategic Advantages"
            title="Why partner with Shiv Auto Components?"
            description="We manufacture precision-engineered auto components using raw materials of the highest quality and modern machinery."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
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
            ].map((v, i) => {
              const IconComp = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div className="bg-white border-2 border-gray-300 p-6 h-full rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                    <div>
                      {/* Icon Badge */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                          v.isRed
                            ? "bg-[#B91C1C] text-white shadow-sm shadow-red-500/20"
                            : "bg-[#2563EB] text-white shadow-sm shadow-blue-500/20"
                        }`}
                      >
                        <IconComp className="w-5.5 h-5.5" strokeWidth={2} />
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-base text-[#0F2B46] mb-2.5 group-hover:text-[#B91C1C] transition-colors duration-200">
                        {v.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* VENDOR APPROVAL / CERTIFICATIONS */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F2B46] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold tracking-wider rounded-full bg-blue-500/20 text-[#60A5FA] border border-blue-400/30 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                <span>Authorized Vendor</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Maruti Suzuki Tier-2 Approved Vendor
              </h2>
              <p className="text-white/80 mt-4 leading-relaxed">
                We are proud to be a certified Tier-2 approved vendor for Maruti
                Suzuki India Limited. This validation reflects our adherence to
                stringent quality management, robust manufacturing standards,
                and consistent delivery performances required by the nation's
                leading automotive brand.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-white text-[#0F2B46] px-8 py-6 rounded-2xl border-2 border-blue-500 shadow-md shrink-0">
              <img
                src="/Maruti_Suzuki.jpg"
                alt="Maruti Suzuki"
                className="h-12 w-auto object-contain"
              />
              <div className="hidden sm:block h-12 w-px bg-gray-300" />
              <div className="flex items-center gap-3">
                <img
                  src="/verification_badge.png"
                  alt="Verification Badge"
                  className="h-14 w-auto object-contain"
                />
                <div className="text-left leading-tight">
                  <div className="text-[11px] font-bold text-[#0F2B46] uppercase tracking-wider">
                    Maruti Suzuki
                  </div>
                  <div className="font-display font-black text-[#0F2B46] text-xl leading-none">
                    2 Tier
                  </div>
                  <div className="text-[10px] font-bold text-[#0F2B46] uppercase tracking-wider">
                    Approved Vendor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0F2B46] to-[#173a5e] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-eyebrow text-[#60A5FA] mb-4">
            Let's build together
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
            Send us a drawing today.
            <br />
            <span className="text-[#60A5FA]">Get a quote by tomorrow.</span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button
              data-testid="footer-quote-btn"
              onClick={() => setQuoteOpen(true)}
              size="lg"
              className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-sm px-8 py-6 text-base"
            >
              Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </div>
  );
}
