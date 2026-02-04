import React from "react";

const Continuity = () => {
  return (
    <section className="py-32 bg-calm-blue relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl text-tale-dark mb-8">
              Seamless Syncing. <br />
              Always with You.
            </h2>
            <p className="text-gray-600 mb-8 font-light text-lg">
              Switch between your phone and your computer without missing a
              beat. Your journey is saved locally and synced across your
              devices, ensuring comfort is never more than a click away.
            </p>
            <ul className="space-y-4">
              {[
                "Automatic real-time syncing",
                "Full offline support",
                "Privacy-first encryption",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-500 font-light italic"
                >
                  <span className="w-1.5 h-1.5 bg-tale-accent rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 relative">
            <div className="relative flex items-end justify-center">
              <div className="w-4/5 aspect-video bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden relative transform -rotate-3 transition-transform hover:rotate-0 duration-700">
                <div className="h-4 bg-gray-50 w-full border-b" />
                <div className="p-4 flex flex-col gap-2">
                  <div className="w-1/2 h-4 bg-gray-50 rounded" />
                  <div className="w-full h-20 bg-linear-to-r from-blue-50 to-indigo-50 rounded" />
                </div>
              </div>

              <div className="absolute -bottom-8 right-0 w-2/5 aspect-9/19 bg-white rounded-3xl shadow-2xl border-4 border-white p-1 transform rotate-3 transition-transform hover:rotate-0 duration-700 overflow-hidden">
                <img
                  src="/i-phone.png"
                  alt="Phone App"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
    </section>
  );
};

export default Continuity;
