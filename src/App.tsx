import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WebExperience from "./components/WebExperience";
import Journey from "./components/Journey";
import Trust from "./components/Trust";
import Continuity from "./components/Continuity";
import { FinalCTA, Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navbar stays throughout */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Web Experience Section */}
      <WebExperience />

      {/* 3. How It Helps (Journey) */}
      <Journey />

      {/* 4. Features Section */}
      <Features />

      {/* 5. Science & Trust Section */}
      <Trust />

      {/* 6. Continuity Section */}
      <Continuity />

      {/* 7. Final CTA Section */}
      <FinalCTA />

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

export default App;
