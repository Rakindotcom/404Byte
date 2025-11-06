import { useState } from 'react'

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    {
      id: 1,
      category: "Digital Development",
      description: "Building scalable, modern digital solutions",
      services: ["Web Development", "App Development", "SaaS", "POS Systems"],
      icon: "💻",
      color: "#00BFFF"
    },
    {
      id: 2,
      category: "Creative & Design",
      description: "Engaging, user-friendly, and visually compelling designs",
      services: ["Graphics Designing", "UI/UX Design"],
      icon: "🎨",
      color: "#00FFC6"
    },
    {
      id: 3,
      category: "Branding & Marketing",
      description: "Defining, promoting, and growing client brands",
      services: ["Brand Development", "Content Marketing", "SEO", "Digital Marketing"],
      icon: "📈",
      color: "#00BFFF"
    },
    {
      id: 4,
      category: "Media Production",
      description: "Professional media content for branding and campaigns",
      services: ["Photo & Video Shoot", "Video Editing", "Motion Graphics / Animation"],
      icon: "🎬",
      color: "#00FFC6"
    }
  ]

  return (
    <section className="py-12 px-6 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-[#A9B2BA] max-w-2xl mx-auto">
            Comprehensive digital solutions to transform your ideas into reality
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative p-6 rounded-xl border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                hoveredCard === service.id
                  ? 'border-[#00BFFF] shadow-lg shadow-[#00BFFF]/25 bg-[#1a1f2e]'
                  : 'border-[#2d3748] hover:border-[#00FFC6] bg-[#161b22]'
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                service.id % 2 === 0 ? 'bg-[#00FFC6]' : 'bg-[#00BFFF]'
              }`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk'] group-hover:text-[#00BFFF] transition-colors duration-300">
                  {service.category}
                </h3>

                {/* Description */}
                <p className="text-[#A9B2BA] text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Services List */}
                <ul className="space-y-2">
                  {service.services.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-[#A9B2BA] flex items-center gap-2 group-hover:text-[#00FFC6] transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-[#00BFFF] rounded-full group-hover:bg-[#00FFC6] transition-colors duration-300"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-[#00BFFF] transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <button className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] text-[#0D1117] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00BFFF]/25 transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection