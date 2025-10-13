import { useState, useEffect } from 'react'

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    experience: 0
  })

  const finalStats = {
    projects: 150,
    clients: 85,
    satisfaction: 98,
    experience: 5
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          projects: Math.floor(finalStats.projects * progress),
          clients: Math.floor(finalStats.clients * progress),
          satisfaction: Math.floor(finalStats.satisfaction * progress),
          experience: Math.floor(finalStats.experience * progress)
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounters(finalStats)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const stats = [
    {
      number: counters.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across various industries',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      )
    },
    {
      number: counters.clients,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied clients who trust us with their digital transformation',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      )
    },
    {
      number: counters.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Average satisfaction rate based on client feedback and reviews',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
        </svg>
      )
    },
    {
      number: counters.experience,
      suffix: '+',
      label: 'Years Experience',
      description: 'Years of expertise in digital solutions and technology innovation',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="stats-section" className="py-32 px-6 bg-gradient-to-br from-[#161b22] to-[#0D1117] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00BFFF]/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#00FFC6]/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 font-['Space_Grotesk'] leading-none">
            Our <span className="bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#A9B2BA] max-w-3xl mx-auto leading-relaxed">
            Numbers that speak to our commitment to excellence and client success
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-[#0D1117] rounded-2xl border border-[#2d3748] hover:border-[#00BFFF] transition-all duration-500 transform hover:scale-105"
            >
              {/* Icon */}
              <div className="text-[#00BFFF] group-hover:text-[#00FFC6] mb-6 flex justify-center transition-colors duration-300">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-black text-white group-hover:text-[#00BFFF] transition-colors duration-300">
                  {stat.number}
                </span>
                <span className="text-3xl md:text-4xl font-bold text-[#00FFC6]">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00BFFF] transition-colors duration-300">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-[#A9B2BA] text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection