"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Award, Users, Target, TrendingUp, Briefcase, GraduationCap } from "lucide-react";

const Skills = () => {
  const stats = [
    {
      icon: <Target className="w-6 h-6" />,
      value: "5+",
      label: "Years Experience",
      description: "Industry expertise"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "20+",
      label: "Certifications",
      description: "Professional credentials"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "100+",
      label: "Projects Completed",
      description: "Successful deliveries"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "150+",
      label: "Clients Served",
      description: "Trusted partnerships"
    }
  ];

  const certificates = [
    {
      name: "Google Cloud Platform Fundamentals",
      url: "https://coursera.org/share/474002cf8e229837adbf8799560ca2c2"
    },
    {
      name: "IBM Data Science Professional",
      url: "https://www.coursera.org/account/accomplishments/specialization/3UN3GDNJF59A"
    },
    {
      name: "Meta Backend Developer",
      url: "https://www.coursera.org/account/accomplishments/specialization/H3RWTY9REZYR"
    },
    {
      name: "Google Cloud Security",
      url: "https://www.coursera.org/account/accomplishments/specialization/A85W2NEJD7LF"
    },
    {
      name: "Advanced Machine Learning",
      url: "https://www.coursera.org/account/accomplishments/specialization/GBGFUYG3NNZY"
    },
    {
      name: "Many Certificates are completed",
      url: "#"
    }
  ];

  const experiences = [
    {
      company: "SWASTIK INFINITY SOLUTIONS",
      role: "Founder & CEO",
      period: "Dec 2024 - Present",
      location: "Rajkot Taluka, Gujarat, India · Remote",
      type: "work"
    },
    {
      company: "Chhayani Earth Movers",
      role: "Part-time",
      period: "Jan 2019 - Present",
      location: "Rajkot, Gujarat, India · Hybrid",
      type: "work"
    },
    {
      company: "DIGI PACE TECHNOLOGY",
      role: "Information Technology Security Specialist",
      period: "May 2024 - Dec 2024",
      location: "Remote",
      type: "work"
    },
    {
      company: "InternPe",
      role: "Computer Programmer",
      period: "Jun 2023 - Jul 2023",
      location: "India · On-site",
      type: "work"
    },
    {
      company: "Remarkskill Education",
      role: "Cyber Security Engineer",
      period: "Jan 2022 - Feb 2022",
      location: "Delhi, India · Remote",
      type: "work"
    }
  ];

  const education = [
    {
      institution: "RK University",
      degree: "Bachelor of Technology - BTech, Computer Engineering",
      period: "Sep 2021 – Mar 2025",
      grade: "Grade: 9.2 SGPA",
      type: "education"
    },
    {
      institution: "Shree Swaminarayan Gurukul - Rajkot",
      degree: "Science 11 and 12, Science",
      period: "Apr 2019 – Jun 2021",
      type: "education"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-10 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Skills & Expertise</h2>
          <p className="text-gray-300 max-w-3xl">
            Technical proficiencies and certifications that drive effective cybersecurity solutions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 hover:border-green-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-white/5 rounded-full text-green-400">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">{stat.value}</div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className="w-8 h-8 text-green-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">Experience</h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-green-400/50 to-transparent origin-top"
            />

            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-6 md:pl-12 group"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="absolute -left-[7px] md:left-[9px] top-6 w-4 h-4 rounded-full bg-green-400 shadow-lg shadow-green-400/50 group-hover:scale-125 transition-transform"
                  >
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 md:p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-green-400/50 hover:bg-neutral-900/70 transition-all"
                  >
                    <div className="flex flex-col gap-4">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                          {exp.role}
                        </h4>
                        <p className="text-green-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-400 text-sm">
                        <p className="font-medium">{exp.period}</p>
                        <p className="text-white/40">•</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="w-8 h-8 text-green-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">Education</h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-green-400/50 to-transparent origin-top"
            />

            <div className="space-y-6 md:space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-6 md:pl-12 group"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="absolute -left-[7px] md:left-[9px] top-6 w-4 h-4 rounded-full bg-green-400 shadow-lg shadow-green-400/50 group-hover:scale-125 transition-transform"
                  >
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 md:p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-green-400/50 hover:bg-neutral-900/70 transition-all"
                  >
                    <div className="flex flex-col gap-4">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                          {edu.institution}
                        </h4>
                        <p className="text-green-400 font-medium">{edu.degree}</p>
                        {edu.grade && <p className="text-gray-400 text-sm">{edu.grade}</p>}
                      </div>
                      <div className="text-gray-400 text-sm font-medium">
                        {edu.period}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Professional Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-emerald-900/20 border border-emerald-500/20 rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Professional Recognition</h3>
            <a 
              href="https://www.credly.com/users/viraj-chhayani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-400/10 border border-green-400/30 text-green-400 hover:bg-green-400/20 hover:border-green-400/50 px-6 py-3 rounded-lg transition-all duration-300 font-semibold"
            >
              <Award className="h-5 w-5 mr-2" />
              View All Certifications on Credly
            </a>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-6 text-center">Coursera Professional Certificates</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="flex items-center text-green-400 hover:text-green-300 transition-colors text-sm p-3 rounded-lg hover:bg-white/5"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                  {cert.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;