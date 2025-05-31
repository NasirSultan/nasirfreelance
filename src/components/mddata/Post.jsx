import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleExplanations, setVisibleExplanations] = useState({});

  useEffect(() => {
    fetch('https://myspace-backend.vercel.app/api/posts')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch posts');
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading posts...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">Error: {error}</div>;

  const components = {
    hr: () => null,
  };

  const toggleExplanation = (postId) => {
    setVisibleExplanations(prev => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="
      mx-auto mt-10  max-w-full
    
    ">
      <h1 className="
        text-2xl font-bold mb-3 text-center
        sm:text-3xl
        md:text-5xl
        lg:text-6xl
      ">
        Welcome to Our Blog
      </h1>
      <p className="
        text-center text-gray-600 mb-8 text-sm
        sm:text-base
        md:text-lg
        lg:text-xl
      ">
        Explore our latest articles, insights, and updates below. Stay informed and inspired!
      </p>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts found.</p>
      ) : (
        <ul className="">
          {posts.map(post => {
            const encodedUrl = encodeURI(`https://myspace-backend.vercel.app${post.fileUrl || ''}`);
            const isVisible = visibleExplanations[post._id] || false;
            const isImage = /\.(jpeg|jpg|png|gif)$/i.test(post.fileUrl || '');

            return (
              <li key={post._id} className="
                rounded-lg  shadow-md hover:shadow-lg transition
              
              ">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="
  font-extrabold text-lg
  sm:text-2xl
  md:text-4xl
  lg:text-5xl
">
                    {post.title}
                  </h2>

                </div>

                {post.fileUrl && isImage && (
                  <img
                    src={encodedUrl}
                    alt={post.title}
                    className="max-w-full h-auto rounded"
                  />
                )}

                <button
                  onClick={() => toggleExplanation(post._id)}
                  className="
                    w-full px-3 py-1 bg-purple-700 text-white rounded-lg my-2 hover:bg-purple-800 transition
                    md:px-6 md:py-2 md:text-lg
                  "
                >
                  {isVisible ? 'Hide Explanation' : 'Show Explanation'}
                </button>
                {isVisible && (
                  <div className="mb-3 prose max-w-none md:text-lg lg:text-xl">
                    <ReactMarkdown components={components}>
                      {post.explanation}
                    </ReactMarkdown>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
