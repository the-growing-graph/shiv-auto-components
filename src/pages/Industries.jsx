import React from "react";
import { Reveal } from "@/components/Primitives";
import { Car, Truck, BatteryCharging, Tractor, Cog, Factory as FactoryIcon } from "lucide-react";

const INDUSTRIES = [
  { icon: Car, name: "Passenger Vehicles", tag: "PV", desc: "Chassis, engine & driveline components for global passenger car OEMs.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwbWFudWZhY3R1cmluZyUyMHBsYW50fGVufDB8fHx8MTc4Mzg0ODY3MHww&ixlib=rb-4.1.0&q=85" },
  { icon: Truck, name: "Commercial Vehicles", tag: "CV", desc: "Heavy-duty structural, powertrain, and chassis components.",
    image: "https://images.unsplash.com/photo-1740209475472-aa7d280f7452?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5pbmclMjBwcmVjaXNpb24lMjBwYXJ0c3xlbnwwfHx8fDE3ODM4NDg2NzB8MA&ixlib=rb-4.1.0&q=85" },
  { icon: BatteryCharging, name: "Electric Vehicles", tag: "EV", desc: "Battery housings, motor mounts, e-drive assemblies.",
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHxhdXRvbW90aXZlJTIwbWFudWZhY3R1cmluZyUyMHBsYW50fGVufDB8fHx8MTc4Mzg0ODY3MHww&ixlib=rb-4.1.0&q=85" },
  { icon: Tractor, name: "Agricultural", tag: "Agri", desc: "Tractor components, implement assemblies, precision gears.",
    image: "https://images.unsplash.com/photo-1666634157070-6fd830fb5672?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxDTkMlMjBtYWNoaW5pbmclMjBwcmVjaXNpb24lMjBwYXJ0c3xlbnwwfHx8fDE3ODM4NDg2NzB8MA&ixlib=rb-4.1.0&q=85" },
  { icon: Cog, name: "Industrial", tag: "Industrial", desc: "Pumps, gearboxes, hydraulics, and heavy-industry parts.",
    image: "https://images.unsplash.com/photo-1716643863806-989dd76ae093?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwzfHxmYWN0b3J5JTIwZmxvb3IlMjBpbmR1c3RyeXxlbnwwfHx8fDE3ODM4NDg2NzB8MA&ixlib=rb-4.1.0&q=85" },
  { icon: FactoryIcon, name: "General Auto", tag: "GA", desc: "Aftermarket and accessory components for OES and IAM.",
    image: "https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxDTkMlMjBtYWNoaW5pbmclMjBwcmVjaXNpb24lMjBwYXJ0c3xlbnwwfHx8fDE3ODM4NDg2NzB8MA&ixlib=rb-4.1.0&q=85" },
];

export default function Industries() {
  return (
    <div data-testid="industries-page" className="pb-24">
      <section className="py-24 lg:py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-eyebrow text-[#2563EB] mb-4">Industries Served</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F2B46] max-w-4xl leading-[1.02] tracking-tight">
            Precision for every wheel that turns.
          </h1>
          <p className="mt-6 max-w-2xl text-[#6B7280] text-lg leading-relaxed">
            Six industries. One shared standard: zero-defect delivery, IATF-compliant process, and predictable lead times.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.tag} delay={i * 0.05}>
              <div data-testid={`industry-${ind.tag}`} className="border border-gray-200 rounded-sm overflow-hidden bg-white group hover:border-[#2563EB] transition-colors">
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <img src={ind.image} alt={ind.name} className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <ind.icon className="w-6 h-6 text-[#2563EB]" strokeWidth={1.75} />
                    <div className="font-eyebrow text-[#2563EB]">{ind.tag}</div>
                  </div>
                  <h3 className="mt-3 font-display font-bold text-2xl text-[#0F2B46]">{ind.name}</h3>
                  <p className="mt-3 text-[#6B7280] leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
