"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="contact" className="py-20 px-4 md:px-10 bg-black min-h-[80vh] flex flex-col justify-between">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                        Got a project in mind? <br />
                        Let's talk
                    </h2>

                    <a
                        href="mailto:virajchhayani9999@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-green-400 text-black rounded-full text-lg font-medium hover:bg-green-500 transition-colors"
                    >
                        Get in touch
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                </motion.div>

                {/* Contact Information Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-12 mb-20"
                >
                    {/* Personal Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Viraj Chhayani</h3>
                        <p className="text-gray-400 text-sm mb-4">Digital Solutions Expert</p>
                        <p className="text-gray-300 mb-6">
                            Full-stack developer and cybersecurity expert delivering secure, scalable digital solutions 
                            that drive business growth and protect digital assets.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/viraj-chhayani-270192233/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="https://github.com/virajchhayani" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="mailto:virajchhayani9999@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => scrollToSection('home')}
                                    className="text-gray-400 hover:text-green-400 transition-colors text-left"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="text-gray-400 hover:text-green-400 transition-colors text-left"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('technologies')}
                                    className="text-gray-400 hover:text-green-400 transition-colors text-left"
                                >
                                    Technologies
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('skills')}
                                    className="text-gray-400 hover:text-green-400 transition-colors text-left"
                                >
                                    Skills & Experience
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('portfolio')}
                                    className="text-gray-400 hover:text-green-400 transition-colors text-left"
                                >
                                    Projects
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Get In Touch</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-green-400" />
                                <a href="mailto:virajchhayani9999@gmail.com" className="text-gray-400 text-sm hover:text-green-400 transition-colors">
                                    virajchhayani9999@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Linkedin className="h-4 w-4 text-green-400" />
                                <a href="https://www.linkedin.com/in/viraj-chhayani-270192233/" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-green-400 transition-colors">
                                    LinkedIn Profile
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Github className="h-4 w-4 text-green-400" />
                                <a href="https://github.com/virajchhayani" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-green-400 transition-colors">
                                    GitHub Portfolio
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer Section with Animated Name */}
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 pt-10"
                >
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                        <div>
                            <p className="text-gray-400 mb-2">your friendly digital solutions expert</p>
                            <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-white flex overflow-hidden py-4">
                                {"Viraj".split("").map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: 0 }}
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{
                                            duration: 2.5,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                            repeatDelay: 0,
                                            delay: index * 0.15,
                                        }}
                                        className="inline-block"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </h1>
                        </div>

                        {/* Copyright */}
                        <div className="text-right">
                            <p className="text-gray-400 text-sm mb-2">
                                © 2024 Viraj Chhayani. All rights reserved.
                            </p>
                            <div className="flex space-x-4 text-sm justify-end">
                                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}