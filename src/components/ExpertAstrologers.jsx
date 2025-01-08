// import React from 'react'
// import Container from './Container'
// import { scrollToForm } from '../utils/scroll'

// const experts = [
//   {
//     image: "/client4.jpg",
//     name: "Dr. Rajesh Kumar",
//     role: "Senior Vedic Astrologer",
//     experience: "25+ years experience",
//     specialization: "Specializes in Career & Business"
//   },
//   {
//     image: "/client5.jpg",
//     name: "Smt. Lakshmi Devi",
//     role: "Relationship Expert",
//     experience: "20+ years experience",
//     specialization: "Marriage & Relationships Expert"
//   },
//   {
//     image: "/client6.jpg",
//     name: "Dr. Amit Sharma",
//     role: "Life Path Consultant",
//     experience: "15+ years experience",
//     specialization: "Spiritual & Life Purpose Guide"
//   }
// ]

// function ExpertAstrologers() {
//   return (
//     <section className="bg-[#1a1a1a] text-white py-12 md:py-20">
//       <Container>
//         <div className="text-center mb-8 md:mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-3">
//             Our Expert Astrologers
//           </h2>
//           <p className="text-gray-400 text-base md:text-lg px-4 md:px-0">
//             Meet our team of experienced vedic astrologers
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 px-4 md:px-0">
//           {experts.map((expert, index) => (
//             <div key={index} className="bg-[#2a2a2a] rounded-xl md:rounded-2xl p-6 md:p-8">
//               <div className="flex flex-col items-center">
//                 <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 md:mb-6 border-4 border-purple-600">
//                   <img 
//                     src={expert.image}
//                     alt={expert.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2">{expert.name}</h3>
//                 <p className="text-purple-400 mb-6">{expert.role}</p>
//                 <ul className="space-y-3 text-left w-full">
//                   <li className="flex items-center gap-2 text-gray-300">
//                     <span className="text-purple-500">✓</span>
//                     {expert.experience}
//                   </li>
//                   <li className="flex items-center gap-2 text-gray-300">
//                     <span className="text-purple-500">✓</span>
//                     {expert.specialization}
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center">
//           <button 
//             onClick={scrollToForm}
//             className="px-8 py-4 bg-purple-600 text-white rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
//           >
//             Book a Consultation
//           </button>
//         </div>
//       </Container>
//     </section>
//   )
// }

// export default ExpertAstrologers 