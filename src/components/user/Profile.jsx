import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const skills = [
  'HTML, CSS, JavaScript, TypeScript',
  'React.js, Next.js, Redux, Vue.js 3',
  'Node.js, Express.js, PHP, Laravel',
  'MongoDB, MySQL',
  'Tailwind CSS, Bootstrap, jQuery',
  'REST API, Git, Docker',
  'Python, MATLAB',
  'WordPress, Font Awesome',
  'Authentication & Authorization (JWT, OAuth2, RBAC)',
  'Data Validation & Input Sanitization',
  'CSRF/XSS/SQL Injection Prevention',
  'Secure Headers (CSP, HSTS, X-Frame-Options)',
  'HTTPS & SSL/TLS Configuration',
  'Secure Coding Standards (SAST/DAST Awareness)',
  'API Security & Rate Limiting',
  'Access Control & Session Management',
];

const ProfileCard = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text} copied to clipboard`);
    });
  };

  const openSocialLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex justify-center items-center w-full px-4 py-6">
      <div className="flex flex-col items-center bg-white p-6 rounded-2xl w-full max-w-4xl ">


        <div className="flex flex-col items-center md:flex-row md:items-center md:gap-14 m-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLLp5QgincQyF-54dj_7g31vcZMd7xkpgKw&s"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-purple-600"
          />
          <h2 className=" text-7xl md:text-8xl font-bold text-gray-800 
  mt-8 mb-12
  ">
            Nasir Sultan
          </h2>

        </div>

        <div className="mt-4 w-full">
          <h3 className="text-base font-semibold text-gray-700 mb-3 text-center">
            My Skills as Full Stack Developer
          </h3>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="h-20"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="bg-purple-50 text-purple-800 p-3 rounded-lg shadow text-center text-sm font-medium">
                  {skill}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col gap-2 mt-4 w-full max-w-md">
          <a
            onClick={() => handleCopy('nasir@example.com')}
            className="w-full block bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-full shadow text-center transition cursor-pointer"
          >
            nasir@example.com
          </a>
          {/* Phone number button removed */}
        </div>

        <div className="flex justify-center gap-6 mt-10 text-purple-600 text-2xl ">
          <FaLinkedin
            className="cursor-pointer hover:text-purple-800 transition"
            onClick={() => openSocialLink('https://linkedin.com/in/yourprofile')}
            title="LinkedIn"
          />
          <FaGithub
            className="cursor-pointer hover:text-purple-800 transition"
            onClick={() => openSocialLink('https://github.com/yourusername')}
            title="GitHub"
          />
          <FaFacebook
            className="cursor-pointer hover:text-purple-800 transition"
            onClick={() => openSocialLink('https://facebook.com/yourprofile')}
            title="Facebook"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
