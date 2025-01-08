import React, { useState, useEffect } from 'react'
import Container from './Container'
import { scrollToForm } from '../utils/scroll'

function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [audio, setAudio] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  useEffect(() => {
    // Initialize audio on mount
    const newAudio = new Audio('/om-chanting.mp3');
    newAudio.loop = true;
    setAudio(newAudio);

    // Add click listener to document
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        newAudio.play().catch(console.error);
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    
    return () => {
      newAudio.pause();
      newAudio.currentTime = 0;
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []); // Run only on mount

  // Handle play/pause when isPlaying changes
  useEffect(() => {
    if (isPlaying && audio && hasInteracted) {
      audio.play();
    } else {
      audio?.pause();
    }
  }, [isPlaying, audio, hasInteracted]);

  const toggleAudio = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-[85vh] pt-16 pb-0">
      {/* Audio Control Button - Fixed Position */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 p-3 md:p-4 bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-300 shadow-lg animate-pulse hover:animate-none z-50"
        aria-label={isPlaying ? 'Mute Om Chanting' : 'Play Om Chanting'}
      >
        {isPlaying ? (
          <svg className="w-6 h-6 text-white animate-[spin_4s_linear_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5 8.25l4-4 4 4m-4-4v13.5" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>

      <Container>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 h-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
              Discover Your Path Through{' '}
              <span className="text-purple-500">Personal Astrology</span>
            </h1>
            <p className="text-gray-400 text-base mb-6 text-center md:text-left">
              Experience personalized astrological guidance from expert astrologers who analyze your unique birth chart in detail.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToForm}
                className="px-5 py-2.5 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Book Consultation
              </button>
              <button 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="px-5 py-2.5 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition-colors"
              >
                Learn More
              </button>
            </div>

            {/* Satisfied Clients Section */}
            <div className="mt-8 md:mt-6">
              <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#1a1a1a]/50 p-3 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="p-2 bg-purple-600/20 rounded-lg">
                      <span className="text-xl">+</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-center md:text-left">
                        Personal Consultation
                      </h3>
                      <p className="text-gray-400 text-xs text-center md:text-left">
                        One-on-one analysis
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1a1a]/50 p-3 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="p-2 bg-purple-600/20 rounded-lg">
                      <span className="text-xl">📋</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-center md:text-left">
                        Birth Chart Analysis
                      </h3>
                      <p className="text-gray-400 text-xs text-center md:text-left">
                        Astronomical mapping
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1a1a]/50 p-3 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="p-2 bg-purple-600/20 rounded-lg">
                      <span className="text-xl">⏰</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-center md:text-left">
                        Expert Guidance
                      </h3>
                      <p className="text-gray-400 text-xs text-center md:text-left">
                        Professional insight
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Astrologer Image */}
          <div className="relative mt-6 md:mt-0">
            <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-2xl overflow-hidden">
              <img 
                src="/astrologer.jpg"
                alt="Expert Astrologer"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
