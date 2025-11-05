'use client';
import { motion } from 'framer-motion';
import { Trophy, Award, Code2, Users } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: <Code2 className="w-12 h-12" />,
      title: '300+ Problems Solved',
      description: 'Successfully solved 300+ coding problems on CodeChef, focusing on Data Structures and Algorithms',
      color: 'from-yellow-400 to-orange-500',
      link: 'https://leetcode.com/devendra529'
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Flipkart Grid 2025',
      description: 'Participated in Flipkart Grid 2025, a prestigious national-level engineering challenge',
      color: 'from-blue-400 to-cyan-500',
      link: '#'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'AWS Cloud Practitioner',
      description: 'AWS Certified Cloud Practitioner - Demonstrated cloud computing knowledge and AWS services',
      color: 'from-orange-400 to-red-500',
      link: '#'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'E-Cell ABES Member',
     description: 'Former member of the Entrepreneurship Cell at ABES, contributed to organizing tech events and workshops.',
      color: 'from-purple-400 to-pink-500',
      link: '#'
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      title: 'Open Source Contributor',
      description: 'Contributing to open-source projects and helping the developer community grow',
      color: 'from-green-400 to-teal-500',
      link: 'https://github.com/devendra529'
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Hackathon Participant',
      description: 'Participated in multiple hackathons, building innovative solutions under time constraints',
      color: 'from-indigo-400 to-purple-500',
      link: '#'
    }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Milestones and recognitions in my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.a
              key={index}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card group cursor-pointer"
            >
              <div className={`w-20 h-20 rounded-full bg-linear-to-r ${achievement.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '300+', label: 'Problems Solved' },
            { number: '10+', label: 'Projects Completed' },
            { number: '3+', label: 'Certifications' },
            { number: '2+', label: 'Years Coding' }
          ].map((stat, index) => (
            <div key={index} className="card text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}