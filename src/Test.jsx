// components/FullStackServices.jsx

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Data array
const services = [
  {
    title: "Custom Web Application Development",
    description: "Build scalable, responsive apps using React, Vue, Node.js, and modern CSS frameworks.",
    includes: [
      "Frontend: React or Vue with Tailwind/Bootstrap",
      "Backend: Node.js + Express",
      "Database: MongoDB or MySQL",
    ],
  },
  {
    title: "Admin Panels & Dashboards",
    description: "Design internal tools with authentication, filtering, and charts for easy management.",
    includes: ["CMS platforms", "Project trackers", "Analytics dashboards"],
  },
  {
    title: "RESTful API Development",
    description: "Create secure APIs with Node or Laravel using proper auth, error handling, and validations.",
    includes: ["JWT/OAuth", "CRUD endpoints", "File uploads"],
  },
  {
    title: "Authentication & User Management",
    description: "Implement secure login systems, password reset, role-based access, and 2FA.",
    includes: ["Email verification", "Admin/member roles", "Social login"],
  },
  {
    title: "Payment Gateway Integration",
    description: "Connect Stripe, PayPal, or local gateways like Easypaisa with proper invoicing and logs.",
    includes: ["One-time & recurring", "Webhooks", "Transaction logs"],
  },
  {
    title: "E-commerce Platform Development",
    description: "Build full-featured stores with product listings, cart, checkout, and order tracking.",
    includes: ["MERN or Vue + Laravel", "Inventory control", "Admin dashboards"],
  },
  {
    title: "Performance Optimization",
    description: "Improve speed and efficiency on both frontend and backend using proven techniques.",
    includes: ["Code splitting", "Caching", "Database tuning"],
  },
  {
    title: "Responsive & Mobile-First Design",
    description: "Develop mobile-friendly interfaces with proper layout techniques and accessibility.",
    includes: ["Tailwind/Flexbox/Grid", "Dark mode support", "Figma to UI"],
  },
  {
    title: "Third-Party API Integrations",
    description: "Integrate services like Firebase, Twilio, CRMs, Maps, and email tools.",
    includes: ["Notifications", "Location services", "Email automation"],
  },
  {
    title: "Deployment & DevOps Support",
    description: "Deploy securely using Docker, CI/CD pipelines, HTTPS setup, and server configs.",
    includes: ["Domain setup", "SSL certificates", "Environment configs"],
  },
  {
    title: "Maintenance & Bug Fixing",
    description: "Provide ongoing support for fixing bugs, updates, and improving security.",
    includes: ["Legacy projects", "Feature updates", "Security patches"],
  },
  {
    title: "Progressive Web Apps (PWA)",
    description: "Create installable apps with offline support and push notifications for mobile-first use.",
    includes: ["Service Workers", "IndexedDB", "React/Vue stack"],
  },
];

// Individual Service Item Component
const ServiceItem = ({ service, index, isOpen, onToggle }) => {
  return (
    <div className={`rounded-xl border transition-all ${isOpen ? "border-blue-500 shadow-md" : "border-gray-300"}`}>
      <button
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 rounded-xl"
      >
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          {index + 1}. {service.title}
        </h3>
        <span className="text-blue-500">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-0 text-gray-700 animate-fadeIn">
          <p className="text-sm mb-3">{service.description}</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            {service.includes.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Main Component
const FullStackServices = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 md:px-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Full Stack Development Services
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          From frontend to backend — secure, scalable, and polished solutions.
        </p>
      </header>

      {/* Service List */}
      <div className="grid gap-6">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            service={service}
            index={index}
            isOpen={openIndex === index}
            onToggle={toggle}
          />
        ))}
      </div>
    </section>
  );
};

export default FullStackServices;
