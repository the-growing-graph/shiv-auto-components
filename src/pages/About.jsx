import React from "react";
import { motion } from "framer-motion";
import { SectionHeader, Reveal } from "@/components/Primitives";
import { Award, Eye, Target, Cog, ShieldCheck, Box, Truck, MapPin, Users, Factory, Handshake } from "lucide-react";

const VALUES = [
  { icon: Cog, title: "Precision Manufacturing", desc: "High-quality components built with accuracy and consistency." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Strict quality control at every stage to ensure reliability." },
  { icon: Box, title: "Custom Solutions", desc: "Tailored manufacturing solutions as per customer drawings and specifications." },
  { icon: Truck, title: "Timely Delivery", desc: "On-time delivery with a focus on customer satisfaction." },
];

const ADVANTAGES = [
  { icon: MapPin, title: "Strategic Location", desc: "Situated in Sector 58, Faridabad — a prime industrial hub with excellent connectivity." },
  { icon: Users, title: "Skilled Workforce", desc: "Experienced and trained professionals ensuring precision, safety, and productivity." },
  { icon: Factory, title: "Robust Infrastructure", desc: "Equipped with advanced machinery and heavy-duty infrastructure for efficient manufacturing." },
  { icon: ShieldCheck, title: "Quality Commitment", desc: "Dedicated to delivering superior quality products that meet and exceed industry standards." },
  { icon: Handshake, title: "Customer First", desc: "We believe in building long-term relationships through trust, transparency, and performance." },
];

export default function About() {
  return (
    <div data-testid="about-page" className="pb-24">
      <section className="relative py-24 lg:py-32 bg-[#0F2B46] text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610891015188-5369212db097?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwyfHxmYWN0b3J5JTIwZmxvb3IlMjBpbmR1c3RyeXxlbnwwfHx8fDE3ODM4NDg2NzB8MA&ixlib=rb-4.1.0&q=85')" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-eyebrow text-[#60A5FA] mb-4">About Us</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl leading-[1.02] tracking-tight">
            Company Introduction
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg leading-relaxed">
            Shiv Auto Components is a trusted name in the field of precision manufacturing. Located in Sector 58, Faridabad, we are equipped with advanced machinery, skilled professionals, and a commitment to quality that drives everything we do.
            <br /><br />
            We specialize in the manufacturing and supply of high-quality auto components that power performance and ensure reliability.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {[
              { icon: Eye, title: "Our Vision", desc: "To be a leading manufacturer of auto components, recognized for our quality, innovation, and customer trust, contributing to a stronger and self-reliant automotive industry." },
              { icon: Target, title: "Our Mission", desc: "To deliver precision-engineered components with uncompromised quality, through continuous improvement, advanced technology, and a skilled workforce." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="bg-white border border-gray-400 p-8 lg:p-10 h-full rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2563EB] transition-colors duration-300">
                    <v.icon className="w-7 h-7 text-[#2563EB] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-[#0F2B46]">{v.title}</h3>
                  <p className="mt-3 text-[#6B7280] leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VENDOR APPROVAL */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F2B46] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl text-left">
              <span className="text-[#60A5FA] font-eyebrow tracking-wider uppercase text-sm">Authorized Partnerships</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Maruti Suzuki Tier-2 Approved Vendor</h2>
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

      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Values" title="What we optimize for, every single shift." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
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

      {/* STRATEGIC ADVANTAGES */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Market Edge" title="Strategic Advantages of Partnering with SAC" />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADVANTAGES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="bg-white border border-gray-200 p-8 h-full rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#2563EB] transition-colors duration-300">
                    <v.icon className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <div className="font-display font-semibold text-xl text-[#0F2B46]">{v.title}</div>
                  <p className="mt-3 text-sm text-[#6B7280] leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
