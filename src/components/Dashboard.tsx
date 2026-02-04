import React from "react";
import {
  LayoutDashboard,
  Calendar,
  BarChart3,
  Settings,
  Leaf,
  Users,
  Moon,
  Wind,
  Brain,
  Waves,
  Play,
  MoreHorizontal,
  Sparkles,
  Sun,
  TreePine,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="bg-calm-neutral h-full w-full p-4 md:p-6 font-sans text-tale-dark">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-tale-dark">
            Good morning, Sarah
          </h1>
          <p className="text-gray-500 font-light flex items-center gap-2">
            Time to find your center.{" "}
            <span className="text-orange-400">
              <Sparkles size={16} />
            </span>
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white p-2 rounded-full shadow-sm border border-gray-100">
          <button className="flex items-center gap-2 px-4 py-2 bg-tale-dark text-white rounded-full text-sm font-medium transition-transform hover:scale-105">
            <LayoutDashboard size={16} />
            <span>Overview</span>
          </button>
          <button className="p-2 text-gray-400 hover:text-tale-dark hover:bg-gray-50 rounded-full transition-colors">
            <Calendar size={20} />
          </button>
          <button className="p-2 text-gray-400 hover:text-tale-dark hover:bg-gray-50 rounded-full transition-colors">
            <BarChart3 size={20} />
          </button>
          <button className="p-2 text-gray-400 hover:text-tale-dark hover:bg-gray-50 rounded-full transition-colors">
            <Settings size={20} />
          </button>
          <div className="w-px h-6 bg-gray-200 mx-1"></div>
          <div className="w-8 h-8 bg-linear-to-br from-tale-accent to-indigo-400 rounded-full flex items-center justify-center text-white font-serif text-sm">
            S
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="relative overflow-hidden bg-linear-to-br from-tale-accent to-indigo-400 rounded-4xl p-8 text-white shadow-xl transition-transform hover:scale-[1.01] duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-tale-accent/20 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium mb-3">
                    <Leaf size={12} className="text-tale-accent" />
                    <span>Daily Recommendation</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-2">
                    5-Minute Anxiety <br /> Relief
                  </h2>
                  <p className="text-white/60 font-light">
                    Restore balance with guided rhythmic breathing.
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                  <Wind size={32} className="text-white/80" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-3 bg-white text-tale-dark pl-5 pr-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                    <Play size={18} fill="currentColor" />
                    Begin Session
                  </button>
                  <span className="text-sm text-white/50 font-light hidden sm:inline-block">
                    ~ 5 mins remaining
                  </span>
                </div>

                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-tale-dark bg-white/20 backdrop-blur flex items-center justify-center text-[10px]"
                    >
                      <Users size={12} />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-tale-dark bg-tale-accent flex items-center justify-center text-[10px] font-bold text-tale-dark">
                    +2k
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-xl font-serif text-tale-dark">Explore</h3>
              <button className="text-sm text-gray-400 hover:text-tale-dark transition-colors">
                View Library
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: Brain,
                  label: "Focus",
                  color: "bg-orange-100",
                  text: "text-orange-700",
                },
                {
                  icon: Moon,
                  label: "Sleep",
                  color: "bg-indigo-100",
                  text: "text-indigo-700",
                },
                {
                  icon: Waves,
                  label: "Sounds",
                  color: "bg-teal-100",
                  text: "text-teal-700",
                },
                {
                  icon: Wind,
                  label: "Breath",
                  color: "bg-blue-100",
                  text: "text-blue-700",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer hover:-translate-y-1"
                >
                  <div
                    className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
                  >
                    <item.icon size={24} className={item.text} />
                  </div>
                  <h4 className="font-medium text-gray-800">{item.label}</h4>
                  <p className="text-xs text-gray-400 mt-1">32 sessions</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white p-6 rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-gray-50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-lg text-tale-dark">
                Your Journey
              </h3>
              <MoreHorizontal
                size={20}
                className="text-gray-300 cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-calm-green flex items-center justify-center text-xl">
                <Calendar size={24} />
              </div>
              <div>
                <div className="text-2xl font-serif font-medium text-tale-dark">
                  12 Days
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">
                  Streak
                </div>
              </div>
            </div>

            <div className="h-40 flex items-end justify-between gap-2">
              {[45, 70, 30, 85, 50, 65, 40].map((h, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 group w-full"
                >
                  <div className="relative w-full rounded-full bg-calm-green h-32 overflow-hidden">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-indigo-200 transition-all duration-1000 group-hover:bg-indigo-400"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-medium text-gray-400">
                    {["M", "T", "W", "T", "F", "S", "S"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent List */}
          <div className="bg-white p-6 rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-gray-50">
            <h3 className="font-serif text-lg text-tale-dark mb-6">
              Recent History
            </h3>
            <div className="space-y-4">
              {[
                { title: "Morning Clarity", time: "2 hrs ago", icon: Sun },
                { title: "Deep Sleep 101", time: "Yesterday", icon: Moon },
                { title: "Nature Sounds", time: "Yesterday", icon: TreePine },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-3 hover:bg-calm-neutral rounded-2xl transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-calm-green flex items-center justify-center text-lg text-tale-dark">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-tale-dark text-sm">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-400">{item.time}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-6 h-6 rounded-full border border-gray-100 flex items-center justify-center text-gray-300">
                      <Play size={10} fill="currentColor" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
