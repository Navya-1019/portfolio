import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold">
            NMS
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900">
          Hi, I'm <span className="text-gray-700">Navya Manjunath</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
           "Data Analyst | Turning Data into Insights"
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
            View Projects
          </a>
          <a href="#contact" className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
