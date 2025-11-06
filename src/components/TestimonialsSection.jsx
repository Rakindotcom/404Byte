import { useState, useEffect } from 'react'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO & Founder",
      avatar: "SJ",
      rating: 5,
      testimonial: "404Byte transformed our startup's digital presence completely. Their team understood our vision and delivered beyond our expectations. The attention to detail and innovative solutions they provided helped us secure our Series A funding.",
      project: "Complete Digital Platform",
      results: ["300% increase in user engagement", "50% faster load times", "Series A funding secured"],
      industry: "FinTech"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Digital Dynamics",
      role: "CTO",
      avatar: "MC",
      rating: 5,
      testimonial: "Working with 404Byte was a game-changer for our enterprise solution. They delivered a complex SaaS platform that handles millions of transactions daily. Their technical expertise and project management skills are exceptional.",
      project: "Enterprise SaaS Platform",
      results: ["99.9% uptime achieved", "10M+ transactions processed", "40% cost reduction"],
      industry: "Enterprise Software"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Creative Solutions",
      role: "Marketing Director",
      avatar: "ER",
      rating: 5,
      testimonial: "The branding and digital marketing strategy 404Byte created for us resulted in unprecedented growth. Their creative approach combined with data-driven insights delivered results that exceeded all our projections.",
      project: "Brand Identity & Marketing",
      results: ["500% ROI on marketing spend", "200% increase in leads", "Brand recognition up 400%"],
      industry: "Creative Agency"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "InnovateCorp",
      role: "Founder",
      avatar: "DT",
      rating: 5,
      testimonial: "404Byte's team is incredibly professional and skilled. They delivered our mobile app ahead of schedule and under budget. The app has been featured in the App Store and has over 100k downloads in the first month.",
      project: "Mobile App Development",
      results: ["100k+ downloads in month 1", "4.8 star App Store rating", "Featured by Apple"],
      industry: "Mobile Technology"
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "MediaFlow",
      role: "Creative Director",
      avatar: "LW",
      rating: 5,
      testimonial: "The video production and motion graphics work exceeded our expectations. 404Byte brought our brand story to life in ways we never imagined possible. The final product has been viewed over 2 million times.",
      project: "Video Production & Animation",
      results: ["2M+ video views", "85% engagement rate", "Award-winning campaign"],
      industry: "Media & Entertainment"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-10 px-6 bg-[#0D1117] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BFFF] opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FFC6] opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 font-['Space_Grotesk'] leading-none">
            Client <span className="bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#A9B2BA] max-w-3xl mx-auto leading-relaxed">
            Real results from real clients who trusted us with their digital transformation
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-gradient-to-br from-[#161b22] to-[#1a1f2e] rounded-3xl p-4 md:p-6 border border-[#2d3748] mb-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00BFFF]/10 to-[#00FFC6]/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Testimonial Content */}
              <div>
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[#00FFC6] mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-[#A9B2BA] mb-6 leading-relaxed italic">
                  "{testimonials[currentTestimonial].testimonial}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#00FFC6] rounded-full flex items-center justify-center text-[#0D1117] font-bold text-lg">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-[#00BFFF]">{testimonials[currentTestimonial].role}</p>
                    <p className="text-[#A9B2BA]">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#0D1117] border border-[#2d3748] rounded-full text-[#00FFC6] text-sm">
                    {testimonials[currentTestimonial].project}
                  </span>
                  <span className="px-3 py-1 bg-[#0D1117] border border-[#2d3748] rounded-full text-[#A9B2BA] text-sm">
                    {testimonials[currentTestimonial].industry}
                  </span>
                </div>
              </div>

              {/* Results */}
              <div className="bg-[#0D1117] rounded-2xl p-6 border border-[#2d3748]">
                <h4 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
                  Project Results
                </h4>
                <div className="space-y-4">
                  {testimonials[currentTestimonial].results.map((result, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#00BFFF] rounded-full flex-shrink-0"></div>
                      <span className="text-[#A9B2BA]">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-6 gap-4">
              <button 
                onClick={prevTestimonial}
                className="p-3 text-[#A9B2BA] hover:text-[#00BFFF] transition-colors duration-300 hover:bg-[#2d3748] rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial ? 'bg-[#00BFFF]' : 'bg-[#2d3748] hover:bg-[#00FFC6]'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-3 text-[#A9B2BA] hover:text-[#00BFFF] transition-colors duration-300 hover:bg-[#2d3748] rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-[#161b22] rounded-xl border border-[#2d3748]">
            <div className="text-3xl font-bold text-[#00BFFF] mb-2">98%</div>
            <div className="text-[#A9B2BA] text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-[#161b22] rounded-xl border border-[#2d3748]">
            <div className="text-3xl font-bold text-[#00FFC6] mb-2">150+</div>
            <div className="text-[#A9B2BA] text-sm">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-[#161b22] rounded-xl border border-[#2d3748]">
            <div className="text-3xl font-bold text-[#00BFFF] mb-2">85+</div>
            <div className="text-[#A9B2BA] text-sm">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-[#161b22] rounded-xl border border-[#2d3748]">
            <div className="text-3xl font-bold text-[#00FFC6] mb-2">24/7</div>
            <div className="text-[#A9B2BA] text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection