import React from 'react';
import { scrollToForm } from '../utils/scroll'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1a1a1a]/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-2xl font-bold cursor-pointer"
            >
              AstroGuide
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                Home
              </a>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                Testimonials
              </button>
              <button
                onClick={scrollToForm}
                className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;