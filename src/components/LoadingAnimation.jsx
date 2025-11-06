import { useState, useEffect } from 'react'

const LoadingAnimation = ({ onComplete }) => {
  const [showLogo, setShowLogo] = useState(false)
  const [showMatrix, setShowMatrix] = useState(false)
  const [showGlitch, setShowGlitch] = useState(false)

  useEffect(() => {
    const sequence = [
      { delay: 300, action: () => setShowMatrix(true) },
      { delay: 800, action: () => setShowLogo(true) },
      { delay: 1500, action: () => setShowGlitch(true) },
      { delay: 3500, action: () => onComplete() }
    ]

    const timers = sequence.map(({ delay, action }) => 
      setTimeout(action, delay)
    )

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-[#0D1117] z-50 overflow-hidden">
      {/* Matrix Rain Effect */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${showMatrix ? 'opacity-100' : 'opacity-0'}`}>
        {Array.from({ length: window.innerWidth > 768 ? 20 : 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 text-[#00FFC6] text-xs font-mono opacity-30"
            style={{
              left: `${i * (window.innerWidth > 768 ? 5 : 10)}%`,
              animationDelay: `${i * 0.1}s`,
              animation: 'matrix-rain 2s linear infinite'
            }}
          >
            {Array.from({ length: window.innerWidth > 768 ? 30 : 15 }).map((_, j) => (
              <div key={j} className="mb-1">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 border border-[#00BFFF]/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 border border-[#00FFC6]/20 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-32 md:h-32 border-2 border-[#00BFFF]/30 animate-ping"></div>
      </div>

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent animate-scan-vertical"></div>
        <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#00FFC6] to-transparent animate-scan-horizontal"></div>
      </div>

      {/* Main Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`text-center transition-all duration-1000 ${showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          {/* Glitch Effect Container */}
          <div className={`relative px-4 ${showGlitch ? 'animate-glitch' : ''}`}>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white font-['Space_Grotesk'] relative">
              <span className="relative z-10">
                404<span className="bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] bg-clip-text text-transparent">BYTE</span>
              </span>
              
              {/* Glitch Layers */}
              {showGlitch && (
                <>
                  <span className="absolute top-0 left-0 text-[#FF0080] opacity-70 animate-glitch-1">
                    404<span className="text-[#FF0080]">BYTE</span>
                  </span>
                  <span className="absolute top-0 left-0 text-[#00FFFF] opacity-70 animate-glitch-2">
                    404<span className="text-[#00FFFF]">BYTE</span>
                  </span>
                </>
              )}
            </h1>

            {/* Holographic Effect */}
            <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-r from-[#00BFFF]/20 via-transparent to-[#00FFC6]/20 blur-2xl animate-pulse"></div>
          </div>

          {/* Animated Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-[#00BFFF] rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>

          {/* Loading Text */}
          <p className="text-[#A9B2BA] text-sm md:text-lg mt-6 font-mono px-4">
            <span className="animate-pulse">INITIALIZING</span>
            <span className="animate-ping ml-2">...</span>
          </p>
        </div>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-8 h-8 md:w-16 md:h-16 border-t-2 border-l-2 border-[#00BFFF] animate-pulse"></div>
      <div className="absolute top-4 right-4 md:top-8 md:right-8 w-8 h-8 md:w-16 md:h-16 border-t-2 border-r-2 border-[#00FFC6] animate-pulse"></div>
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-8 h-8 md:w-16 md:h-16 border-b-2 border-l-2 border-[#00FFC6] animate-pulse"></div>
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-8 h-8 md:w-16 md:h-16 border-b-2 border-r-2 border-[#00BFFF] animate-pulse"></div>

      <style jsx>{`
        @keyframes matrix-rain {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        @keyframes scan-vertical {
          0% { top: -2px; }
          100% { top: 100%; }
        }
        @keyframes scan-horizontal {
          0% { left: -2px; }
          100% { left: 100%; }
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          10% { transform: translate(-2px, -2px); }
          20% { transform: translate(2px, 2px); }
          30% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
        }
        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          15% { transform: translate(2px, -2px); }
          25% { transform: translate(-2px, 2px); }
          35% { transform: translate(2px, 2px); }
          45% { transform: translate(-2px, -2px); }
        }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        .animate-glitch { animation: glitch 0.3s infinite; }
        .animate-glitch-1 { animation: glitch-1 0.4s infinite; }
        .animate-glitch-2 { animation: glitch-2 0.5s infinite; }
        .animate-scan-vertical { animation: scan-vertical 2s linear infinite; }
        .animate-scan-horizontal { animation: scan-horizontal 3s linear infinite; }
      `}</style>
    </div>
  )
}

export default LoadingAnimation