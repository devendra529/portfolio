'use client';
import { motion } from 'framer-motion';
import { Code, Layers, Database, Wrench, Cloud } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Programming Languages',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 65 }
      ]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Frontend Development',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'HTML & CSS', level: 90 }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend & Database',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 78 },
        { name: 'MongoDB', level: 75 },
        { name: 'Mongoose', level: 70 },
        { name: 'REST API', level: 85 }
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Tools & Platforms',
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 80 }
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Deployment & Cloud',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Vercel', level: 85 },
        { name: 'Render', level: 80 },
        { name: 'Firebase', level: 70 },
        { name: 'AWS Basics', level: 50 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="card"
            >
              <div
                className={`w-16 h-16 rounded-full bg-linear-to-r ${category.color} flex items-center justify-center text-white mb-4`}
              >
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>

                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay:
                            categoryIndex * 0.1 +
                            skillIndex * 0.1,
                          duration: 1
                        }}
                        className={`h-full bg-linear-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}