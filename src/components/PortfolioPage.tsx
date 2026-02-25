"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
    {
        title: "E-commerce Platform - 40% Efficiency Boost",
        category: "Web Development",
        description: "I delivered a full-stack e-commerce platform that increased client sales by 45% and reduced order processing time by 60% through automated inventory management.",
        link: "https://github.com/virajchhayani",
        color: "bg-red-500",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT Authentication"],
        results: [
            "45% increase in sales",
            "60% faster order processing",
            "99.9% uptime achieved",
            "Reduced operational costs by 30%"
        ]
    },
    {
        title: "Healthcare System - HIPAA Compliance Success",
        category: "Enterprise Software",
        description: "I implemented a HIPAA-compliant healthcare management system serving 10,000+ patients with 100% data security compliance and improved appointment scheduling by 80%.",
        link: "https://github.com/virajchhayani",
        color: "bg-orange-500",
        image: "https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg?auto=compress&cs=tinysrgb&w=500",
        technologies: ["Angular", "Python Django", "PostgreSQL", "WebRTC", "SSL/TLS"],
        results: [
            "100% HIPAA compliance",
            "10,000+ patients served",
            "80% improvement in scheduling",
            "Zero security breaches"
        ]
    },
    {
        title: "Banking App - Fraud Prevention Success",
        category: "Mobile Development",
        description: "I developed secure mobile banking application with biometric authentication that reduced fraud attempts by 95% and increased user engagement by 70%.",
        link: "https://github.com/virajchhayani",
        color: "bg-green-500",
        image: "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=500",
        technologies: ["React Native", "Node.js", "MySQL", "Biometric Auth", "AES Encryption"],
        results: [
            "95% reduction in fraud",
            "70% increase in engagement",
            "4.9/5 user satisfaction",
            "24/7 transaction monitoring"
        ]
    },
    {
        title: "LMS Platform - Educational Transformation",
        category: "Education Platform",
        description: "I built comprehensive learning management system supporting 50,000+ students with 99.9% uptime and increased course completion rates by 35%.",
        link: "https://github.com/virajchhayani",
        color: "bg-purple-500",
        image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=500",
        technologies: ["Vue.js", "Laravel", "MySQL", "Video.js", "Chart.js"],
        results: [
            "50,000+ students supported",
            "35% higher completion rates",
            "99.9% platform uptime",
            "Reduced support tickets by 50%"
        ]
    },
    {
        title: "Restaurant System - Revenue Growth Solution",
        category: "Business Solution",
        description: "I created complete restaurant management system that increased client revenue by 25% and improved order accuracy to 99.8% through digital transformation.",
        link: "https://github.com/virajchhayani",
        color: "bg-blue-500",
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500",
        technologies: ["React", "Express.js", "MongoDB", "Socket.io", "Payment APIs"],
        results: [
            "25% revenue increase",
            "99.8% order accuracy",
            "50% reduction in errors",
            "Real-time analytics"
        ]
    },
    {
        title: "Real Estate Portal - Market Leader",
        category: "Web Platform",
        description: "I launched property listing platform that became market leader in 6 months, serving 100+ agents and facilitating $50M+ in property transactions.",
        link: "https://github.com/virajchhayani",
        color: "bg-indigo-500",
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=500",
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Google Maps API", "AWS S3"],
        results: [
            "100+ real estate agents",
            "$50M+ transactions",
            "Market leader in 6 months",
            "40% faster property search"
        ]
    }
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export default function PortfolioPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        const newIndex = currentIndex + newDirection;
        if (newIndex >= 0 && newIndex < projects.length) {
            setDirection(newDirection);
            setCurrentIndex(newIndex);
        }
    };

    const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
        }
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 200 : -200,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 200 : -200,
            opacity: 0
        })
    };

    return (
        <section id="portfolio" className="py-20 px-4 md:px-10 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-end mb-16"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">My Projects</h2>
                        <p className="text-gray-300 max-w-md">
                            Proven digital solutions that deliver measurable business results and drive growth for my clients
                        </p>
                    </div>
                    <a href="https://github.com/virajchhayani?tab=repositories" target="_blank" className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        View all repositories <ArrowUpRight className="w-4 h-4" />
                    </a>
                </motion.div>

                {/* Mobile Swipe Carousel */}
                <div className="md:hidden relative">
                    <div className="overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "tween", duration: 0.25, ease: "easeOut" },
                                    opacity: { duration: 0.15 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={handleDragEnd}
                                className="cursor-grab active:cursor-grabbing touch-pan-y"
                            >
                                <ProjectCard project={projects[currentIndex]} index={currentIndex} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Carousel Navigation */}
                    <div className="flex justify-center items-center gap-4 mt-6">
                        <button
                            onClick={() => paginate(-1)}
                            disabled={currentIndex === 0}
                            className="p-3 rounded-full border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div className="flex gap-2">
                            {projects.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-colors touch-manipulation ${idx === currentIndex ? "bg-green-400" : "bg-white/20"
                                        }`}
                                    aria-label={`Go to project ${idx + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={() => paginate(1)}
                            disabled={currentIndex === projects.length - 1}
                            className="p-3 rounded-full border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                            aria-label="Next project"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <a
                        href="https://github.com/virajchhayani"
                        target="_blank"
                        className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white font-medium flex items-center gap-2 min-h-[44px] touch-manipulation"
                    >
                        And many more <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}

interface ProjectCardProps {
    project: typeof projects[0];
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
        >
            <a href={project.link} target="_blank">
                <div className={`relative h-[250px] md:h-[300px] w-full rounded-3xl overflow-hidden mb-6 border border-white/5 group-hover:border-green-400/50 transition-colors`}>
                    {/* Image */}
                    <div className="absolute inset-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    </div>

                    {/* Content overlay */}
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                        <div className={`w-12 h-12 rounded-full ${project.color} flex items-center justify-center mb-4 text-white`}>
                            <Github className="w-6 h-6" />
                        </div>
                        <p className="text-sm text-white/70 line-clamp-2">{project.description}</p>
                    </div>
                </div>

                <div className="flex justify-between items-start px-2">
                    <div>
                        <h3 className="text-2xl font-semibold mb-1 group-hover:text-green-400 transition-colors">{project.title}</h3>
                        <p className="text-gray-400">{project.category}</p>
                        
                        {/* Business Results */}
                        <div className="mt-3 space-y-2">
                            <h4 className="text-white font-semibold mb-2 text-sm">Key Results:</h4>
                            <ul className="space-y-1">
                                {project.results.map((result, resultIndex) => (
                                    <li key={resultIndex} className="flex items-center text-xs text-gray-300">
                                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                                        <span>{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="p-3 rounded-full border border-white/10 group-hover:bg-green-400 group-hover:border-green-400 transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
            </a>
        </motion.div>
    );
}