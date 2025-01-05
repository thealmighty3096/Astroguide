import React from 'react'
import Container from './Container'
import { scrollToForm } from '../utils/scroll'

function Hero() {
  return (
    <Container>
      <div className="flex justify-between">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-4">
            Discover Your Path Through{' '}
            <span className="text-purple-500">Personal Astrology</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Experience personalized astrological guidance from expert astrologers who analyze your unique birth chart in detail.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={scrollToForm}
              className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Book Consultation
            </button>
            <button className="px-6 py-3 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition-colors">
              Learn More
            </button>
          </div>
          <div className="flex items-center gap-2 mt-12">
            <div className="flex">
              {[1, 2, 3].map((star) => (
                <div key={star} className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                  ★
                </div>
              ))}
            </div>
            <span className="text-gray-400">
              <strong className="text-white">500+</strong> Satisfied Clients
            </span>
          </div>
        </div>
        
        <div className="bg-gray-800/50 p-8 rounded-xl w-[400px]">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-600/20 rounded-lg">
                <span className="text-2xl">+</span>
              </div>
              <div>
                <h3 className="font-semibold">Personal Consultation</h3>
                <p className="text-gray-400">One-on-one detailed analysis</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-600/20 rounded-lg">
                <span className="text-2xl">📋</span>
              </div>
              <div>
                <h3 className="font-semibold">Birth Chart Analysis</h3>
                <p className="text-gray-400">Complete astronomical mapping</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-600/20 rounded-lg">
                <span className="text-2xl">⏰</span>
              </div>
              <div>
                <h3 className="font-semibold">Expert Guidance</h3>
                <p className="text-gray-400">Professional interpretation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero