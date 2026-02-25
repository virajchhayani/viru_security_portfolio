// import React from 'react';
// import { Building2, Heart, Landmark, ShoppingCart, Factory, GraduationCap, Plane, Globe, Gamepad2, Camera, Newspaper, Cloud, Truck, Car, Zap, Home, Users, Briefcase, Utensils, MapPin, Leaf, Calendar } from 'lucide-react';

// const Industries = () => {
//   const industries = [
//     { icon: <GraduationCap className="h-8 w-8" />, title: "Education & E-Learning", color: "from-blue-500 to-blue-600" },
//     { icon: <ShoppingCart className="h-8 w-8" />, title: "Retails & E-Commerce", color: "from-green-500 to-green-600" },
//     { icon: <Utensils className="h-8 w-8" />, title: "Food & Beverage", color: "from-orange-500 to-orange-600" },
//     { icon: <Plane className="h-8 w-8" />, title: "Travel & Hospitality", color: "from-purple-500 to-purple-600" },
//     { icon: <Landmark className="h-8 w-8" />, title: "Banking & Finance", color: "from-yellow-500 to-yellow-600" },
//     { icon: <Globe className="h-8 w-8" />, title: "Media & Entertainment", color: "from-pink-500 to-pink-600" },
//     { icon: <Calendar className="h-8 w-8" />, title: "Event & Ticketing", color: "from-indigo-500 to-indigo-600" },
//     { icon: <Heart className="h-8 w-8" />, title: "Healthcare", color: "from-red-500 to-red-600" },
//     { icon: <Building2 className="h-8 w-8" />, title: "Enterprise & Business", color: "from-gray-500 to-gray-600" },
//     { icon: <Users className="h-8 w-8" />, title: "Social Networking", color: "from-cyan-500 to-cyan-600" },
//     { icon: <Gamepad2 className="h-8 w-8" />, title: "Sports & Gaming", color: "from-emerald-500 to-emerald-600" },
//     { icon: <Briefcase className="h-8 w-8" />, title: "B2B / B2C Portal", color: "from-teal-500 to-teal-600" },
//     { icon: <Home className="h-8 w-8" />, title: "Real Estate & Housing", color: "from-amber-500 to-amber-600" },
//     { icon: <Truck className="h-8 w-8" />, title: "Logistic", color: "from-lime-500 to-lime-600" },
//     { icon: <Factory className="h-8 w-8" />, title: "Agriculture", color: "from-green-600 to-green-700" },
//     { icon: <Building2 className="h-8 w-8" />, title: "Construction", color: "from-stone-500 to-stone-600" },
//     { icon: <Car className="h-8 w-8" />, title: "Transportation", color: "from-blue-600 to-blue-700" },
//     { icon: <Car className="h-8 w-8" />, title: "Automotives", color: "from-red-600 to-red-700" },
//     { icon: <Zap className="h-8 w-8" />, title: "Utilities", color: "from-yellow-600 to-yellow-700" },
//     { icon: <Briefcase className="h-8 w-8" />, title: "Productivity", color: "from-purple-600 to-purple-700" },
//     { icon: <Newspaper className="h-8 w-8" />, title: "News", color: "from-gray-600 to-gray-700" },
//     { icon: <Camera className="h-8 w-8" />, title: "Photography", color: "from-pink-600 to-pink-700" },
//     { icon: <Users className="h-8 w-8" />, title: "Life Style", color: "from-rose-500 to-rose-600" },
//     { icon: <Cloud className="h-8 w-8" />, title: "Weather", color: "from-sky-500 to-sky-600" },
//     { icon: <MapPin className="h-8 w-8" />, title: "Navigation", color: "from-emerald-600 to-emerald-700" },
//     { icon: <Leaf className="h-8 w-8" />, title: "Ecology", color: "from-green-700 to-green-800" },
//     { icon: <Users className="h-8 w-8" />, title: "Community", color: "from-violet-500 to-violet-600" }
//   ];

//   return (
//     <section id="industries" className="py-20 bg-gray-800">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
//                 Industries We Serve
//               </span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Delivering secure IT solutions across diverse industries with specialized expertise and domain knowledge
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {industries.map((industry, index) => (
//               <div
//                 key={index}
//                 className="group bg-gray-900 border border-green-500/20 rounded-lg p-6 text-center transform hover:scale-105 hover:border-green-400/40 transition-all duration-300 cursor-pointer"
//               >
//                 <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${industry.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                   <div className="text-white">
//                     {industry.icon}
//                   </div>
//                 </div>
//                 <h3 className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors duration-300">
//                   {industry.title}
//                 </h3>
//               </div>
//             ))}
//           </div>

//           <div className="mt-16 text-center">
//             <div className="bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-400/30 rounded-lg p-8">
//               <h3 className="text-2xl font-bold text-white mb-4">Your Industry Not Listed?</h3>
//               <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
//                 We work with businesses across all industries. Contact us to discuss your specific requirements.
//               </p>
//               <button
//                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//                 className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg shadow-green-500/25"
//               >
//                 Discuss Your Project
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Industries;