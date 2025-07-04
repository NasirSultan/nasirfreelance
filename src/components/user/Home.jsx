import React, {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  memo,
} from "react";
import { Link } from "react-router-dom";
import { IconProject, IconExperience } from "./icons/CustomIcons";

const Seo = lazy(() => import("../Seo"));

const MetricCard = memo(({ icon: Icon, count, label, innerRef }) => (
  <div
    className="flex items-center bg-purple-300 rounded-2xl shadow-xl p-5 w-full md:w-1/2 max-w-md"
    ref={innerRef}
  >
    <div className="text-green-900 mr-5">
      <Suspense fallback={<div className="w-20 h-20 bg-gray-200 animate-pulse rounded-full" />}>
        <Icon className="w-20 md:w-24 h-20 md:h-24" />
      </Suspense>
    </div>
    <div>
      <h3 className="text-4xl font-extrabold text-white">{count}+</h3>
      <p className="text-sm text-purple-900 mt-1 whitespace-nowrap">{label}</p>
    </div>
  </div>
));

export default function Homepage() {
  const projectRef = useRef(null);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    const delay = () => setShowMetrics(true);
    if ("requestIdleCallback" in window) requestIdleCallback(delay);
    else setTimeout(delay, 1500);
  }, []);

  return (
    <main className="text-black flex flex-col items-center justify-center px-6 py-10">
      <Suspense fallback={null}>
        <Seo
          title="Nasir Sultan | Freelance Full Stack & Generative AI Developer"
          description="Nasir Sultan is a Freelance Full Stack & Generative AI Developer specializing in building intelligent web apps with React, Node.js, LangChain, LangGraph, and AI agents."
          keywords="Nasir Sultan, Full Stack Developer, AI Developer, React.js, Node.js, LangChain, LangGraph, Gemini AI, Freelance Developer"
          canonical="https://nasirfreelance.vercel.app/"
          og={{
            title: "Nasir Sultan | Freelance Full Stack & AI Developer",
            description:
              "Explore projects and experience by Nasir Sultan, expert in AI-powered full stack development and secure web applications.",
            type: "website",
            url: "https://nasirfreelance.vercel.app/",
          }}
        />
      </Suspense>

      <section className="w-full md:w-[83%] space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-sm">
          Welcome to My Space dd
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-900 leading-snug tracking-tight font-sans">
          Hi, I’m <span className="underline decoration-purple-400 font-semibold">Nasir Sultan</span> — a Freelance Full Stack & Agentic AI Developer, Researcher, and Problem Solver.
        </h2>

        <div className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 text-left">
          <p className="mb-4">
            My background in <strong>electronics</strong> and <strong>programming</strong>, strengthened by a hands-on final year project, helps me approach development with a systems mindset— bridging hardware logic with real-world software solutions.
          </p>
          <p className="mb-4">
            I specialize in building intelligent full-stack applications that combine modern web technologies with AI-powered logic. My work leverages <strong>AI agents</strong>, <strong>LangChain</strong>, and <strong>LangGraph</strong> to create dynamic, decision-based systems. I also prioritize strong UX and security—defending against <strong>SQL Injection</strong>, XSS, and CSRF.
          </p>
          <p>
            Whether you're here to explore my portfolio, collaborate on innovative solutions, or dive into practical development articles— you're in the right place.
          </p>
        </div>

        {showMetrics && (
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <MetricCard
              count={10}
              label="Projects Completed"
              innerRef={projectRef}
              icon={IconProject}
            />
            <MetricCard
              count={6}
              label="Months of Experience"
              icon={IconExperience}
            />
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto mt-6 justify-center">
          <Link
            to="/contact"
            className="w-full md:w-auto lg:w-64 bg-white text-purple-700 font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-purple-100 transition text-center text-sm md:text-base"
            aria-label="Contact Me"
          >
            Contact Form
          </Link>

          <Link
            to="/Experience"
            className="w-full md:w-auto lg:w-64 bg-white text-purple-700 font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-purple-100 transition text-center text-sm md:text-base"
            aria-label="Experience"
          >
            Experience
          </Link>
        </div>
      </section>
    </main>
  );
}
