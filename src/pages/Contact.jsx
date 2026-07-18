import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeader } from "@/components/Primitives";

export default function Contact() {
  return (
    <div data-testid="contact-page" className="pb-10">
      <section className="py-10 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="font-eyebrow text-[#2563EB] mb-3">Contact</div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F2B46] leading-[1.02] tracking-tight">
                Let's talk about your next program.
              </h1>
              <p className="mt-5 text-[#6B7280] text-base sm:text-lg leading-relaxed max-w-xl">
                Drop a message with drawings or volumes — our procurement team routes it to the right desk within one business day.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src="/support_image.png" 
                alt="Support Team" 
                className="max-h-[260px] lg:max-h-[300px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* <div>
            <SectionHeader eyebrow="Reach us" title="One address. Three inboxes." />
            <div className="mt-8 bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 lg:p-10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="font-eyebrow text-[#0F2B46] mb-2">Factory & Head Office</div>
                    <div className="flex items-start gap-3 text-[#0F2B46]">
                      <MapPin className="w-5 h-5 mt-0.5 text-[#2563EB] flex-shrink-0" />
                      <div>
                        Sector 58, Faridabad - 121004<br />
                        Haryana, India
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-eyebrow text-[#0F2B46] mb-2">Hours</div>
                    <div className="flex items-start gap-3 text-[#0F2B46]">
                      <Clock className="w-4 h-4 mt-0.5 text-[#2563EB]" />
                      <div>Mon–Sat: 9:00 AM – 6:30 PM IST</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="font-eyebrow text-[#0F2B46] mb-2">Sales (RFQ)</div>
                    <a href="mailto:manishshivauto@gmail.com" className="flex items-center gap-2 text-[#0F2B46] hover:text-[#2563EB]">
                      <Mail className="w-4 h-4 text-[#2563EB]" /> manishshivauto@gmail.com
                    </a>
                  </div>
                  <div>
                    <div className="font-eyebrow text-[#0F2B46] mb-2">Business Development</div>
                    <a href="mailto:manishshivauto@gmail.com" className="flex items-center gap-2 text-[#0F2B46] hover:text-[#2563EB]">
                      <Mail className="w-4 h-4 text-[#2563EB]" /> manishshivauto@gmail.com
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="font-eyebrow text-[#0F2B46] mb-2">HR / Careers</div>
                    <a href="mailto:manishshivauto@gmail.com" className="flex items-center gap-2 text-[#0F2B46] hover:text-[#2563EB]">
                      <Mail className="w-4 h-4 text-[#2563EB]" /> manishshivauto@gmail.com
                    </a>
                  </div>
                  <div>
                    <div className="font-eyebrow text-[#0F2B46] mb-2">Phone</div>
                    <a href="tel:+919915417572" className="flex items-center gap-2 text-[#0F2B46] hover:text-[#2563EB]">
                      <Phone className="w-4 h-4 text-[#2563EB]" /> +91 99154 17572
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="w-full h-full min-h-[450px] overflow-hidden border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 flex flex-col">
              <iframe
                title="Shiv Auto Components — Location"
                src="https://www.google.com/maps?q=Sector+58,+Faridabad&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, flexGrow: 1 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 lg:p-10 h-fit hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
              <div className="font-eyebrow text-[#2563EB]">Send a message</div>
              <h2 className="mt-2 font-display font-bold text-2xl text-[#0F2B46]">General inquiry</h2>
              <p className="mt-2 text-sm text-[#6B7280]">For quotes with drawings, use the Request Quote button in the header.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
