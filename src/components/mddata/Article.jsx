import React from 'react';
import { Link } from 'react-router-dom';

const RedirectLink = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  ">
      <div className="md:w-[70vw] w-full bg-white p-2   text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Our Content Hub
        </h1>
        <p className="text-gray-600 mb-8">
          Choose one of the options below to explore our posts and articles.
          Stay updated with the latest insights and stories.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
       
       
                 <Link
                   to="/Post"
                   className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-lg transition duration-300"
                 >
                 Posts
                 </Link>
       
                 <Link
                   to="/Text"
                   className="flex items-center justify-center gap-2 border border-purple-700 text-purple-700 hover:bg-purple-100 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-sm transition duration-300"
                 >
                    Articles
                 </Link>
       
               </div>

      </div>
    </div>
  );
};

export default RedirectLink;
