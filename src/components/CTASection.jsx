import { useNavigate } from 'react-router-dom'

const CTASection = () => {
  const navigate = useNavigate()

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-[#0D1117] via-[#161b22] to-[#0D1117] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BFFF] opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FFC6] opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-[#00BFFF]/5 to-[#00FFC6]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00BFFF] rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#00FFC6] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#00BFFF] rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-[#00FFC6] rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main CTA Content */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 font-['Space_Grotesk'] leading-none">
            Ready to <span className="bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] bg-clip-text text-transparent">Transform</span>
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 font-['Space_Grotesk']">
            Your Digital Presence?
          </h3>
          <p className="text-xl md:text-2xl text-[#A9B2BA] max-w-4xl mx-auto leading-relaxed mb-12">
            Join 85+ successful companies who trusted 404Byte to bring their digital vision to life. 
            Let's create something extraordinary together.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={() => navigate('/contact')}
            className="group relative px-12 py-6 bg-gradient-to-r from-[#00BFFF] to-[#00FFC6] text-[#0D1117] font-bold text-xl rounded-2xl neon-glow transition-all duration-500 transform hover:scale-110 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Project
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={() => navigate('/portfolio')}
            className="px-12 py-6 border-2 border-[#00FFC6] text-[#00FFC6] font-bold text-xl rounded-2xl hover:bg-[#00FFC6] hover:text-[#0D1117] transition-all duration-300 transform hover:scale-110"
          >
            View Our Work
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#00FFC6] rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#0D1117]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Fast Delivery</h4>
            <p className="text-[#A9B2BA] text-center">Projects delivered on time, every time</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#00FFC6] rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#0D1117]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Quality Guaranteed</h4>
            <p className="text-[#A9B2BA] text-center">98% client satisfaction rate</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#00FFC6] rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#0D1117]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Ongoing Support</h4>
            <p className="text-[#A9B2BA] text-center">24/7 support and maintenance</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-[#161b22] to-[#1a1f2e] rounded-3xl p-8 md:p-12 border border-[#2d3748]">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 font-['Space_Grotesk']">
            Let's Discuss Your Project
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#00BFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#0D1117]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Email Us</h4>
              <p className="text-[#00BFFF]">hello@404byte.com</p>
              <p className="text-[#A9B2BA] text-sm">Response within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#00FFC6] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#0D1117]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Call Us</h4>
              <p className="text-[#00FFC6]">+1 (555) 404-BYTE</p>
              <p className="text-[#A9B2BA] text-sm">Mon-Fri 9AM-6PM EST</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#00BFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#0D1117]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">WhatsApp</h4>
              <p className="text-[#00BFFF]">+1 (555) 404-BYTE</p>
              <p className="text-[#A9B2BA] text-sm">Instant messaging</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection