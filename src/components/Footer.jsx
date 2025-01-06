import React from 'react'
import Container from './Container'

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-8 px-4 md:px-0">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">AstroGuide</h3>
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

          {/* Quick Links and Services in a grid on mobile */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:gap-12">
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
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-3 text-sm md:text-base">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📞 +91 98765 43210</li>
              <li>📧 contact@astroguide.com</li>
            </ul>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-12 mt-0">
          <div></div> {/* About space */}
          <div className="col-span-2"></div> {/* Links space */}
          <div></div> {/* Contact space */}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 AstroGuide. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer 