import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Cog, Cpu, Wrench, Layers, ShieldCheck, ScanSearch, Factory,
  Truck, PackageCheck, Ruler, LineChart, Award, CheckCircle2, Box, MapPin, Users, Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedNumber, SectionHeader, Reveal } from "@/components/Primitives";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { api } from "@/lib/api";

const CAPABILITIES = [
  { icon: Cpu, title: "CNC Machining", desc: "Turning, milling & 5-axis for ±0.01mm tolerance parts." },
  { icon: Ruler, title: "Precision Components", desc: "Shafts, hubs, gears — mass production ready." },
  { icon: Wrench, title: "Sheet Metal Fabrication", desc: "Laser cut, press brake, robotic welding cells." },
  { icon: Layers, title: "Assembly & Sub-assembly", desc: "Poka-yoke driven line assemblies for OEMs." },
  { icon: Cog, title: "Tool Room", desc: "Fixtures, jigs and dies engineered in-house." },
  { icon: ShieldCheck, title: "Surface Finishing", desc: "Powder coat, plating, phosphating, painting." },
  { icon: ScanSearch, title: "Inspection & Metrology", desc: "CMM, VMS, gauges — 100% traceability." },
  { icon: Factory, title: "Custom Manufacturing", desc: "Prototype to million-part programs." },
];

const WORKFLOW = [
  { icon: ScanSearch, label: "Requirement" },
  { icon: Ruler, label: "Design & DFM" },
  { icon: Cog, label: "Tooling" },
  { icon: Cpu, label: "Machining" },
  { icon: Wrench, label: "Fabrication" },
  { icon: Layers, label: "Assembly" },
  { icon: ShieldCheck, label: "Inspection" },
  { icon: PackageCheck, label: "Packaging" },
  { icon: Truck, label: "Dispatch" },
];

const INDUSTRIES = [
  { name: "Passenger Vehicles", tag: "PV", desc: "Chassis, engine & driveline components." },
  { name: "Commercial Vehicles", tag: "CV", desc: "Heavy-duty structural & powertrain parts." },
  { name: "Electric Vehicles", tag: "EV", desc: "Battery housings, motor mounts, e-drive parts." },
  { name: "Agricultural", tag: "Agri", desc: "Tractor components and implement assemblies." },
  { name: "Industrial", tag: "Industrial", desc: "Pumps, gearboxes, hydraulics parts." },
  { name: "General Auto", tag: "GA", desc: "Aftermarket & accessory components." },
];




export default function Home() {
  const [stats, setStats] = useState({ years_experience: 25, monthly_capacity_tons: 500, machines: 60, workforce: 220, certifications: 6 });
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    api.get("/stats").then((r) => setStats(r.data)).catch(() => {});
  }, []);

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwZmxvb3IlMjBpbmR1c3RyeXxlbnwwfHx8fDE3ODM4NDg2NzB8MA&ixlib=rb-4.1.0&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B46]/95 via-[#0F2B46]/80 to-[#0F2B46]/40" />
        <div className="absolute inset-0 bg-grid-navy opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="font-eyebrow text-[#60A5FA] mb-5">ISO 9001 · IATF 16949 · Est. 2000</div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[0.98] tracking-tight max-w-4xl">
              Precision in Every Component, <br className="hidden sm:block" />
              <span className="text-[#60A5FA]">Excellence in Every Delivery.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-white/80 text-lg leading-relaxed">
              We specialize in the manufacturing and supply of high-quality auto components that power performance and ensure reliability.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                data-testid="hero-quote-btn"
                onClick={() => setQuoteOpen(true)}
                size="lg"
                className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-sm px-8 py-6 text-base"
              >
                Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>

          <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl">
            {[
              { v: stats.years_experience, s: "+", l: "Years Experience" },
              { v: stats.monthly_capacity_tons, s: "T/mo", l: "Capacity" },
              { v: stats.machines, s: "+", l: "Machines" },
              { v: stats.workforce, s: "+", l: "Workforce" },
              { v: stats.certifications, s: "", l: "Certifications" },
            ].map((s, i) => (
              <div key={i} data-testid={`hero-stat-${i}`} className="border-l-2 border-[#60A5FA] pl-4">
                <div className="font-display text-3xl lg:text-4xl font-bold text-white">
                  <AnimatedNumber value={s.v} suffix={s.s} />
                </div>
                <div className="font-eyebrow text-white/60 mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <SectionHeader
                eyebrow="Production Facility"
                title="Advanced Manufacturing Infrastructure"
                description="Our shop floor is engineered for high-precision manufacturing, catering to major automotive OEMs and Tier-1 suppliers."
              />
              <div className="mt-8 space-y-4">
                {[
                  { title: "Precision Machinery", text: "Advanced CNC turning, milling, and grinding centers for ±0.01mm tolerances." },
                  { title: "Robust Fabrication", text: "Heavy-duty sheet metal bending, laser cutting, and robotic welding cells." },
                  { title: "Quality Lab", text: "100% quality inspection using CMM, profile projectors, and metrology gauges." },
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-[#2563EB] flex-shrink-0" />
                    <span className="text-[#0F2B46]">
                      <strong>{t.title}:</strong> {t.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 h-full">
              <Reveal className="h-full min-h-[300px] overflow-hidden bg-gray-100 rounded-xl shadow-lg border border-gray-100">
                <img src="https://images.unsplash.com/photo-1740209475472-aa7d280f7452?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5pbmclMjBwcmVjaXNpb24lMjBwYXJ0c3xlbnwwfHx8fDE3ODM4NDg2NzB8MA&ixlib=rb-4.1.0&q=85" alt="CNC Machining" className="w-full h-full object-cover hover:scale-105 duration-500 transition-transform" />
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
            title="Eight manufacturing pillars. One integrated shop floor."
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
      <section className="py-24 bg-[#F8F9FA] border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Values" title="What we optimize for, every single shift." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cog, title: "Precision Manufacturing", desc: "High-quality components built with accuracy and consistency." },
              { icon: ShieldCheck, title: "Quality Assurance", desc: "Strict quality control at every stage to ensure reliability." },
              { icon: Box, title: "Custom Solutions", desc: "Tailored manufacturing solutions as per customer drawings and specifications." },
              { icon: Truck, title: "Timely Delivery", desc: "On-time delivery with a focus on customer satisfaction." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="bg-white border border-gray-400 p-8 h-full rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#2563EB] transition-colors duration-300">
                    <v.icon className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <div className="font-display font-semibold text-lg text-[#0F2B46]">{v.title}</div>
                  <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Manufacturing Workflow"
            title="Requirement to dispatch — engineered as one flow."
          />
          <div className="mt-14 overflow-x-auto scrollbar-thin">
            <div className="flex items-start gap-4 min-w-max pb-4">
              {WORKFLOW.map((w, i) => (
                <React.Fragment key={w.label}>
                  <div className="flex flex-col items-center w-32">
                    <div className="w-16 h-16 flex items-center justify-center border-2 border-[#2563EB] bg-white rounded-sm">
                      <w.icon className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />
                    </div>
                    <div className="mt-4 text-xs font-eyebrow text-[#0F2B46] text-center">{w.label}</div>
                  </div>
                  {i < WORKFLOW.length - 1 && (
                    <div className="flex-1 h-0.5 bg-[#2563EB] mt-8 min-w-[24px]" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ADVANTAGES */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Strategic Advantages"
            title="Why partner with Shiv Auto Components?"
            description="We manufacture precision-engineered auto components using raw materials of the highest quality and modern machining and heavy-duty infrastructure."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: MapPin, title: "Strategic Location", desc: "Situated in Sector 58, Faridabad - a prime industrial hub with excellent connectivity." },
              { icon: Users, title: "Skilled Workforce", desc: "Experienced and trained professionals ensuring precision, safety, and productivity." },
              { icon: Factory, title: "Robust Infrastructure", desc: "Equipped with advanced machinery and heavy-duty infrastructure for efficient manufacturing." },
              { icon: ShieldCheck, title: "Quality Commitment", desc: "Dedicated to delivering superior quality products that meet and exceed industry standards." },
              { icon: Handshake, title: "Customer First", desc: "We believe in building long-term relationships through trust, transparency, and performance." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="bg-white border border-gray-400 p-6 h-full rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#2563EB] transition-colors duration-300">
                    <v.icon className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <div className="font-display font-semibold text-lg text-[#0F2B46]">{v.title}</div>
                  <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* CERTIFICATIONS */}
      <section className="py-24 bg-gradient-to-b from-[#F8F9FA] to-white border-y border-gray-100 relative overflow-hidden">
        {/* Subtle decorative background blur */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center">
            <span className="font-eyebrow text-[#2563EB] tracking-widest text-xs uppercase mb-3">OEM Relations & Compliance</span>
            
            <div className="mt-6 w-full max-w-4xl bg-white border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.7)] rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8 lg:gap-12 relative group hover:border-[#2563EB]/30 transition-all duration-300">
              
              {/* Outer decorative glowing border hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#2563EB]/20 transition-all duration-300 pointer-events-none" />
              
              {/* Logo Container */}
              <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-4 shadow-sm flex-shrink-0 group-hover:shadow-md transition-shadow">
                <img 
                  src="/Maruti_Suzuki.jpg" 
                  alt="Maruti Suzuki Logo" 
                  className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#B91C1C] border border-red-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
                  Official Approval
                </div>
                
                <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-[#0F2B46] tracking-tight">
                  MARUTI SUZUKI INDIA
                </h3>
                
                <p className="font-eyebrow text-sm font-bold text-[#2563EB] tracking-wider uppercase">
                  2 Tier Approved Vendor
                </p>
                
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-2xl">
                  Formally audited and certified to supply high-precision automotive components. We adhere strictly to Maruti Suzuki's global quality metrics, production efficiency standards, and safety standards.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0F2B46] to-[#173a5e] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-eyebrow text-[#60A5FA] mb-4">Let's build together</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
            Send us a drawing today.<br />
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
