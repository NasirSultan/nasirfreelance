import React from "react";

const ExperienceSection = () => {
    return (
        <section className=" md:w-[83%] mx-auto p-6">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
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


            <div className="mb-10">
                <h3 className="text-2xl font-bold text-indigo-700 mb-4 text-purple-900">Present</h3>


                {/* Container with more left padding */}
                <div className="ml-12 space-y-8">

                    {/* i) Software House */}
                    <div>
                        <h4 className="text-xl font-bold text-black">Software Company </h4>

                        <p className="text-sm text-gray-900 font-bold">Full Stack Developer – Remote, Karnataka, India </p>
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
                                Secured APIs with <strong>HTTPS</strong>, <strong>CORS policies</strong>, middleware validation, and <strong>rate limiting (1000 RPM)</strong>, improving system resilience and preventing unauthorized access.
                            </i><br />
                            <i>
                                Applied strong understanding of <strong>Data Structures & Algorithms (DSA)</strong> to optimize code logic, reduce time complexity, and improve overall application performance.
                            </i>


                        </div>

                        <div className="mt-4">
                            <span className="text-sm font-semibold text-black-800 font-bold">Key Tools & Technologies:</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {["langChain", "AWS-3", "langGraph", "HTTPS", "Payment Getway", "express-rate-limiting", "DSA"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="flex-1 px-2 py-1 rounded text-sm text-white bg-purple-600 text-center whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* ii) Freelance */}
                    <div>
                        <h4 className="text-xl font-bold text-black">Freelance</h4>
                        <p className="text-sm text-gray-900 font-bold">Full Stack Developer </p>
                        <p className="text-sm text-gray-600 mb-4">February 2021 – Present</p>

                        <div className="space-y-2 text-gray-800 ml-6">
                            <i>
                                Developed high-performance <strong>REST APIs</strong> using <strong>Redis caching</strong> and <strong>Docker</strong>, efficiently supporting 1,000+ concurrent users with minimal latency during peak traffic.
                            </i><br />
                            <i>
                                Deployed optimized full-stack apps on <strong>Vercel</strong>, <strong>Hostinger</strong>, and <strong>AWS</strong> using CI/CD pipelines like <strong>GitHub Actions</strong> for faster, reliable delivery.
                            </i><br />
                            <i>
                                Boosted SEO rankings using <strong>Server-Side Rendering (SSR)</strong>, dynamic <strong>meta/schema tags</strong>, and enabled multilingual support with <strong>i18n</strong> for Arabic, English, and Urdu.
                            </i><br />
                            <i>
                                Integrated third-party APIs, including <strong>LLMs (Gemini, GPT)</strong> and <strong>SendMailer</strong>, automating 70% of routine tasks and significantly enhancing communication workflows.
                            </i>

                        </div>

                        <div className="mt-4">
                            <span className="text-sm font-semibold text-black-800 font-bold">Key Tools & Technologies:</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {["CI/CD", "Docker", "SEO", "LLMs", "Firebase", "Redux", "GitHub-action"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="flex-1 px-2 py-1 rounded text-sm text-white bg-purple-600 text-center whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Internship */}
            <div className="mb-10">
                <h3 className="text-2xl font-bold text-indigo-700 mb-4 text-purple-900">Internship</h3>
                {/* Internship 2 */}
                <h4 className="text-xl font-bold text-black">Rhombix Technologies, Lahore, Pakistan</h4>
                <p className="text-sm text-gray-600 mb-4">Jan 2025 – Mar 2025</p>

                {/* Internship 3 */}
                <h4 className="text-xl font-bold text-black">Youngdiv, Remote</h4>
                <p className="text-sm text-gray-600 mb-4">Dec 2024</p>


                <div className="space-y-2 text-gray-800 ml-4">
                    <i>
                        Developed responsive UIs using <strong>React</strong>, <strong>Vue</strong>, and <strong>Tailwind CSS</strong>, increasing user engagement through improved layout, accessibility, and cross-platform performance.
                    </i><br />
                    <i>
                        Built secure <strong>RESTful APIs</strong> with <strong>JWT</strong>, <strong>Laravel Sanctum</strong>, and <strong>Google OAuth2</strong>, implementing token-based authentication and middleware for access control.
                    </i><br />
                    <i>
                        Optimized <strong>MongoDB</strong> aggregations and <strong>MySQL</strong> queries using indexing, joins, and profiling, reducing query execution times and improving system responsiveness.
                    </i><br />
                    <i>
                        Resolved complex <strong>async/await</strong> issues and improved serverless deployment performance on <strong>Vercel</strong>, <strong>GitHub Pages</strong>, and <strong>Netlify</strong>.
                    </i>

                </div>

                <div className="mt-4">
                    <span className="text-sm font-semibold text-black-800 font-bold">Key Tools & Technologies:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {["React.js", "Vue.js", "MongoDB", "MYSQL", "CSS3", "REST API", "Laravel"].map((tech) => (
                            <span
                                key={tech}
                                className="flex-1 px-2 py-1 rounded text-sm text-white bg-purple-600 text-center whitespace-nowrap"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Self */}
            <div>
                <h3 className="text-2xl font-bold text-indigo-700 mb-4 text-purple-900">Independent </h3>

                <p className="text-sm text-gray-600 mb-4">Ongoing</p>

                <div className="space-y-2 text-gray-800 ml-4">
                    <i>
                        Engineered and published reusable packages in both <strong>React</strong> and <strong>Node.js</strong>, hosted on <strong>NPM</strong>, significantly reducing code duplication across projects.
                    </i><br />
                    <i>
                        Built custom Laravel packages with <strong>dependency injection</strong> and modular structure to improve maintainability and eliminate repetitive logic.
                    </i><br />
                    <i>
                        Applied performance optimization techniques in <strong>React.js</strong> and <strong>Node.js</strong> — including memoization, lazy loading, and efficient state management — to enhance app scalability and responsiveness.
                    </i><br />
                    <i>
                        Created custom React hooks (e.g., <code>useFetch()</code>) and Tailwind utility helpers to streamline development and prevent repetitive code patterns.
                    </i><br />
                    <i>
                        Practiced <strong>Test-Driven Development (TDD)</strong> using <strong>Jest</strong> and documented component behavior through open-source UI kits and blog articles.
                    </i>
                    <i>
                        Built and integrated <strong>Generative AI</strong> agents using <strong>LangChain</strong>, <strong>LangGraph</strong>, and <strong>Gemini</strong> — including a personal <strong>WhatsApp AI Agent</strong> for real-time chat, summarization, and task automation.
                    </i><br />
                    <i>
                        Utilized <strong>Postman</strong> for end-to-end API testing, including request validation, response inspection, environment setup, and automated test collections.
                    </i>




                </div>

                <div className="mt-4">
                    <span className="text-sm font-semibold text-black-800 font-bold">Key Tools & Technologies</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {["NPM", "Custom React Hooks", "Custom Laravel Packages", "Lazy Loading", "Utility Classes", "Jest", "Postman"].map((tech) => (
                            <span
                                key={tech}
                                className="flex-1 px-2 py-1 rounded text-sm text-white bg-purple-600 text-center whitespace-nowrap"
                            >
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
