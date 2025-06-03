import { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Screenshot1 from "./Screenshot (283).png";
import Screenshot2 from "./Screenshot (284).png";
import Screenshot3 from "./Screenshot (285).png";



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
    const [showMessage, setShowMessage] = useState(true);
  // Combined close handler to reset all details views
  const closeAllDetails = () => {
    setShowDetailsProject1(false);
    setShowDetailsProject2(false);
       setShowDetailsProject3(false);
 
  };

  // Open specific project detail and hide others
  const openProjectDetails = (projectNumber) => {
    if (projectNumber === 1) {
      setShowDetailsProject1(true);
      setShowDetailsProject2(false);
    } else if (projectNumber === 2) {
      setShowDetailsProject2(true);
      setShowDetailsProject1(false);
    }else if (projectNumber === 3) {
      setShowDetailsProject3(true);
      setShowDetailsProject1(false);
      setShowDetailsProject2(false);
    }
  };

  // Sample images for both projects (you can customize)
  const images1 = [
    "https://media.gettyimages.com/id/1475870499/photo/education-high-five-and-teacher-with-children-in-classroom-for-learning-support-and.jpg?s=612x612&w=gi&k=20&c=RnZRKGNE0ai_1qR2M8FYlSQfrr2ea1e98uP_14TE2Pc=",
    "https://media.gettyimages.com/id/1475870499/photo/education-high-five-and-teacher-with-children-in-classroom-for-learning-support-and.jpg?s=612x612&w=gi&k=20&c=RnZRKGNE0ai_1qR2M8FYlSQfrr2ea1e98uP_14TE2Pc=",
    "https://media.gettyimages.com/id/1475870499/photo/education-high-five-and-teacher-with-children-in-classroom-for-learning-support-and.jpg?s=612x612&w=gi&k=20&c=RnZRKGNE0ai_1qR2M8FYlSQfrr2ea1e98uP_14TE2Pc="
  ];
  const images2 = [Screenshot1, Screenshot2, Screenshot3];

  useEffect(() => {
    // Hide the initial message after 3 seconds
    const initialTimeout = setTimeout(() => setShowMessage(false), 4000);

    // Show the message every 1 minute for 3 seconds
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
  bg-purple-400 rounded-3xl p-2 
  text-xs sm:text-xs md:text-[11px] lg:text-[10px] 
  text-purple-800 font-semibold z-50">
  Click on pic for explanation
</div>

      )}
   


<>

<div className="w-full flex justify-center px-4">
  <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] text-center">
    <h2  className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
      Welcome to my Project Highlights
    </h2>

    <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed mb-2">
      My projects involve real-world functionality such as user authentication, data visualization, payment processing, RESTful APIs, and integration with third-party services. I enjoy solving problems through clean architecture, reusable components, and efficient database design.
    </p>

    <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed mb-2">
      In parallel, I'm diving deeper into Cybersecurity—learning secure development practices, identifying vulnerabilities like XSS, SQL Injection, CSRF, and implementing strategies to protect data and infrastructure. My goal is to build applications that are not only functional but also secure and resilient.
    </p>
  </div>
</div>

</>



      {/* Project 1 */}
      <div className="bg-white py-10 px-5 rounded-xl shadow-lg max-w-5xl mx-auto my-10 border border-gray-200 relative">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-black">
          Medical Student Management System
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
              <p className="text-center sm:text-left">
                <strong>Project Duration:</strong> 7 Days
              </p>
              <p className="text-center sm:text-left">
                <strong>Tech Stack:</strong> Laravel, MySQL, React.js
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="text-gray-800 space-y-6 relative px-2 sm:px-6 lg:px-10">
              <h3 className="text-xl font-semibold mt-4 sm:mt-6">Overview:</h3>
              <p className="leading-relaxed text-xs sm:text-sm md:text-base">
                fasdfasdfasf     Built with Laravel, MySQL, and React.js | Secure Role-Based Academic Management System
              </p>
              <p className="leading-relaxed text-xs sm:text-sm md:text-base">
                Developed a role-based academic management platform with separate Student and Admin dashboards using React.js (frontend), Laravel (backend), and MySQL (database).
              </p>

              <h3 className="text-xl font-semibold mt-4 sm:mt-6">Authentication & Security:</h3>
              <ul className="list-inside list-[circle] space-y-1 ml-5 text-xs sm:text-sm md:text-base">
                <li>Implemented JWT-based authentication for secure user sessions.</li>
                <li>Applied input validation, form sanitization, and prepared statements to prevent SQL injection and XSS attacks.</li>
                <li>Enforced role-based access control (RBAC) to restrict unauthorized access.</li>
              </ul>


              <h3 className="text-xl font-semibold mt-4 sm:mt-6">Student Dashboard Features:</h3>
              <ul className="list-disc list-inside space-y-1 ml-5 text-xs sm:text-sm md:text-base">
                <li>Ability to mark attendance once per day.</li>
                <li>Submit leave requests and track leave status in real time.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 sm:mt-6">Admin Dashboard Capabilities:</h3>
              <ul className="list-disc list-inside space-y-1 ml-5 text-xs sm:text-sm md:text-base">
                <li>Update student data, manage users, and oversee platform operations.</li>
                <li>Approve or reject leave requests.</li>
                <li>View attendance and grading data filtered by date range and student ID.</li>
                <li>Update own profile information including name, email, and password.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 sm:mt-6">Impact:</h3>
              <p className="leading-relaxed text-xs sm:text-sm md:text-base">
                Improved operational efficiency by centralizing attendance tracking, leave management, and grading workflows in one intuitive platform.
              </p>

              <h3 className="text-xl font-semibold mt-4 sm:mt-6">Skills Used:</h3>
              <div className="mt-4">
                <span className="text-sm font-semibold text-black-800 font-bold">Technologies used:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["React.js", "Redux", "JavaScript", "HTML5", "CSS3", "REST API", "Git"].map((tech) => (
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
  
  
        <div className="bg-white py-10 px-5 rounded-xl shadow-lg max-w-5xl mx-auto my-10 border border-gray-200 relative">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-black">
          Academic adfds fdsaf Management Portal
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
   afasfa  Developed a secure, role-based Academic Management System using React.js, Laravel, and MySQL with Laravel Sanctum for authentication. The system integrates RESTful APIs for efficient data exchange and scalability.
  </p>

  <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">fasf Key Features:</h3>
  <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6">Authentication & Security:</h3>
  <ul className="list-inside list-[circle] space-y-1 ml-5">
    <li>Implemented JWT-based authentication for secure user sessions.</li>
    <li>Applied input validation, form sanitization, and prepared statements to prevent SQL injection and XSS attacks.</li>
    <li>Enforced role-based access control (RBAC) to restrict unauthorized access.</li>
  </ul>

  <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-4 sm:mt-6"> fdasfa Dual Dashboard System:</h3>
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
    </>
  );
};

export default ProjectComponent;
