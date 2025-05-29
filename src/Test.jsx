import React from "react";

const Process = () => {
 const steps = [
  {
    title: "1. Discovery & Planning",
    description:
      "Understand client requirements, goals, and technical needs. Create a clear project plan and timeline.",
  },
  {
    title: "2. Design & Prototype",
    description:
      "Build UI/UX wireframes and interactive prototypes for feedback and approval.",
  },
  {
    title: "3. Development",
    description:
      "Write clean, maintainable code for both frontend (React.js) and backend (Node.js, Express, MongoDB).",
  },
  {
    title: "4. Testing & QA",
    description:
      "Conduct thorough testing, fix bugs, and optimize performance to ensure a smooth user experience.",
  },
  {
    title: "5. Deployment & Launch",
    description:
      "Deploy the app to live servers, configure custom domains, and ensure optimal hosting setup on your given domain or hosting. Includes SSL, performance tweaks, and analytics integration.",
  },
  {
    title: "6. Maintenance & Support",
    description:
      "Provide ongoing support, regular updates, backups, and feature enhancements after launch.",
  }

];


  return (
    <section className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
        My Development Process
      </h2>
      <div className="space-y-6">
{steps.map(({ title, description }, idx) => (
  <div key={idx} className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="
        h-5 w-5
        sm:h-6 sm:w-6
        md:h-8 md:w-8
        lg:h-10 lg:w-10
        rounded-full bg-purple-600 text-white flex items-center justify-center font-bold
        text-xs sm:text-sm md:text-lg lg:text-xl
      ">
        {idx + 1}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed text-base">{description}</p>
    </div>
  </div>
))}


      </div>
    </section>
  );
};

export default Process;
