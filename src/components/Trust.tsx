import React from "react";
import { BookOpen, Users, CheckCircle2 } from "lucide-react";

const Trust = () => {
  return (
    <section className="py-32 bg-white flex flex-col items-center">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl text-tale-dark mb-16">
          Rooted in Research, <br />
          Designed for Humanity.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 text-tale-accent">
              <BookOpen size={40} strokeWidth={1} />
            </div>
            <h3 className="text-lg font-bold text-tale-dark mb-3 font-sans">
              Evidence-Based
            </h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Every feature is based on proven clinical research in anxiety
              management and mindfulness.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 text-tale-accent">
              <Users size={40} strokeWidth={1} />
            </div>
            <h3 className="text-lg font-bold text-tale-dark mb-3 font-sans">
              Expertly Crafted
            </h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Collaboratively developed with leading psychologists and mental
              health professionals.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 text-tale-accent">
              <CheckCircle2 size={40} strokeWidth={1} />
            </div>
            <h3 className="text-lg font-bold text-tale-dark mb-3 font-sans">
              Peer Tested
            </h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Heavily tested by individuals with panic disorders to ensure
              real-world effectiveness.
            </p>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-gray-50 max-w-2xl mx-auto italic text-gray-400 text-sm font-serif">
          "We believe mental health support should be a human right—accessible,
          intuitive, and always at your fingertips."
        </div>
      </div>
    </section>
  );
};

export default Trust;
