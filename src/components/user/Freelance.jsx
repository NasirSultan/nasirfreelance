import React from "react";
import { Link } from 'react-router-dom';

import {

  FaShieldAlt,

  FaEnvelope,
  FaGlobe, FaLaptopCode,
  FaCheckCircle,
  FaMobileAlt,
  FaServer,
  FaCode,
  FaWordpressSimple,
  FaBug,
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
    desc: "Mobile-first websites and dashboards optimized for all devices.",
  },
  {
    icon: <FaServer className="text-indigo-600 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "RESTful API Development",
    desc: "Secure APIs using Node.js and Express.js.",
  },
  {
    icon: <FaCode className="text-pink-600 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "Frontend Frameworks",
    desc: "React.js, Vue.js 3, Tailwind CSS, Bootstrap.",
  },
  {
    icon: <FaWordpressSimple className="text-blue-500 w-14 h-14 sm:w-16 sm:h-16" />,
    title: "WordPress Development",
    desc: "Custom themes and plugins as per client needs.",
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
const FreelanceSection = () => {
  return (
    <div className="mx-auto sm:px-6 lg:px-8 py-12 sm:py-16 font-sans text-gray-900 md:w-4/5">
      {/* Header */}
      <header className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
          Freelance Full Stack & Cybersecurity Expert
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-xl mx-auto">
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
      <section className="max-w-7xl mx-auto mb-16 sm:mb-20 p-4  psm:px-0 shadow-xl rounded-3xl bg-white">
        {/* Subdiv for header */}
        <div className="p-6 sm:p-8 border-gray-200">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center">
            Services
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-600 max-w-6xl mx-auto text-center">
            I offer a wide range of freelance development services, including full stack apps, cybersecurity, DevOps, and ongoing support.
          </p>
        </div>

        {/* Services list */}
        <section className="flex flex-col gap-8 sm:gap-10 md:gap-8 sm:p-8">
          <article className="rounded-3xl p-6 sm:p-8 md:p-12 bg-white">
            <div className="flex items-center gap-4 mb-8">
              <FaLaptopCode className="text-purple-700 w-12 h-12 sm:w-14 sm:h-14" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Web & Software Development
              </h2>
            </div>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 },          // Mobile
                640: { slidesPerView: 2 },        // Tablet
                1024: { slidesPerView: 3 },       // Desktop
              }}
            >
              {services.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col items-center px-6 py-8 sm:px-8 sm:py-10 rounded-3xl  h-full text-center min-h-[320px]">
                    {item.icon}
                    <h3 className="text-xl sm:text-xl font-bold mt-6">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-base sm:text-lg mt-4">
                      {item.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </article>
          {/* Cybersecurity Services */}
          <article className="rounded-3xl  md:p-8  transition-shadow duration-300 bg-white">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
              <FaShieldAlt className="text-purple-700 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Cybersecurity Services</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-gray-700 px-2 sm:px-4 md:px-5">
              <li><strong>Security Audits:</strong> Identify vulnerabilities in sites and servers.</li>
              <li><strong>Penetration Testing:</strong> Simulate attacks to find and fix weaknesses.</li>
              <li><strong>OWASP Compliance:</strong> Patch top 10 vulnerabilities.</li>
              <li><strong>Malware Removal:</strong> Eliminate backdoors and malicious scripts.</li>
              <li><strong>API & Auth Security:</strong> Use JWT, OAuth for secure access control.</li>
              <li><strong>Code Review:</strong> Identify insecure coding patterns.</li>
              <li><strong>Secure Deployment:</strong> Harden servers with HTTPS, Docker, and firewalls.</li>
              <li><strong>WordPress Hardening:</strong> Secure plugins, logins, and configurations.</li>
            </ul>
          </article>

          {/* Website Security Coverage */}
          <article className="rounded-3xl md:p-8  transition-shadow duration-300 bg-white">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
              <FaGlobe className="text-purple-700 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Website Security Coverage</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-gray-700 px-2 sm:px-4 md:px-5">
              <li><strong>Security assessments</strong> with scans and ethical hacking.</li>
              <li><strong>Code audits</strong> to catch insecure logic or poor practices.</li>
              <li><strong>Secure auth systems:</strong> JWT, OAuth2.</li>
              <li><strong>WAF configuration:</strong> Against DDoS, XSS, SQLi.</li>
              <li><strong>Incident response:</strong> Forensics, resolution, containment.</li>
              <li><strong>Training:</strong> Educate developers/staff on secure practices.</li>
              <li><strong>Threat modeling & compliance:</strong> OWASP, GDPR, PCI-DSS aligned.</li>
            </ul>
          </article>
        </section>
      </section>








      <section className="py-16 px-6 max-w-7xl mx-auto text-black ">
        <h1 className="text-3xl pb-6 sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center">What Clients Say</h1>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map(({ name, role, quote }, i) => (
            <div key={i} className="bg-purple-300 p-4 rounded-2xl text-white shadow-inner">
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
        <div className="space-y-6">
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
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed text-base">{description}</p>
              </div>
            </div>
          ))}


        </div>
      </section>
      {/* Contact */}



      <section className="bg-purple-100 rounded-3xl p-8 sm:p-12 text-center shadow-lg max-w-5xl mx-auto mb-16 sm:mb-20">
        <FaEnvelope className="mx-auto mb-4 sm:mb-6 text-purple-700 w-10 h-10 sm:w-14 sm:h-14" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
        <p className="text-base sm:text-lg text-purple-900 mb-1">
          Email:{" "}
          <a href="mailto:ahmad@gmail.com" className="underline">
            ahmad@gmail.com
          </a>
        </p>
        <p className="text-base sm:text-lg text-purple-900 mb-4 sm:mb-6">
          Phone:{" "}
          <a href="tel:+1456566" className="underline">
            +1456566
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
        <ul className="grid sm:grid-cols-2 gap-4 sm:gap-8 text-base sm:text-lg text-gray-800 list-disc list-inside">
          <li>Full Stack + Cybersecurity Expertise</li>
          <li>Build scalable, secure apps</li>
          <li>Clear communication & delivery</li>
          <li>Confidential & ethical approach</li>
        </ul>
      </section>
    </div>
  );
};

export default FreelanceSection;
