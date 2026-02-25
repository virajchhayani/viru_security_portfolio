// import React from 'react';
// import { ArrowRight, CheckCircle, Users, Lightbulb, Code, TestTube, Rocket, HeadphonesIcon } from 'lucide-react';

// const Process = () => {
//   const processSteps = [
//     {
//       step: "01",
//       title: "Discovery & Planning",
//       icon: <Lightbulb className="h-8 w-8" />,
//       description: "We start by understanding your business goals, target audience, and technical requirements through detailed consultation.",
//       activities: [
//         "Business requirement analysis",
//         "Technical feasibility study",
//         "Project scope definition",
//         "Timeline and milestone planning"
//       ],
//       duration: "1-2 weeks"
//     },
//     {
//       step: "02",
//       title: "Design & Architecture",
//       icon: <Users className="h-8 w-8" />,
//       description: "Our team creates comprehensive designs and technical architecture that align with your vision and business objectives.",
//       activities: [
//         "UI/UX design creation",
//         "System architecture planning",
//         "Database design",
//         "Security framework setup"
//       ],
//       duration: "2-3 weeks"
//     },
//     {
//       step: "03",
//       title: "Development & Coding",
//       icon: <Code className="h-8 w-8" />,
//       description: "We build your solution using cutting-edge technologies and best practices, ensuring scalability and security.",
//       activities: [
//         "Frontend development",
//         "Backend API development",
//         "Database implementation",
//         "Third-party integrations"
//       ],
//       duration: "4-8 weeks"
//     },
//     {
//       step: "04",
//       title: "Testing & Quality Assurance",
//       icon: <TestTube className="h-8 w-8" />,
//       description: "Rigorous testing ensures your application is bug-free, secure, and performs optimally across all platforms.",
//       activities: [
//         "Functional testing",
//         "Security testing",
//         "Performance optimization",
//         "Cross-platform compatibility"
//       ],
//       duration: "1-2 weeks"
//     },
//     {
//       step: "05",
//       title: "Deployment & Launch",
//       icon: <Rocket className="h-8 w-8" />,
//       description: "We deploy your solution to production environments with proper monitoring and backup systems in place.",
//       activities: [
//         "Production deployment",
//         "DNS and SSL setup",
//         "Monitoring configuration",
//         "Performance optimization"
//       ],
//       duration: "1 week"
//     },
//     {
//       step: "06",
//       title: "Support & Maintenance",
//       icon: <HeadphonesIcon className="h-8 w-8" />,
//       description: "Ongoing support and maintenance ensure your application stays updated, secure, and performs at its best.",
//       activities: [
//         "24/7 monitoring",
//         "Regular updates",
//         "Security patches",
//         "Technical support"
//       ],
//       duration: "Ongoing"
//     }
//   ];

//   // const processStats = [
//     // { number: "300+", label: "Projects Completed", sublabel: "Across All Industries" },
//     // { number: "98%", label: "Client Satisfaction", sublabel: "Happy Clients" },
//     // { number: "24/7", label: "Support Available", sublabel: "Round the Clock" },
//     // { number: "99.9%", label: "Uptime Guarantee", sublabel: "Reliable Service" }
//   // ];

//   return (
//     <section id="process" className="py-20 bg-gray-900">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
//                 Our Development Process
//               </span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               A proven methodology that ensures successful project delivery from concept to deployment
//             </p>
//           </div>

//           {/* Process Stats */}
//           {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//             {processStats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800 border border-green-500/20 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
//               >
//                 <div className="text-3xl font-bold text-green-400 mb-2">{stat.number}</div>
//                 <div className="text-white font-semibold mb-1">{stat.label}</div>
//                 <div className="text-gray-400 text-sm">{stat.sublabel}</div>
//               </div>
//             ))}
//           </div> */}

//           {/* Process Steps */}
//           <div className="space-y-8">
//             {processSteps.map((process, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800 border border-green-500/20 rounded-lg p-8 transform hover:scale-105 hover:border-green-400/40 transition-all duration-300"
//               >
//                 <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-green-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
//                       {process.step}
//                     </div>
//                     <div className="text-green-400">
//                       {process.icon}
//                     </div>
//                   </div>
                  
//                   <div className="flex-1">
//                     <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
//                       <h3 className="text-2xl font-bold text-white mb-2 lg:mb-0">{process.title}</h3>
//                       <div className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
//                         {process.duration}
//                       </div>
//                     </div>
                    
//                     <p className="text-gray-300 mb-6">{process.description}</p>
                    
//                     <div className="grid md:grid-cols-2 gap-4">
//                       {process.activities.map((activity, activityIndex) => (
//                         <div key={activityIndex} className="flex items-center space-x-3">
//                           <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
//                           <span className="text-gray-300">{activity}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {index < processSteps.length - 1 && (
//                     <div className="hidden lg:block">
//                       <ArrowRight className="h-6 w-6 text-green-400" />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Call to Action */}
//           <div className="mt-16 text-center">
//             <div className="bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-400/30 rounded-lg p-8">
//               <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
//               <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
//                 Let's discuss your requirements and create a customized development plan for your project.
//               </p>
//               <button
//                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//                 className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg shadow-green-500/25"
//               >
//                 Start Your Project
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;