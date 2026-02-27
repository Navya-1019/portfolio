import React from 'react';

interface Skill {
  name: string;
  level: number;
  
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'python', level: 90},
    { name: 'tableau', level: 85},
    { name: 'powerBI', level: 90},
    { name: 'excel', level: 85},
    { name: 'mongoDB', level: 80},
    { name: 'Git & GitHub', level: 85},
    { name: 'canva', level: 100},
    
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                </div>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-gray-900 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
 