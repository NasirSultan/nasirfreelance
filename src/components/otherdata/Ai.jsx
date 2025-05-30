import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const GeminiFlashAI = () => {
    const [input, setInput] = useState('');
    const [outputs, setOutputs] = useState([]); // array of { prompt, response }
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const GEMINI_API_KEY = "AIzaSyCOHvkgqyBzOebZjKAyx8oVYHzEwxxgQGE"; // Replace securely

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setLoading(true);
        setError('');

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: input }] }],
                    }),
                }
            );

            const data = await response.json();
            const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

            if (text) {
                setOutputs((prev) => [...prev, { prompt: input, response: text }]);
                setInput('');
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

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-sans">
            {!outputs.length && (
                <h1 className="text-3xl font-semibold mb-8 text-gray-900">
                    What can I help with?
                </h1>
            )}

           <div className={`w-full max-w-4xl flex flex-col ${outputs.length > 0 ? 'pb-32 space-y-8' : ''}`}>

                {/* Chat history */}
              {outputs.length > 0 && (
  <div className="w-full h-[70vh] overflow-auto space-y-4 mb-8 py-8">
    {outputs.map((entry, index) => (
      <div
        key={index}
        className="w-full bg-white rounded-md shadow-md p-6 prose prose-blue"
      >
        <p className="font-semibold text-gray-600"></p>
        <p>{entry.prompt}</p>
        <hr className="my-4" />
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              return inline ? (
                <code className="bg-gray-200 px-1 rounded" {...props}>
                  {children}
                </code>
              ) : (
                <div className="bg-gray-900 text-white rounded-md shadow p-4 my-4 text-sm overflow-x-auto">
                  <pre className="whitespace-pre-wrap">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                </div>
              );
            },
          }}
        >
          {entry.response}
        </ReactMarkdown>
      </div>
    ))}
  </div>
)}


                {/* Form fixed at bottom if outputs exist */}
                <form
                    onSubmit={handleSubmit}
                    className={`flex flex-wrap gap-4 items-center justify-center px-4 
    ${outputs.length > 0 ? 'fixed left-0 w-full bg-gray-50 z-10 bottom-14  md:bottom-8' : ''}
  `}
                >
                    <textarea
                        className="flex-grow min-w-[250px] rounded-lg max-w-[600px] pt-3 px-2 text-base leading-none shadow-sm  border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 resize-y min-h-[30px] hover:border-purple-400"
                        placeholder="Type your question here..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={loading}
                    />

<button
  type="submit"
  disabled={loading}
  className="whitespace-nowrap bg-purple-600 text-white w-full sm:w-auto px-12 py-[10px] rounded-md text-lg font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
>
  {loading ? 'Thinking...' : 'Ask '}
</button>


                  {outputs.length > 0 && (
 <div className="fixed md:bottom-15 md:right-20 z-50 flex justify-center bottom-35 right-4">
  <button
    className="w-12 h-12 bg-purple-800 text-white font-semibold rounded-full shadow-lg hover:bg-purple-900 transition-colors flex items-center justify-center text-sm cursor-default"
      type="button"
    onClick={() => setOutputs([])}
     title="Clear"
  >
    ←
  </button>
</div>

)}

                </form>


                {error && (
                    <div className="mt-2 text-center text-red-600 font-medium">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GeminiFlashAI;
