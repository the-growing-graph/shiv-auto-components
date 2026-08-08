import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Home, Info, Cpu, Building2, Image as GalleryIcon, PhoneCall, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About Us", icon: Info },
  { to: "/machinery", label: "Our Machines", icon: Cpu },
  { to: "/infrastructure", label: "Our Infrastructure", icon: Building2 },
  { to: "/gallery", label: "Our Gallery", icon: GalleryIcon },
  { to: "/contact", label: "Contact Us", icon: PhoneCall },
];

const TICKER_ITEMS = [
  "⚡ Premier Manufacturer of High-Precision Auto Components",
  "🏆 ISO 9001:2015 Certified Excellence in Automotive & Industrial Engineering",
  "⚙️ State-of-the-Art Machinery & Infrastructure | Trusted Partner for Automotive OEMs",
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-white/90 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      {/* CSS Keyframes for Ticker Animation */}
      <style>{`
        @keyframes headerTicker {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-header-ticker {
          display: flex;
          width: max-content;
          animation: headerTicker 28s linear infinite;
        }
        .animate-header-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Sticky Top Announcement Bar / Scrolling Ticker */}
      <div className="bg-[#0F2B46] text-white text-xs py-2 overflow-hidden border-b border-[#1E3A5F] select-none">
        <div className="animate-header-ticker flex items-center gap-10">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((text, index) => (
            <div key={index} className="flex items-center gap-3 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] shrink-0" />
              <span className="font-semibold text-gray-100 tracking-wide">{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-15">
          {/* Logo & Brand Section */}
          <Link to="/" data-testid="header-logo" className="flex items-center gap-2 md:gap-2.5 group shrink-0">
            <img
              src="/final_logo.png"
              alt="SAC Logo"
              className="h-8 md:h-9 xl:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <div className="font-display font-black tracking-tight whitespace-nowrap text-xs sm:text-sm lg:text-base xl:text-lg flex items-center gap-1.5">
              <span className="text-[#0F2B46]">Shiv</span>
              <span className="text-[#B91C1C]">Auto Components</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center shrink-0">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                data-testid={`nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `px-1.5 lg:px-2 xl:px-2.5 py-1 text-xs lg:text-[13px] xl:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? "text-[#B91C1C]"
                      : "text-[#0F2B46] hover:text-[#B91C1C]"
                  }`
                }
              >
                <span className="whitespace-nowrap">{n.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Call CTA Option */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="tel:+919915417572"
              data-testid="header-call-btn"
              className="flex items-center gap-1.5 bg-[#B91C1C] hover:bg-[#991B1B] text-white px-3 xl:px-3.5 py-1.5 xl:py-2 rounded-lg font-semibold text-xs xl:text-sm transition-all shadow-sm hover:shadow-md active:scale-95 group whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white group-hover:rotate-12 transition-transform duration-200 shrink-0" />
              <span className="whitespace-nowrap">+91 9915417572</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-[#0F2B46] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {open && (
        <div data-testid="mobile-menu" className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {NAV.map((n) => {
              const IconComponent = n.icon;
              return (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 text-base font-semibold rounded-lg transition-colors ${
                      isActive
                        ? "text-[#B91C1C] bg-red-50/70"
                        : "text-[#0F2B46] hover:bg-gray-50 hover:text-[#B91C1C]"
                    }`
                  }
                >
                  <IconComponent className="w-5 h-5 shrink-0 text-[#B91C1C]" />
                  <span>{n.label}</span>
                </NavLink>
              );
            })}

            <div className="pt-3 border-t border-gray-100">
              <a
                href="tel:+919915417572"
                className="flex items-center justify-center gap-2.5 bg-[#B91C1C] hover:bg-[#991B1B] text-white py-3 px-4 rounded-lg font-semibold text-base transition-all shadow-sm active:scale-98"
              >
                <Phone className="w-5 h-5" />
                <span>Call +91 9915417572</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

