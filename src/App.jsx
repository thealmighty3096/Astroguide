import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceSection from './components/ServiceSection'
import AstrologicalServices from './components/AstrologicalServices'
import ConsultationForm from './components/ConsultationForm'
import ExpertAstrologers from './components/ExpertAstrologers'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white">
      <Navbar />
      <Hero />
      <ServiceSection />
      <AstrologicalServices />
      <ConsultationForm />
      <ExpertAstrologers />
      <Testimonials />
      <FAQ />
    </div>
  )
}

export default App