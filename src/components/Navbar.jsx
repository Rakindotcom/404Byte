import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' }
  ]

  const handleNavigation = (path) => {
    navigate(path)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0D1117]/95 backdrop-blur-md border-b border-[#2d3748]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => handleNavigation('/')} className="flex items-center group">
            <img
              src="/logo.png"
              alt="404Byte Logo"
              className="w-10 h-10 mr-3 transform group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="text-2xl font-black font-['Space_Grotesk'] text-white group-hover:text-[#00BFFF] transition-colors duration-300">
              404Byte
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-semibold transition-all duration-300 relative group ${location.pathname === item.path
                  ? 'text-[#00BFFF]'
                  : 'text-[#A9B2BA] hover:text-[#00FFC6]'
                  }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'group-hover:w-full'
                  }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#A9B2BA] hover:text-[#00BFFF] transition-colors duration-300 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#2d3748]/50 bg-[#0D1117]/98 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`block w-full text-left py-3 text-sm font-semibold transition-colors duration-300 ${location.pathname === item.path
                  ? 'text-[#00BFFF]'
                  : 'text-[#A9B2BA] hover:text-[#00FFC6]'
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar