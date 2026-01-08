import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 dark:text-white">

  <div className="w-full bg-[#000000] relative text-white">
  {/* Gradient Diagonal Lines Pattern */}
  <div className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `
         repeating-linear-gradient(45deg, rgba(0, 255, 65, 0.08) 0, rgba(0, 255, 65, 0.08) 1px, transparent 1px, transparent 12px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 65, 0.08) 0, rgba(0, 255, 65, 0.08) 1px, transparent 1px, transparent 12px),
        repeating-linear-gradient(90deg, rgba(0, 255, 65, 0.03) 0, rgba(0, 255, 65, 0.03) 1px, transparent 1px, transparent 4px)
      `,
        backgroundSize: '24px 24px, 24px 24px, 8px 8px',
    }}
  />
  {/* Your Content/Components */}
    {/* Hero Section */}
      <section className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#33425b37] via-[#87dfd697] to-[#38817a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Build Modern Web Apps Faster
          </h2>
          <p className="text-lg md:text-xl mb-8 text-indigo-100">
            React + Tailwind CSS helps you build beautiful UIs quickly.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-100">
             <Link to="/dashboard">Get Started</Link>
            </button>
            <button className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600">
              Learn More
            </button>
          </div>
        </div>
      </section>
</div>

    
      

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 ">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h3>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-gradient-to-tl from-[#f6fbf4] via-[#f5df99] to-[#5fd068] p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Fast Development</h4>
            <p className="text-gray-600">
              Utility-first CSS speeds up development.
            </p>
          </div>
          <div className="bg-gradient-to-bl from-[#f7f5b2] via-[#bad4f9] to-[#5e89ef] p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Responsive Design</h4>
            <p className="text-gray-600">Optimized for all screen sizes.</p>
          </div>
          <div className="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#008dda] via-[#41c9e2] to-[#ace2e1] p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Clean UI</h4>
            <p className="text-gray-600">
              Minimal, professional, and modern look.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <p>© 2026 MyApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
