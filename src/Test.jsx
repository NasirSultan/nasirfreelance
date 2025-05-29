import { Briefcase, Code, Database, Shield, Smartphone, Lock, Server, Zap } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8 text-indigo-500" />,
    title: 'Frontend Development',
    description: 'Build stunning, responsive UIs using React, Vue, Next.js, and Tailwind CSS.',
  },
  {
    icon: <Database className="w-8 h-8 text-green-500" />,
    title: 'Backend Development',
    description: 'Design scalable APIs and systems with Node.js, Express, MongoDB, and MySQL.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-500" />,
    title: 'Responsive Design',
    description: 'Ensure a seamless experience across mobile, tablet, and desktop devices.',
  },
  {
    icon: <Shield className="w-8 h-8 text-red-500" />,
    title: 'Security & Optimization',
    description: 'Implement best practices for web security, performance, and SEO.',
  },
  {
    icon: <Lock className="w-8 h-8 text-pink-500" />,
    title: 'Cybersecurity for Web',
    description: 'Protect your web applications with vulnerability assessments, secure coding, and threat mitigation.',
  },
  {
    icon: <Server className="w-8 h-8 text-yellow-500" />,
    title: 'DevOps & Deployment',
    description: 'Automate infrastructure, CI/CD pipelines, and deploy applications seamlessly on cloud platforms.',
  },
  {
    icon: <Zap className="w-8 h-8 text-teal-500" />,
    title: 'Build API',
    description: 'Create robust RESTful and GraphQL APIs with proper documentation and versioning.',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-yellow-400" />,
    title: 'Maintenance & Support',
    description: 'Ongoing updates, backups, and improvements to keep your site running smoothly.',
  },
];

export default function FreelanceServices() {
  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          Full Stack Development Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I help businesses and entrepreneurs build fast, secure, and scalable web applications from concept to deployment.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
