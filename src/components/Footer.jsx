import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUpRight, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#0F2B46] text-white pt-16 pb-12 border-t border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Main Direct Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Brand Info */}
          <div className="lg:col-span-5 bg-[#133556] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <img src="/final_logo.png" alt="SAC Logo" className="h-10 w-auto object-contain bg-white p-1 rounded-md" />
                <div className="font-display font-black tracking-tight whitespace-nowrap text-lg sm:text-xl flex items-center gap-1.5">
                  <span className="text-white">Shiv</span>
                  <span className="text-[#B91C1C]">Auto Components</span>
                </div>
              </div>

              <p className="text-white/70 text-sm mt-5 leading-relaxed">
                Shiv Auto Components is a trusted name in precision manufacturing. We specialize in high-quality auto components, pneumatic power press parts, and reliable engineering solutions.
              </p>
              <p className="text-white/70 text-sm mt-3 leading-relaxed">
                Our focus is on delivering consistent product accuracy, durable manufacturing standards, and timely execution for all client requirements.
              </p>
            </div>
          </div>

          {/* Card 2: Company Links */}
          <div className="lg:col-span-3 bg-[#133556] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span>Company Links</span>
              </div>
              
              <ul className="space-y-2.5 text-sm">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/machinery", label: "Our Machines" },
                  { to: "/infrastructure", label: "Our Infrastructure" },
                  { to: "/gallery", label: "Our Gallery" },
                  { to: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-white/80 hover:text-white flex items-center gap-1.5 group transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#B91C1C] opacity-70 group-hover:translate-x-1 transition-transform" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3: Get In Touch */}
          <div className="lg:col-span-4 bg-[#133556] border border-white/10 border-l-4 border-l-[#B91C1C] rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#B91C1C] mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
                <span>Get In Touch</span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 text-white/80">
                  <div className="p-2 rounded-lg bg-red-500/20 text-[#B91C1C] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="leading-snug">
                    Sector 58, Industrial Area, Faridabad - 121004 (Haryana)
                  </span>
                </div>

                <div className="flex items-center gap-3 text-white/80">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-[#2563EB] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href="tel:+919915417572" className="hover:text-white transition-colors font-medium">
                    +91 9915417572
                  </a>
                </div>

                <div className="flex items-center gap-3 text-white/80">
                  <div className="p-2 rounded-lg bg-red-500/20 text-[#B91C1C] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:info@shivautocomponents.com" className="hover:text-white transition-colors text-xs sm:text-sm font-medium">
                    info@shivautocomponents.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="tel:+919915417572"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md active:scale-98"
              >
                <span>Call For Inquiries</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Shiv Auto Components. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed &amp; Developed by</span>
            <a
              data-testid="growing-graph-link"
              href="https://www.thegrowinggraph.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#2563EB] font-bold inline-flex items-center gap-0.5 underline underline-offset-4 transition-colors"
            >
              <span>The Growing Graph</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}