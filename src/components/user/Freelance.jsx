import React from "react";
import { Link } from 'react-router-dom';

import {
  FaShieldAlt,
  FaBug,
  FaLock,
  FaUserSecret,
  FaKey,
  FaCodeBranch,
  FaServer,
  FaWrench,
  FaNetworkWired,
  FaExclamationTriangle,
  FaUserShield,
  FaEnvelope,
  FaLaptopCode,
  FaCheckCircle,
  FaMobileAlt,
  FaCode,
  FaWordpressSimple,
  FaCloudUploadAlt,
  FaGitAlt
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const testimonials = [
  {
    name: 'Sarah K.',
    role: 'Founder, Tech Startup',
    quote: 'Delivered the project on time with exceptional quality and great communication.',
  },
  {
    name: 'Michael B.',
    role: 'Product Manager',
    quote: 'Highly skilled developer, very proactive and detail-oriented.uibibfghg fdgsd',
  },
  {
    name: 'Lisa W.',
    role: 'CEO, Marketing Agency',
    quote: 'Helped optimize our web app sfasfdasfdfd  ecurity and performance significantly.',
  },
];

const steps = [
  {
    title: " Discovery & Planning",
    description:
      "Understand client requirements, goals, and technical needs. Create a clear project plan and timeline.",
  },
  {
    title: " Design & Prototype",
    description:
      "Build UI/UX wireframes and interactive prototypes for feedback and approval.",
  },
  {
    title: " Development",
    description:
      "Write clean, maintainable code for both frontend (React.js) and backend (Node.js, Express, MongoDB).",
  },
  {
    title: " Testing & QA",
    description:
      "Conduct thorough testing, fix bugs, and optimize performance to ensure a smooth user experience.",
  },
  {
    title: " Deployment & Launch",
    description:
      "Deploy the app to live servers, configure custom domains, and ensure optimal hosting setup on your given domain or hosting. Includes SSL, performance tweaks, and analytics integration.",
  },
  {
    title: " Maintenance & Support",
    description:
      "Provide ongoing support, regular updates, backups, and feature enhancements after launch.",
  }

];


const services = [
  {
    icon: <FaCheckCircle className="text-green-600 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Full-Stack Development",
    desc: "MERN stack and Laravel for scalable, robust web applications.",
  },
  {
    icon: <FaMobileAlt className="text-blue-600 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Responsive Design",
    desc: "Mobile-first websites using Tailwind CSS, Bootstrap and dashboards optimized for all devices.",
  },
  {
    icon: <FaServer className="text-indigo-600 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "RESTful API Development",
    desc: "Secure APIs using Node.js with Express.js, Next.js and Laravel.",
  },
  {
    icon: <FaCode className="text-pink-600 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Frontend Frameworks",
    desc: "React.js, Vue.js and Next.js",
  },

  {
    icon: <FaBug className="text-red-500 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Debugging & Optimization",
    desc: "Bug fixing and performance enhancement.",
  },
  {
    icon: <FaCloudUploadAlt className="text-yellow-500 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Deployment & Hosting",
    desc: "Hostinger, AWS, Docker containers.",
  },
  {
    icon: <FaGitAlt className="text-orange-500 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Version Control & CI/CD",
    desc: "Git with GitHub Actions or GitLab CI.",
  },
];

const cybersecurityServices = [
  {
    icon: <FaShieldAlt className="text-purple-700 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Security Audits",
    desc: "Identify vulnerabilities in websites, servers, and codebases.",
  },
  {
    icon: <FaBug className="text-red-600 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Penetration Testing",
    desc: "Simulate real-world attacks to discover and patch weaknesses.",
  },
  {
    icon: <FaCodeBranch className="text-blue-700 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "OWASP Compliance",
    desc: "Address top 10 web vulnerabilities like XSS and SQLi.",
  },
  {
    icon: <FaWrench className="text-yellow-600 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Malware Removal",
    desc: "Eliminate malicious scripts, backdoors, and threats.",
  },
  {
    icon: <FaKey className="text-green-600 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "API & Auth Security",
    desc: "Implement secure access using JWT, OAuth2, and role-based controls.",
  },
  {
    icon: <FaUserSecret className="text-indigo-600 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Code Reviews & Audits",
    desc: "Catch insecure logic, poor practices, and backdoors.",
  },
  {
    icon: <FaServer className="text-teal-700 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Secure Deployment",
    desc: "Enforce HTTPS, use hardened Docker setups, and apply firewalls.",
  },
  {
    icon: <FaLock className="text-pink-700 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "WordPress Hardening",
    desc: "Secure login flows, plugins, and site configurations.",
  },
  {
    icon: <FaNetworkWired className="text-orange-600 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Security Assessments",
    desc: "Perform vulnerability scans and ethical hacking tests.",
  },
  {
    icon: <FaShieldAlt className="text-blue-600 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "WAF Configuration",
    desc: "Protect sites from DDoS, XSS, CSRF, and injection attacks.",
  },
  {
    icon: <FaExclamationTriangle className="text-red-500 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Incident Response",
    desc: "Handle breaches with forensic analysis and containment plans.",
  },
  {
    icon: <FaUserShield className="text-lime-600 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Developer & Staff Training",
    desc: "Promote secure coding and security best practices.",
  },
  {
    icon: <FaCodeBranch className="text-violet-600 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Threat Modeling & Compliance",
    desc: "Align systems with OWASP, GDPR, PCI-DSS, and more.",
  },
];

const FreelanceSection = () => {
  return (
    <div className="mx-auto sm:px-6 lg:px-8 py-12 sm:py-16 font-sans text-gray-900 md:w-4/5">
      {/* Header */}
      <header className="text-center max-w-4xl mx-auto m-10 sm:mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
          Freelance Full Stack & Agentic Expert
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-xl mx-auto my-12">
          Delivering cutting-edge web development and top-notch security to
          protect your digital assets.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">


          <Link
            to="/Experience"
            className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-lg transition duration-300"
          >
            Experience
          </Link>

          <Link
            to="/portfolio"
            className="flex items-center justify-center gap-2 border border-purple-700 text-purple-700 hover:bg-purple-100 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-sm transition duration-300"
          >
            Portfolio
          </Link>

        </div>
      </header>

      {/* Services */}
    <section className="max-w-7xl mx-auto mb-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 shadow-xl rounded-3xl bg-white">

  {/* Header */}
  <div className="mb-12 text-center px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
      Services
    </h1>
    <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
      I offer a wide range of freelance development services, including full stack apps, cybersecurity, DevOps, and ongoing support.
    </p>
  </div>

  {/* Services */}
  <section className="flex flex-col gap-12 sm:gap-14 lg:gap-16">

    {/* Web Development */}
    <article className="bg-white rounded-3xl p-6 sm:p-8 md:px-12 lg:px-16">
      <div className="flex items-center gap-3 sm:gap-4 mb-6">
        <FaLaptopCode className="text-purple-700 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Web & Software Development
        </h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {services.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-white transition p-6 sm:p-8 lg:p-10 rounded-2xl h-full min-h-[300px]">
              {item.icon}
              <h3 className="text-xl sm:text-2xl font-semibold mt-5">{item.title}</h3>
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl mt-3">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>

    {/* Cybersecurity */}
    <article className="bg-white rounded-3xl p-6 sm:p-8 md:px-12 lg:px-16">
      <div className="flex items-center gap-3 sm:gap-4 mb-6">
        <FaShieldAlt className="text-purple-700 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Cybersecurity & Website Protection
        </h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cybersecurityServices.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-white transition p-6 sm:p-8 lg:p-10 rounded-2xl h-full min-h-[300px]">
              {item.icon}
              <h3 className="text-xl sm:text-2xl font-semibold mt-5">{item.title}</h3>
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl mt-3">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>

  </section>
</section>










      <section className="py-10 px-6 max-w-7xl mx-auto text-black ">
        <h1 className="text-3xl pb-6 gap-5 sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center">What Clients Say</h1>
        <div className="grid md:grid-cols-3 ">
          {testimonials.map(({ name, role, quote }, i) => (
            <div key={i} className="bg-purple-300 p-4 rounded-2xl text-white shadow-inner md:my-8 my-1 md:mx-1">
              <p className="mb-2 italic text-purple-900">"{quote}"</p>
              <p className="font-semibold text-lg">{name}</p>
              <p className="text-sm text-black">{role}</p>

            </div>
          ))}
        </div>



      </section>


      <section className="max-w-7xl mx-auto mb-16 sm:mb-20 px-4 sm:px-0 my-5  pt-5 bg-white">
        <h2 className="text-3xl sm:text-4xl m-6 md:text-5xl font-extrabold text-gray-900 text-center">
          My Development Process
        </h2>
        <div className="space-y-6 my-12">
          {steps.map(({ title, description }, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-[0.365rem]">
                <div className="
        h-5 w-5
        sm:h-5 sm:w-5
        md:h-8 md:w-8
        lg:h-10 lg:w-10
        rounded-full bg-purple-600 text-white flex items-center justify-center font-bold
        text-xs sm:text-sm md:text-lg lg:text-xl 
      ">
                  {idx + 1}
                </div>
              </div>
              <div className="">
                <h4 className="text-xl font-bold text-black">{title}</h4>
                <p className="text-sm text-gray-900 ">{description}</p>
              </div>
            </div>
          ))}


        </div>
      </section>
      {/* Contact */}



      <section className="bg-purple-100 rounded-3xl p-8 sm:p-12 text-center shadow-lg max-w-5xl mx-auto mb-16 sm:mb-20">
        <FaEnvelope className="mx-auto mb-4 sm:mb-6 text-purple-700 w-10 h-10 sm:w-14 sm:h-14" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
        <p className="text-base sm:text-lg text-purple-900 m-8">

          <a href="mailto:ahmad@gmail.com" className="underline">
            ahmad@gmail.com
          </a>
        </p>

        <Link
          to="/Contact"
          className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-lg transition duration-300 md:w-1/2 mx-auto"
        >
          Contact form
        </Link>


      </section>

      {/* Why Me */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl mb-6 md:text-5xl font-extrabold text-gray-900 text-center">Why Work With Me?</h2>


        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-base sm:text-lg text-gray-800  m-10">
          {[
            "Expertise in Full Stack Development & Cybersecurity",
            "Development of scalable, secure, and modern applications",
            "Clear, consistent communication and on-time delivery",
            "Commitment to confidentiality, ethics, and quality"
          ].map((text, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaCheckCircle className="text-green-600 mt-[5px] md:mt-[6px]" />
              <span>{text}</span>
            </li>
          ))}
        </ul>

      </section>
    </div>
  );
};

export default FreelanceSection;
