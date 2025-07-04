import React, { useEffect, useState, Suspense } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Info, Search, Code, BookOpen } from 'lucide-react';

// Lazy load markdown files
const markdownContent = () => import('./Text.md?raw');
const markdownContent2 = () => import('./Textt.md?raw');
const markdownContent3 = () => import('./Texttt.md?raw');
const markdownContent4 = () => import('./Stream.md?raw');
const markdownContent5 = () => import('./WebSocket.md?raw');
const markdownContent6 = () => import('./Googlelogin.md?raw');
const markdownContent7 = () => import('./Dom.md?raw');
const markdownContent8 = () => import('./LangChain.md?raw');

export default function MarkdownDisplay() {
  const [content, setContent] = useState('');
  const [visible, setVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState('first');
  const [searchTerm, setSearchTerm] = useState('');
  const [clickedLinks, setClickedLinks] = useState(new Set());

  const articles = [
    {
      key: 'first',
      title: 'Tailwind CSS',
      description: 'Install Tailwind CSS in a React + Vite Project',
      markdown: markdownContent,
      Icon: Code,
    },
    {
      key: 'second',
      title: 'Facade',
      description: 'Creating Custom Facades in Laravel: A Practical Guide',
      markdown: markdownContent2,
      Icon: BookOpen,
    },
    {
      key: 'third',
      title: 'Association ',
      description: 'Understanding Object and Method Relationships in Coding',
      markdown: markdownContent3,
      Icon: BookOpen,
    },
    {
      key: 'fourth',
      title: 'Streams',
      description: 'What Are Streams in Node.js?',
      markdown: markdownContent4,
      Icon: BookOpen,
    },
    {
      key: 'fifth',
      title: 'WebSocket',
      description: 'Building a Real-Time Multi-Window Chat Application Using React and WebSocket',
      markdown: markdownContent5,
      Icon: BookOpen,
    },
    {
      key: 'sixth',
      title: 'Googlelogin Auth',
      description: 'Easy Google Login in a MERN Stack App',
      markdown: markdownContent6,
      Icon: BookOpen,
    },
    {
      key: 'seventh',
      title: 'DOM Manipulation',
      description: 'Understanding the Document Object Model (DOM) in JavaScript',
      markdown: markdownContent7,
      Icon: BookOpen,
    },
    {
      key: 'nineth',
      title: 'LangChain JS Tutorial',
      description: 'Comprehensive Guide to LangChain in JavaScript using Gemini',
      markdown: markdownContent8,
      Icon: BookOpen,
    },
  ];

  async function loadContent(loader) {
    const raw = await loader();
    const replacedContent = raw.default.replace(
      /'([\w]+(?:\s[\w]+)?)([.,!?:;])?'/g,
      (_, text, punctuation = '') => `**${text}**${punctuation}`
    );
    setContent(replacedContent);
    setClickedLinks(new Set());
  }

  useEffect(() => {
    const article = articles.find((a) => a.key === currentContent);
    if (article) {
      loadContent(article.markdown);
    }
  }, [currentContent]);

  const filteredArticles = articles.filter(({ title, description }) => {
    const search = searchTerm.toLowerCase();
    return (
      title.toLowerCase().includes(search) ||
      description.toLowerCase().includes(search)
    );
  });

  function handleLinkClick(href) {
    window.open(href, '_blank', 'noopener,noreferrer');
    setClickedLinks((prev) => new Set(prev).add(href));
  }

  return (
    <>
      {!visible && (
      <div className="fixed left-1/2 top-[5.5rem] sm:top-[6rem] transform -translate-x-1/2 z-50 w-[90%] sm:w-full max-w-4xl max-h-[70vh] sm:max-h-[70vh]  p-4 px-6  flex flex-col  overflow-hidden">
  {/* Search Input */}
  <div className="relative flex-shrink-0">
    <input
      type="text"
      placeholder="Search articles..."
      className="w-full pr-10 px-4 py-2 rounded-lg border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-700 pointer-events-none" size={20} />
  </div>

  {/* Scrollable Article List */}
  <div className="flex-grow overflow-y-auto mt-4 space-y-4 hide-scrollbar">
    {filteredArticles.length > 0 ? (
      filteredArticles.map(({ key, title, description, Icon }) => (
        <button
          key={key}
          onClick={() => {
            setCurrentContent(key);
            setVisible(true);
          }}
          className="w-full cursor-pointer h-24 bg-purple-800 text-white font-semibold px-2 sm:px-6 py-3 sm:py-4 rounded-lg shadow-md hover:bg-purple-900 transition-colors flex items-center"
        >
          <div className="w-1/4 flex justify-center">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="w-3/4 flex flex-col items-start justify-center text-left pl-3 sm:pl-4">
            <h3 className="text-base sm:text-lg font-semibold truncate w-full">{title}</h3>
            <p className="text-xs sm:text-sm font-normal">{description}</p>
          </div>
        </button>
      ))
    ) : (
      <p className="text-center text-purple-700 mt-10 font-semibold">No articles match your search.</p>
    )}
  </div>
</div>

      )}

      <div className={`max-w-5xl mx-auto p-8 bg-gray-50 rounded-lg shadow-md text-gray-800 font-sans leading-relaxed sm:max-w-3xl sm:p-6 sm:text-base xs:max-w-full xs:p-4 xs:text-sm transition-all duration-300 ${visible ? 'block' : 'hidden'}`}>
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => <h1 className="border-b-2 border-purple-700 pb-1 mt-6 font-extrabold text-2xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl text-purple-700" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-black mt-5 text-2xl font-semibold" {...props} />,
            h3: ({ node, ...props }) => <h1 className="text-black mt-4 font-bold text-3xl" {...props} />,
            p: ({ node, ...props }) => <p className="my-4 text-lg sm:text-base xs:text-sm" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-none p-0 mb-4" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4" {...props} />,
            li: ({ node, children, ...props }) => (
              <li className="flex items-center space-x-2 mb-2" {...props}>
                <span className="inline-block w-2 h-2 bg-purple-700 rounded-full flex-shrink-0" />
                <span>{children}</span>
              </li>
            ),
            code({ node, inline, className, children, ...props }) {
              if (inline) {
                return <code className="bg-gray-200 rounded px-1.5 py-0.5 text-sm font-mono" {...props}>{children}</code>;
              }
              const match = /language-(\w+)/.exec(className || '');
              return (
                <SyntaxHighlighter
                  style={atomDark}
                  language={match ? match[1] : ''}
                  PreTag="div"
                  showLineNumbers
                  wrapLines
                  customStyle={{
                    borderRadius: 12,
                    fontSize: '0.9rem',
                    marginBottom: '1.5rem',
                    maxHeight: '400px',
                    overflowY: 'auto',
                    scrollbarWidth: 'thin',
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              );
            },
            a: ({ node, href, children, ...props }) => {
              if (clickedLinks.has(href)) return <span>{children}</span>;
              return (
                <a
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(href);
                  }}
                  className="text-purple-700 underline hover:text-purple-900 transition-colors cursor-pointer"
                  {...props}
                >
                  {children}
                </a>
              );
            },
            blockquote: ({ node, ...props }) => (
              <blockquote className="border-l-4 border-purple-700 pl-4 italic text-gray-600 bg-purple-50 rounded mb-4" {...props} />
            ),
            hr: ({ node, ...props }) => <hr className="border-gray-300 my-8" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      {visible && (
        <div className="fixed md:bottom-15 md:right-20 z-50 flex justify-center bottom-35 right-4">
          <button
            onClick={() => setVisible(false)}
            className="w-12 h-12 bg-purple-800 text-white font-semibold rounded-full shadow-lg hover:bg-purple-900 transition-colors flex items-center justify-center text-sm cursor-pointer"
            aria-label="Go back"
          >
            ←
          </button>
        </div>
      )}
    </>
  );
}
