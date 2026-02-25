"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-4 md:px-10 pt-20 relative overflow-hidden bg-black">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-sm md:text-base font-medium text-gray-400 mb-4 tracking-wider uppercase">
                        CEO & Founder
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6">
                        Viraj <br />
                        <span className="text-gray-400">Chhayani</span>
                    </h1>
                    <p className="text-lg text-gray-300 max-w-md mb-8 leading-relaxed">
                        Transforming businesses with cutting-edge digital solutions, advanced cybersecurity, and scalable IT infrastructure.
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="h-[1px] w-12 bg-white/20"></div>
                        <span className="text-sm text-gray-400">Trusted by 100+ Businesses</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden transition-all duration-500"
                >
                    <img
                        src="/takeover_bg.png"
                        alt="Swastik Infinity Solutions - Digital Transformation & Cybersecurity"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;