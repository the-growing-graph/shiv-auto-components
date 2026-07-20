import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Cog, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { VisitDialog } from "@/components/forms/VisitDialog";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/machinery", label: "Machinery" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];



export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
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
    <>
      <header
        data-testid="site-header"
        className={`sticky top-0 z-50 transition-colors ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200"
            : "bg-white/70 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" data-testid="header-logo" className="flex items-center gap-1 group">
              <img src="/logo.png" alt="SAC Logo" className="h-10 md:h-20 w-auto object-contain -mr-4" />
              <div className="h-8 w-px bg-gray-300" />
              <div className="leading-none flex flex-col justify-center pl-1 gap-1">
                <div className="font-display font-black text-[#0F2B46] text-xl lg:text-2xl tracking-tight uppercase">Shiv</div>
                <div className="text-[9px] lg:text-[10px] font-bold text-[#B91C1C] tracking-wide uppercase">Auto Components</div>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-1">
              {NAV.map((n) => {
                if (n.submenu) {
                  const isSubmenuActive = n.submenu.some((sub) => location.pathname === sub.to);
                  return (
                    <div key={n.label} className="relative group py-2">
                      <button
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                          isSubmenuActive
                            ? "text-[#2563EB]"
                            : "text-[#0F2B46] hover:text-[#2563EB]"
                        }`}
                      >
                        <span>{n.label}</span>
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      </button>
                      <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-1">
                          {n.submenu.map((sub) => (
                            <NavLink
                              key={sub.to}
                              to={sub.to}
                              data-testid={`nav-${sub.label.toLowerCase()}`}
                              className={({ isActive }) =>
                                `block px-4 py-2 text-sm transition-colors ${
                                  isActive
                                    ? "bg-gray-50 text-[#2563EB] font-medium"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-[#2563EB]"
                                }`
                              }
                            >
                              {sub.label}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    data-testid={`nav-${n.label.toLowerCase()}`}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[#2563EB]"
                          : "text-[#0F2B46] hover:text-[#2563EB]"
                      }`
                    }
                  >
                    {n.label}
                  </NavLink>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <Button
                data-testid="header-quote-btn"
                onClick={() => setQuoteOpen(true)}
                className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-sm font-medium"
              >
                Request Quote
              </Button>
            </div>

            <button
              data-testid="mobile-menu-toggle"
              className="xl:hidden p-2 text-[#0F2B46]"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div data-testid="mobile-menu" className="xl:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-1">
              {NAV.map((n) => {
                if (n.submenu) {
                  return (
                    <div key={n.label} className="space-y-1 py-1">
                      <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {n.label}
                      </div>
                      {n.submenu.map((sub) => (
                        <NavLink
                          key={sub.to}
                          to={sub.to}
                          className={({ isActive }) =>
                            `block pl-6 pr-3 py-2 text-sm rounded-md transition-colors ${
                              isActive
                                ? "text-[#2563EB] font-semibold bg-blue-50/50"
                                : "text-[#0F2B46] hover:bg-gray-50"
                            }`
                          }
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-sm rounded-md transition-colors ${
                        isActive
                          ? "text-[#2563EB] font-semibold bg-blue-50/50"
                          : "text-[#0F2B46] hover:bg-gray-50"
                      }`
                    }
                  >
                    {n.label}
                  </NavLink>
                );
              })}

              <div className="pt-3 flex flex-col gap-2">
                <Button
                  onClick={() => setQuoteOpen(true)}
                  className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-sm"
                >
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
}
