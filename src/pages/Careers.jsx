import React, { useEffect, useState } from "react";
import { Reveal, SectionHeader } from "@/components/Primitives";
import { CareerForm } from "@/components/forms/CareerForm";
import { Briefcase, MapPin, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";

export default function Careers() {
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applyPosition, setApplyPosition] = useState("");

  useEffect(() => {
    api.get("/careers").then((r) => setOpenings(r.data)).finally(() => setLoading(false));
  }, []);

  return (
    <div data-testid="careers-page" className="pb-24">
      <section className="py-24 lg:py-32 bg-[#0F2B46] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-eyebrow text-[#60A5FA] mb-4">Careers</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl leading-[1.02] tracking-tight">
            Build a manufacturing career that scales with you.
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg leading-relaxed">
            We hire for craftsmanship, curiosity, and grit — and pay for outcomes.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Open Positions" title="Current openings." />
          <div className="mt-14 grid gap-4">
            {loading ? (
              <div className="flex items-center gap-2 text-[#6B7280]"><Loader2 className="w-4 h-4 animate-spin" /> Loading openings...</div>
            ) : openings.length === 0 ? (
              <div className="text-[#6B7280]">No active openings right now. Send us your resume — we'll keep you in mind.</div>
            ) : (
              openings.map((o, i) => (
                <Reveal key={o.id} delay={i * 0.05}>
                  <div data-testid={`career-opening-${o.id}`} className="border border-gray-200 rounded-sm p-6 lg:p-8 flex flex-col md:flex-row md:items-center gap-6 hover:border-[#2563EB] transition-colors">
                    <div className="flex-1">
                      <div className="font-eyebrow text-[#2563EB]">{o.department}</div>
                      <h3 className="mt-2 font-display font-semibold text-xl text-[#0F2B46]">{o.title}</h3>
                      <p className="mt-2 text-sm text-[#6B7280]">{o.description}</p>
                      <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#6B7280]">
                        <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {o.location}</span>
                        <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {o.type}</span>
                        <span className="inline-flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {o.experience}</span>
                      </div>
                    </div>
                    <Button
                      data-testid={`apply-btn-${o.id}`}
                      onClick={() => {
                        setApplyPosition(o.title);
                        setTimeout(() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" }), 100);
                      }}
                      className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-sm"
                    >
                      Apply Now
                    </Button>
                  </div>
                </Reveal>
              ))
            )}
          </div>
        </div>
      </section>

      <section id="apply" className="py-24 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Apply" title="Send us your application." description="Even if you don't see the right role, tell us why we should meet you." />
          <div className="mt-14 bg-white border border-gray-200 rounded-sm p-8">
            <CareerForm defaultPosition={applyPosition} />
          </div>
        </div>
      </section>
    </div>
  );
}
