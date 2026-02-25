// import React from 'react';
// import { Shield, Search, Users, FileText, Lock, Zap, Eye, AlertTriangle, Code, Server, Globe, Database, Cloud } from 'lucide-react';

// const Services = () => {
//   const services = [
//     {
//       icon: <Globe className="h-10 w-10" />,
//       title: "Custom Web Development",
//       description: "Full-stack web applications built with modern frameworks, responsive design, and integrated security features.",
//       features: [
//         "React, Vue.js, Angular Development",
//         "Node.js, Python, PHP Backend",
//         "Responsive & Mobile-First Design",
//         "E-commerce & CMS Solutions",
//         "API Development & Integration",
//         "SEO Optimization & Performance"
//       ],
//       highlight: "Full-Stack Expertise",
//     },
//     {
//       icon: <Code className="h-10 w-10" />,
//       title: "Mobile App Development",
//       description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
//       features: [
//         "React Native & Flutter Development",
//         "Native iOS (Swift) & Android (Kotlin)",
//         "Cross-platform Compatibility",
//         "App Store Optimization",
//         "Push Notifications & Analytics",
//         "Offline Functionality & Sync"
//       ],
//       highlight: "Cross-Platform Expert",
//     },
//     {
//       icon: <Database className="h-10 w-10" />,
//       title: "Enterprise Software Solutions",
//       description: "Custom business applications, CRM systems, and enterprise software tailored to your specific needs.",
//       features: [
//         "Custom CRM & ERP Systems",
//         "Business Intelligence Dashboards",
//         "Workflow Automation Tools",
//         "Data Analytics & Reporting",
//         "Third-party System Integration",
//         "Scalable Architecture Design"
//       ],
//       highlight: "Enterprise Grade",
//     },
//     {
//       icon: <Cloud className="h-10 w-10" />,
//       title: "Cloud Solutions & DevOps",
//       description: "Cloud migration, infrastructure setup, and DevOps implementation for scalable and reliable applications.",
//       features: [
//         "AWS, Azure, Google Cloud Setup",
//         "Docker & Kubernetes Deployment",
//         "CI/CD Pipeline Implementation",
//         "Auto-scaling & Load Balancing",
//         "Database Migration & Backup",
//         "Monitoring & Performance Optimization"
//       ],
//       highlight: "Cloud Certified",
//     },
//     {
//       icon: <Shield className="h-10 w-10" />,
//       title: "Application Security Testing",
//       description: "Comprehensive security assessments and penetration testing for web and mobile applications.",
//       features: [
//         "Web Application Penetration Testing",
//         "Mobile App Security Assessment",
//         "API Security Testing",
//         "Code Review & SAST/DAST",
//         "OWASP Top 10 Compliance",
//         "Security Architecture Review"
//       ],
//       highlight: "OWASP Certified",
//     },
//     {
//       icon: <Eye className="h-10 w-10" />,
//       title: "24/7 Security Monitoring",
//       description: "Continuous security monitoring and incident response services to protect your applications and data.",
//       features: [
//         "Real-time Threat Detection",
//         "Security Information & Event Management",
//         "Incident Response & Recovery",
//         "Vulnerability Management",
//         "Compliance Monitoring",
//         "Security Analytics & Reporting"
//       ],
//       highlight: "24/7 Coverage",
//     },
//     {
//       icon: <Users className="h-10 w-10" />,
//       title: "IT Consulting & Strategy",
//       description: "Strategic IT consulting to help you make informed technology decisions and digital transformation.",
//       features: [
//         "Technology Stack Consultation",
//         "Digital Transformation Strategy",
//         "Security Architecture Planning",
//         "Performance Optimization",
//         "Cost Analysis & ROI Planning",
//         "Team Training & Knowledge Transfer"
//       ],
//       highlight: "Strategic Expertise",
//     },
//     {
//       icon: <Server className="h-10 w-10" />,
//       title: "API Development & Integration",
//       description: "Custom API development and third-party service integrations for seamless application connectivity.",
//       features: [
//         "RESTful API Development",
//         "GraphQL Implementation",
//         "Payment Gateway Integration",
//         "Social Media API Integration",
//         "SMS/Email Service Integration",
//         "Real-time Data Synchronization"
//       ],
//       highlight: "Integration Expert",
//     },
//     {
//       icon: <Zap className="h-10 w-10" />,
//       title: "Maintenance & Support",
//       description: "Ongoing maintenance, updates, and technical support to keep your applications running smoothly.",
//       features: [
//         "Regular Security Updates",
//         "Performance Monitoring",
//         "Bug Fixes & Enhancements",
//         "Database Maintenance",
//         "Backup & Recovery Services",
//         "Technical Support & Training"
//       ],
//       highlight: "Reliable Support",
//     }
//   ];

//   const serviceStats = [
//     { number: "100+", label: "Projects Delivered", sublabel: "Across All Industries" },
//     { number: "150+", label: "Happy Clients", sublabel: "Worldwide" },
//     { number: "15+", label: "Industries Served", sublabel: "From Startups to Enterprise" },
//     { number: "99.9%", label: "Uptime Guarantee", sublabel: "Reliable & Secure" }
//   ];

//   return (
//     <section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
//         <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
//         <div className="absolute top-60 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="flex justify-center items-center space-x-4 mb-8">
//               <Shield className="h-12 w-12 text-green-400 animate-pulse" />
//               <Server className="h-10 w-10 text-green-400" />
//               <Lock className="h-11 w-11 text-green-400 animate-pulse" />
//             </div>
//             <h2 className="text-5xl md:text-7xl font-bold mb-8">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
//                 IT Solutions & Security Services
//               </span>
//             </h2>
//             <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//               Complete IT solutions from web development to mobile apps, combined with military-grade cybersecurity protection.
//               <br />
//               <span className="text-green-400 font-semibold">Building secure, scalable applications across 25+ industries</span>
//             </p>
//           </div>

//           {/* Service Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
//             {serviceStats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/30 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:border-green-400/50"
//               >
//                 <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{stat.number}</div>
//                 <div className="text-white font-semibold mb-1">{stat.label}</div>
//                 <div className="text-gray-400 text-sm">{stat.sublabel}</div>
//               </div>
//             ))}
//           </div>

//           {/* Services Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/20 rounded-xl p-8 transform hover:scale-105 hover:border-green-400/40 transition-all duration-300 group relative overflow-hidden"
//               >
//                 {/* Background Gradient Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="text-green-400 group-hover:text-green-300 transition-colors">
//                       {service.icon}
//                     </div>
//                     <div className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-400/30">
//                       {service.highlight}
//                     </div>
//                   </div>
                  
//                   <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
//                     {service.title}
//                   </h3>
                  
//                   <p className="text-gray-300 mb-6 leading-relaxed">
//                     {service.description}
//                   </p>
                  
//                   <ul className="space-y-3 mb-6">
//                     {service.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-center text-sm text-gray-400">
//                         <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
//                         <span className="group-hover:text-gray-300 transition-colors">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
                  
//                   <button className="w-full bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-400/30 text-green-400 hover:bg-gradient-to-r hover:from-green-600/40 hover:to-green-500/40 hover:border-green-400/50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
//                     Get Quote
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Call to Action */}
//           <div className="text-center">
//             <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-400/30 rounded-2xl p-12 backdrop-blur-sm">
//               <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
//                 Ready to Build Your Next Project?
//               </h3>
//               <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//                 From concept to deployment, we deliver secure, scalable IT solutions that drive your business forward.
//               </p>
//               <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//                 <button
//                   onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//                   className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg shadow-green-500/25"
//                 >
//                   Get Free Project Consultation
//                 </button>
//                 <button
//                   onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
//                   className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 font-bold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-200"
//                 >
//                   View Our Portfolio
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;