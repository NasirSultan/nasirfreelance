// import React, { useState } from "react";

// const services = [
//   {
//     title: "Custom Web Application Development",
//     description:
//       "Build scalable, responsive apps using React, Vue, Node.js, and modern CSS frameworks.",
//     includes: [
//       "Frontend: React or Vue with Tailwind/Bootstrap",
//       "Backend: Node.js + Express",
//       "Database: MongoDB or MySQL",
//     ],
//   },
//   {
//     title: "Admin Panels & Dashboards",
//     description:
//       "Design internal tools with authentication, filtering, and charts for easy management.",
//     includes: ["CMS platforms", "Project trackers", "Analytics dashboards"],
//   },
//   {
//     title: "RESTful API Development",
//     description:
//       "Create secure APIs with Node or Laravel using proper auth, error handling, and validations.",
//     includes: ["JWT/OAuth", "CRUD endpoints", "File uploads"],
//   },
//   {
//     title: "Authentication & User Management",
//     description:
//       "Implement secure login systems, password reset, role-based access, and 2FA.",
//     includes: ["Email verification", "Admin/member roles", "Social login"],
//   },
//   {
//     title: "Payment Gateway Integration",
//     description:
//       "Connect Stripe, PayPal, or local gateways like Easypaisa with proper invoicing and logs.",
//     includes: ["One-time & recurring", "Webhooks", "Transaction logs"],
//   },
//   {
//     title: "E-commerce Platform Development",
//     description:
//       "Build full-featured stores with product listings, cart, checkout, and order tracking.",
//     includes: ["MERN or Vue + Laravel", "Inventory control", "Admin dashboards"],
//   },
//   {
//     title: "Performance Optimization",
//     description:
//       "Improve speed and efficiency on both frontend and backend using proven techniques.",
//     includes: ["Code splitting", "Caching", "Database tuning"],
//   },
//   {
//     title: "Responsive & Mobile-First Design",
//     description:
//       "Develop mobile-friendly interfaces with proper layout techniques and accessibility.",
//     includes: ["Tailwind/Flexbox/Grid", "Dark mode support", "Figma to UI"],
//   },
//   {
//     title: "Third-Party API Integrations",
//     description:
//       "Integrate services like Firebase, Twilio, CRMs, Maps, and email tools.",
//     includes: ["Notifications", "Location services", "Email automation"],
//   },
//   {
//     title: "Deployment & DevOps Support",
//     description:
//       "Deploy securely using Docker, CI/CD pipelines, HTTPS setup, and server configs.",
//     includes: ["Domain setup", "SSL certificates", "Environment configs"],
//   },
//   {
//     title: "Maintenance & Bug Fixing",
//     description:
//       "Provide ongoing support for fixing bugs, updates, and improving security.",
//     includes: ["Legacy projects", "Feature updates", "Security patches"],
//   },
//   {
//     title: "Progressive Web Apps (PWA)",
//     description:
//       "Create installable apps with offline support and push notifications for mobile-first use.",
//     includes: ["Service Workers", "IndexedDB", "React/Vue stack"],
//   },
// ];

// const FullStackServices = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto text-black">
//       <header className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold mb-2">
//           Full Stack Development Services
//         </h2>
//         <p className="text-base max-w-2xl mx-auto">
//           From frontend interfaces to backend systems — built with performance and security in mind.
//         </p>
//       </header>

//       <div className="space-y-6">
//         {services.map((service, index) => {
//           const isOpen = openIndex === index;
//           return (
//             <div
//               key={index}
//               className="border border-gray-400 rounded-lg"
//             >
//               <button
//                 onClick={() => toggle(index)}
//                 className="w-full text-left px-5 py-4 flex justify-between items-center"
//               >
//                 <h3 className="text-lg md:text-xl font-semibold">
//                   {index + 1}. {service.title}
//                 </h3>
//                 <span>{isOpen ? "−" : "+"}</span>
//               </button>

//               {isOpen && (
//                 <div className="px-5 pb-5">
//                   <p className="text-sm mb-2">{service.description}</p>
//                   <ul className="list-disc list-inside text-sm space-y-1">
//                     {service.includes.map((point, i) => (
//                       <li key={i}>{point}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default FullStackServices;
// // 
import React, { useState, useRef, useEffect } from 'react';

const GEMINI_API_KEY = "AIzaSyCOHvkgqyBzOebZjKAyx8oVYHzEwxxgQGE"; // Replace securely if needed

function App() {
  const [input, setInput] = useState('');
  const [outputs, setOutputs] = useState(() => {
    // Initialize from localStorage if available
    return JSON.parse(localStorage.getItem('history'))?.map(q => ({ prompt: q, response: null })) || [];
  });
  const [recentHistory, setRecentHistory] = useState(() => {
    return JSON.parse(localStorage.getItem('history')) || [];
  });
  const [selectedHistory, setSelectedHistory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const scrollToAns = useRef();

  // Scroll to bottom when outputs change
  useEffect(() => {
    if(scrollToAns.current) {
      scrollToAns.current.scrollTop = scrollToAns.current.scrollHeight;
    }
  }, [outputs]);

  // Handle form submission or question ask
  const handleSubmit = async (e) => {
    if(e) e.preventDefault();

    const question = input.trim() || selectedHistory.trim();
    if (!question) return;

    setLoading(true);
    setError('');

    try {
      // Save question to history and localStorage
      let history = recentHistory.slice(0, 19);
      history = [question, ...history];
      history = history.map(item => item.charAt(0).toUpperCase() + item.slice(1).trim());
      history = [...new Set(history)]; // Unique
      localStorage.setItem('history', JSON.stringify(history));
      setRecentHistory(history);

      // Call Gemini API
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: question }] }],
          }),
        }
      );

      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (text) {
        // Parse answer as bullet points if relevant
        let parsedAnswer = text.split("* ").map(item => item.trim());

        setOutputs(prev => [
          ...prev,
          { prompt: question, response: parsedAnswer }
        ]);
        setInput('');
        setSelectedHistory('');
      } else {
        setError('No valid response from Gemini.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch from Gemini.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Enter key
  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      handleSubmit();
    }
  };

  // Dark mode toggle
  const [darkMode, setDarkMode] = useState('dark');
  useEffect(() => {
    if(darkMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
  <div className={darkMode === 'dark' ? 'dark' : 'light'}>
  <div className='grid grid-cols-5 text-center relative' style={{ height: '100vh', overflow: 'hidden' }}>
    {/* Dark mode selector */}
    <select
      onChange={(e) => setDarkMode(e.target.value)}
      className='fixed text-white bottom-0 p-5 left-0 bg-gray-700 rounded'
      value={darkMode}
    >
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>

    {/* Recent Search List */}
    <div className='border-r border-gray-600 p-4'>
      <h2 className='mb-3 font-semibold text-lg'>Recent Searches</h2>
      {recentHistory.length === 0 && <p>No recent searches</p>}
      <ul>
        {recentHistory.map((item, i) => (
          <li
            key={i}
            className={`cursor-pointer mb-2 p-2 rounded ${selectedHistory === item ? 'bg-purple-600 text-white' : 'hover:bg-purple-200'}`}
            onClick={() => setSelectedHistory(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <button
        className='mt-4 px-4 py-2 bg-red-600 text-white rounded'
        onClick={() => {
          setRecentHistory([]);
          setOutputs([]);
          localStorage.removeItem('history');
          setSelectedHistory('');
        }}
      >
        Clear History
      </button>
    </div>

    {/* Main Content */}
    <div className='col-span-4 p-10 flex flex-col overflow-hidden'>
      <h1 className='text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-violet-700 mb-6'>
        Hello User, Ask me Anything
      </h1>

      {/* Output box - just visible area, no scroll */}
      <div
        ref={scrollToAns}
        className='flex-1 text-left dark:text-zinc-300 text-zinc-800 border border-gray-300 rounded p-4 overflow-hidden'
      >
        {outputs.length === 0 && <p>No Q&A yet.</p>}
        <ul>
          {outputs.slice(0, 2).map(({ prompt, response }, idx) => ( // Limit Q&A count
            <li key={idx} className='mb-6'>
              <p className='font-bold mb-1'>Q: {prompt}</p>
              {response ? (
                <ul className='list-disc list-inside space-y-1'>
                  {response.map((ans, i) => (
                    <li key={i}>{ans}</li>
                  ))}
                </ul>
              ) : (
                <p className='italic'>Waiting for response...</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className='flex w-1/2 m-auto dark:bg-zinc-800 bg-red-100 border border-zinc-700 overflow-hidden h-16'>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Ask me anything'
          className='flex-grow p-4 outline-none dark:bg-zinc-800 dark:text-white text-zinc-800'
          disabled={loading}
        />
        <button
          type="submit"
          className='px-6 font-semibold'
          disabled={loading}
        >
          {loading ? (
            <svg
              aria-hidden="true"
              className="w-6 h-6 animate-spin text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
          ) : 'Ask'}
        </button>
      </form>

      {error && <p className="mt-3 text-red-600 font-semibold">{error}</p>}
    </div>
  </div>
</div>


  );
}

export default App;
