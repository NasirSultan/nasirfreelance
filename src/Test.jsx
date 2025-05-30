import React, { useState } from "react";

const services = [
  {
    title: "Custom Web Application Development",
    description:
      "Build scalable, responsive apps using React, Vue, Node.js, and modern CSS frameworks.",
    includes: [
      "Frontend: React or Vue with Tailwind/Bootstrap",
      "Backend: Node.js + Express",
      "Database: MongoDB or MySQL",
    ],
  },
  {
    title: "Admin Panels & Dashboards",
    description:
      "Design internal tools with authentication, filtering, and charts for easy management.",
    includes: ["CMS platforms", "Project trackers", "Analytics dashboards"],
  },
  {
    title: "RESTful API Development",
    description:
      "Create secure APIs with Node or Laravel using proper auth, error handling, and validations.",
    includes: ["JWT/OAuth", "CRUD endpoints", "File uploads"],
  },
  {
    title: "Authentication & User Management",
    description:
      "Implement secure login systems, password reset, role-based access, and 2FA.",
    includes: ["Email verification", "Admin/member roles", "Social login"],
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Connect Stripe, PayPal, or local gateways like Easypaisa with proper invoicing and logs.",
    includes: ["One-time & recurring", "Webhooks", "Transaction logs"],
  },
  {
    title: "E-commerce Platform Development",
    description:
      "Build full-featured stores with product listings, cart, checkout, and order tracking.",
    includes: ["MERN or Vue + Laravel", "Inventory control", "Admin dashboards"],
  },
  {
    title: "Performance Optimization",
    description:
      "Improve speed and efficiency on both frontend and backend using proven techniques.",
    includes: ["Code splitting", "Caching", "Database tuning"],
  },
  {
    title: "Responsive & Mobile-First Design",
    description:
      "Develop mobile-friendly interfaces with proper layout techniques and accessibility.",
    includes: ["Tailwind/Flexbox/Grid", "Dark mode support", "Figma to UI"],
  },
  {
    title: "Third-Party API Integrations",
    description:
      "Integrate services like Firebase, Twilio, CRMs, Maps, and email tools.",
    includes: ["Notifications", "Location services", "Email automation"],
  },
  {
    title: "Deployment & DevOps Support",
    description:
      "Deploy securely using Docker, CI/CD pipelines, HTTPS setup, and server configs.",
    includes: ["Domain setup", "SSL certificates", "Environment configs"],
  },
  {
    title: "Maintenance & Bug Fixing",
    description:
      "Provide ongoing support for fixing bugs, updates, and improving security.",
    includes: ["Legacy projects", "Feature updates", "Security patches"],
  },
  {
    title: "Progressive Web Apps (PWA)",
    description:
      "Create installable apps with offline support and push notifications for mobile-first use.",
    includes: ["Service Workers", "IndexedDB", "React/Vue stack"],
  },
];

const FullStackServices = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto text-black">
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Full Stack Development Services
        </h2>
        <p className="text-base max-w-2xl mx-auto">
          From frontend interfaces to backend systems — built with performance and security in mind.
        </p>
      </header>

      <div className="space-y-6">
        {services.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-400 rounded-lg"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-5 py-4 flex justify-between items-center"
              >
                <h3 className="text-lg md:text-xl font-semibold">
                  {index + 1}. {service.title}
                </h3>
                <span>{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="text-sm mb-2">{service.description}</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {service.includes.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FullStackServices;
