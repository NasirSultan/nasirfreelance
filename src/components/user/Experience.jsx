import React from "react";

const ExperienceSection = () => {
  return (
    <section className="md:w-[83%] mx-auto p-6" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
        Experience
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed mb-2">
        I build full-stack web applications with a focus on performance, usability, and automation across the entire development lifecycle.
      </p>
      <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed mb-2">
        My work includes AI-powered features that enhance user experience, streamline workflows, and reduce manual tasks through intelligent automation.
      </p>
      <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed">
        I also follow secure development practices to ensure reliability, protection, and resilience in every application I build.
      </p>

      {/* --- PRESENT EXPERIENCE --- */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4 text-purple-900">Present</h3>
        <div className="ml-12 space-y-8">
          {/* Software Company */}
          <div>
            <h4 className="text-xl font-bold text-black">Software Company</h4>
            <p className="text-sm text-gray-900 font-bold">Full Stack Developer – Remote, Karnataka, India</p>
            <p className="text-sm text-gray-600 mb-4">April 2025 – Present</p>
            <div className="space-y-2 text-gray-800 ml-6">
              <i>Built AI agents using <strong>LangChain</strong>, <strong>LangGraph</strong>, and <strong>Gemini/GPT</strong>.</i><br />
              <i>Managed secure uploads via <strong>Multer</strong>, <strong>AWS S3</strong>, and <strong>Imgbb</strong>.</i><br />
              <i>Integrated <strong>Stripe API</strong> for real-time secure payments.</i><br />
              <i>Secured APIs with <strong>HTTPS</strong>, <strong>CORS</strong>, and <strong>rate limiting</strong>.</i><br />
              <i>Used <strong>DSA</strong> to optimize performance and scalability.</i>
            </div>
            <div className="mt-4">
              <span className="text-sm font-bold text-black-800">Key Tools & Technologies:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["langChain", "AWS-3", "langGraph", "HTTPS", "Payment Getway", "express-rate-limiting", "DSA"].map((tech) => (
                  <span key={tech} className="flex-1 px-2 py-1 rounded text-sm text-white bg-purple-600 text-center whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Freelance */}
          <div>
            <h4 className="text-xl font-bold text-black">Freelance</h4>
            <p className="text-sm text-gray-900 font-bold">Full Stack Developer</p>
            <p className="text-sm text-gray-600 mb-4">February 2021 – Present</p>
            <div className="space-y-2 text-gray-800 ml-6">
              <i>Developed high-performance <strong>REST APIs</strong> with <strong>Redis</strong> and <strong>Docker</strong>.</i><br />
              <i>CI/CD deployment via <strong>GitHub Actions</strong> on <strong>Vercel</strong>, <strong>AWS</strong>, etc.</i><br />
              <i>SEO via <strong>SSR</strong>, meta tags, and <strong>i18n</strong> support.</i><br />
              <i>Used <strong>LLMs</strong> and <strong>SendMailer</strong> to automate workflows.</i>
            </div>
            <div className="mt-4">
              <span className="text-sm font-bold text-black-800">Key Tools & Technologies:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["CI/CD", "Docker", "SEO", "LLMs", "Firebase", "Redux", "GitHub-action"].map((tech) => (
                  <span key={tech} className="flex-1 px-2 py-1 rounded text-sm text-white bg-purple-600 text-center whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- INTERNSHIP --- */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4 text-purple-900">Internship</h3>
        <h4 className="text-xl font-bold text-black">Rhombix Technologies</h4>
        <p className="text-sm text-gray-600 mb-4">Jan 2025 – Mar 2025</p>
        <h4 className="text-xl font-bold text-black">Youngdiv</h4>
        <p className="text-sm text-gray-600 mb-4">Dec 2024</p>
        <div className="space-y-2 text-gray-800 ml-4">
          <i>Responsive UIs using <strong>React</strong>, <strong>Vue</strong>, <strong>Tailwind CSS</strong>.</i><br />
          <i>REST APIs with <strong>JWT</strong>, <strong>Laravel Sanctum</strong>, <strong>Google OAuth2</strong>.</i><br />
          <i>Optimized <strong>MongoDB</strong> and <strong>MySQL</strong> with joins and indexing.</i><br />
          <i>Improved performance on <strong>Vercel</strong>, <strong>Netlify</strong>.</i>
        </div>
        <div className="mt-4">
          <span className="text-sm font-bold text-black-800">Key Tools & Technologies:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {["React.js", "Vue.js", "MongoDB", "MYSQL", "CSS3", "REST API", "Laravel"].map((tech) => (
              <span key={tech} className="flex-1 px-2 py-1 rounded text-sm text-white bg-purple-600 text-center whitespace-nowrap">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- INDEPENDENT --- */}
      <div>
        <h3 className="text-2xl font-bold text-indigo-700 mb-4 text-purple-900">Independent</h3>
        <p className="text-sm text-gray-600 mb-4">Ongoing</p>
        <div className="space-y-2 text-gray-800 ml-4">
          <i>Published packages on <strong>NPM</strong> for <strong>React</strong> & <strong>Node.js</strong>.</i><br />
          <i>Created Laravel packages with <strong>dependency injection</strong>.</i><br />
          <i>Optimized apps via <strong>lazy loading</strong> and <strong>memoization</strong>.</i><br />
          <i>Built custom hooks like <code>useFetch()</code>.</i><br />
          <i>Used <strong>Jest</strong> and TDD practices.</i><br />
          <i>Built <strong>AI agents</strong> using <strong>LangGraph</strong>, <strong>Gemini</strong>.</i><br />
          <i>Tested APIs via <strong>Postman</strong>.</i>
        </div>
        <div className="mt-4">
          <span className="text-sm font-bold text-black-800">Key Tools & Technologies:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {["NPM", "Custom React Hooks", "Laravel Packages", "Lazy Loading", "Utility Classes", "Jest", "Postman"].map((tech) => (
              <span key={tech} className="flex-1 px-2 py-1 rounded text-sm text-white bg-purple-600 text-center whitespace-nowrap">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
