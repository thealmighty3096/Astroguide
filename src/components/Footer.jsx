import React from 'react'
import Container from './Container'

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-12 px-4 md:px-0">
          {/* About Column */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">AstroGuide</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Personalized astrological guidance for life's important decisions.
            </p>
            <div className="flex gap-4">
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
          <div>
            <h4 className="font-semibold mb-3 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold mb-3 text-sm md:text-base">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Career Guidance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Relationship Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marriage Compatibility</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Life Purpose Reading</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Consultation</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-3 text-sm md:text-base">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📞 +91 98765 43210</li>
              <li>📧 contact@astroguide.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm px-4 md:px-0">
          <p>© 2024 AstroGuide. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer 