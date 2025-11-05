'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Diet Prediction and Visualization System',
      description: 'Developed an AI-powered web application that provides personalized diet recommendations and visual insights based on user health data. Integrated TensorFlow.js for real-time model predictions, Chart.js for interactive data visualization, and implemented responsive UI using Next.js and CSS with lightweight file-based storage.',
      image: '🥗',
      tech: ['Next.js', 'TensorFlow.js', 'Chart.js', 'FileSystem {.txt}'],
      github: 'https://github.com/devendra529',
      live: '#',
      gradient: 'from-green-400 to-cyan-500'
    },
    {
      title: 'Health Blog Platform',
      description: 'Built a full-stack health blogging platform where users can post, read, like, and comment on articles. Implemented authentication with login and signup features, file-based (.txt) data storage for posts, and a responsive UI using Next.js and Tailwind CSS to ensure a clean and modern user experience.',
      image: '🛒',
      tech: ['Next.js', 'Node.js', 'MySQL'],
      github: 'https://github.com/devendra529',
      live: '#',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Task Management System',
      description: 'Full-stack task management application with real-time updates. Users can create, assign, and track tasks with team collaboration features.',
      image: '📋',
      tech: ['React', 'Spring Boot', 'MySQL', 'WebSocket'],
      github: 'https://github.com/devendra529',
      live: '#',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Canteen Management System',
      description: 'Designed and developed an interactive, responsive front-end for online food ordering and token management with a smooth user experience.',
      image: '🍽️',
      tech: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      github: 'https://github.com/devendra529',
      live: '#',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'fitness Tracker',
      description: 'Built a responsive health tracking system to monitor fitness and dietary activities with interactive dashboards using JavaScript and Firebase.',
      image: '💪',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/devendra529',
      live: '#',
      gradient: 'from-red-400 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Some of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card group overflow-hidden"
            >
              {/* Project Image/Icon */}
              <div className={`w-full h-48 bg-linear-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300`}>
                {project.image}
              </div>

              {/* Project Details */}
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 gradient-bg text-white rounded-lg hover:shadow-lg transition-shadow"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}