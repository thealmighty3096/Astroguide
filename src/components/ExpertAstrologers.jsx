import React from 'react'
import Container from './Container'
import { scrollToForm } from '../utils/scroll'

const astrologers = [
  {
    name: "Dr. Rajesh Kumar",
    title: "Senior Vedic Astrologer",
    specialties: [
      "25+ years experience",
      "Specializes in Career & Business"
    ]
  },
  {
    name: "Smt. Lakshmi Devi",
    title: "Relationship Expert",
    specialties: [
      "20+ years experience",
      "Marriage & Relationships Expert"
    ]
  },
  {
    name: "Dr. Amit Sharma",
    title: "Life Path Consultant",
    specialties: [
      "15+ years experience",
      "Spiritual & Life Purpose Guide"
    ]
  }
]

function ExpertAstrologers() {
  return (
    <div className="bg-[#1a1a1a] text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            Our Expert Astrologers
          </h2>
          <p className="text-gray-400 text-lg">
            Meet our team of experienced vedic astrologers
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          {astrologers.map((astrologer, index) => (
            <div key={index} className="bg-[#2a2a2a] rounded-2xl p-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">{astrologer.name}</h3>
                <p className="text-purple-400 mb-6">{astrologer.title}</p>
                <ul className="space-y-3 w-full">
                  {astrologer.specialties.map((specialty, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <span className="text-purple-500">✓</span>
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={scrollToForm}
            className="px-8 py-4 bg-purple-600 text-white rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Book a Consultation
          </button>
        </div>
      </Container>
    </div>
  )
}

export default ExpertAstrologers 