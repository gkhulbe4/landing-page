import { ChevronDown, Flower } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="z-50 bg-white/80 backdrop-blur-md border-b border-gray-50/50">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <Flower size={24} />
            <span className="text-xl font-normal tracking-tight">Tale</span>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <a
              href="#"
              className="flex items-center gap-1 text-xs font-normal transition-colors hover:text-black/60"
            >
              Tutors <ChevronDown size={14} />
            </a>
            <a
              href="#"
              className="text-xs font-normal transition-colors hover:text-black/60"
            >
              Research Papers
            </a>
            <a
              href="#"
              className="text-xs font-normal transition-colors hover:text-black/60"
            >
              Article
            </a>
          </div>
        </div>

        <button className="rounded-full bg-black px-6 py-2 text-xs font-medium text-white transition-all hover:bg-black/80">
          Download
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
