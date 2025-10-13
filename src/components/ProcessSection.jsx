import { useState } from 'react'

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: '01',
      title: 'Discovery & Research',
      subtitle: 'Understanding Your Vision',
      description: 'We dive deep into your business goals, target audience, and market landscape to create a comprehensive project roadmap.',
      details: [
        'Stakeholder interviews and requirement gathering',
        'Market research and competitor analysis',
        'Technical feasibility assessment',
        'Project scope and timeline definition',
        'Risk assessment and mitigation planning'
      ],
      duration: '1-2 weeks',
      deliverables: ['Project Brief', 'Technical Specification', 'Project Timeline'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      )
    },
    {
      number: '02',
      title: 'Design & Planning',
      subtitle: 'Crafting the Blueprint',
      description: 'Our design team creates intuitive user experiences and stunning visual designs that align with your brand identity.',
      details: [
        'User experience (UX) research and wireframing',
        'Visual design and brand integration',
        'Interactive prototypes and mockups',
        'Design system and component library',
        'Accessibility and responsive design planning'
      ],
      duration: '2-3 weeks',
      deliverables: ['Wireframes', 'Visual Designs', 'Interactive Prototype'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
        </svg>
      )
    },
    {
      number: '03',
      title: 'Development & Build',
      subtitle: 'Bringing Ideas to Life',
      description: 'Our expert developers transform designs into robust, scalable, and high-performance digital solutions using cutting-edge technologies.',
      details: [
        'Frontend development with modern frameworks',
        'Backend API development and database design',
        'Third-party integrations and custom features',
        'Performance optimization and security implementation',
        'Continuous integration and automated testing'
      ],
      duration: '4-8 weeks',
      deliverables: ['Functional Application', 'API Documentation', 'Test Reports'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      )
    },
    {
      number: '04',
      title: 'Testing & Quality Assurance',
      subtitle: 'Ensuring Excellence',
      description: 'Rigorous testing across all devices and platforms to ensure your solution works flawlessly for every user.',
      details: [
        'Cross-browser and device compatibility testing',
        'Performance and load testing',
        'Security vulnerability assessment',
        'User acceptance testing (UAT)',
        'Bug fixes and optimization'
      ],
      duration: '1-2 weeks',
      deliverables: ['QA Report', 'Performance Metrics', 'Security Audit'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      number: '05',
      title: 'Launch & Deployment',
      subtitle: 'Going Live',
      description: 'Seamless deployment to production with monitoring, analytics, and performance tracking to ensure optimal performance.',
      details: [
        'Production environment setup and configuration',
        'Domain setup and SSL certificate installation',
        'Analytics and monitoring implementation',
        'SEO optimization and search engine submission',
        'Launch strategy and go-live support'
      ],
      duration: '3-5 days',
      deliverables: ['Live Application', 'Analytics Setup', 'Launch Report'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      subtitle: 'Ongoing Partnership',
      description: 'Continuous support, updates, and enhancements to keep your solution running smoothly and evolving with your business.',
      details: [
        'Regular security updates and patches',
        'Performance monitoring and optimization',
        'Feature enhancements and new functionality',
        'Technical support and troubleshooting',
        'Analytics reporting and insights'
      ],
      duration: 'Ongoing',
      deliverables: ['Monthly Reports', 'Updates & Patches', '24/7 Support'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      )
    }
  ]

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-[#161b22] to-[#0D1117] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00BFFF]/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#00FFC6]/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 font-['Space_Grotesk'] leading-none">
            Our <span className="bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#A9B2BA] max-w-3xl mx-auto leading-relaxed">
            A proven methodology that ensures successful project delivery from concept to launch and beyond
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Steps Navigation */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`group p-6 rounded-xl border cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  activeStep === index
                    ? 'bg-[#0D1117] border-[#00BFFF] shadow-lg shadow-[#00BFFF]/25'
                    : 'bg-[#0D1117] border-[#2d3748] hover:border-[#00FFC6]'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Step Number */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] text-[#0D1117]'
                      : 'bg-[#2d3748] text-[#A9B2BA] group-hover:bg-[#00FFC6] group-hover:text-[#0D1117]'
                  } transition-all duration-300`}>
                    {step.number}
                  </div>

                  {/* Step Info */}
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-1 ${
                      activeStep === index ? 'text-[#00BFFF]' : 'text-white group-hover:text-[#00FFC6]'
                    } transition-colors duration-300`}>
                      {step.title}
                    </h3>
                    <p className="text-[#A9B2BA] text-sm">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className={`${
                    activeStep === index ? 'text-[#00BFFF]' : 'text-[#A9B2BA] group-hover:text-[#00FFC6]'
                  } transition-colors duration-300`}>
                    {step.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="bg-[#0D1117] rounded-2xl p-8 border border-[#2d3748] sticky top-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] rounded-full flex items-center justify-center text-[#0D1117] font-bold text-xl">
                {steps[activeStep].number}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {steps[activeStep].title}
                </h3>
                <p className="text-[#00FFC6] font-semibold">
                  {steps[activeStep].subtitle}
                </p>
              </div>
            </div>

            <p className="text-[#A9B2BA] mb-6 leading-relaxed">
              {steps[activeStep].description}
            </p>

            {/* Details List */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">What we do:</h4>
              <ul className="space-y-2">
                {steps[activeStep].details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#A9B2BA] text-sm">
                    <div className="w-1.5 h-1.5 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Duration and Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-[#2d3748]">
              <div>
                <h4 className="text-[#00BFFF] font-semibold mb-2">Duration</h4>
                <p className="text-[#A9B2BA] text-sm">{steps[activeStep].duration}</p>
              </div>
              <div>
                <h4 className="text-[#00FFC6] font-semibold mb-2">Deliverables</h4>
                <div className="flex flex-wrap gap-1">
                  {steps[activeStep].deliverables.map((deliverable, index) => (
                    <span key={index} className="text-xs bg-[#2d3748] text-[#A9B2BA] px-2 py-1 rounded">
                      {deliverable}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection