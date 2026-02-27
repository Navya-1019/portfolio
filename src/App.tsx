import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold text-gray-900">NAVYA M </a>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition">About</a>
            <a href="#skills" className="text-sm text-gray-600 hover:text-gray-900 transition">Skills</a>
            <a href="#projects" className="text-sm text-gray-600 hover:text-gray-900 transition">Projects</a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">© 2026 Navya Manjunath. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
