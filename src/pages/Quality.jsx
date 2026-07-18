import React from "react";
import { Reveal, SectionHeader } from "@/components/Primitives";
import { CheckCircle2, Award, ShieldCheck, LineChart, ScanSearch, PackageCheck } from "lucide-react";

const PIPELINE = [
  { icon: PackageCheck, label: "Incoming Material" },
  { icon: ScanSearch, label: "First-off Inspection" },
  { icon: LineChart, label: "In-process SPC" },
  { icon: ShieldCheck, label: "Final Audit" },
  { icon: Award, label: "PPAP L3 Delivery" },
];

const CI = [
  "Zero-defect delivery through poka-yoke line design.",
  "Kaizen suggestions program — 40+ ideas implemented per quarter.",
  "Cross-functional 5S audits every fortnight.",
  "TPM adoption across all critical machines.",
];

export default function Quality() {
  return (
    <div data-testid="quality-page" className="pb-24">
      <section className="py-24 lg:py-32 bg-[#0F2B46] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-eyebrow text-[#60A5FA] mb-4">Quality Assurance</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl leading-[1.02] tracking-tight">
            Quality isn't a department. It's how we ship.
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg leading-relaxed">
            IATF 16949-audited processes, PPAP L3 as standard, and a shop floor that treats every part as if it's the only one.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Quality Pipeline" title="Five gates. Zero surprises." />
          <div className="mt-14 overflow-x-auto scrollbar-thin">
            <div className="flex items-start gap-4 min-w-max pb-4">
              {PIPELINE.map((p, i) => (
                <React.Fragment key={p.label}>
                  <div className="flex flex-col items-center w-40">
                    <div className="w-16 h-16 flex items-center justify-center border-2 border-[#2563EB] bg-white rounded-sm">
                      <p.icon className="w-7 h-7 text-[#2563EB]" strokeWidth={1.75} />
                    </div>
                    <div className="mt-4 text-xs font-eyebrow text-[#0F2B46] text-center">{p.label}</div>
                  </div>
                  {i < PIPELINE.length - 1 && <div className="flex-1 h-0.5 bg-[#2563EB] mt-8 min-w-[24px]" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
        {/* Subtle decorative background blur */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader eyebrow="Certifications & Approvals" title="Audited. Approved. Trusted." />
          
          <div className="mt-14 flex justify-center">
            <div className="w-full max-w-4xl bg-white border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8 lg:gap-12 relative group hover:border-[#2563EB]/30 transition-all duration-300">
              
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionHeader eyebrow="Continuous Improvement" title="How we compound quality every year." />
              <div className="mt-8 space-y-4">
                {CI.map((c) => (
                  <div key={c} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#2563EB]" />
                    <div className="text-[#0F2B46]">{c}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden bg-gray-100 rounded-sm">
                <img src="https://images.unsplash.com/photo-1700727448575-6f1680cd7d75?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMGluc3BlY3Rpb24lMjBtYW51ZmFjdHVyaW5nfGVufDB8fHx8MTc4Mzg0ODY3MHww&ixlib=rb-4.1.0&q=85" alt="QC" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden bg-gray-100 rounded-sm mt-8">
                <img src="https://images.unsplash.com/photo-1632914146475-bfe6fa6b2a12?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwzfHxxdWFsaXR5JTIwY29udHJvbCUyMGluc3BlY3Rpb24lMjBtYW51ZmFjdHVyaW5nfGVufDB8fHx8MTc4Mzg0ODY3MHww&ixlib=rb-4.1.0&q=85" alt="Metrology" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
