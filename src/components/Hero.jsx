import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentText, setCurrentText] = useState('')
  const navigate = useNavigate()
  
  const phrases = [
    "We fix what's missing.",
    "We build digital solutions.",
    "We create exceptional experiences.",
    "We transform ideas into reality."
  ]

  useEffect(() => {
    setIsVisible(true)
    
    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false
    
    const typeWriter = () => {
      const currentPhrase = phrases[phraseIndex]
      
      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, charIndex - 1))
        charIndex--
      } else {
        setCurrentText(currentPhrase.substring(0, charIndex + 1))
        charIndex++
      }
      
      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => { isDeleting = true }, 2000)
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
      }
      
      setTimeout(typeWriter, isDeleting ? 50 : 100)
    }
    
    setTimeout(typeWriter, 1000)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117] via-[#0D1117] to-[#1a1f2e] opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00BFFF] opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FFC6] opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className={`text-center z-10 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/logo.png" 
            alt="404Byte Logo" 
            className="w-24 h-24 mx-auto mb-6 transform hover:rotate-12 transition-transform duration-500"
          />
        </div>

        {/* Brand Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 font-['JetBrains_Mono']">
          <span 
            className="glitch text-white hover:text-[#00BFFF] transition-colors duration-300 cursor-default"
            data-text="404Byte"
          >
            404Byte
          </span>
        </h1>

        {/* Animated tagline */}
        <div className="h-16 mb-12">
          <p className="text-2xl md:text-4xl text-[#A9B2BA] font-['Poppins'] font-light">
            <span className="text-[#00FFC6]">{currentText}</span>
            <span className="animate-pulse text-[#00BFFF]">|</span>
          </p>
        </div>

        {/* Single powerful CTA */}
        <div className="space-y-6">
          <button 
            onClick={() => navigate('/contact')}
            className="group relative px-12 py-6 bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] text-[#0D1117] font-bold text-xl rounded-2xl neon-glow transition-all duration-500 transform hover:scale-110 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Project
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero