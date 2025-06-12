import React from 'react';

const services = [
  {
    title: 'Full Stack Development',
    icon: '🧩',
    description:
      'End-to-end development of modern, scalable, and secure web applications tailored to your business needs.',
    points: [
      'Frontend with React, Next.js, Vue.js',
      'Backend APIs using Node.js, Express, Laravel',
      'MongoDB, MySQL, PostgreSQL integration',
      'Authentication with JWT, OAuth, Firebase',
      'Admin panels, analytics & dashboards',
      'RESTful APIs & third-party integrations',
      'CI/CD (Vercel, Netlify, Docker)',
    ],
  },
  {
    title: 'Cybersecurity & Secure Development',
    icon: '🛡️',
    description:
      'Building secure systems from day one, applying best practices in web security and data protection.',
    points: [
      'Role-based access control (RBAC)',
      'XSS, CSRF, SQL injection protection',
      'HTTPS, SSL/TLS configuration',
      'Security headers & CSP policies',
      'OWASP Top 10 remediation',
      'Logging, auditing & monitoring',
      'GDPR & data privacy compliance',
    ],
  },
];

const tools = [
  'React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Node.js',
  'Express.js', 'Laravel', 'MongoDB', 'MySQL', 'JWT',
  'Docker', 'Vercel', 'Netlify', 'Cloudflare', 'Git/GitHub',
];

const testimonials = [
  {
    name: 'Sarah M.',
    feedback:
      'A highly skilled developer! Delivered a full-stack dashboard with secure login, charts, and API connections. Will definitely hire again.',
  },
  {
    name: 'Ahmed R.',
    feedback:
      'Impressed by the professionalism and attention to detail. Our web portal is secure, fast, and scalable. Great communication throughout!',
  },
];

const projects = [
  {
    name: 'Secure Medical Platform',
    description:
      'Multi-store medical inventory and order management system with real-time tracking, role-based access, and JWT authentication.',
  },
  {
    name: 'Academic Portal',
    description:
      'Full-featured academic platform with student/admin dashboards, grading, attendance, and secure backend using Laravel & MySQL.',
  },
];

const FreelancePage = () => {
  return (
    <div className="min-h-screen px-4 py-12 text-black dark:text-white font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Freelance Services</h1>
          <p className="text-lg">Full Stack Development & Cybersecurity Consulting</p>
        </header>

        {/* Services */}
        <section className="grid md:grid-cols-2 gap-10 mb-20">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">{service.icon}</div>
                <h2 className="text-2xl font-semibold">{service.title}</h2>
              </div>
              <p className="mb-4">{service.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Tools & Tech */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Technologies & Tools</h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Project Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="p-5 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md"
              >
                <p className="italic mb-4">"{t.feedback}"</p>
                <h4 className="font-semibold text-lg">— {t.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-24">
          <h3 className="text-2xl font-bold mb-3">Let’s Build Something Great</h3>
          <p className="mb-6">Contact me to discuss your next project.</p>
          <a
            href="mailto:your-email@example.com"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            Contact Me
          </a>
        </section>
      </div>
    </div>
  );
};

export default FreelancePage;
