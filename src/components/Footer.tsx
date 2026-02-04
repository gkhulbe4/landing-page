import React from "react";
import { AppleIcon } from "./ui/AppleIcon";

const FinalCTA = () => {
  return (
    <section className="relative py-40 overflow-hidden flex items-center justify-center text-center">
      <div
        className="absolute inset-0 z-0 bg-bottom bg-no-repeat bg-cover opacity-60"
        style={{ backgroundImage: "url('/grass.png')" }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-white z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl text-tale-dark mb-8">
          Ready to reclaim your <br />
          peace of mind?
        </h2>
        <p className="text-gray-600 mb-12 font-light text-lg max-w-xl mx-auto italic">
          "The first step toward calm is the hardest. Let us help you take it."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-black text-white px-10 py-5 rounded-full flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl group">
            <AppleIcon />
            <span className="font-light text-sm">Download App</span>
          </button>
          <button className="bg-white text-gray-800 px-10 py-5 rounded-full border border-gray-100 hover:bg-gray-50 transition-all font-light text-sm">
            Open Web App
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 bg-white px-6 border-t border-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-bold text-xs uppercase">
            T
          </div>
          <span className="text-xl font-normal tracking-tight">Tale</span>
        </div>

        <div className="flex flex-wrap gap-12">
          <div className="flex flex-col gap-4">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Product
            </h5>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-black transition-colors font-light"
            >
              Features
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-black transition-colors font-light"
            >
              Pricing
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Company
            </h5>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-black transition-colors font-light"
            >
              Science
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-black transition-colors font-light"
            >
              Privacy
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Support
            </h5>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-black transition-colors font-light"
            >
              Help Center
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-black transition-colors font-light"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between gap-6 text-[11px] text-gray-400 uppercase tracking-widest">
        <div>© 2026 Tale Project. All Rights Reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-black">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export { FinalCTA, Footer };
