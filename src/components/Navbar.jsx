import React from 'react';
import { scrollToForm } from '../utils/scroll'

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-16 py-4">
      <div className="text-2xl font-semibold">AstroGuide</div>
      <div className="flex gap-8 items-center">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Services</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Testimonials</a>
        <button 
          onClick={scrollToForm}
          className="px-4 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors"
        >
          Book Consultation
        </button>
      </div>
    </nav>
  );
}

export default Navbar;