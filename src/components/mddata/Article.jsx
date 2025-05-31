import React from 'react';
import { Link } from 'react-router-dom';

const RedirectLink = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="w-[70vw] max-w-3xl bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Our Content Hub
        </h1>
        <p className="text-gray-600 mb-8">
          Choose one of the options below to explore our posts and articles.
          Stay updated with the latest insights and stories.
        </p>
        <div className="flex flex-col space-y-6 max-w-sm mx-auto">
  <Link
    to="/Post"
    className="block bg-blue-600 text-white font-semibold py-8 rounded-md shadow-md hover:bg-blue-700 transition"
  >
    Posts
  </Link>
  <Link
    to="/Text"
    className="block bg-green-600 text-white font-semibold py-8 rounded-md shadow-md hover:bg-green-700 transition"
  >
    Articles
  </Link>
</div>

      </div>
    </div>
  );
};

export default RedirectLink;
