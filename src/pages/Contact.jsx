import React, { useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeader, Reveal } from "@/components/Primitives";

const CONTACT_SLIDES = [
  {
    image: "/hero_bg_1.png",
    eyebrow: "Contact Us",
    title: "Get In Touch With Us",
    description: "Drop a message with engineering drawings or production inquiries. Our team routes your request to the right technical department within 24 hours."
  },
  {
    image: "/hero_bg_2.png",
    eyebrow: "Fast Technical Assistance",
    title: "Direct Drawing & Tooling Support",
    description: "Need rapid prototyping, cost estimation, or tool feasibility? Call or email our technical engineering team directly."
  },
  {
    image: "/hero_bg_3.png",
    eyebrow: "Factory Location",
    title: "Sector 58, Industrial Area, Faridabad",
    description: "Conveniently situated in Faridabad's prime industrial hub with direct logistics connectivity for OEMs across NCR and India."
  }
];

const FAQS = [
  {
    q: "Where is Shiv Auto Components located?",
    a: "We are situated at Jhar Sentli, Sector 58, Faridabad, Haryana 121004, India. Our strategic location in a prime industrial area ensures excellent logistics connectivity to serve automotive OEMs and industrial partners."
  },
  {
    q: "Is Shiv Auto Components an approved vendor for major automotive brands?",
    a: "Yes, we are a certified Maruti Suzuki Tier-2 Approved Vendor. This approval validates our stringent quality management, robust manufacturing standards, and consistent delivery performance required by leading automotive brands."
  },
  {
    q: "What type of manufacturing capabilities do you offer?",
    a: "We specialize in precision auto components, sheet metal press parts, custom tooling, power press operations (80T to 160T), and high-quality assembly services tailored strictly to customer drawings and specifications."
  },
  {
    q: "How can we request a quote for our custom parts?",
    a: "You can click the 'Request Quote' button in the header or submit an inquiry using our contact form. Share your engineering drawings, material requirements, and estimated quantities, and we will get back to you with a quote within 24 hours."
  },
  // {
  //   q: "Can we purchase the products shown on the website directly?",
  //   a: "No, the products showcased on our website are strictly for demonstrating our manufacturing, press, and stamping capabilities. We operate on a contract manufacturing model, producing components custom-built to our clients' specific engineering designs."
  // }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div data-testid="contact-page" className="pb-24">
      {/* HERO SLIDER */}
      <HeroSlider slides={CONTACT_SLIDES} interval={6000} />

      {/* Static Hero Tagline Bar */}
      <div className="bg-[#0F2B46] text-white py-3 px-4 border-y border-[#1E3A5F] relative z-20 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center gap-2.5 font-semibold text-xs sm:text-sm">
          <span className="w-2 h-2 rounded-full bg-[#B91C1C] shrink-0" />
          <span className="tracking-wide text-gray-100">
            Authorized Vendor — Maruti Suzuki Tier-2 Approved Manufacturer
          </span>
        </div>
      </div>

      {/* MAIN CONTENT SECTION */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT COLUMN: Map & Contact Card Below Map */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* GOOGLE MAP CARD */}
              <Reveal>
                <div className="bg-white border-2 border-gray-300 rounded-3xl p-4 shadow-sm overflow-hidden flex flex-col">
                  <div className="w-full h-64 rounded-2xl overflow-hidden border border-gray-200">
                    <iframe
                      title="Shiv Auto Components — Location"
                      src="https://www.google.com/maps?q=Shiv+Auto+Components,+Sector+58,+Faridabad,+Haryana+121004&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="mt-4 p-2 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <MapPin className="w-4 h-4 text-[#B91C1C]" />
                      <span>Shiv Auto Components, Sector 58, Faridabad</span>
                    </div>
                    
                    <a
                      href="https://maps.app.goo.gl/EnxwWnBvoj1jLv768"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold py-2 px-3.5 rounded-xl transition-all shadow-sm shrink-0"
                    >
                      <span>Open Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* CONTACT DETAILS CARD — flex-1 so it fills remaining height */}
              <Reveal delay={0.1} className="flex-1 flex flex-col">
                <div className="bg-[#0F2B46] text-white border-2 border-gray-300 border-l-4 border-l-[#B91C1C] rounded-3xl p-8 shadow-md relative overflow-hidden flex flex-col flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B91C1C]" />
                    <span>Contact Information</span>
                  </div>

                  <div className="space-y-5 text-sm sm:text-base flex-1">
                    {/* Address */}
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-red-500/20 text-[#B91C1C] shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-white/50 font-bold uppercase tracking-wider mb-0.5">Factory Address</div>
                        <div className="font-medium text-white/90 leading-snug">
                          Jhar Sentli, Sector 58, Faridabad, Haryana 121004
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-blue-500/20 text-[#2563EB] shrink-0 mt-0.5">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-white/50 font-bold uppercase tracking-wider mb-0.5">Phone Number</div>
                        <a href="tel:+919915417572" className="font-semibold text-white hover:text-[#60A5FA] transition-colors">
                          +91 9915417572
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-red-500/20 text-[#B91C1C] shrink-0 mt-0.5">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-white/50 font-bold uppercase tracking-wider mb-0.5">Email Address</div>
                        <a href="mailto:info@shivautocomponents.com" className="font-semibold text-[#B91C1C] hover:text-[#2563EB] transition-colors">
                          info@shivautocomponents.com
                        </a>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-blue-500/20 text-[#2563EB] shrink-0 mt-0.5">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-white/50 font-bold uppercase tracking-wider mb-0.5">Operating Hours</div>
                        <div className="font-medium text-white/90">
                          Monday — Saturday: 9:00 AM - 7:00 PM
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <a
                      href="tel:+919915417572"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-md active:scale-98"
                    >
                      <span>Call For Inquiries Directly</span>
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* RIGHT COLUMN: Contact Form & Support Card */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <Reveal delay={0.15}>
                <div className="bg-white border-2 border-gray-300 rounded-3xl p-8 lg:p-10 shadow-sm">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#2563EB] border border-blue-200/80 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <span>Send A Message</span>
                  </div>
                  <h2 className="font-display font-bold text-2xl lg:text-3xl text-[#0F2B46]">General Inquiry</h2>
                  <p className="mt-2 text-sm text-gray-600">
                    For custom inquiries or quotes with drawings, please fill out the form below.
                  </p>
                  <div className="mt-8">
                    <ContactForm />
                  </div>
                </div>
              </Reveal>

              {/* WE ARE HERE TO HELP CARD — flex-1 so it fills remaining height */}
              <Reveal delay={0.2} className="flex-1 flex flex-col">
                <div className="bg-[#0F2B46] text-white border-2 border-gray-300 border-l-4 border-l-[#2563EB] rounded-3xl p-7 shadow-md relative overflow-hidden flex flex-col flex-1">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-blue-500/20 text-[#60A5FA] border border-blue-400/30 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                      <span>We Are Here To Help</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">Need Quick Procurement Assistance?</h3>
                    <p className="text-white/80 text-xs sm:text-sm mt-1 leading-relaxed">
                      Our technical team responds to all drawing reviews and inquiry submissions within 24 hours.
                    </p>

                    <div className="mt-4 space-y-2 text-xs text-white/90">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                        <span>Free Cost Estimation &amp; Component Quote</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] shrink-0" />
                        <span>Rapid Prototype &amp; Sample Tooling Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                        <span>Direct Consultation with Factory Engineers</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <a
                      href="tel:+919915417572"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-md active:scale-98"
                    >
                      <span>Call Support Directly</span>
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
  
          </div>

          {/* FAQ SECTION */}
          <div className="pt-12 border-t border-gray-200">
            <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" align="center" />
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <Reveal key={idx} delay={idx * 0.05}>
                    <div className="bg-white border-2 border-gray-300 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-base sm:text-lg text-[#0F2B46] hover:bg-gray-50 transition-colors gap-4"
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#B91C1C] shrink-0" />
                          <span>{faq.q}</span>
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#2563EB] shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="p-5 pt-0 bg-gray-50/70 text-gray-700 text-sm leading-relaxed border-t border-gray-200">
                          {faq.a}
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
    </div>
  );
}
