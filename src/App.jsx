import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceSection from './components/ServiceSection'
import AstrologicalServices from './components/AstrologicalServices'
import ConsultationForm from './components/ConsultationForm'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="bg-[#1a1a1a] text-white">
      <Navbar />
      <div>
        <Hero />
        <ServiceSection />
        <AstrologicalServices />
        <ConsultationForm />
        <Testimonials />
        <FAQ />
      </div>
    </div>
  )
}

export default App