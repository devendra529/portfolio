import {
  MapPin,
  Code,
  Target,
  BookOpen,
  Award,
  Sparkles
} from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      description: 'Ghaziabad, India',
      gradient: 'from-blue-600 via-blue-500 to-cyan-500'
    },

    {
      icon: <Code className="w-6 h-6" />,
      title: 'Tech Stack',
      description:
        'Java, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB',
      gradient: 'from-violet-600 via-purple-500 to-fuchsia-500'
    },

    {
      icon: <Target className="w-6 h-6" />,
      title: 'Focus Areas',
      description:
        'Full Stack Development, Backend Engineering, Problem Solving',
      gradient: 'from-orange-600 via-orange-500 to-rose-500'
    },

    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Education',
      description:
        'ABES Engineering College | B.Tech CSE (Data Science)',
      gradient: 'from-emerald-600 via-green-500 to-teal-500'
    }
  ];

  const achievements = [
    { number: '200+', label: 'Problems Solved' },
    { number: '10+', label: 'Projects Built' },
    { number: '2+', label: 'Hackathons' }
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 dark:border-blue-400/20 mb-4">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />

            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Get to know me
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            B.Tech CSE (Data Science) student at ABES Engineering
            College with hands-on experience in Full Stack MERN
            Development using React.js, Next.js, Node.js,
            Express.js, MongoDB, and Mongoose. Passionate
            about building scalable, user-centric, and
            real-world applications with modern technologies.
            Strong programming skills in Java & JavaScript
            with a growing interest in backend engineering,
            APIs, and AI-integrated applications.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}
              ></div>

              {/* Icon */}
              <div
                className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg`}
              >
                {card.icon}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity`}
                ></div>
              </div>

              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {card.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {achievements.map((stat, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>

                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Journey Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>

            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-500/20 to-orange-500/20 rounded-full blur-3xl -z-10"></div>

            <div className="relative space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />

                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  My Journey
                </h3>
              </div>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-base md:text-lg">
                  I am a passionate Full Stack MERN Developer
                  with strong knowledge of{' '}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Java
                  </span>{' '}
                  and{' '}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    JavaScript
                  </span>
                  . My focus is on building scalable,
                  efficient, and user-friendly applications
                  using modern web technologies.
                </p>

                <p className="text-base md:text-lg">
                  With experience in technologies like
                  React.js, Next.js, Node.js, Express.js,
                  MongoDB, and Firebase, I enjoy creating
                  complete end-to-end applications from
                  frontend UI to backend APIs. I have solved{' '}
                  <span className="font-bold text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text">
                    200+ coding problems
                  </span>{' '}
                  and continuously improve my problem-solving
                  and development skills through projects and
                  hackathons.
                </p>
              </div>

              {/* Buttons */}
              <div className="pt-6 flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                  View Resume
                </button>

                <button className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}