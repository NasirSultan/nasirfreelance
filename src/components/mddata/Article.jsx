import React from 'react';
import { Link } from 'react-router-dom';

const RedirectLink = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col space-y-6 w-64">
        <Link
          to="/Post"
          className="text-blue-600 hover:text-blue-800 font-semibold text-xl underline transition transform hover:scale-105"
        >
          Posts
        </Link>
        <Link
          to="/Text"
          className="text-blue-600 hover:text-blue-800 font-semibold text-xl underline transition transform hover:scale-105"
        >
          Articles
        </Link>
      </div>
    </div>
  );
};

export default RedirectLink;
