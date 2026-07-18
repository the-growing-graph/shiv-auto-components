import React from "react";
import { Reveal } from "@/components/Primitives";

const MACHINERY_ITEMS = [
  {
    id: "1",
    name: "CNC Turning Center",
    manufacturer: "Doosan",
    capacity: "Ø 400 x 1000 mm",
    quantity: 8,
    application: "Precision Turning",
    image_url: "https://images.unsplash.com/photo-1666634157070-6fd830fb5672?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
  },
  {
    id: "2",
    name: "Vertical Machining Center",
    manufacturer: "Haas",
    capacity: "1200 x 600 x 600 mm",
    quantity: 6,
    application: "Complex Milling",
    image_url: "https://images.unsplash.com/photo-1740209475472-aa7d280f7452?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
  },
  {
    id: "3",
    name: "Surface Grinding Machine",
    manufacturer: "Chevalier",
    capacity: "600 x 300 mm",
    quantity: 4,
    application: "Precision Grinding",
    image_url: "https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
  },
  {
    id: "4",
    name: "Hydraulic Press",
    manufacturer: "Schuler",
    capacity: "250 Ton",
    quantity: 3,
    application: "Sheet Metal Forming",
    image_url: "https://images.unsplash.com/photo-1716643863806-989dd76ae093?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
  },
  {
    id: "5",
    name: "CMM Inspection",
    manufacturer: "Zeiss",
    capacity: "1000 x 800 x 600 mm",
    quantity: 2,
    application: "Dimensional Inspection",
    image_url: "https://images.unsplash.com/photo-1700727448575-6f1680cd7d75?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
  },
  {
    id: "6",
    name: "Robotic Welding Cell",
    manufacturer: "ABB",
    capacity: "6-Axis, 210kg",
    quantity: 4,
    application: "Automated Fabrication",
    image_url: "https://images.unsplash.com/photo-1567789884554-0b844b597180?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
  }
];

export default function Machinery() {
  return (
    <div data-testid="machinery-page" className="pb-24">
      <section className="py-24 lg:py-32 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-eyebrow text-[#2563EB] mb-4">Machinery</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F2B46] max-w-4xl leading-[1.02] tracking-tight">
            60+ machines. Global brands. Ready for your program.
          </h1>
          <p className="mt-6 max-w-2xl text-[#6B7280] text-lg leading-relaxed">
            Doosan, Haas, Zeiss, ABB — the machines behind global-quality output.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MACHINERY_ITEMS.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.04}>
                <div data-testid={`machinery-card-${m.id}`} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                    {m.image_url ? (
                      <img src={m.image_url} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#6B7280]">No image</div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="font-eyebrow text-[#2563EB]">{m.manufacturer || "OEM"}</div>
                    <h3 className="mt-2 font-display font-semibold text-lg text-[#0F2B46]">{m.name}</h3>
                    <div className="mt-4 space-y-2 text-sm text-[#0F2B46] border-t border-gray-100 pt-4">
                      <div className="flex justify-between"><span className="text-[#6B7280]">Capacity</span><span className="font-medium">{m.capacity || "—"}</span></div>
                      <div className="flex justify-between"><span className="text-[#6B7280]">Quantity</span><span className="font-medium">{m.quantity}</span></div>
                      <div className="flex justify-between"><span className="text-[#6B7280]">Application</span><span className="font-medium text-right">{m.application || "—"}</span></div>
                    </div>
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
