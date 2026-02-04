import { motion } from "framer-motion";
import { Flower, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="relative py-40 overflow-hidden flex items-center justify-center text-center bg-tale-dark text-white">
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tale-accent/50 via-tale-dark to-tale-dark" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif mb-8 tracking-tight"
        >
          Ready to reclaim your <br />
          <span className="text-tale-accent italic">peace of mind?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto"
        >
          Join the community of millions who have found their balance with Tale.
          Start your free 14-day trial today, no credit card required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="bg-white text-tale-dark px-10 py-5 rounded-full text-lg font-medium hover:bg-tale-accent hover:text-tale-dark transition-colors shadow-2xl">
            Get Started for Free
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="bg-tale-dark text-white p-1.5 rounded-lg transition-transform group-hover:rotate-12">
                <Flower size={20} fill="currentColor" />
              </div>
              <span className="text-2xl font-serif font-medium text-tale-dark tracking-tight">
                Tale
              </span>
            </a>
            <p className="text-gray-500 font-light mb-8 max-w-xs">
              Designed to help you find calm in the chaos of modern life. Built
              with love and science.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-tale-dark hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-tale-dark mb-6">Product</h4>
            <ul className="space-y-4 text-gray-500 font-light text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-tale-accent transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-tale-accent transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-tale-accent transition-colors"
                >
                  Web App
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-tale-accent transition-colors"
                >
                  For Business
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-tale-dark mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-500 font-light text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-tale-accent transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-tale-accent transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-tale-accent transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-tale-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-tale-dark mb-6">Stay in the loop</h4>
            <p className="text-gray-500 font-light text-sm mb-4">
              Receive mindfulness tips and updates directly to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-tale-accent bg-gray-50"
              />
              <button className="bg-tale-dark text-white px-6 py-3 rounded-xl font-medium hover:bg-black transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-light">
          <p>© 2024 Tale Wellness Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-tale-dark transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-tale-dark transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-tale-dark transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
