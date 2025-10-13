import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const navigate = useNavigate()

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Modern e-commerce solution with React and Node.js",
      image: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
        </svg>
      ),
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking application with biometric authentication",
      image: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
      ),
      technologies: ["React Native", "Firebase", "Biometric Auth"],
      link: "#"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "design",
      description: "Complete brand identity for a tech startup",
      image: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
        </svg>
      ),
      technologies: ["Figma", "Adobe Illustrator", "Brand Strategy"],
      link: "#"
    },
    {
      id: 4,
      title: "SaaS Dashboard",
      category: "web",
      description: "Analytics dashboard for business intelligence",
      image: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
      technologies: ["Next.js", "D3.js", "PostgreSQL", "AWS"],
      link: "#"
    },
    {
      id: 5,
      title: "Marketing Campaign",
      category: "marketing",
      description: "Digital marketing campaign that increased ROI by 300%",
      image: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
      ),
      technologies: ["Google Ads", "Facebook Ads", "Analytics"],
      link: "#"
    },
    {
      id: 6,
      title: "Corporate Video",
      category: "media",
      description: "Professional corporate video production and editing",
      image: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
        </svg>
      ),
      technologies: ["After Effects", "Premiere Pro", "Motion Graphics"],
      link: "#"
    },
    {
      id: 7,
      title: "Restaurant App",
      category: "mobile",
      description: "Food delivery app with real-time tracking",
      image: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
      ),
      technologies: ["Flutter", "Firebase", "Google Maps API"],
      link: "#"
    },
    {
      id: 8,
      title: "UI/UX Redesign",
      category: "design",
      description: "Complete redesign of a fintech application",
      image: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
        </svg>
      ),
      technologies: ["Figma", "User Research", "Prototyping"],
      link: "#"
    }
  ]

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'media', name: 'Media Production' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="pt-16 min-h-screen bg-[#0D1117]">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-[#A9B2BA] mb-8 leading-relaxed">
            Showcasing our latest projects and success stories
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#00BFFF] text-[#0D1117]'
                    : 'bg-[#161b22] text-[#A9B2BA] hover:bg-[#2d3748] hover:text-[#00FFC6]'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#161b22] rounded-xl border border-[#2d3748] hover:border-[#00BFFF] transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-[#00BFFF]/20 to-[#00FFC6]/20 flex items-center justify-center text-[#00BFFF] group-hover:text-[#00FFC6] group-hover:scale-110 transition-all duration-300">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00BFFF] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#A9B2BA] mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#0D1117] text-xs text-[#A9B2BA] rounded border border-[#2d3748]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button 
                    onClick={() => navigate('/contact')}
                    className="w-full py-3 bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] text-[#0D1117] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:shadow-lg hover:shadow-[#00BFFF]/25"
                  >
                    Discuss Similar Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-[#161b22]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Space_Grotesk']">
              Project Statistics
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#00BFFF] mb-2">50+</div>
              <div className="text-[#A9B2BA]">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#00FFC6] mb-2">30+</div>
              <div className="text-[#A9B2BA]">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#00BFFF] mb-2">95%</div>
              <div className="text-[#A9B2BA]">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#00FFC6] mb-2">24/7</div>
              <div className="text-[#A9B2BA]">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-[#A9B2BA] mb-8">
            Let's discuss your project and bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] text-[#0D1117] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#00BFFF]/25 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="px-8 py-4 border-2 border-[#00FFC6] text-[#00FFC6] font-bold rounded-xl hover:bg-[#00FFC6] hover:text-[#0D1117] transition-all duration-300 transform hover:scale-105"
            >
              View Services
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio