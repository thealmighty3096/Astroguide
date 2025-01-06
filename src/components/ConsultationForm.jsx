import React, { useState, useEffect } from 'react'
import Container from './Container'
import emailjs from '@emailjs/browser'
import { emailConfig } from '../config/email'

function ConsultationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init(emailConfig.publicKey)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Get all required fields
    const name = e.target.elements.fullName.value
    const phone = e.target.elements.phone.value
    const dob = e.target.elements.dob.value
    const birthPlace = e.target.elements.birthPlace.value
    const consultationType = e.target.elements.consultationType.value
    const birthTime = e.target.elements.birthTime.value
    const questions = e.target.elements.questions.value

    // Validate required fields
    if (!name || !phone || !dob || !birthPlace || !consultationType) {
      setError("Please input all mandatory fields")
      setIsLoading(false)
      setTimeout(() => setError(""), 3000)
      return
    }

    try {
      // Prepare email template parameters
      const templateParams = {
        to_email: 'phanikumar.chunduri@gmail.com',
        from_name: name,
        phone_number: phone,
        date_of_birth: dob,
        time_of_birth: birthTime || 'Not provided',
        place_of_birth: birthPlace,
        consultation_type: consultationType,
        questions: questions || 'No specific questions provided',
        submission_date: new Date().toLocaleString()
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams
      )

      console.log('Email sent successfully:', response)
      setError("")
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        e.target.reset()
      }, 3000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setError("Failed to submit form. Please try again.")
      setTimeout(() => setError(""), 3000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div 
      id="book-consultation" 
      className="pt-16 md:pt-24 bg-white text-black scroll-mt-16"
    >
      <Container>
        <div className="text-center mb-8 md:mb-12 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Begin Your Astrological Journey
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Fill in your details for a personalized consultation
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl md:rounded-2xl p-6 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name <span className="text-purple-500">*</span>
                </label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number <span className="text-purple-500">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Date of Birth <span className="text-purple-500">*</span>
                </label>
                <input
                  name="dob"
                  type="date"
                  className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Time of Birth (if known)
                </label>
                <input
                  name="birthTime"
                  type="time"
                  className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Place of Birth <span className="text-purple-500">*</span>
              </label>
              <input
                name="birthPlace"
                type="text"
                placeholder="City, Country"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Consultation Type <span className="text-purple-500">*</span>
              </label>
              <select 
                name="consultationType"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-base"
              >
                <option value="">Select your consultation type</option>
                <option value="relationship">Relationship Guidance</option>
                <option value="career">Career Consultation</option>
                <option value="life">Life Purpose & Wellness</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Specific Questions or Concerns
              </label>
              <textarea
                name="questions"
                rows="4"
                placeholder="Share your specific questions or concerns..."
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-base"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-3 md:px-8 md:py-4 bg-purple-600 text-white rounded-lg text-base md:text-lg font-semibold hover:bg-purple-700 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Submitting...' : 'Submit Consultation Request'}
              </button>
              <p className="text-gray-500 mt-3 md:mt-4 text-xs md:text-sm px-4 md:px-0">
                Our team will contact you within 24 hours to confirm your consultation
              </p>
            </div>
          </form>

          {/* Error Message */}
          <div className={`transform transition-all duration-500 ease-out ${
            error 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}>
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <svg 
                  className="w-4 h-4 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <p className="text-red-600 font-medium">
                {error}
              </p>
            </div>
          </div>

          {/* Success Message */}
          <div className={`transform transition-all duration-500 ease-out ${
            isSubmitted 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}>
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg 
                  className="w-4 h-4 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-green-600 font-medium">
                Consultation request submitted successfully!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ConsultationForm 