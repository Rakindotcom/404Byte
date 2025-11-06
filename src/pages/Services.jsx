import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const [activeService, setActiveService] = useState(0)
  const navigate = useNavigate()

  const services = [
    {
      id: 1,
      category: "Digital Development",
      description: "Building scalable, modern digital solutions that drive business growth",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      ),
      services: [
        {
          name: "Web Development",
          description: "Responsive, scalable, and SEO-friendly websites using modern technologies like React, Next.js, and Node.js",
          features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Modern Frameworks"]
        },
        {
          name: "App Development",
          description: "Cross-platform mobile applications for iOS and Android using React Native and Flutter",
          features: ["Cross-Platform", "Native Performance", "App Store Deployment", "Maintenance & Updates"]
        },
        {
          name: "SaaS Solutions",
          description: "Cloud-based platforms and software solutions tailored to your business needs",
          features: ["Scalable Architecture", "Cloud Deployment", "API Integration", "User Management"]
        },
        {
          name: "POS Systems",
          description: "Complete point-of-sale solutions for retail and hospitality businesses with inventory management",
          features: ["Payment Processing", "Inventory Management", "Sales Analytics", "Multi-location Support"]
        }
      ]
    },
    {
      id: 2,
      category: "Creative & Design",
      description: "Engaging, user-friendly, and visually compelling designs that captivate audiences",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
        </svg>
      ),
      services: [
        {
          name: "Graphics Design",
          description: "Brand visuals, promotional materials, and marketing graphics that tell your story",
          features: ["Brand Identity", "Marketing Materials", "Social Media Graphics", "Print Design"]
        },
        {
          name: "UI/UX Design",
          description: "User-centered interfaces and experiences for web and mobile platforms",
          features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
        }
      ]
    },
    {
      id: 3,
      category: "Branding & Marketing",
      description: "Defining, promoting, and growing client brands in the digital landscape",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
      ),
      services: [
        {
          name: "Brand Development",
          description: "Complete brand identity including logos, visual guidelines, and brand storytelling",
          features: ["Logo Design", "Brand Guidelines", "Brand Strategy", "Visual Identity"]
        },
        {
          name: "Content Marketing",
          description: "Strategic content creation for websites, blogs, and social platforms",
          features: ["Content Strategy", "Blog Writing", "Social Media Content", "Email Marketing"]
        },
        {
          name: "SEO",
          description: "Optimizing digital presence for search engine visibility and organic growth",
          features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics & Reporting"]
        },
        {
          name: "Digital Marketing",
          description: "Paid campaigns, social media strategy, and performance analytics",
          features: ["Google Ads", "Social Media Ads", "Campaign Management", "Performance Analytics"]
        }
      ]
    },
    {
      id: 4,
      category: "Media Production",
      description: "Professional media content for branding and marketing campaigns",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
        </svg>
      ),
      services: [
        {
          name: "Photo & Video Shoot",
          description: "Professional photography and videography for branding and promotional campaigns",
          features: ["Studio Photography", "Product Photography", "Corporate Videos", "Event Coverage"]
        },
        {
          name: "Video Editing",
          description: "Professional editing and post-production for promotional, corporate, and social content",
          features: ["Video Editing", "Color Grading", "Audio Enhancement", "Motion Graphics"]
        },
        {
          name: "Motion Graphics",
          description: "Engaging visual animations to enhance brand communication and storytelling",
          features: ["2D Animation", "Logo Animation", "Explainer Videos", "Social Media Animations"]
        }
      ]
    }
  ]

  const technologies = [
    "ReactJS", "Next.js", "Node.js", "WordPress", "React Native", "Flutter", 
    "Firebase", "AWS", "Figma", "Adobe Creative Suite", "Google Ads"
  ]

  return (
    <div className="pt-16 min-h-screen bg-[#0D1117]">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-[#A9B2BA] mb-8 leading-relaxed">
            Comprehensive digital solutions to transform your ideas into reality
          </p>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeService === index
                    ? 'bg-[#00BFFF] text-[#0D1117]'
                    : 'bg-[#161b22] text-[#A9B2BA] hover:bg-[#2d3748] hover:text-[#00FFC6]'
                }`}
              >
                <span className="mr-2">{service.icon}</span>
                {service.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Details */}
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#161b22] rounded-xl p-8 border border-[#2d3748]">
            <div className="text-center mb-12">
              <div className="text-[#00BFFF] mb-4 flex justify-center">{services[activeService].icon}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
                {services[activeService].category}
              </h2>
              <p className="text-lg text-[#A9B2BA] max-w-2xl mx-auto">
                {services[activeService].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services[activeService].services.map((service, index) => (
                <div key={index} className="group p-6 bg-[#0D1117] rounded-xl border border-[#2d3748] hover:border-[#00BFFF] transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00BFFF] transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-[#A9B2BA] mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-[#A9B2BA] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#00BFFF] rounded-full group-hover:bg-[#00FFC6] transition-colors duration-300"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-6 bg-[#161b22]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Space_Grotesk']">
              Technologies We Use
            </h2>
            <p className="text-lg text-[#A9B2BA] max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver exceptional results
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#0D1117] text-[#A9B2BA] rounded-lg border border-[#2d3748] hover:border-[#00BFFF] hover:text-[#00BFFF] transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-[#A9B2BA] mb-8">
            Let's discuss how we can help bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] text-[#0D1117] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#00BFFF]/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
            <button 
              onClick={() => navigate('/portfolio')}
              className="px-8 py-4 border-2 border-[#00FFC6] text-[#00FFC6] font-bold rounded-xl hover:bg-[#00FFC6] hover:text-[#0D1117] transition-all duration-300 transform hover:scale-105"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services