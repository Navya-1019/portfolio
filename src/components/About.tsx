import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              I'm a passionate data analyst specializing in transforming raw data into actionable insights. 
              With expertise in Python, Tableau, Power BI, and advanced Excel, I help businesses make 
              data-driven decisions through compelling visualizations and analysis.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Currently pursuing CSE (Data Science) , I combine technical skills with 
              analytical thinking to solve complex problems. I love exploring datasets, finding patterns, 
              and telling stories through data.
            </p>
            <a 
              href="/resume.pdf" 
              download 
              className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Quick Facts</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">📍</span>
                <span>Based in Bangalore</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">💼</span>
                <span>Open to internships & opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">🎓</span>
                <span>CSE (Data Science) Engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">📊</span>
                <span>Data visualization enthusiast</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">⚡</span>
                <span>Python | Tableau | Power BI | Excel</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;