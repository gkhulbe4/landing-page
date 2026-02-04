import React from "react";
import { Sparkles, Leaf, Moon, Sun } from "lucide-react";

const Step = ({
  icon: Icon,
  title,
  description,
  isLast,
}: {
  icon: any;
  title: string;
  description: string;
  isLast?: boolean;
}) => (
  <div className="flex flex-col items-center text-center relative max-w-sm mx-auto group">
    {!isLast && (
      <div className="hidden md:block absolute top-24 left-full w-full h-0.5 bg-linear-to-r from-gray-100 to-transparent z-0 transform -translate-x-12" />
    )}
    <div className="mb-8 p-6 bg-white rounded-4xl shadow-sm border border-gray-50 relative z-10 transition-all group-hover:shadow-md group-hover:-translate-y-1">
      <Icon size={32} strokeWidth={1.5} className="text-tale-accent" />
    </div>
    <h3 className="text-xl font-semibold text-tale-dark mb-4 font-sans">
      {title}
    </h3>
    <p className="text-gray-500 font-light text-sm leading-relaxed px-4">
      {description}
    </p>
  </div>
);

const Journey = () => {
  return (
    <section className="py-32 bg-calm-neutral relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl text-tale-dark mb-6">
            A Gentle Journey <br />
            Back to Balance.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto font-light">
            We don't give instructions. We provide a safe, quiet space for you
            to find your own way back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative">
          <Step
            icon={Sparkles}
            title="Settle In"
            description="Take a moment to notice your surroundings and find a comfortable space."
          />
          <Step
            icon={Leaf}
            title="Release"
            description="Let go of the weight you've been carrying, just for this moment."
          />
          <Step
            icon={Moon}
            title="Reflect"
            description="Listen to the quiet and observe your thoughts without judgment."
          />
          <Step
            icon={Sun}
            title="Renew"
            description="Step back into your day with a clearer mind and a lighter heart."
            isLast
          />
        </div>
      </div>

      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/12 -right-20 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-40" />
    </section>
  );
};

export default Journey;
