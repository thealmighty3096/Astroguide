import React from 'react'
import Container from './Container'
import { scrollToForm } from '../utils/scroll'

function Hero() {
  return (
    <div className="pt-16 h-[85vh]">
      <Container>
        <div className="flex items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Discover Your Path Through{' '}
              <span className="text-purple-500">Personal Astrology</span>
            </h1>
            <p className="text-gray-400 text-base mb-6">
              Experience personalized astrological guidance from expert astrologers who analyze your unique birth chart in detail.
            </p>
            <div className="flex gap-4">
              <button
                onClick={scrollToForm}
                className="px-5 py-2.5 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Book Consultation
              </button>
              <button className="px-5 py-2.5 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition-colors">
                Learn More
              </button>
            </div>

            {/* Satisfied Clients Section */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex -space-x-4">
                  <div className="w-10 h-10 rounded-full border-2 border-purple-600 overflow-hidden">
                    <img 
                      src="/client1.jpg" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-purple-600 overflow-hidden">
                    <img 
                      src="/client2.jpg" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-purple-600 overflow-hidden">
                    <img 
                      src="/client3.jpg" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-gray-400">
                  <strong className="text-white">500+</strong> Satisfied Clients
                </span>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#1a1a1a]/50 p-3 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-600/20 rounded-lg">
                      <span className="text-xl">+</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Personal Consultation</h3>
                      <p className="text-gray-400 text-xs">One-on-one analysis</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1a1a]/50 p-3 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-600/20 rounded-lg">
                      <span className="text-xl">📋</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Birth Chart Analysis</h3>
                      <p className="text-gray-400 text-xs">Astronomical mapping</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1a1a]/50 p-3 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-600/20 rounded-lg">
                      <span className="text-xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Expert Guidance</h3>
                      <p className="text-gray-400 text-xs">Professional insight</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Astrologer Image */}
          <div className="relative w-[450px] h-[450px] rounded-2xl overflow-hidden">
            <img 
              src="/astrologer.jpg"
              alt="Expert Astrologer"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent"></div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero