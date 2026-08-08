import React from "react";
import { SectionHeader, Reveal } from "@/components/Primitives";
import {
  Cpu,
  Ruler,
  Wrench,
  Layers,
  Cog,
  ShieldCheck,
  ScanSearch,
  Factory,
  CheckCircle2,
} from "lucide-react";

const CAPS = [
  {
    icon: Cpu,
    title: "CNC Machining",
    overview: "Turning, milling, and 5-axis for tight tolerance production.",
    process: [
      "Tool selection & CAM programming",
      "First-off inspection",
      "Serial run with in-process gauging",
    ],
    machines: [
      "Doosan Turning (Ø400×1000)",
      "Haas VMC (1200×600×600)",
      "5-axis DMG Mori",
    ],
    applications: "Automotive shafts, aerospace brackets, hydraulic bodies.",
    capacity: "8 turning + 6 VMCs · 24×7 · 350 T/mo",
    industries: ["PV", "CV", "EV", "Industrial"],
    image:
      "https://images.unsplash.com/photo-1740209475472-aa7d280f7452?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5pbmclMjBwcmVjaXNpb24lMjBwYXJ0c3xlbnwwfHx8fDE3ODM4NDg2NzB8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    icon: Ruler,
    title: "Precision Components",
    overview: "±0.01mm tolerance parts for critical automotive systems.",
    process: [
      "DFM & Cpk study",
      "Prototype validation (PPAP L3)",
      "Mass production run",
    ],
    machines: ["Studer CNC Grinders", "Zeiss CMM", "Marposs SPC gauging"],
    applications: "Shafts, hubs, gear blanks, valves, connectors.",
    capacity: "150 T/mo · Cpk >1.67",
    industries: ["PV", "CV", "EV", "Agri"],
    image:
      "https://images.unsplash.com/photo-1666634157070-6fd830fb5672?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxDTkMlMjBtYWNoaW5pbmclMjBwcmVjaXNpb24lMjBwYXJ0c3xlbnwwfHx8fDE3ODM4NDg2NzB8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    icon: Wrench,
    title: "Sheet Metal Fabrication",
    overview: "Laser cut, press-brake bending, robotic welding cells.",
    process: [
      "Nesting optimization",
      "Laser cut → bend → weld",
      "Powder coat & assembly",
    ],
    machines: [
      "6kW Fiber Laser (3×1.5m)",
      "Amada 300T Press Brake",
      "ABB Robotic Weld Cells",
    ],
    applications: "EV battery housings, frames, brackets, enclosures.",
    capacity: "120 T/mo",
    industries: ["EV", "Industrial", "CV"],
    image:
      "https://images.unsplash.com/photo-1716643863806-989dd76ae093?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwzfHxmYWN0b3J5JTIwZmxvb3IlMjBpbmR1c3RyeXxlbnwwfHx8fDE3ODM4NDg2NzB8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    icon: Layers,
    title: "Assembly & Sub-assembly",
    overview: "Poka-yoke driven line assemblies with traceability.",
    process: [
      "Line balancing",
      "Torque tool & sequence control",
      "End-of-line testing",
    ],
    machines: [
      "DC Nutrunners",
      "Vision inspection stations",
      "Leak & function test rigs",
    ],
    applications: "Fuel systems, brake assemblies, e-drive modules.",
    capacity: "6 assembly lines · 8,000 units/day",
    industries: ["PV", "CV", "EV"],
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwbWFudWZhY3R1cmluZyUyMHBsYW50fGVufDB8fHx8MTc4Mzg0ODY3MHww&ixlib=rb-4.1.0&q=85",
  },
  {
    icon: Cog,
    title: "Tool Room",
    overview: "In-house fixtures, jigs, dies and gauges — days, not weeks.",
    process: [
      "Concept in CAD (SolidWorks)",
      "Simulation & DFM",
      "Machining & try-out",
    ],
    machines: ["Wire EDM", "Surface & cylindrical grinders", "VMC + CMM"],
    applications: "Progressive dies, welding fixtures, assembly jigs.",
    capacity: "Avg 4 tools/week new tooling",
    industries: ["All industries"],
    image:
      "https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxDTkMlMjBtYWNoaW5pbmclMjBwcmVjaXNpb24lMjBwYXJ0c3xlbnwwfHx8fDE3ODM4NDg2NzB8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    icon: ShieldCheck,
    title: "Surface Finishing",
    overview: "Powder coating, plating, phosphating and painting.",
    process: [
      "Chemical pre-treatment",
      "Coating (electrostatic / dip)",
      "Curing & inspection",
    ],
    machines: ["7-tank pre-treatment", "Powder coating booths", "Batch ovens"],
    applications: "Corrosion protection, aesthetic finish, EMI shielding.",
    capacity: "80 T/mo finishing",
    industries: ["PV", "CV", "Industrial"],
    image:
      "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHxhdXRvbW90aXZlJTIwbWFudWZhY3R1cmluZyUyMHBsYW50fGVufDB8fHx8MTc4Mzg0ODY3MHww&ixlib=rb-4.1.0&q=85",
  },
  {
    icon: ScanSearch,
    title: "Inspection & Metrology",
    overview: "100% part traceability with CMM, VMS and SPC.",
    process: [
      "Incoming material inspection",
      "In-process SPC",
      "Final Cpk & PPAP",
    ],
    machines: ["Zeiss CMM", "Vision Measuring System", "Roughness testers"],
    applications: "Layout inspection, first-article, MSA, PPAP.",
    capacity: "24×7 QA labs · ISO 17025 aligned",
    industries: ["All"],
    image:
      "https://images.unsplash.com/photo-1700727448575-6f1680cd7d75?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMGluc3BlY3Rpb24lMjBtYW51ZmFjdHVyaW5nfGVufDB8fHx8MTc4Mzg0ODY3MHww&ixlib=rb-4.1.0&q=85",
  },
  {
    icon: Factory,
    title: "Custom Manufacturing",
    overview: "Prototype to million-part programs, engineered to your spec.",
    process: [
      "Requirement study",
      "Prototype in weeks",
      "Scale to serial production",
    ],
    machines: ["Full plant flexibility"],
    applications: "Bespoke assemblies, low-volume specials, hybrid programs.",
    capacity: "Flexible · MOQ 100 → 1M+",
    industries: ["Bespoke"],
    image:
      "https://images.unsplash.com/photo-1632914146475-bfe6fa6b2a12?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwzfHxxdWFsaXR5JTIwY29udHJvbCUyMGluc3BlY3Rpb24lMjBtYW51ZmFjdHVyaW5nfGVufDB8fHx8MTc4Mzg0ODY3MHww&ixlib=rb-4.1.0&q=85",
  },
];

export default function Capabilities() {
  return (
    <div data-testid="capabilities-page" className="pb-24">
      <section className="py-24 lg:py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-eyebrow text-[#2563EB] mb-4">Capabilities</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F2B46] max-w-4xl leading-[1.02] tracking-tight">
            Eight capabilities. One integrated production floor.
          </h1>
          <p className="mt-6 max-w-2xl text-[#6B7280] text-lg leading-relaxed">
            From incoming raw material to finished packed dispatch — everything
            is co-located, controlled, and measured.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {CAPS.map((c, idx) => (
            <Reveal key={c.title}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div>
                  <c.icon
                    className="w-10 h-10 text-[#2563EB]"
                    strokeWidth={1.75}
                  />
                  <h2 className="mt-6 font-display font-bold text-3xl sm:text-4xl text-[#0F2B46] tracking-tight">
                    {c.title}
                  </h2>
                  <p className="mt-4 text-[#6B7280] text-lg leading-relaxed">
                    {c.overview}
                  </p>

                  <div className="mt-8 grid sm:grid-cols-2 gap-6">
                    <div>
                      <div className="font-eyebrow text-[#0F2B46] mb-3">
                        Process
                      </div>
                      <ul className="space-y-2">
                        {c.process.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-2 text-sm text-[#0F2B46]"
                          >
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#2563EB] flex-shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-eyebrow text-[#0F2B46] mb-3">
                        Machines
                      </div>
                      <ul className="space-y-2">
                        {c.machines.map((m) => (
                          <li key={m} className="text-sm text-[#0F2B46]">
                            • {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-6">
                    <div>
                      <div className="font-eyebrow text-[#0F2B46] mb-2">
                        Applications
                      </div>
                      <p className="text-sm text-[#6B7280]">{c.applications}</p>
                    </div>
                    <div>
                      <div className="font-eyebrow text-[#0F2B46] mb-2">
                        Capacity
                      </div>
                      <p className="text-sm text-[#6B7280]">{c.capacity}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.industries.map((i) => (
                      <span
                        key={i}
                        className="text-xs font-eyebrow px-3 py-1 border border-[#2563EB] text-[#2563EB] rounded-sm"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
