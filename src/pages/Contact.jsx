import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeader } from "@/components/Primitives";

const FAQS = [
  {
    q: "Where is Shiv Auto Components located?",
    a: "We are situated in Sector 58, Faridabad, Haryana, India. Our strategic location is a prime industrial hub with excellent connectivity, allowing us to serve major automotive OEMs and industrial partners efficiently."
  },
  {
    q: "Is Shiv Auto Components an approved vendor for major automotive brands?",
    a: "Yes, we are a certified Maruti Suzuki Tier-2 Approved Vendor. This approval validates our stringent quality management, robust manufacturing standards, and consistent delivery performance required by leading brands."
  },
  {
    q: "What type of manufacturing capabilities do you offer?",
    a: "We specialize in precision sheet metal fabrication, custom tooling, automated press operations, CNC machining, and high-quality assembly services tailored strictly to customer drawings and specifications."
  },
  {
    q: "How can we request a quote for our custom parts?",
    a: "You can click the 'Request Quote' button in the header or submit an inquiry using our contact form. Share your engineering drawings, material requirements, and estimated quantities, and we will get back to you with a quote."
  },
  {
    q: "Can we purchase the products shown on the website directly?",
    a: "No, the products showcased on our website are strictly for demonstrating our manufacturing, press, and stamping capabilities. We operate on a contract manufacturing model, producing components custom-built to our clients' specific engineering designs and drawing inputs."
  }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div data-testid="contact-page" className="pb-24">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
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

          {/* FAQ SECTION */}
          <div className="pt-10 border-t border-gray-100">
            <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
            <div className="mt-10 max-w-3xl mx-auto space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-display font-semibold text-lg text-[#0F2B46] hover:bg-gray-50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-[#2563EB]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </button>
                    {isOpen && (
                      <div className="p-5 pt-0 bg-gray-50/50 text-[#6B7280] text-sm leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
