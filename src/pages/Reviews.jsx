import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Reviews = () => {
  const navigate = useNavigate()
  const [currentReview, setCurrentReview] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [animatingStars, setAnimatingStars] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO & Founder",
      avatar: "SJ",
      rating: 5,
      review: "404Byte transformed our startup's digital presence completely. Their team understood our vision and delivered beyond our expectations. The attention to detail and innovative solutions they provided helped us secure our Series A funding.",
      project: "Complete Digital Platform",
      results: ["300% increase in user engagement", "50% faster load times", "Series A funding secured"],
      industry: "FinTech",
      date: "March 2024",
      projectValue: "$150K"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Digital Dynamics",
      role: "CTO",
      avatar: "MC",
      rating: 5,
      review: "Working with 404Byte was a game-changer for our enterprise solution. They delivered a complex SaaS platform that handles millions of transactions daily. Their technical expertise and project management skills are exceptional.",
      project: "Enterprise SaaS Platform",
      results: ["99.9% uptime achieved", "10M+ transactions processed", "40% cost reduction"],
      industry: "Enterprise Software",
      date: "February 2024",
      projectValue: "$300K"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Creative Solutions",
      role: "Marketing Director",
      avatar: "ER",
      rating: 5,
      review: "The branding and digital marketing strategy 404Byte created for us resulted in unprecedented growth. Their creative approach combined with data-driven insights delivered results that exceeded all our projections.",
      project: "Brand Identity & Marketing",
      results: ["500% ROI on marketing spend", "200% increase in leads", "Brand recognition up 400%"],
      industry: "Creative Agency",
      date: "January 2024",
      projectValue: "$75K"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "InnovateCorp",
      role: "Founder",
      avatar: "DT",
      rating: 5,
      review: "404Byte's team is incredibly professional and skilled. They delivered our mobile app ahead of schedule and under budget. The app has been featured in the App Store and has over 100k downloads in the first month.",
      project: "Mobile App Development",
      results: ["100k+ downloads in month 1", "4.8 star App Store rating", "Featured by Apple"],
      industry: "Mobile Technology",
      date: "December 2023",
      projectValue: "$120K"
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "MediaFlow",
      role: "Creative Director",
      avatar: "LW",
      rating: 5,
      review: "The video production and motion graphics work exceeded our expectations. 404Byte brought our brand story to life in ways we never imagined possible. The final product has been viewed over 2 million times.",
      project: "Video Production & Animation",
      results: ["2M+ video views", "85% engagement rate", "Award-winning campaign"],
      industry: "Media & Entertainment",
      date: "November 2023",
      projectValue: "$90K"
    },
    {
      id: 6,
      name: "Alex Kumar",
      company: "EcoTech Solutions",
      role: "Product Manager",
      avatar: "AK",
      rating: 5,
      review: "404Byte helped us build a sustainable tech platform that's making a real impact. Their commitment to both technical excellence and environmental consciousness aligned perfectly with our mission.",
      project: "Sustainable Tech Platform",
      results: ["Carbon footprint reduced 60%", "1M+ users onboarded", "B-Corp certification achieved"],
      industry: "GreenTech",
      date: "October 2023",
      projectValue: "$200K"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
      setAnimatingStars(true)
      setTimeout(() => setAnimatingStars(false), 500)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
    setAnimatingStars(true)
    setTimeout(() => setAnimatingStars(false), 500)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
    setAnimatingStars(true)
    setTimeout(() => setAnimatingStars(false), 500)
  }

  return (
    <div className="pt-16 min-h-screen bg-[#0D1117] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BFFF] opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FFC6] opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-[#00BFFF]/5 to-[#00FFC6]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating star particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <svg className="w-4 h-4 text-[#00FFC6] opacity-30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="py-8 px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 font-['Space_Grotesk'] leading-none">
            Client <span className="bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] bg-clip-text text-transparent">Reviews</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#A9B2BA] mb-8 leading-relaxed">
            Real stories from real clients who trusted us with their digital transformation
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-8 h-8 text-[#00FFC6] ${animatingStars ? 'animate-bounce' : ''}`} fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: `${i * 0.1}s` }}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <div className="text-2xl font-bold text-white">5.0</div>
            <div className="text-[#A9B2BA]">({reviews.length} reviews)</div>
          </div>
        </div>
      </section>

      {/* Featured Review Carousel */}
      <section className="px-6 mb-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#161b22] to-[#1a1f2e] rounded-3xl p-8 md:p-12 border border-[#2d3748] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00BFFF]/10 to-[#00FFC6]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Client Info */}
                <div className="text-center lg:text-left">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#00BFFF] to-[#00FFC6] rounded-full flex items-center justify-center text-[#0D1117] font-bold text-2xl mx-auto lg:mx-0 mb-6">
                    {reviews[currentReview].avatar}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{reviews[currentReview].name}</h3>
                  <p className="text-[#00BFFF] font-semibold mb-1">{reviews[currentReview].role}</p>
                  <p className="text-[#A9B2BA] mb-4">{reviews[currentReview].company}</p>
                  
                  {/* Project Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between lg:justify-start lg:gap-4">
                      <span className="text-[#A9B2BA]">Industry:</span>
                      <span className="text-[#00FFC6]">{reviews[currentReview].industry}</span>
                    </div>
                    <div className="flex justify-between lg:justify-start lg:gap-4">
                      <span className="text-[#A9B2BA]">Date:</span>
                      <span className="text-[#00FFC6]">{reviews[currentReview].date}</span>
                    </div>
                    <div className="flex justify-between lg:justify-start lg:gap-4">
                      <span className="text-[#A9B2BA]">Value:</span>
                      <span className="text-[#00FFC6]">{reviews[currentReview].projectValue}</span>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <div className="lg:col-span-2">
                  {/* Stars */}
                  <div className="flex justify-center lg:justify-start mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-6 h-6 text-[#00FFC6] mr-1 ${animatingStars ? 'animate-pulse' : ''}`} fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: `${i * 0.1}s` }}>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-[#A9B2BA] mb-8 leading-relaxed italic text-center lg:text-left">
                    "{reviews[currentReview].review}"
                  </blockquote>

                  {/* Project Info */}
                  <div className="bg-[#0D1117] rounded-2xl p-6 border border-[#2d3748]">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-[#2d3748] border border-[#00BFFF] rounded-full text-[#00BFFF] text-sm font-semibold">
                        {reviews[currentReview].project}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-4">Project Results:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {reviews[currentReview].results.map((result, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-[#161b22] rounded-lg">
                          <div className="w-2 h-2 bg-[#00FFC6] rounded-full flex-shrink-0"></div>
                          <span className="text-[#A9B2BA] text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center mt-12 gap-6">
                <button 
                  onClick={prevReview}
                  className="p-4 text-[#A9B2BA] hover:text-[#00BFFF] transition-colors duration-300 hover:bg-[#2d3748] rounded-full transform hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>
                
                <div className="flex gap-3">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                        index === currentReview ? 'bg-[#00BFFF] scale-125' : 'bg-[#2d3748] hover:bg-[#00FFC6]'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextReview}
                  className="p-4 text-[#A9B2BA] hover:text-[#00BFFF] transition-colors duration-300 hover:bg-[#2d3748] rounded-full transform hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="px-6 mb-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center font-['Space_Grotesk']">
            All Client <span className="bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={review.id} className="group bg-[#161b22] rounded-2xl p-6 border border-[#2d3748] hover:border-[#00BFFF] transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#00FFC6] group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: `${i * 0.1}s` }}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Review */}
                <p className="text-[#A9B2BA] mb-6 leading-relaxed text-sm line-clamp-4">
                  "{review.review}"
                </p>

                {/* Client */}
                <div className="border-t border-[#2d3748] pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#00BFFF] to-[#00FFC6] rounded-full flex items-center justify-center text-[#0D1117] font-bold text-sm">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{review.name}</h4>
                      <p className="text-[#00BFFF] text-xs">{review.role}</p>
                    </div>
                  </div>
                  <p className="text-[#A9B2BA] text-xs mb-2">{review.company}</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#00FFC6]">{review.industry}</span>
                    <span className="text-[#A9B2BA]">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="px-6 mb-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-[#161b22] rounded-xl border border-[#2d3748] hover:border-[#00BFFF] transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold text-[#00BFFF] mb-2">98%</div>
              <div className="text-[#A9B2BA] text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-[#161b22] rounded-xl border border-[#2d3748] hover:border-[#00FFC6] transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold text-[#00FFC6] mb-2">150+</div>
              <div className="text-[#A9B2BA] text-sm">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-[#161b22] rounded-xl border border-[#2d3748] hover:border-[#00BFFF] transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold text-[#00BFFF] mb-2">85+</div>
              <div className="text-[#A9B2BA] text-sm">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-[#161b22] rounded-xl border border-[#2d3748] hover:border-[#00FFC6] transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold text-[#00FFC6] mb-2">5.0</div>
              <div className="text-[#A9B2BA] text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#161b22] to-[#1a1f2e] rounded-3xl p-12 border border-[#2d3748]">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Ready to Join Our <span className="bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] bg-clip-text text-transparent">Success Stories?</span>
          </h2>
          <p className="text-lg text-[#A9B2BA] mb-8 max-w-2xl mx-auto">
            Let's create something amazing together and add your success story to our growing list of satisfied clients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] text-[#0D1117] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#00BFFF]/25 transition-all duration-300 transform hover:scale-105 neon-glow"
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
      </section>
    </div>
  )
}

export default Reviews