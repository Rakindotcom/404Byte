import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  const handleSocialClick = (platform) => {
    const urls = {
      facebook: 'https://facebook.com/404byte',
      linkedin: 'https://linkedin.com/company/404byte',
      whatsapp: 'https://wa.me/1234567890'
    }
    window.open(urls[platform], '_blank')
  }

  return (
    <footer className="bg-[#161b22] border-t border-[#2d3748] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <button onClick={() => handleNavigation('/')} className="inline-flex items-center mb-6 group">
              <img 
                src="/logo.png" 
                alt="404Byte Logo" 
                className="w-12 h-12 mr-4 transform group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="text-3xl font-black font-['Space_Grotesk'] text-white group-hover:text-[#00BFFF] transition-colors duration-300">
                404Byte
              </span>
            </button>
            <p className="text-[#A9B2BA] mb-6 max-w-md leading-relaxed">
              Transforming digital landscapes with cutting-edge solutions. We bridge the gap between innovation and implementation.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('facebook')}
                className="group w-12 h-12 bg-[#0D1117] border border-[#2d3748] rounded-xl flex items-center justify-center hover:border-[#00BFFF] hover:bg-[#00BFFF]/10 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-[#A9B2BA] group-hover:text-[#00BFFF] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button 
                onClick={() => handleSocialClick('linkedin')}
                className="group w-12 h-12 bg-[#0D1117] border border-[#2d3748] rounded-xl flex items-center justify-center hover:border-[#00BFFF] hover:bg-[#00BFFF]/10 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-[#A9B2BA] group-hover:text-[#00BFFF] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button 
                onClick={() => handleSocialClick('whatsapp')}
                className="group w-12 h-12 bg-[#0D1117] border border-[#2d3748] rounded-xl flex items-center justify-center hover:border-[#00FFC6] hover:bg-[#00FFC6]/10 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-[#A9B2BA] group-hover:text-[#00FFC6] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('/about')}
                  className="text-[#A9B2BA] hover:text-[#00FFC6] transition-colors duration-300 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/services')}
                  className="text-[#A9B2BA] hover:text-[#00FFC6] transition-colors duration-300 text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/portfolio')}
                  className="text-[#A9B2BA] hover:text-[#00FFC6] transition-colors duration-300 text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/contact')}
                  className="text-[#A9B2BA] hover:text-[#00FFC6] transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-[#A9B2BA]">Web Development</span></li>
              <li><span className="text-[#A9B2BA]">App Development</span></li>
              <li><span className="text-[#A9B2BA]">UI/UX Design</span></li>
              <li><span className="text-[#A9B2BA]">Digital Marketing</span></li>
              <li><span className="text-[#A9B2BA]">Brand Development</span></li>
              <li><span className="text-[#A9B2BA]">Media Production</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-[#2d3748] mt-12 pt-8 text-center">
          <p className="text-[#A9B2BA]">
            © 2024 404Byte. All rights reserved. | We fix what's missing.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer