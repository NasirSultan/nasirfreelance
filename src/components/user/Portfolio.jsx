import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Screenshot1 from "./Screenshot (283).png";
import Screenshot2 from "./Screenshot (284).png";
import Screenshot3 from "./Screenshot (285).png";

import Screenshot4 from "./Screenshot (466).png";
import Screenshot5 from "./Screenshot (467).png";
import Screenshot6 from "./Screenshot (468).png";


import Screenshot7 from "./Screenshot (677).png";
import Screenshot8 from "./Screenshot (679).png";
import Screenshot9 from "./Screenshot (679).png";
import Screenshot10 from "./Screenshot (680).png";
import Screenshot11 from "./Screenshot (681).png";
import Screenshot12 from "./Screenshot (569).png";
import Screenshot13 from "./Screenshot (570).png";
import Screenshot14 from "./Screenshot (571).png";
import Screenshot15 from "./Screenshot 501.png";
import Screenshot16 from "./Screenshot 502.png";
import Screenshot17 from "./Screenshot 503.png";
import Screenshot18 from "./Screenshot 504.png";
import Screenshot19 from "./Screenshot 505.png";
import Screenshot20 from "./Screenshot 506.png";


import Screenshot21 from "./Screenshot (717).png";
import Screenshot22 from "./Screenshot (718).png";
import Screenshot23 from "./Screenshot (719).png";
import Screenshot24 from "./Screenshot (720).png";
import Screenshot25 from "./Screenshot (722).png";
import Screenshot26 from "./Screenshot (715).png";




// Reusable BackButton component
const BackButton = ({ onClick }) => (
  <div className="fixed md:bottom-15 md:right-20 z-50 flex justify-center bottom-35 right-4">
    <button
      onClick={onClick}
      className="w-12 h-12 bg-purple-800 text-white font-semibold rounded-full shadow-lg hover:bg-purple-900 transition-colors flex items-center justify-center text-sm cursor-pointer"
      aria-label="Go back"
    >
      ←
    </button>
  </div>
);

const ProjectComponent = () => {
  // Separate states for each project details visibility
  const [showDetailsProject1, setShowDetailsProject1] = useState(false);
  const [showDetailsProject2, setShowDetailsProject2] = useState(false);
  const [showDetailsProject3, setShowDetailsProject3] = useState(false);
  const [showDetailsProject4, setShowDetailsProject4] = useState(false);
  const [showDetailsProject5, setShowDetailsProject5] = useState(false);
  const [showDetailsProject6, setShowDetailsProject6] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  // Combined close handler to reset all details views
  const closeAllDetails = () => {
    setShowDetailsProject1(false);
    setShowDetailsProject2(false);
    setShowDetailsProject3(false);
    setShowDetailsProject4(false);
    setShowDetailsProject5(false);
    setShowDetailsProject6(false);
  };

  // Open specific project detail and hide others
  const openProjectDetails = (projectNumber) => {
    if (projectNumber === 1) {
      setShowDetailsProject1(true);
      setShowDetailsProject2(false);
    } else if (projectNumber === 2) {
      setShowDetailsProject2(true);
      setShowDetailsProject1(false);
    } else if (projectNumber === 3) {
      setShowDetailsProject3(true);
      setShowDetailsProject1(false);
      setShowDetailsProject2(false);
    } else if (projectNumber === 4) {
      setShowDetailsProject4(true);
      setShowDetailsProject1(false);
      setShowDetailsProject2(false);
      setShowDetailsProject3(false);
    } else if (projectNumber === 5) {
      setShowDetailsProject5(true);
      setShowDetailsProject1(false);
      setShowDetailsProject2(false);
      setShowDetailsProject3(false);
      setShowDetailsProject4(false);
    } else if (projectNumber === 6) {
      setShowDetailsProject6(true);
      setShowDetailsProject1(false);
      setShowDetailsProject2(false);
      setShowDetailsProject3(false);
      setShowDetailsProject4(false);
      setShowDetailsProject5(false);
    }
  };



  const images4 = [Screenshot12, Screenshot13, Screenshot14];
  const images2 = [Screenshot1, Screenshot2, Screenshot3];
  const images1 = [Screenshot4, Screenshot5, Screenshot6];
  const images3 = [Screenshot7, Screenshot8, Screenshot9, Screenshot10, Screenshot11];
  const images5 = [Screenshot15, Screenshot16, Screenshot17, Screenshot18, Screenshot19, Screenshot20];
  const images6 = [Screenshot21, Screenshot22, Screenshot23, Screenshot24, Screenshot25, Screenshot26];
  useEffect(() => {

    const initialTimeout = setTimeout(() => setShowMessage(false), 4000);


    const interval = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 4000);
    }, 1000000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);



  return (
    <>


      {showMessage && (
      <div className="fixed right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 
  bg-purple-700 rounded-3xl p-3 sm:p-4 
  text-sm sm:text-base md:text-[15px] lg:text-[25px] 
  text-white font-semibold z-50 text-center leading-snug shadow-lg">
  Tap the image<br className="sm:hidden" /> for details
</div>


      )}



      <>

        <div className="w-full flex justify-center px-4">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] text-center">
  <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
    Welcome to My Project Highlights
  </h2>

  <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed mb-2">
    I build intelligent full-stack applications that combine the power of modern web technologies with AI-driven logic. My work leverages <strong>LangChain</strong> and <strong>LangGraph</strong> to create autonomous agents and structured workflows capable of dynamic decision-making and task execution.
  </p>

  <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed mb-2">
    These systems are backed by secure authentication, clean API design, payment integrations, real-time data handling, and reusable components—architected for scalability and maintainability across diverse use cases.
  </p>

  <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed mb-2">
    I'm also advancing in <strong>Cybersecurity</strong>, focusing on secure development practices and threat prevention. I actively identify and mitigate vulnerabilities such as XSS, SQL Injection, and CSRF to ensure the safety and resilience of every application I build.
  </p>
</div>


        </div>

      </>



      {/* Project 1 */}
      <div className="bg-white py-10 px-5 rounded-xl shadow-lg max-w-5xl mx-auto my-10 border border-gray-200 relative">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-black">
          Multi-Store Medical Management System
        </h2>

        {!showDetailsProject1 ? (
          <>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
              onClick={() => openProjectDetails(1)}
              className="rounded-xl overflow-hidden mb-3 cursor-pointer relative max-h-[300px] sm:max-h-[200px] md:max-h-[300px] lg:max-h-[400px]"
            >
              {images1.map((src, idx) => (
                <SwiperSlide key={idx} className="relative">
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-purple-700 rounded-md flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 font-semibold px-2 sm:px-0 text-xs sm:text-base">

              <div className="text-purple-700 rounded-md flex flex-col sm:fl  ex-row justify-center items-center gap-3 sm:gap-6 font-semibold px-2 sm:px-0 text-xs sm:text-base ">
                <p className="text-center sm:text-left mt-3">
                  <strong>React.js</strong> | <strong>Node</strong> | <strong>MongoDB</strong> | <strong>RESTful API</strong> | <strong>Deployment</strong>
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-gray-800 space-y-6 relative px-2 sm:px-6 lg:px-10">
              <h3 className="text-xl font-semibold mt-4 sm:mt-6">Overview:</h3>
              <p className="leading-relaxed text-xs sm:text-sm md:text-base">
                Built with Node, MongoDB, React.js, and Tailwind CSS | Secure Pharmacy Management with Real-Time Order Tracking & Live Chat
              </p>
              <p className="leading-relaxed text-xs sm:text-sm md:text-base">
                Developed a full-featured multi-store pharmacy management platform enabling customers to browse and order medicines from multiple stores, while allowing store owners to manage inventory, sales, and orders efficiently.
              </p>

              <h3 className="text-xl font-semibold mt-4 sm:mt-6">Authentication & Security:</h3>
              <ul className="list-inside list-[circle] space-y-1 ml-5 text-xs sm:text-sm md:text-base">
                <li>Implemented JWT-based authentication for secure user sessions.</li>
                <li>Applied input validation, form sanitization, and prepared statements to prevent SQL injection and XSS attacks.</li>
                <li>Enforced role-based access control (RBAC) to restrict unauthorized access.</li>
              </ul>


              <h3 className="text-xl font-semibold mt-4 sm:mt-6"> Key Features:</h3>
              <ul className="list-inside list-[circle] space-y-1 ml-5 text-xs sm:text-sm md:text-base">
                <li>Multi-Store Support: Customers can browse medicines across multiple stores, compare prices, and place orders.</li>
                <li>Inventory & Order Management: Real-time stock updates, automated order processing with approval workflows.</li>
                <li>Live One-to-One Chat: Enabled real-time chat between customers and store owners for inquiries and support using WebSockets.</li>
                <li> Order Tracking: Customers can track order status using unique order numbers</li>
                <li> Responsive UI: Designed a seamless, modern interface using React.js and Tailwind CSS.</li>

              </ul>

              <h3 className="text-xl font-semibold mt-4 sm:mt-6">  My Contributions:</h3>
              <ul className="list-inside list-[circle] space-y-1 ml-5 text-xs sm:text-sm md:text-base">
                <li>Developed multi-store functionality with secure, role-based authentication.</li>
                <li>Implemented real-time order tracking and automated inventory updates.</li>
                <li>Designed and built a responsive, user-friendly frontend with React.js.</li>
                <li> Integrated live chat for seamless customer-store communication.</li>


              </ul>

              <div className="mt-4">
                <span className="text-sm font-semibold text-black-800 font-bold">Technologies used:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["JWT", "Tailwind CSS", "WebSockets", "React Context API", "Fetch API", "express", "Git"].map((tech) => (
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
            <BackButton onClick={closeAllDetails} />
          </>
        )}
      </div>

      {/* Project 2 */}
      <div className="bg-white py-10 px-5 rounded-xl shadow-lg max-w-5xl mx-auto my-10 border border-gray-200 relative">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-black">
          Academic Management Portal
        </h2>

        {!showDetailsProject2 ? (
          <>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
              onClick={() => openProjectDetails(2)}
              className="rounded-xl overflow-hidden mb-3 cursor-pointer relative max-h-[300px] sm:max-h-[200px] md:max-h-[300px] lg:max-h-[400px]"
            >
              {images2.map((src, idx) => (
                <SwiperSlide key={idx} className="relative">
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-purple-700 rounded-md flex flex-col sm:fl  ex-row justify-center items-center gap-3 sm:gap-6 font-semibold px-2 sm:px-0 text-xs sm:text-base ">
              <p className="text-center sm:text-left mt-3">
                <strong>React.js</strong> | <strong>Laravel</strong> | <strong>MySQL</strong> | <strong>RESTful API</strong> | <strong>Deployment</strong>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="text-gray-800 space-y-6 relative px-2 sm:px-6 lg:px-10 text-xs sm:text-sm md:text-base">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">Overview:</h3>
              <p className="leading-relaxed">
                Developed a secure, role-based Academic Management System using React.js, Laravel, and MySQL with Laravel Sanctum for authentication. The system integrates RESTful APIs for efficient data exchange and scalability.
              </p>

              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">Key Features:</h3>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">Authentication & Security:</h3>
              <ul className="list-inside list-[circle] space-y-1 ml-5">
                <li>Implemented JWT-based authentication for secure user sessions.</li>
                <li>Applied input validation, form sanitization, and prepared statements to prevent SQL injection and XSS attacks.</li>
                <li>Enforced role-based access control (RBAC) to restrict unauthorized access.</li>
              </ul>

              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">Dual Dashboard System:</h3>
              <ul className="list-inside list-disc ml-5 space-y-2">
                <li>
                  <span className="font-semibold">Student Dashboard:</span>
                  <ul className="list-inside list-[circle] ml-5 mt-1 space-y-1">
                    <li>Attendance Management: Mark and track attendance.</li>
                    <li>Leave Requests: Submit and monitor approval status.</li>
                    <li>Profile Management: Update personal details.</li>
                    <li>Notifications: Receive important updates.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Admin Dashboard:</span>
                  <ul className="list-inside list-[circle] ml-5 mt-1 space-y-1">
                    <li>User & Attendance Management: Monitor and update student records.</li>
                    <li>Leave Handling: Approve or reject leave requests.</li>
                    <li>Role-Based Access Control (RBAC): Securely manage user roles.</li>
                    <li>Performance Reports: Generate attendance-based grading reports.</li>
                    <li>Profile Management: Update profile picture and personal details.</li>
                    <li>Data Filtering: View attendance and grading data filtered by date range and student ID.</li>
                  </ul>
                </li>
              </ul>

              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6 font-bold">Impact</h3>
              <ul className="list-inside list-[circle] space-y-1 ml-5">
                <li>Update student data, manage users, and oversee platform operations.</li>
                <li>Approve or reject leave requests.</li>
                <li>View attendance and grading data filtered by date range and student ID.</li>
                <li>Update own profile information including name, email, and password.</li>
              </ul>

              <div className="mt-4">
                <span className="text-sm font-semibold text-black font-bold">Technologies used:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["React.js", "Redux", "Postman", "HTML5", "CSS3", "REST API", "Git"].map((tech) => (
                    <span
                      key={tech}
                      className="flex-1 px-2 py-1 rounded text-xs sm:text-sm text-white bg-purple-600 text-center whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <BackButton onClick={closeAllDetails} />
          </>
        )}
      </div>

      {/* Project 3 */}

      <div className="bg-white py-10 px-5 rounded-xl shadow-lg max-w-5xl mx-auto my-10 border border-gray-200 relative">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-black">
          LedgerPro – Admin-User Finance & Product Tracker
        </h2>

        {!showDetailsProject3 ? (
          <>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
              onClick={() => openProjectDetails(3)}
              className="rounded-xl overflow-hidden mb-3 cursor-pointer relative max-h-[300px] sm:max-h-[200px] md:max-h-[300px] lg:max-h-[400px]"
            >
              {images3.map((src, idx) => (
                <SwiperSlide key={idx} className="relative">
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-purple-700 rounded-md flex flex-col sm:fl  ex-row justify-center items-center gap-3 sm:gap-6 font-semibold px-2 sm:px-0 text-xs sm:text-base ">
              <p className="text-center sm:text-left mt-3">
                <strong>React.js</strong> | <strong>Node</strong> | <strong>MongoDB</strong> | <strong>RESTful APi</strong>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="text-gray-800 space-y-6 relative px-2 sm:px-6 lg:px-10 text-xs sm:text-sm md:text-base">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">Overview:</h3>
              <p className="leading-relaxed">
                LedgerPro is a responsive finance and product tracking system designed with a clear separation between Admin and User roles. It enables real-time monitoring of financial data, user and product management, and structured communication through a request system. The system includes two primary modules.
              </p>

              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6"> Key Features:</h3>
              <ul className="list-inside list-disc ml-5 space-y-2">
                <li>
                  <span className="font-semibold">Admin Panel</span>
                </li>
                <li>
                  <span className="font-semibold">User Panel</span>
                </li>
                <li>
                  <span className="font-semibold">PayPal payment</span>
                </li>
                <li>
                  <span className="font-semibold">Deployed using Hostinger</span>
                </li>
                <li>
                  <span className="font-semibold">Built with a mobile-first, fully responsive design</span>
                </li>
              </ul>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">Admin Panel Features</h3>

              <ul className="list-inside list-disc ml-5 space-y-2">
                <li>
                  <span className="font-semibold">Dashboard:</span>
                  <ul className="list-inside list-[circle] ml-5 mt-1 space-y-1">
                    <li>View total amount received (paid) and remaining balance.</li>
                    <li>Analyze financial trends via daily, weekly, and monthly breakdowns using charts or tables</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">User Management:</span>
                  <ul className="list-inside list-[circle] ml-5 mt-1 space-y-1">
                    <li>Add, assign, and manage users and their associated projects.</li>
                    <li>View and update user profile and financial records.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Financial Management:</span>
                  <ul className="list-inside list-[circle] ml-5 mt-1 space-y-1">
                    <li>View detailed financial data per user</li>
                    <li>Accept or reject user-submitted</li>
                    <ul className="list-inside list-[circle] ml-5 mt-1 space-y-1">
                      <li>Payment updates.</li>
                      <li>Product addition requests.</li>
                    </ul>
                    <li>	Manually update payment and balance records.</li>

                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Reports & History:</span>
                  <ul className="list-inside list-[circle] ml-5 mt-1 space-y-1">
                    <li>Access full transaction and activity logs.</li>
                    <li>Generate downloadable PDF reports filtered by date range or product type.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Application Settings:</span>
                  <ul className="list-inside list-[circle] ml-5 mt-1 space-y-1">
                    <li>Enable Dark Mode and personalize visual preferences.</li>
                  </ul>
                </li>
              </ul>

              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">User Panel Features</h3>
              <ul className="list-inside list-disc ml-5 space-y-2">
                <li>
                  <span className="font-semibold">Dashboard:</span>
                  <ul className="list-inside list-[circle] ml-5 mt-1 space-y-1">
                    <li>View total amount, paid amount, and remaining balance</li>
                    <li>Access complete payment history</li>
                  </ul>
                </li>

                <li>
                  <span className="font-semibold">Request System:</span>
                  <ul className="list-inside list-[circle] ml-5 mt-1 space-y-1">

                    <li>	Send requests to Admin for:</li>
                    <ul className="list-inside list-[circle] ml-5 mt-1 space-y-1">
                      <li>Adding new products.</li>
                      <li>o	Updating payment details.</li>
                    </ul>


                  </ul>
                </li>
                <li>
                  <span className="font-semibold">. Profile Management</span>
                  <ul className="list-inside list-[circle] ml-5 mt-1 space-y-1">
                    <li>Profile Management</li>

                  </ul>
                </li>

              </ul>


              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6 font-bold">Impact</h3>
              <ul className="list-inside list-[circle] space-y-1 ml-5">
                <li>Streamlined financial management by centralizing payment tracking for both users and admins.</li>
                <li>Improved transparency and accountability through a full audit trail of financial transactions and user activity</li>
                <li>Empowered users to manage their own data and initiate requests while keeping Admins in control of approvals</li>
                <li>Boosted operational efficiency with quick access to downloadable reports, visual dashboards, and real-time updates.</li>
                <li>Enhanced user experience through a responsive, mobile-first interface and personalized visual settings.</li>
              </ul>

              <div className="mt-4">
                <span className="text-sm font-semibold text-black font-bold">Technologies used:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Payment integrates", "Hostinger", "Postman", "Charts", "Tailwind", "Log History", "@react-pdf/renderer"].map((tech) => (
                    <span
                      key={tech}
                      className="flex-1 px-2 py-1 rounded text-xs sm:text-sm text-white bg-purple-600 text-center whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <BackButton onClick={closeAllDetails} />
          </>
        )}
      </div>

      {/* Project 4 */}

      <div className="bg-white py-10 px-5 rounded-xl shadow-lg max-w-5xl mx-auto my-10 border border-gray-200 relative">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-black">
          Music Upload & Streaming Platform
        </h2>

        {!showDetailsProject4 ? (
          <>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
              onClick={() => openProjectDetails(4)}
              className="rounded-xl overflow-hidden mb-3 cursor-pointer relative max-h-[300px] sm:max-h-[200px] md:max-h-[300px] lg:max-h-[400px]"
            >
              {images4.map((src, idx) => (
                <SwiperSlide key={idx} className="relative">
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-purple-700 rounded-md flex flex-col sm:fl  ex-row justify-center items-center gap-3 sm:gap-6 font-semibold px-2 sm:px-0 text-xs sm:text-base ">
              <p className="text-center sm:text-left mt-3">
                <strong>Vue3.js</strong> | <strong>Laravel</strong> | <strong>MySQL</strong> | <strong>RESTful APi</strong>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="text-gray-800 space-y-6 relative px-2 sm:px-6 lg:px-10 text-xs sm:text-sm md:text-base">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">Overview:</h3>
              <p className="leading-relaxed">
                Built with Vue3.js, Laravel REST API, and Tailwind CSS | Full-Stack Music Upload & Streaming Platform with File Management and Responsive Design.
              </p>
              <p className="leading-relaxed">
                Developed a web-based platform that enables users to upload, stream, and manage audio files directly in the browser. The system is designed for creators, educators, and communities to host and share audio content securely and efficiently.
              </p>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6"> Authentication & Security:</h3>
              <ul className="list-inside list-disc ml-5 space-y-2">
                <li>Secure backend endpoints with file validation and proper storage management.</li>
                <li>Input validation and file sanitization to prevent malicious uploads.</li>
                <li>Prepared architecture to easily integrate future authentication and RBAC (Role-Based Access Control).</li>
              </ul>






              <h3 className="text-xl font-semibold mt-4 sm:mt-6"> Key Features:</h3>
              <ul className="list-inside list-[circle] space-y-1 ml-5 text-xs sm:text-sm md:text-base">
                <li>Music Upload & Categorization: Users can upload songs with titles and assign categories for organized browsing.</li>
                <li>In-Browser Audio Streaming: Integrated audio player for seamless music playback without downloads.</li>
                <li>Song Management: List view of uploaded songs with options to play or delete.</li>
                <li>RESTful Backend API: Laravel-powered API for secure file operations (upload, retrieve, delete).</li>
                <li>Responsive Design: Mobile-first layout ensuring smooth experience across devices using Tailwind CSS.</li>


              </ul>

              <h3 className="text-xl font-semibold mt-4 sm:mt-6"> Future Enhancements:</h3>
              <ul className="list-inside list-[circle] space-y-1 ml-5 text-xs sm:text-sm md:text-base">
                <li>User authentication and role-based access (user/admin).</li>
                <li>Advanced search and filtering for easier song discovery.</li>
                <li>Like and favorite system for enhanced user engagement.</li>
                <li>Admin dashboard to monitor content and manage users.</li>
                <li>Public/private sharing options for uploaded content.</li>
                <li>Music file download with configurable permission settings.</li>
              </ul>




              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">My Contributions:</h3>
              <ul className="list-inside list-disc ml-5 space-y-2">
                <li>Designed and implemented the full-stack architecture using Vue3 and Laravel.</li>
                <li>Developed secure API endpoints for audio file management.</li>
                <li>Built responsive, user-friendly frontend with integrated audio player.</li>
                <li>Established a scalable foundation for future feature enhancements.</li>

              </ul>

              <div className="mt-4">
                <span className="text-sm font-semibold text-black font-bold">Technologies used:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["audio_player", "file_handling", "Postman", "Auth", "Tailwind", "Log History", "Sanctum Package"].map((tech) => (
                    <span
                      key={tech}
                      className="flex-1 px-2 py-1 rounded text-xs sm:text-sm text-white bg-purple-600 text-center whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <BackButton onClick={closeAllDetails} />
          </>
        )}
      </div>


      {/* Project 5 */}

      <div className="bg-white py-10 px-5 rounded-xl shadow-lg max-w-5xl mx-auto my-10 border border-gray-200 relative">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-black">
          WalletWise
        </h2>

        {!showDetailsProject5 ? (
          <>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
              onClick={() => openProjectDetails(5)}
              className="rounded-xl overflow-hidden mb-3 cursor-pointer relative max-h-[300px] sm:max-h-[200px] md:max-h-[300px] lg:max-h-[400px]"
            >
              {images5.map((src, idx) => (
                <SwiperSlide key={idx} className="relative">
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-purple-700 rounded-md flex flex-col sm:fl  ex-row justify-center items-center gap-3 sm:gap-6 font-semibold px-2 sm:px-0 text-xs sm:text-base ">
              <p className="text-center sm:text-left mt-3">
                <strong>React.js</strong> | <strong>Node Express, </strong> | <strong>MongoDB</strong> | <strong>RESTful APi</strong>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="text-gray-800 space-y-6 relative px-2 sm:px-6 lg:px-10 text-xs sm:text-sm md:text-base">
              <h3 className="text-xl font-semibold mt-4 sm:mt-6">Overview:</h3>
              <p className="leading-relaxed">
                <strong>Record Wallet</strong> is a secure, mobile-first, multilingual wallet management system built using the MERN stack. Designed with a strong focus on user accessibility and administrative control, it enables admins to manage user wallets, record financial transactions, and track detailed histories. The interface is fully responsive and localized for English and Urdu, making it user-friendly across devices and demographics.
              </p>

              <p className="leading-relaxed mt-4">
                <strong>Deployment:</strong> The frontend is deployed on <strong>Vercel</strong>, the backend is hosted on <strong>Render</strong>.
              </p>


              <h3 className="text-xl font-semibold mt-4 sm:mt-6"> Key Features</h3>
              <h2 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6"> User Management:</h2>
              <ul className="list-inside list-disc ml-5 space-y-2">
                <li>Add users with basic details like name, email, and phone number.</li>
                <li>Track and manage each user’s wallet balance in real-time.</li>
              </ul>

              <h2 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6"> Transaction Recording:</h2>
              <ul className="list-inside list-disc ml-5 space-y-2">
                <li>Admins can manually record "Sent" or "Received" transactions.</li>
                <li>Each transaction logs the sender, receiver, amount, transaction type, custom message, and timestamp.</li>
              </ul>


              <h2 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6"> History & Filtering:</h2>
              <ul className="list-inside list-disc ml-5 space-y-2">
                <li>View the complete transaction history for each user.</li>
                <li>Filter records by transaction per user and date range.</li>
                <li>can create PDF</li>
              </ul>


              <h2 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">Localization Support:</h2>
              <ul className="list-inside list-disc ml-5 space-y-2">
                <li>Built using react-i18next.</li>
                <li>Toggle seamlessly between English and Urdu for broader accessibility.</li>
              </ul>

              <h2 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">Integrated Calculator:</h2>
              <ul className="list-inside list-disc ml-5 space-y-2">
                <li>Perform quick financial calculations inside the app.</li>
                <li>Option to insert calculated results directly into transaction fields.</li>
              </ul>

              <h2 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">Authentication:</h2>
              <ul className="list-inside list-disc ml-5 space-y-2">
                <li>Secure admin login using JWT-based authentication.</li>
                <li>All routes are protected for authorized access only.</li>
              </ul>

              <h2 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">Mobile-First Design:</h2>
              <ul className="list-inside list-disc ml-5 space-y-2">
                <li>Fully responsive UI built with Tailwind CSS.</li>
                <li>Optimized for usability across phones, tablets, and desktops.</li>
              </ul>




              <div className="mt-4">
                <span className="text-sm font-semibold text-black font-bold">Technologies used:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["react-i18next", "Render", "Postman", "Auth", "PDF Export Utility", "Log History", "Calculator "].map((tech) => (
                    <span
                      key={tech}
                      className="flex-1 px-2 py-1 rounded text-xs sm:text-sm text-white bg-purple-600 text-center whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <BackButton onClick={closeAllDetails} />
          </>
        )}
      </div>




      {/* Project 6 */}
      <div className="bg-white py-10 px-5 rounded-xl shadow-lg max-w-5xl mx-auto my-10 border border-gray-200 relative">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-black">
          CareerBoost AI
        </h2>

        {!showDetailsProject6 ? (
          <>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
              onClick={() => openProjectDetails(6)}
              className="rounded-xl overflow-hidden mb-3 cursor-pointer relative max-h-[300px] sm:max-h-[200px] md:max-h-[300px] lg:max-h-[400px]"
            >
              {images6.map((src, idx) => (
                <SwiperSlide key={idx} className="relative">
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-purple-700 rounded-md flex flex-col sm:fl  ex-row justify-center items-center gap-3 sm:gap-6 font-semibold px-2 sm:px-0 text-xs sm:text-base ">
              <p className="text-center sm:text-left mt-3">
                <strong>React.js</strong> | <strong>Node.js</strong> | <strong>LangChain</strong> | <strong>LangGraph</strong> | <strong>Gemini AI</strong>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="text-gray-800 space-y-6 relative px-2 sm:px-6 lg:px-10 text-xs sm:text-sm md:text-base">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">Overview:</h3>
              <p className="leading-relaxed">
                Built an advanced AI-powered web platform that streamlines technical interview preparation and resume optimization. Leveraged LangChain and LangGraph for conversational memory and control flow, and Gemini AI for dynamic content generation and resume enhancement.
              </p>

              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">Key Features:</h3>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">AI-Powered Interview Assistant:</h3>
              <ul className="list-inside list-[circle] space-y-1 ml-5">
                <li>Generates 5–10 dynamic technical questions based on user-input topics (e.g., React, Node.js).</li>
                <li>Offers follow-up questions and clarifications with conversation memory powered by LangGraph</li>
                <li>Allows users to ask counter questions for deeper understanding</li>
                <li>Integrated Text-to-Speech functionality to deliver answers in English</li>
              </ul>

              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">Resume Analysis from Google Drive:</h3>
              <ul className="list-inside list-disc ml-5 space-y-2">

                <li>Extracts and analyzes resumes from Google Drive URLs</li>
                <li>Provides ATS feedback including</li>
                <ul className="list-inside list-[circle] ml-5 mt-1 space-y-1">
                  <li>ATS score.</li>
                  <li>Weak section identification.</li>
                  <li>Skill and keyword match.</li>
                  <li>Strengths and improvement areas</li>
                </ul>

                <li>
                  <span className="font-semibold">Post-analysis actions include:</span>
                  <ul className="list-inside list-[circle] ml-5 mt-1 space-y-1">
                    <li>Suggestions: AI-generated resume improvement advice based on field-specific ATS expectations.</li>
                    <li>Resume Builder: Produces a fully improved resume with</li>
                     <ul className="list-inside list-[circle] ml-5 mt-1 space-y-1">
                    <li>Polished formatting and structure.</li>
                    <li>Strong ATS-aligned keywords</li>
                     <li>Professionally rewritten content</li>
                  </ul>
                  </ul>
                </li>
              </ul>

              <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6 font-bold">Impact</h3>
              <ul className="list-inside list-[circle] space-y-1 ml-5">
                <li>Enhanced Interview Readiness: Enabled users to practice technical questions interactively with AI-generated follow-ups and clarifications, boosting interview confidence and preparedness.</li>
                <li>Improved Resume Quality: Helped users create ATS-friendly resumes with tailored content and formatting.</li>
                <li>Data-Driven Insights: Provided users with actionable feedback on their interview performance and resume effectiveness.</li>
                <li>Streamlined User Experience: Simplified the process of preparing for interviews and optimizing resumes through AI assistance.</li>
              </ul>

              <div className="mt-4">
                <span className="text-sm font-semibold text-black font-bold">Technologies and libraries used:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["React Markdown", "Axios ", "pdf-parse", "JWT ", "Session Memory", "Conditional Flow", "Git"].map((tech) => (
                    <span
                      key={tech}
                      className="flex-1 px-2 py-1 rounded text-xs sm:text-sm text-white bg-purple-600 text-center whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <BackButton onClick={closeAllDetails} />
          </>
        )}
      </div>
    </>
  );
};

export default ProjectComponent;
