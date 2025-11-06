import { useState } from 'react'

const TechnologiesSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const technologies = {
    frontend: {
      title: 'Frontend Development',
      description: 'Modern, responsive, and interactive user interfaces',
      techs: [
        { name: 'React', description: 'Component-based UI library' },
        { name: 'Next.js', description: 'Full-stack React framework' },
        { name: 'Vue.js', description: 'Progressive JavaScript framework' },
        { name: 'TypeScript', description: 'Typed JavaScript superset' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
        { name: 'Three.js', description: '3D graphics and animations' }
      ]
    },
    backend: {
      title: 'Backend Development',
      description: 'Scalable server-side solutions and APIs',
      techs: [
        { name: 'Node.js', description: 'JavaScript runtime environment' },
        { name: 'Python', description: 'Versatile programming language' },
        { name: 'PostgreSQL', description: 'Advanced relational database' },
        { name: 'MongoDB', description: 'NoSQL document database' },
        { name: 'GraphQL', description: 'Query language for APIs' },
        { name: 'Docker', description: 'Containerization platform' }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      description: 'Cross-platform and native mobile applications',
      techs: [
        { name: 'React Native', description: 'Cross-platform mobile framework' },
        { name: 'Flutter', description: 'Google\'s UI toolkit' },
        { name: 'Swift', description: 'iOS native development' },
        { name: 'Kotlin', description: 'Android native development' },
        { name: 'Expo', description: 'React Native development platform' },
        { name: 'Firebase', description: 'Backend-as-a-Service platform' }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and deployment',
      techs: [
        { name: 'AWS', description: 'Amazon Web Services' },
        { name: 'Vercel', description: 'Frontend deployment platform' },
        { name: 'Netlify', description: 'JAMstack deployment' },
        { name: 'GitHub Actions', description: 'CI/CD automation' },
        { name: 'Kubernetes', description: 'Container orchestration' },
        { name: 'Terraform', description: 'Infrastructure as code' }
      ]
    }
  }

  const categories = Object.keys(technologies)

  return (
    <section className="py-10 px-6 bg-[#0D1117] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BFFF] opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FFC6] opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 font-['Space_Grotesk'] leading-none px-4">
            Our <span className="bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#A9B2BA] max-w-3xl mx-auto leading-relaxed px-4">
            Cutting-edge technologies and tools we use to build exceptional digital solutions
          </p>
        </div>

        {/* Category Navigation */}
        <div className="grid grid-cols-4 gap-0.5 sm:gap-2 md:gap-3 mb-6 md:mb-8 px-2 sm:px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-0.5 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-3 md:py-4 rounded sm:rounded-lg md:rounded-xl font-bold text-[10px] sm:text-sm md:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] text-[#0D1117]'
                  : 'bg-[#161b22] text-[#A9B2BA] hover:bg-[#2d3748] hover:text-[#00FFC6] border border-[#2d3748]'
              }`}
            >
              <span className="hidden sm:inline">{technologies[category].title}</span>
              <span className="sm:hidden text-center leading-none">
                {category === 'frontend' ? 'FE' : 
                 category === 'backend' ? 'BE' : 
                 category === 'mobile' ? 'MOB' : 
                 'CLD'}
              </span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="bg-[#161b22] rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 border border-[#2d3748]">
          <div className="text-center mb-4 md:mb-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3 font-['Space_Grotesk'] px-4">
              {technologies[activeCategory].title}
            </h3>
            <p className="text-base md:text-lg text-[#A9B2BA] max-w-2xl mx-auto px-4">
              {technologies[activeCategory].description}
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {technologies[activeCategory].techs.map((tech, index) => (
              <div
                key={index}
                className="group p-3 md:p-4 bg-[#0D1117] rounded-lg md:rounded-xl border border-[#2d3748] hover:border-[#00BFFF] transition-all duration-300 transform hover:scale-105"
              >
                {/* Tech Name */}
                <div className="mb-2 md:mb-3">
                  <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-[#00BFFF] transition-colors duration-300">
                    {tech.name}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[#A9B2BA] text-xs md:text-sm leading-relaxed">
                  {tech.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 mt-6 md:mt-8">
          <div className="text-center p-3 md:p-4 bg-[#161b22] rounded-lg md:rounded-xl border border-[#2d3748]">
            <div className="text-2xl md:text-3xl font-bold text-[#00BFFF] mb-1 md:mb-2">50+</div>
            <div className="text-[#A9B2BA] text-sm md:text-base">Technologies Mastered</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-[#161b22] rounded-lg md:rounded-xl border border-[#2d3748]">
            <div className="text-2xl md:text-3xl font-bold text-[#00FFC6] mb-1 md:mb-2">24/7</div>
            <div className="text-[#A9B2BA] text-sm md:text-base">Learning & Adapting</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-[#161b22] rounded-lg md:rounded-xl border border-[#2d3748]">
            <div className="text-2xl md:text-3xl font-bold text-[#00BFFF] mb-1 md:mb-2">100%</div>
            <div className="text-[#A9B2BA] text-sm md:text-base">Modern Standards</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection