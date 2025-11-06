import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import ServicesSection from '../components/ServicesSection'
import TechnologiesSection from '../components/TechnologiesSection'
import ProcessSection from '../components/ProcessSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CTASection from '../components/CTASection'

const Home = () => {
  return (
    <div className="pt-14 sm:pt-16">
      <Hero />
      <StatsSection />
      <ServicesSection />
      <TechnologiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default Home