import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Sparkles,
  FolderKanban,
  Gem,
  FileCode2,
  UserCircle2,
  ChevronUp,
  ChevronDown
} from 'lucide-react'

const Layout = ({ children }) => {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const [showButton, setShowButton] = useState(false)
  const [scrollDirection, setScrollDirection] = useState(null)
  const [isInputFocused, setIsInputFocused] = useState(false)

  const navItems = [
    { to: '/', label: 'Home', icon: <LayoutDashboard size={20} /> },
    { to: '/Portfolio', label: 'Portfolio', icon: <FolderKanban size={20} /> },
    { to: '/Freelance', label: 'Freelancing', icon: <Gem size={20} /> },
    { to: '/Article', label: 'Articles', icon: <FileCode2 size={20} /> },
    { to: '/profile', label: 'Profile', icon: <UserCircle2 size={20} /> },
  ]

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const checkScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      const canScroll = docHeight > windowHeight
      setShowButton(canScroll)

      if (!canScroll) return setScrollDirection(null)

      if (scrollY > 10 && scrollY < docHeight - windowHeight - 10) {
        setScrollDirection('down')
      } else if (scrollY >= docHeight - windowHeight - 10) {
        setScrollDirection('up')
      } else {
        setScrollDirection('down')
      }
    }

    window.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll)
    checkScroll()

    return () => {
      window.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  useEffect(() => {
    const handleFocusIn = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        setIsInputFocused(true)
      }
    }

    const handleFocusOut = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        setIsInputFocused(false)
      }
    }

    window.addEventListener('focusin', handleFocusIn)
    window.addEventListener('focusout', handleFocusOut)

    return () => {
      window.removeEventListener('focusin', handleFocusIn)
      window.removeEventListener('focusout', handleFocusOut)
    }
  }, [])

  const handleScrollClick = () => {
    if (scrollDirection === 'up') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (scrollDirection === 'down') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center bg-white text-purple-700 w-full">
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-purple-700 px-4 text-center w-full">
          <div className="animate-pulse font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Thanks for your patience...
          </div>
          <div className="mt-2 animate-pulse font-medium text-black text-xl sm:text-lg md:text-base lg:text-sm">
            This may take a moment due to free version
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Top Navbar */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 items-center justify-between px-6 py-4 border-b border-gray-200 bg-white shadow-md z-10">
        <h1 className="text-2xl font-bold text-purple-700">Freelancing</h1>
        <div className="flex gap-6">
          {navItems.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-2 transition-all duration-200 ease-in-out transform hover:scale-105 hover:text-purple-600 ${
                location.pathname === to
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-700'
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Navbar (Mobile) */}
      {!isInputFocused && (
        <nav className="flex md:hidden fixed bottom-0 left-0 right-0 justify-around items-center border-t border-gray-300 bg-white py-2 shadow-inner z-10">
          {navItems.map(({ to, icon, label }) => (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center text-xs transition-all duration-200 ease-in-out transform hover:scale-105 hover:text-purple-600 ${
                location.pathname === to
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-700'
              }`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      )}

      {/* Scroll Button with Animation */}
      {showButton &&
        scrollDirection &&
        !location.pathname.startsWith('/Text') && (
          <button
            onClick={handleScrollClick}
            className="fixed bottom-20 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-200 ease-in-out transform hover:scale-110 hover:bg-purple-700"
            aria-label={scrollDirection === 'up' ? 'Scroll to top' : 'Scroll to bottom'}
          >
            {scrollDirection === 'up' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        )}

      {/* Main Content */}
      <main className="flex-1 px-4 py-4 mt-0 md:mt-[72px] mb-[56px] md:mb-0">
        {children}
      </main>
    </div>
  )
}

export default Layout
