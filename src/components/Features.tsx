import { Heart, Clock, MessageCircle, MessageSquare } from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  subDescription,
}: {
  icon: any;
  title: string;
  description: string;
  subDescription: string;
}) => (
  <div className="bg-white p-8 rounded-4xl shadow-premium border border-gray-50 flex flex-col items-start text-left transition-all hover:shadow-premium-hover hover:-translate-y-1">
    <div className="mb-6 p-4 bg-gray-50 rounded-2xl">
      <Icon size={32} strokeWidth={1.5} className="text-black" />
    </div>
    <h3 className="text-xl font-semibold mb-3 font-sans">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-4 font-sans">
      {description}
    </p>
    <p className="text-gray-400 text-[13px] leading-relaxed font-sans">
      {subDescription}
    </p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Guided Breaths",
      description: "Based on evidence.",
      subDescription: "Proven to help you calm down fast in various scenarios.",
    },
    {
      icon: Clock,
      title: "Clinically Proven",
      description: "Techniques taught by doctors.",
      subDescription: "Designed to help you stay calm and resilient.",
    },
    {
      icon: MessageCircle,
      title: "AI Companion",
      description: "Your personal support bot.",
      subDescription: "Available to listen and provide guidance 24/7.",
    },
    {
      icon: MessageSquare,
      title: "Emergency Support",
      description: "Immediate help when needed.",
      subDescription: "Connect with experts and family in one click.",
    },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-tale-dark mb-16 text-left">
          Explore Our Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors">
            Learn More
          </button>
          <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-black text-white text-sm font-medium hover:bg-black/90 transition-colors shadow-xl">
            Download Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
