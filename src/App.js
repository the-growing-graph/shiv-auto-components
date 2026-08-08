import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Capabilities from "@/pages/Capabilities";
import Infrastructure from "@/pages/Infrastructure";
import Machinery from "@/pages/Machinery";
import Quality from "@/pages/Quality";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Products from "@/pages/Products";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-center" richColors />
      <Routes>
        <Route
          path="*"
          element={
            <PublicLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/capabilities" element={<Capabilities />} />
                <Route path="/infrastructure" element={<Infrastructure />} />
                <Route path="/machinery" element={<Machinery />} />
                <Route path="/quality" element={<Quality />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </PublicLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
