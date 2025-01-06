import React from 'react'
import Container from './Container'
import { scrollToForm } from '../utils/scroll'

const services = [
  {
    icon: "❤️",
    title: "Relationship Guidance",
    description: "Understanding compatibility, timing for marriage, and relationship dynamics through planetary positions",
    features: [
      "Compatibility Analysis",
      "Marriage Timing",
      "Relationship Solutions"
    ]
  },
  {
    icon: "💼",
    title: "Career Consultation",
    description: "Career path analysis, business decisions, and professional growth opportunities",
    features: [
      "Career Path Analysis",
      "Business Timing",
      "Job Change Guidance"
    ]
  },
  {
    icon: "🎯",
    title: "Life Purpose & Wellness",
    description: "Spiritual guidance, health insights, and life purpose discovery",
    features: [
      "Life Purpose Reading",
      "Health Insights",
      "Spiritual Guidance"
    ]
  }
]

function AstrologicalServices() {
  return (
    <section id="about" className="bg-[#1a1a1a] text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            Our Astrological Services
          </h2>
          <p className="text-gray-400 text-lg">
            Expert guidance for every aspect of your life
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-[#2a2a2a] rounded-2xl p-6">
              <div className="bg-purple-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                    <span className="text-purple-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={scrollToForm}
            className="px-8 py-4 bg-purple-600 text-white rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Book Your Session
          </button>
        </div>
      </Container>
    </section>
  )
}

export default AstrologicalServices 