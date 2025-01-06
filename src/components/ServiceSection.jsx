import React from 'react'
import Container from './Container'
import { scrollToForm } from '../utils/scroll'

const steps = [
  {
    number: "1",
    title: "Submit Details",
    description: "Fill out the consultation form with your birth details and concerns",
    icon: "✏️"
  },
  {
    number: "2",
    title: "Confirmation Call",
    description: "Receive a call to verify details and process payment",
    icon: "📞"
  },
  {
    number: "3",
    title: "Chart Analysis",
    description: "Expert astrologer analyzes your complete birth chart",
    icon: "📋"
  },
  {
    number: "4",
    title: "Detailed Consultation",
    description: "Receive personalized guidance through a detailed call",
    icon: "ℹ️"
  }
]

function ServiceSection() {
  return (
    <section id="services" className="bg-white text-black">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            How Our Service Works
          </h2>
          <p className="text-gray-600 text-lg">
            Simple steps to get your personalized astrological guidance
          </p>
        </div>

        <div className="grid grid-cols-4 gap-20 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center">
              <div className="absolute -top-8 -left-8 z-10">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                  {step.number}
                </div>
              </div>
              
              <div className="w-full h-full bg-gray-50 rounded-3xl pt-12 pb-12 px-8">
                <div className="flex flex-col items-center h-full">
                  <div className="bg-purple-50 p-6 rounded-2xl w-24 h-24 flex items-center justify-center mb-8">
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={scrollToForm}
            className="px-8 py-4 bg-purple-600 text-white rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Start Your Journey Now
          </button>
        </div>
      </Container>
    </section>
  )
}

export default ServiceSection 