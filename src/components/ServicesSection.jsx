import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const navigate = useNavigate()

  const services = [
    {
      id: 1,
      category: "Digital Development",
      description: "Building scalable, modern digital solutions that drive business growth",
      services: ["Web Development", "App Development", "SaaS Solutions"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      ),
      color: "#00BFFF"
    },
    {
      id: 2,
      category: "Creative & Design",
      description: "Engaging, user-friendly, and visually compelling designs that captivate",
      services: ["UI/UX Design", "Brand Identity", "Graphics Design"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
        </svg>
      ),
      color: "#00FFC6"
    },
    {
      id: 3,
      category: "Branding & Marketing",
      description: "Strategic brand development and digital marketing that converts",
      services: ["Brand Strategy", "Digital Marketing", "SEO Optimization", "Content Creation"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
      ),
      color: "#00BFFF"
    },
    {
      id: 4,
      category: "Media Production",
      description: "Professional media content that tells your story and engages audiences",
      services: ["Video Production", "Motion Graphics", "Photography", "Animation"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
        </svg>
      ),
      color: "#00FFC6"
    }
  ]

  const handleServiceClick = (serviceId) => {
    navigate('/services')
  }

  const handleStartProject = () => {
    navigate('/contact')
  }

  return (
    <section className="py-24 px-6 bg-[#0D1117] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00BFFF]/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#00FFC6]/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 font-['Space_Grotesk'] tracking-tight">
            Our <span className="bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-[#A9B2BA] max-w-3xl mx-auto leading-relaxed">
            End-to-end digital solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                hoveredCard === service.id
                  ? 'border-[#00BFFF] shadow-2xl shadow-[#00BFFF]/25 bg-[#1a1f2e]'
                  : 'border-[#2d3748] hover:border-[#00FFC6] bg-[#161b22]'
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                service.id % 2 === 0 ? 'bg-[#00FFC6]' : 'bg-[#00BFFF]'
              }`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`mb-6 p-4 rounded-xl inline-flex transition-all duration-300 ${
                  hoveredCard === service.id 
                    ? 'bg-gradient-to-br from-[#00BFFF] to-[#00FFC6] text-[#0D1117] scale-110' 
                    : 'bg-[#0D1117] text-[#00BFFF] group-hover:text-[#00FFC6]'
                }`}>
                  {service.icon}
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-bold text-white mb-4 font-['Space_Grotesk'] group-hover:text-[#00BFFF] transition-colors duration-300">
                  {service.category}
                </h3>

                {/* Description */}
                <p className="text-[#A9B2BA] text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Services List */}
                <ul className="space-y-3 mb-6">
                  {service.services.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-[#A9B2BA] flex items-center gap-3 group-hover:text-[#00FFC6] transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-[#00BFFF] rounded-full group-hover:bg-[#00FFC6] transition-colors duration-300 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="text-sm font-semibold text-[#00BFFF] hover:text-[#00FFC6] flex items-center gap-2 transition-colors duration-300">
                    Learn More
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#161b22] to-[#1a1f2e] rounded-3xl p-12 border border-[#2d3748]">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-[#A9B2BA] mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleStartProject}
              className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] text-[#0D1117] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#00BFFF]/25 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => navigate('/portfolio')}
              className="px-8 py-4 border-2 border-[#00FFC6] text-[#00FFC6] font-bold rounded-xl hover:bg-[#00FFC6] hover:text-[#0D1117] transition-all duration-300 transform hover:scale-105"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection