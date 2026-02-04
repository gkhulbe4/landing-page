import React from "react";
import { Shield, Zap } from "lucide-react";
import Dashboard from "./Dashboard";

const WebExperience = () => {
  return (
    <section className="relative py-32 bg-calm-green overflow-hidden">
      {/* Soft Transition From Above */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl text-tale-dark mb-6">
            Experience Calm, <br />
            Everywhere.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto font-light lg:text-lg">
            Our web platform provides the same supportive atmosphere, accessible
            from any device when you need a moment of focus.
          </p>
        </div>

        {/* Browser Mockup */}
        <div className="relative max-w-5xl mx-auto animate-slow-float">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Browser Header */}
            <div className="bg-gray-50 px-4 py-3 border-b flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
              </div>
              <div className="mx-auto bg-white rounded-md h-5 w-1/3 border" />
            </div>

            <div className="aspect-video bg-white p-2 flex items-center justify-center">
              <div className="w-full h-full overflow-y-auto scrollbar-hide">
                <Dashboard />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 max-w-4xl mx-auto text-center">
          <div>
            <h4 className="font-bold text-tale-dark mb-2 uppercase tracking-widest text-xs">
              Accessibility
            </h4>
            <p className="text-gray-500 text-sm font-light">
              Available on all modern browsers with one click.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-tale-dark mb-2 uppercase tracking-widest text-xs">
              Seamless Sync
            </h4>
            <p className="text-gray-500 text-sm font-light">
              Your progress and history follow you everywhere.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-tale-dark mb-2 uppercase tracking-widest text-xs">
              Simplicity
            </h4>
            <p className="text-gray-500 text-sm font-light">
              Designed to be intuitive, even in moments of stress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebExperience;
