import React from 'react'
import Container from './Container'

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">AstroGuide</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Personalized astrological guidance for life's important decisions.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">📱</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">📧</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">📍</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm md:text-base">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Career Guidance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Relationship Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marriage Compatibility</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Life Purpose Reading</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Consultation</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm md:text-base">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+91 9542985149</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>contact@astroguide.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 AstroGuide. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer