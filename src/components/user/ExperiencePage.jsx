import React, { lazy, Suspense } from "react";
import Seo from "../Seo"; // Adjust path if necessary

const ExperienceSection = lazy(() => import("./Experience"));

const ExperiencePage = () => {
  return (
    <>
      <Seo
        title="Experience | Full Stack Developer Portfolio"
        description="Explore my full stack development experience including LangChain, LangGraph, GPT, Stripe, SEO, Docker, React, and Laravel. Proven record of performance, security, and AI-driven automation."
        keywords="Full Stack Developer, React, Node.js, LangChain, GPT, Laravel, Docker, Stripe, SEO, Automation, Freelance Developer"
        url="https://yourdomain.com/experience"
      />

      <Suspense fallback={null}>
        <ExperienceSection />
      </Suspense>
    </>
  );
};

export default ExperiencePage;
