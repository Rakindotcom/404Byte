import { useState } from 'react'

const TechnologiesSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const technologies = {
    frontend: {
      title: 'Frontend Development',
      description: 'Modern, responsive, and interactive user interfaces',
      techs: [
        { name: 'React', level: 95, description: 'Component-based UI library' },
        { name: 'Next.js', level: 90, description: 'Full-stack React framework' },
        { name: 'Vue.js', level: 85, description: 'Progressive JavaScript framework' },
        { name: 'TypeScript', level: 92, description: 'Typed JavaScript superset' },
        { name: 'Tailwind CSS', level: 98, description: 'Utility-first CSS framework' },
        { name: 'Three.js', level: 80, description: '3D graphics and animations' }
      ]
    },
    backend: {
      title: 'Backend Development',
      description: 'Scalable server-side solutions and APIs',
      techs: [
        { name: 'Node.js', level: 93, description: 'JavaScript runtime environment' },
        { name: 'Python', level: 88, description: 'Versatile programming language' },
        { name: 'PostgreSQL', level: 90, description: 'Advanced relational database' },
        { name: 'MongoDB', level: 85, description: 'NoSQL document database' },
        { name: 'GraphQL', level: 82, description: 'Query language for APIs' },
        { name: 'Docker', level: 87, description: 'Containerization platform' }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      description: 'Cross-platform and native mobile applications',
      techs: [
        { name: 'React Native', level: 90, description: 'Cross-platform mobile framework' },
        { name: 'Flutter', level: 85, description: 'Google\'s UI toolkit' },
        { name: 'Swift', level: 80, description: 'iOS native development' },
        { name: 'Kotlin', level: 78, description: 'Android native development' },
        { name: 'Expo', level: 88, description: 'React Native development platform' },
        { name: 'Firebase', level: 92, description: 'Backend-as-a-Service platform' }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and deployment',
      techs: [
        { name: 'AWS', level: 88, description: 'Amazon Web Services' },
        { name: 'Vercel', level: 95, description: 'Frontend deployment platform' },
        { name: 'Netlify', level: 90, description: 'JAMstack deployment' },
        { name: 'GitHub Actions', level: 85, description: 'CI/CD automation' },
        { name: 'Kubernetes', level: 75, description: 'Container orchestration' },
        { name: 'Terraform', level: 70, description: 'Infrastructure as code' }
      ]
    }
  }

  const categories = Object.keys(technologies)

  return (
    <section className="py-32 px-6 bg-[#0D1117] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BFFF] opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FFC6] opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 font-['Space_Grotesk'] leading-none">
            Our <span className="bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#A9B2BA] max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies and tools we use to build exceptional digital solutions
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] text-[#0D1117]'
                  : 'bg-[#161b22] text-[#A9B2BA] hover:bg-[#2d3748] hover:text-[#00FFC6] border border-[#2d3748]'
              }`}
            >
              {technologies[category].title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="bg-[#161b22] rounded-3xl p-8 md:p-12 border border-[#2d3748]">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
              {technologies[activeCategory].title}
            </h3>
            <p className="text-lg text-[#A9B2BA] max-w-2xl mx-auto">
              {technologies[activeCategory].description}
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies[activeCategory].techs.map((tech, index) => (
              <div
                key={index}
                className="group p-6 bg-[#0D1117] rounded-xl border border-[#2d3748] hover:border-[#00BFFF] transition-all duration-300 transform hover:scale-105"
              >
                {/* Tech Name */}
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-[#00BFFF] transition-colors duration-300">
                    {tech.name}
                  </h4>
                  <span className="text-[#00FFC6] font-bold">
                    {tech.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-[#2d3748] rounded-full h-2 mb-4 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>

                {/* Description */}
                <p className="text-[#A9B2BA] text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-[#161b22] rounded-xl border border-[#2d3748]">
            <div className="text-3xl font-bold text-[#00BFFF] mb-2">50+</div>
            <div className="text-[#A9B2BA]">Technologies Mastered</div>
          </div>
          <div className="text-center p-6 bg-[#161b22] rounded-xl border border-[#2d3748]">
            <div className="text-3xl font-bold text-[#00FFC6] mb-2">24/7</div>
            <div className="text-[#A9B2BA]">Learning & Adapting</div>
          </div>
          <div className="text-center p-6 bg-[#161b22] rounded-xl border border-[#2d3748]">
            <div className="text-3xl font-bold text-[#00BFFF] mb-2">100%</div>
            <div className="text-[#A9B2BA]">Modern Standards</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection