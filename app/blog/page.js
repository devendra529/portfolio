'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      title: 'How I Built My Spring Boot Project',
      excerpt: 'A comprehensive guide to building a RESTful API with Spring Boot, including best practices and common pitfalls to avoid.',
      date: 'October 15, 2024',
      readTime: '8 min read',
      category: 'Backend Development',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Learning Backend Development Step by Step',
      excerpt: 'My journey from a beginner to building production-ready backend systems. Tips, resources, and lessons learned.',
      date: 'September 28, 2024',
      readTime: '6 min read',
      category: 'Career',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Understanding Spring Boot Security',
      excerpt: 'Deep dive into implementing authentication and authorization in Spring Boot applications using JWT tokens.',
      date: 'September 10, 2024',
      readTime: '10 min read',
      category: 'Security',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'MySQL Optimization Tips for Developers',
      excerpt: 'Practical tips and techniques to optimize your MySQL database queries and improve application performance.',
      date: 'August 22, 2024',
      readTime: '7 min read',
      category: 'Database',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'My LeetCode Journey: 300+ Problems',
      excerpt: 'How I approached problem-solving on LeetCode and the strategies that helped me reach 300+ solved problems.',
      date: 'August 5, 2024',
      readTime: '5 min read',
      category: 'Problem Solving',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Building a Real-time Chat Application',
      excerpt: 'Step-by-step guide to building a real-time chat application using WebSockets, Spring Boot, and React.',
      date: 'July 18, 2024',
      readTime: '12 min read',
      category: 'Full Stack',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            My <span className="gradient-text">Blog</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Thoughts, tutorials, and insights on backend development, problem-solving, and tech
          </motion.p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card group cursor-pointer"
            >
              {/* Category Badge */}
              <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold text-white bg-linear-to-r ${post.gradient} mb-4`}>
                {post.category}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              {/* Read More Link */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                  Read More →
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16 card max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">More Content Coming Soon!</h3>
          <p className="text-gray-600 dark:text-gray-400">
            I m actively working on more blog posts covering backend development, 
            system design, and problem-solving techniques. Stay tuned!
          </p>
        </motion.div>
      </div>
    </div>
  );
}