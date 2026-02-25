"use client";

import { motion } from "framer-motion";
import { Code, Cloud, Lock, Globe, Eye } from "lucide-react";

const Technologies = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      items: [
        { name: "React.js", icon: "⚛️" },
        { name: "Vue.js", icon: "💚" },
        { name: "Angular", icon: "🅰️" },
        { name: "Next.js", icon: "▲" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "TypeScript", icon: "📘" }
      ],
      className: "md:col-span-2 bg-neutral-900/50 border-neutral-800",
    },
    {
      category: "Backend Development",
      icon: <Code className="w-6 h-6" />,
      items: [
        { name: "Node.js", icon: "💚" },
        { name: "Python", icon: "🐍" },
        { name: "PHP", icon: "🐘" },
        { name: "Java", icon: "☕" },
        { name: "C#", icon: "🔷" },
        { name: "Go", icon: "�" }
      ],
      className: "md:col-span-2 bg-neutral-900/50 border-neutral-800",
    },
    {
      category: "Mobile Development",
      icon: <Cloud className="w-6 h-6" />,
      items: [
        { name: "React Native", icon: "📱" },
        { name: "Flutter", icon: "🦋" },
        { name: "iOS (Swift)", icon: "🍎" },
        { name: "Android (Kotlin)", icon: "🤖" },
        { name: "Ionic", icon: "⚡" },
        { name: "Xamarin", icon: "🔷" }
      ],
      className: "md:col-span-2 bg-neutral-900/50 border-neutral-800",
    },
    {
      category: "Database Technologies",
      icon: <Globe className="w-6 h-6" />,
      items: [
        { name: "MySQL", icon: "🐬" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "📊" },
        { name: "Firebase", icon: "🔥" },
        { name: "SQLite", icon: "💎" }
      ],
      className: "md:col-span-2 bg-neutral-900/50 border-neutral-800",
    },
    {
      category: "Security Testing Tools",
      icon: <Eye className="w-6 h-6" />,
      items: [
        { name: "Metasploit", icon: "🛡️" },
        { name: "Burp Suite", icon: "🔍" },
        { name: "OWASP ZAP", icon: "⚡" },
        { name: "Nmap", icon: "🌐" },
        { name: "Wireshark", icon: "📊" },
        { name: "Nessus", icon: "🔎" }
      ],
      className: "md:col-span-2 bg-indigo-900/20 border-indigo-500/20",
    },
    {
      category: "Security & Compliance",
      icon: <Lock className="w-6 h-6" />,
      items: [
        { name: "SSL/TLS", icon: "🔒" },
        { name: "OAuth 2.0", icon: "🔑" },
        { name: "JWT", icon: "🎫" },
        { name: "GDPR", icon: "🇪🇺" },
        { name: "PCI DSS", icon: "💳" }
      ],
      className: "md:col-span-2 bg-emerald-900/20 border-emerald-500/20",
    }
  ];

  return (
    <section id="technologies" className="py-20 px-4 md:px-10 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Development Technologies & Security Tools</h2>
          <p className="text-gray-300 max-w-3xl">
            Full-stack development expertise combined with advanced cybersecurity tools and frameworks for building secure applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-3xl border flex flex-col justify-between group hover:border-green-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300 ${skill.className}`}
            >
              <div className="flex justify-between items-start">
                <div className="p-2 bg-white/5 rounded-full text-green-400 group-hover:bg-green-400 group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative group/tooltip"
                    >
                      <span className="text-sm text-gray-300 bg-white/5 px-3 py-1.5 rounded-md flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default">
                        <span className="text-lg">{item.icon}</span>
                        {item.name}
                      </span>

                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-neutral-800 text-white text-xs rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 z-20">
                        {item.name}
                        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 rotate-45 border-b border-r border-white/10"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Technology Expertise Overview</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Security Tools</div>
                <div className="text-gray-500 text-sm">Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
                <div className="text-gray-300">Programming Languages</div>
                <div className="text-gray-500 text-sm">Proficient</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">10+</div>
                <div className="text-gray-300">Cloud Platforms</div>
                <div className="text-gray-500 text-sm">Certified</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">25+</div>
                <div className="text-gray-300">Compliance Standards</div>
                <div className="text-gray-500 text-sm">Implemented</div>
              </div>
            </div>
          </div>
        </motion.div>

        </div>
    </section>
  );
};

export default Technologies;