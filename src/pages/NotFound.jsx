import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [glitchText, setGlitchText] = useState('404')
  const navigate = useNavigate()

  const glitchVariations = ['404', '4Ø4', '4∅4', '4□4', '4◊4', '404']

  useEffect(() => {
    setIsVisible(true)
    
    // Glitch effect for 404 text
    const glitchInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * glitchVariations.length)
      setGlitchText(glitchVariations[randomIndex])
      
      setTimeout(() => {
        setGlitchText('404')
      }, 150)
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [])

  const quickLinks = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Services', path: '/services', icon: '⚡' },
    { name: 'Portfolio', path: '/portfolio', icon: '💼' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ]

  return (
    <div className="min-h-screen bg-[#0D1117] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF4D4D] opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00BFFF] opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-[#FF4D4D]/5 to-[#00BFFF]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating error particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/6 left-1/6 w-3 h-3 bg-[#FF4D4D] rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#00BFFF] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-[#FF4D4D] rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/6 right-1/6 w-3 h-3 bg-[#00FFC6] rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/5 right-1/3 w-1.5 h-1.5 bg-[#FF4D4D] rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Matrix-style falling code */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 text-[#00FFC6] text-xs animate-pulse">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="mb-2">
              {Math.random().toString(36).substring(2, 15)}
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-1/4 text-[#00BFFF] text-xs animate-pulse delay-500">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="mb-2">
              {Math.random().toString(36).substring(2, 15)}
            </div>
          ))}
        </div>
      </div>

      <div className={`text-center z-10 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* 404 Logo */}
        <div className="mb-8">
          <img 
            src="/logo.png" 
            alt="404Byte Logo" 
            className="w-20 h-20 mx-auto mb-6 transform hover:rotate-12 transition-transform duration-500 opacity-50"
          />
        </div>

        {/* Glitching 404 */}
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black mb-8 font-['JetBrains_Mono'] leading-none">
          <span className="glitch bg-gradient-to-r from-[#FF4D4D] via-[#00BFFF] to-[#00FFC6] bg-clip-text text-transparent" data-text={glitchText}>
            {glitchText}
          </span>
        </h1>

        {/* Error Message */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk']">
          Page Not Found
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[#A9B2BA] mb-12 max-w-2xl mx-auto leading-relaxed">
          Looks like this page went missing. Don't worry, we'll help you find what you're looking for.
        </p>

        {/* Error Details */}
        <div className="bg-[#161b22] rounded-2xl p-8 border border-[#2d3748] mb-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#FF4D4D] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Error Code: 404</h3>
              <p className="text-[#A9B2BA] text-sm">Resource not found</p>
            </div>
          </div>
          
          <div className="text-left space-y-2 text-sm text-[#A9B2BA]">
            <div className="flex justify-between">
              <span>Status:</span>
              <span className="text-[#FF4D4D]">Not Found</span>
            </div>
            <div className="flex justify-between">
              <span>Timestamp:</span>
              <span className="text-[#00FFC6]">{new Date().toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Server:</span>
              <span className="text-[#00BFFF]">404Byte/1.0</span>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 font-['Space_Grotesk']">
            Quick Navigation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => navigate(link.path)}
                className="group p-6 bg-[#161b22] rounded-xl border border-[#2d3748] hover:border-[#00BFFF] transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <div className="text-white font-semibold group-hover:text-[#00BFFF] transition-colors duration-300">
                  {link.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => navigate('/')}
            className="group relative px-12 py-6 bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] text-[#0D1117] font-bold text-xl rounded-2xl neon-glow transition-all duration-500 transform hover:scale-110 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              Go Home
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={() => window.history.back()}
            className="px-12 py-6 border-2 border-[#FF4D4D] text-[#FF4D4D] font-bold text-xl rounded-2xl hover:bg-[#FF4D4D] hover:text-[#0D1117] transition-all duration-300 transform hover:scale-110"
          >
            <span className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
              Go Back
            </span>
          </button>
        </div>

        {/* Fun Message */}
        <div className="mt-16 p-6 bg-gradient-to-r from-[#161b22] to-[#1a1f2e] rounded-2xl border border-[#2d3748] max-w-2xl mx-auto">
          <p className="text-[#A9B2BA] italic">
            "Even the best developers encounter 404s. The difference is how quickly we fix what's missing." 
            <span className="text-[#00FFC6] font-semibold">- 404Byte Team</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound