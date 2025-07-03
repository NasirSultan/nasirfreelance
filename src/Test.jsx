export default function Test() {
  return (
     <section className="md:w-[83%] mx-auto p-6" aria-labelledby="experience-heading">
      <Seo
        title="Experience | Full Stack Developer Portfolio"
        description="Explore my full stack development experience including LangChain, LangGraph, GPT, Stripe, SEO, Docker, React, and Laravel. Proven record of performance, security, and AI-driven automation."
        keywords="Full Stack Developer, React, Node.js, LangChain, GPT, Laravel, Docker, Stripe, SEO, Automation, Freelance Developer"
        url="https://yourdomain.com/experience"
      />

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
          {/* i) Software Company */}
          <div>
            <h4 className="text-xl font-bold text-black">Software Company</h4>
            <p className="text-sm text-gray-900 font-bold">Full Stack Developer – Remote, Karnataka, India</p>
            <p className="text-sm text-gray-600 mb-4">April 2025 – Present</p>

            <div className="space-y-2 text-gray-800 ml-6">
              <i>
                Built AI agents using <strong>LangChain</strong>, <strong>LangGraph</strong>, and <strong>Gemini/GPT</strong>, reducing manual effort by 60% and improving task automation.
              </i><br />
              <i>
                Managed secure file uploads via <strong>Multer</strong>, <strong>AWS S3</strong>, and <strong>Imgbb</strong>, and integrated analytics to track user behavior and system performance metrics.
              </i><br />
              <i>
                Integrated <strong>Stripe API</strong> for secure payment workflows, including webhook verification and real-time status updates.
              </i><br />
              <i>
                Secured APIs with <strong>HTTPS</strong>, <strong>CORS policies</strong>, middleware validation, and <strong>rate limiting (1000 RPM)</strong>.
              </i><br />
              <i>
                Applied strong understanding of <strong>Data Structures & Algorithms (DSA)</strong> to optimize code logic and improve app performance.
              </i>
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

          {/* ii) Freelance */}
          <div>
            <h4 className="text-xl font-bold text-black">Freelance</h4>
            <p className="text-sm text-gray-900 font-bold">Full Stack Developer</p>
            <p className="text-sm text-gray-600 mb-4">February 2021 – Present</p>

            <div className="space-y-2 text-gray-800 ml-6">
              <i>
                Developed high-performance <strong>REST APIs</strong> using <strong>Redis caching</strong> and <strong>Docker</strong> to support 1000+ concurrent users.
              </i><br />
              <i>
                Deployed full-stack apps on <strong>Vercel</strong>, <strong>Hostinger</strong>, and <strong>AWS</strong> using CI/CD via <strong>GitHub Actions</strong>.
              </i><br />
              <i>
                Boosted SEO using <strong>SSR</strong>, dynamic <strong>meta/schema tags</strong>, and multilingual support with <strong>i18n</strong> (Arabic, English, Urdu).
              </i><br />
              <i>
                Integrated <strong>LLMs (Gemini, GPT)</strong> and <strong>SendMailer</strong> to automate 70% of routine tasks.
              </i>
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

        <h4 className="text-xl font-bold text-black">Rhombix Technologies, Lahore, Pakistan</h4>
        <p className="text-sm text-gray-600 mb-4">Jan 2025 – Mar 2025</p>

        <h4 className="text-xl font-bold text-black">Youngdiv, Remote</h4>
        <p className="text-sm text-gray-600 mb-4">Dec 2024</p>

        <div className="space-y-2 text-gray-800 ml-4">
          <i>
            Built responsive UIs with <strong>React</strong>, <strong>Vue</strong>, and <strong>Tailwind CSS</strong> for better accessibility and performance.
          </i><br />
          <i>
            Built secure <strong>REST APIs</strong> with <strong>JWT</strong>, <strong>Laravel Sanctum</strong>, and <strong>Google OAuth2</strong>.
          </i><br />
          <i>
            Optimized <strong>MongoDB</strong> and <strong>MySQL</strong> queries using indexing, joins, and profiling.
          </i><br />
          <i>
            Improved serverless deployment on <strong>Vercel</strong>, <strong>GitHub Pages</strong>, and <strong>Netlify</strong>.
          </i>
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
          <i>
            Engineered reusable packages in <strong>React</strong> and <strong>Node.js</strong> and published on <strong>NPM</strong>.
          </i><br />
          <i>
            Created Laravel packages with <strong>dependency injection</strong> and modular architecture.
          </i><br />
          <i>
            Optimized React and Node apps using <strong>memoization</strong>, <strong>lazy loading</strong>, and efficient state handling.
          </i><br />
          <i>
            Created custom React hooks like <code>useFetch()</code> and Tailwind utility helpers.
          </i><br />
          <i>
            Applied <strong>TDD</strong> using <strong>Jest</strong> and wrote documentation for open-source UI kits.
          </i><br />
          <i>
            Built <strong>Generative AI</strong> agents with <strong>LangChain</strong>, <strong>LangGraph</strong>, and <strong>Gemini</strong>, including a <strong>WhatsApp AI Agent</strong>.
          </i><br />
          <i>
            Used <strong>Postman</strong> for comprehensive API testing and automation.
          </i>
        </div>

        <div className="mt-4">
          <span className="text-sm font-bold text-black-800">Key Tools & Technologies:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {["NPM", "Custom React Hooks", "Custom Laravel Packages", "Lazy Loading", "Utility Classes", "Jest", "Postman"].map((tech) => (
              <span key={tech} className="flex-1 px-2 py-1 rounded text-sm text-white bg-purple-600 text-center whitespace-nowrap">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}