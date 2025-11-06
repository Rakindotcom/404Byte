import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: "Email",
      details: "hello@404byte.com",
      description: "Send us an email anytime"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
      title: "Phone",
      details: "+1 (555) 404-BYTE",
      description: "Call us during business hours"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: "Location",
      details: "Digital Space, Worldwide",
      description: "We work remotely with global clients"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Response Time",
      details: "Within 24 hours",
      description: "We'll get back to you quickly"
    }
  ]

  const services = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Branding",
    "Digital Marketing",
    "Media Production",
    "Other"
  ]

  return (
    <div className="pt-16 min-h-screen bg-[#0D1117]">
      {/* Hero Section */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-[#A9B2BA] mb-8 leading-relaxed">
            Ready to fix what's missing? Let's discuss your project and create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="group p-6 bg-[#161b22] rounded-xl border border-[#2d3748] hover:border-[#00BFFF] transition-all duration-300 transform hover:scale-105 text-center">
                <div className="text-[#00BFFF] group-hover:text-[#00FFC6] mb-4 group-hover:scale-110 transition-all duration-300 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00BFFF] transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-[#00FFC6] font-semibold mb-2">
                  {info.details}
                </p>
                <p className="text-sm text-[#A9B2BA]">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#161b22] rounded-xl p-8 border border-[#2d3748]">
              <h2 className="text-2xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#A9B2BA] mb-2 text-sm font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0D1117] border border-[#2d3748] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#A9B2BA] mb-2 text-sm font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0D1117] border border-[#2d3748] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#A9B2BA] mb-2 text-sm font-medium">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0D1117] border border-[#2d3748] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-colors duration-300"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-[#A9B2BA] mb-2 text-sm font-medium">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0D1117] border border-[#2d3748] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#A9B2BA] mb-2 text-sm font-medium">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#0D1117] border border-[#2d3748] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] text-[#0D1117] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00BFFF]/25 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-[#161b22] rounded-xl p-8 border border-[#2d3748]">
                <h3 className="text-xl font-bold text-white mb-4 font-['Space_Grotesk']">
                  Let's Start a Conversation
                </h3>
                <p className="text-[#A9B2BA] mb-6 leading-relaxed">
                  We're here to help you bring your digital vision to life. Whether you need a website, mobile app, branding, or marketing strategy, our team is ready to deliver exceptional results.
                </p>
                <ul className="space-y-3 text-[#A9B2BA]">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
                    Free initial consultation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#00FFC6] rounded-full"></span>
                    Custom solutions for your needs
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
                    Transparent pricing and timeline
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#00FFC6] rounded-full"></span>
                    Ongoing support and maintenance
                  </li>
                </ul>
              </div>

              <div className="bg-[#161b22] rounded-xl p-8 border border-[#2d3748]">
                <h3 className="text-xl font-bold text-white mb-4 font-['Space_Grotesk']">
                  What Happens Next?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#00BFFF] rounded-full flex items-center justify-center text-[#0D1117] font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">We'll respond within 24 hours</h4>
                      <p className="text-[#A9B2BA] text-sm">Our team will review your message and get back to you quickly.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#00FFC6] rounded-full flex items-center justify-center text-[#0D1117] font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Schedule a consultation</h4>
                      <p className="text-[#A9B2BA] text-sm">We'll set up a call to discuss your project in detail.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#00BFFF] rounded-full flex items-center justify-center text-[#0D1117] font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Receive a custom proposal</h4>
                      <p className="text-[#A9B2BA] text-sm">Get a detailed proposal with timeline and pricing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-6 bg-[#161b22]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Space_Grotesk']">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-[#0D1117] rounded-xl p-6 border border-[#2d3748]">
              <h3 className="text-lg font-bold text-white mb-2">How long does a typical project take?</h3>
              <p className="text-[#A9B2BA]">Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. We'll provide a detailed timeline during our consultation.</p>
            </div>
            <div className="bg-[#0D1117] rounded-xl p-6 border border-[#2d3748]">
              <h3 className="text-lg font-bold text-white mb-2">Do you work with clients worldwide?</h3>
              <p className="text-[#A9B2BA]">Yes! We work with clients globally and are experienced in remote collaboration. We use modern communication tools to ensure smooth project management regardless of location.</p>
            </div>
            <div className="bg-[#0D1117] rounded-xl p-6 border border-[#2d3748]">
              <h3 className="text-lg font-bold text-white mb-2">What's included in your support?</h3>
              <p className="text-[#A9B2BA]">We provide ongoing support including bug fixes, security updates, performance optimization, and technical assistance. Support packages are customized based on your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact