import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      title: "Innovation",
      description: "We embrace creativity and technology to deliver modern, effective solutions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      )
    },
    {
      title: "Integrity",
      description: "We maintain transparency, professionalism, and ethical standards in all our engagements.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      )
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in design, development, and service delivery.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
        </svg>
      )
    },
    {
      title: "Client-Centricity",
      description: "We listen, understand, and adapt to our clients' unique goals and challenges.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      )
    },
    {
      title: "Problem-Solving",
      description: "We view challenges as opportunities, consistently delivering solutions that meet real needs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    }
  ]

  const approach = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding client goals, challenges, and target audience."
    },
    {
      step: "02",
      title: "Planning",
      description: "Crafting a tailored strategy that combines design, technology, and marketing."
    },
    {
      step: "03",
      title: "Execution",
      description: "Developing websites, apps, branding, or media assets with high-quality standards."
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Ensuring usability, performance, and effectiveness."
    },
    {
      step: "05",
      title: "Delivery & Support",
      description: "Launching solutions and providing ongoing maintenance or strategy updates."
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-[#0D1117]">
      {/* Hero Section */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About <span className="gradient-text">404Byte</span>
          </h1>
          <p className={`text-xl text-[#A9B2BA] mb-8 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We fix what's missing.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-8 px-6 bg-[#161b22]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Company Overview
              </h2>
              <p className="text-[#A9B2BA] mb-6 leading-relaxed">
                404Byte is a forward-thinking digital solutions agency committed to bridging the gap between ideas and execution. Our philosophy revolves around finding and solving what is missing — whether in a brand's identity, a company's digital infrastructure, or a client's marketing strategy.
              </p>
              <p className="text-[#A9B2BA] mb-6 leading-relaxed">
                By combining technology, design, and strategy, we deliver end-to-end solutions that empower businesses to grow, innovate, and thrive in a competitive landscape.
              </p>
              <p className="text-[#A9B2BA] leading-relaxed">
                Founded with a focus on modern web technologies and creative innovation, 404Byte has evolved into a comprehensive agency that provides development, design, branding, marketing, and media production under one roof.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-[#00BFFF]/20 to-[#00FFC6]/20 rounded-xl flex items-center justify-center">
                <svg className="w-24 h-24 text-[#00BFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-[#161b22] rounded-xl border border-[#2d3748] hover:border-[#00BFFF] transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
                Vision Statement
              </h3>
              <p className="text-[#A9B2BA] leading-relaxed">
                To become a leading digital innovation agency recognized for transforming challenges into solutions and empowering businesses to achieve a seamless and compelling digital presence.
              </p>
            </div>
            <div className="p-8 bg-[#161b22] rounded-xl border border-[#2d3748] hover:border-[#00FFC6] transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
                Mission Statement
              </h3>
              <ul className="text-[#A9B2BA] space-y-2">
                <li>• Deliver high-quality digital solutions combining technology, creativity, and strategy</li>
                <li>• Strengthen brand identities through thoughtful design and marketing</li>
                <li>• Enable business growth with scalable web, app, and SaaS solutions</li>
                <li>• Innovate continuously, adapting to emerging technologies and trends</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-8 px-6 bg-[#161b22]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-['Space_Grotesk']">
              Core Values
            </h2>
            <p className="text-lg text-[#A9B2BA] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group p-6 bg-[#0D1117] rounded-xl border border-[#2d3748] hover:border-[#00BFFF] transition-all duration-300 transform hover:scale-105">
                <div className="text-[#00BFFF] group-hover:text-[#00FFC6] mb-4 group-hover:scale-110 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00BFFF] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-[#A9B2BA] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-['Space_Grotesk']">
              Our Approach
            </h2>
            <p className="text-lg text-[#A9B2BA] max-w-2xl mx-auto">
              A systematic process that ensures project success
            </p>
          </div>
          <div className="space-y-6">
            {approach.map((item, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-[#161b22] rounded-xl border border-[#2d3748] hover:border-[#00FFC6] transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] rounded-full flex items-center justify-center text-[#0D1117] font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#A9B2BA] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 px-6 bg-[#161b22]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Why Choose 404Byte?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#0D1117] rounded-xl border border-[#2d3748]">
              <p className="text-[#A9B2BA]">Comprehensive services from digital development to media production</p>
            </div>
            <div className="p-4 bg-[#0D1117] rounded-xl border border-[#2d3748]">
              <p className="text-[#A9B2BA]">Innovative solutions driven by technology and creativity</p>
            </div>
            <div className="p-4 bg-[#0D1117] rounded-xl border border-[#2d3748]">
              <p className="text-[#A9B2BA]">Focused on results, growth, and client satisfaction</p>
            </div>
            <div className="p-4 bg-[#0D1117] rounded-xl border border-[#2d3748]">
              <p className="text-[#A9B2BA]">Commitment to long-term partnerships and scalable solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#161b22] to-[#1a1f2e] rounded-3xl p-8 border border-[#2d3748]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-[#A9B2BA] mb-6 max-w-2xl mx-auto">
            Let's discuss how our values and expertise can help transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] text-[#0D1117] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#00BFFF]/25 transition-all duration-300 transform hover:scale-105"
            >
              Start a Conversation
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="px-8 py-4 border-2 border-[#00FFC6] text-[#00FFC6] font-bold rounded-xl hover:bg-[#00FFC6] hover:text-[#0D1117] transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About