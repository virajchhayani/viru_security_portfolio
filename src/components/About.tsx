import React from 'react';
import { User, Award, Target, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Full-stack IT solutions expert and company owner specializing in secure digital transformation and cybersecurity for businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Personal Background */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <User className="h-6 w-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">My Background</h3>
                  <p className="text-gray-300">
                    Founder and CEO of Swastik Infinity Solutions, a comprehensive IT solutions company specializing in secure web development, mobile applications, and cybersecurity. 
                    My expertise spans full-stack development, secure coding practices, penetration testing, and enterprise IT consulting across 25+ industries.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Target className="h-6 w-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">My Mission</h3>
                  <p className="text-gray-300">
                    To deliver cutting-edge IT solutions including secure websites, mobile apps, and software while maintaining the highest cybersecurity standards 
                    for businesses across all industries.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Globe className="h-6 w-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">My Impact</h3>
                  <p className="text-gray-300">
                    Delivered IT solutions to clients across 25+ industries including e-commerce, healthcare, finance, education, and entertainment, 
                    building secure, scalable applications that drive business growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Expertise & Certifications */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">My Expertise</h3>
                  <p className="text-gray-300">
                    Full-stack development, secure application architecture, advanced cybersecurity, cloud infrastructure, 
                    and enterprise IT consulting with industry-leading certifications and best practices.
                  </p>
                  <a 
                    href="https://www.credly.com/users/viraj-chhayani" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-3 text-green-400 hover:text-green-300 transition-colors text-sm font-semibold"
                  >
                    <Award className="h-4 w-4 mr-2" />
                    View My Certifications
                  </a>
                  <div className="mt-3 space-y-2">
                    <h5 className="text-white font-semibold text-sm">Industry Certifications:</h5>
                    <div className="space-y-1">
                      <a 
                        href="https://coursera.org/share/474002cf8e229837adbf8799560ca2c2" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-green-400 hover:text-green-300 transition-colors text-xs"
                      >
                        • Google Cloud Platform Fundamentals
                      </a>
                      <a 
                        href="https://www.coursera.org/account/accomplishments/specialization/3UN3GDNJF59A" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-green-400 hover:text-green-300 transition-colors text-xs"
                      >
                        • IBM Data Science Professional
                      </a>
                      <a 
                        href="https://www.coursera.org/account/accomplishments/specialization/H3RWTY9REZYR" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-green-400 hover:text-green-300 transition-colors text-xs"
                      >
                        • Meta Backend Developer
                      </a>
                      <a 
                        href="https://www.coursera.org/account/accomplishments/specialization/A85W2NEJD7LF" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-green-400 hover:text-green-300 transition-colors text-xs"
                      >
                        • Google Cloud Security
                      </a>
                      <a 
                        href="https://www.coursera.org/account/accomplishments/specialization/GBGFUYG3NNZY" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-green-400 hover:text-green-300 transition-colors text-xs"
                      >
                        • Advanced Machine Learning
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;