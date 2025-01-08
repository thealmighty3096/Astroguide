import React from 'react'
import Container from './Container'

const testimonials = [
  {
    name: "Priya Sharma",
    type: "Career Guidance",
    rating: 5,
    image: "/client7.jpg",
    comment: "The career guidance I received was incredibly accurate. Changed jobs based on the consultation and couldn't be happier with my decision."
  },
  {
    name: "Rahul Mehta",
    type: "Marriage Consultation",
    rating: 5,
    image: "/client8.jpg",
    comment: "The marriage compatibility analysis was eye-opening. The insights helped us understand each other better and strengthen our relationship."
  },
  {
    name: "Anjali Patel",
    type: "Life Purpose Reading",
    rating: 5,
    image: "/client9.jpg",
    comment: "The detailed birth chart analysis and life purpose reading gave me clarity about my path. Highly recommend their personalized approach!"
  }
]

function Testimonials() {
  return (
    <section id="testimonials" className="bg-white text-black -mt-12">
      <Container>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-base md:text-lg px-4 md:px-0">
            Real experiences from people who transformed their lives
          </p>
        </div>

        <div className="relative px-4 md:px-0">
          {/* Navigation Buttons */}
          <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 w-12 h-12 bg-purple-600 rounded-full items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 w-12 h-12 bg-purple-600 rounded-full items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.type}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials 