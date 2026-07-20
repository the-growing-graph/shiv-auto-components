import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#0F2B46] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-1 group">
              <div className="bg-white rounded-md flex items-center justify-center -mr-2">
                <img src="/logo.png" alt="SAC Logo" className="h-12 w-auto object-contain" />
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="leading-none flex flex-col justify-center pl-1 gap-1">
                <div className="font-display font-black text-white text-xl lg:text-2xl tracking-tight uppercase">Shiv</div>
                <div className="text-[9px] lg:text-[10px] font-bold text-red-400 tracking-wide uppercase">Auto Components</div>
              </div>
            </div>
            <p className="text-white/70 text-sm mt-5 max-w-md leading-relaxed">
              Shiv Auto Components is a trusted name in the field of precision manufacturing. We specialize in the manufacturing and supply of high-quality auto components that power performance and ensure reliability.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="font-eyebrow text-white/60 mb-4">Company</div>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/machinery" className="hover:text-white">Machinery</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-eyebrow text-white/60 mb-4">Get in touch</div>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#2563EB]" />
                <span>Sector 58, Faridabad - 121004 (Haryana)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <a href="tel:+919915417572" className="hover:text-white">+91 9915417572</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <a href="mailto:manishshivauto@gmail.com" className="hover:text-white">manishshivauto@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-white/50">
            © {new Date().getFullYear()} Shiv Auto Components. All rights reserved.
          </div>
          <div className="text-xs text-white/60">
            Designed &amp; Developed by{" "}
            <a
              data-testid="growing-graph-link"
              href="https://www.thegrowinggraph.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#2563EB] font-medium underline underline-offset-4"
            >
              The Growing Graph
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}