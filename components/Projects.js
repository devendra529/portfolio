'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Scanly — Portable Digital Health Records',
      description: 'A full-stack web application for secure, QR-powered portable health records. Features role-based access (Patient, Doctor, Admin), JWT authentication, file uploads up to 20MB, dark/light mode, PWA support, and responsive design across all devices.',
      image: '🏥',
      tech: ['Next.js 14', 'Express.js', 'Tailwind CSS', 'JWT', 'QR Code'],
      github: '[github.com](https://github.com/devendra529)',
      live: 'https://scanly-rho.vercel.app/',
      gradient: 'from-teal-400 to-cyan-500'
    },
    {
      title: 'Diet Prediction System',
      description: 'An AI-based web app providing personalized diet suggestions and nutrition insights. Includes custom file-based authentication, food image upload for analysis, an interactive chat assistant, and a clean responsive UI—all without a traditional database.',
      image: '🥗',
      tech: ['Next.js', 'Tailwind CSS', 'Node.js', 'File System'],
      github: '[github.com](https://github.com/devendra529)',
      live: 'https://diet-pridiction.vercel.app/',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: 'School Management Portal',
      description: 'A full-stack school ERP with role-based portals for Admin, Teacher, and Student. Features include attendance tracking, homework uploads, result management, notice board, and a dynamic gallery—all powered by a lightweight .txt file-based storage system.',
      image: '📘',
      tech: ['Next.js', 'Tailwind CSS', 'Netlify Functions', 'File-based DB'],
      github: '[github.com](https://github.com/devendra529)',
      live: '#',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Health Blog Platform',
      description: 'A full-stack health blogging platform where users can post, read, like, and comment on articles. Features secure authentication with login/signup, file-based data storage, and a modern responsive UI built for seamless user experience.',
      image: '📝',
      tech: ['Next.js', 'Node.js', 'Tailwind CSS', 'File System'],
      github: '[github.com](https://github.com/devendra529)',
      live: '#',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'ShopKart — eCommerce Platform',
      description: 'A full-stack MERN eCommerce application with user authentication, product browsing, cart management, and order history. Includes comprehensive API testing with Postman and UI automation using Selenium WebDriver with TestNG.',
      image: '🛒',
      tech: ['React', 'Node.js', 'MongoDB', 'Selenium', 'Postman'],
      github: '[github.com](https://github.com/devendra529)',
      live: '#',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      title: 'Sanjeevani Hospital Website',
      description: 'A professional hospital website currently in development. Features modern design, responsive layout, service information, doctor profiles, appointment booking interface, and patient-focused user experience.',
      image: '🏨',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      github: '[github.com](https://github.com/devendra529)',
      live: 'https://sanjeevani-hospital-ten.vercel.app/',
      gradient: 'from-rose-400 to-pink-500'
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
              <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300`}>
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
