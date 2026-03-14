"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
    const projects = [
        {
            title: "Insurance Data Analysis",
            role: "Educational Assignment",
            description: "Developed an interactive Power BI dashboard to track financial trends and risk factors based on complex insurance datasets.",
            link: "#",
            tags: ["Power BI", "Data Visualization", "Financial Trends"],
        },
        {
            title: "AR Gardening Game",
            role: "Educational Assignment",
            description: "Created an AR-based mobile game for elderly care using Unity, C#, and Python, integrating real-time weather data to influence gameplay mechanics.",
            link: "#",
            tags: ["Python", "Unity", "C#"],
        },
        {
            title: "Travel Management System",
            role: "Educational Assignment",
            description: "Built a web application using SQL, PHP, and JavaScript to automate agency operations and process real-time travel bookings.",
            link: "#",
            tags: ["SQL", "JavaScript", "HTML/CSS"],
        },
    ];

    return (
        <section className="relative z-20 bg-[#121212] w-full min-h-screen py-32 px-[5%] md:px-[10%] text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Selected Work
                    </h2>
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden hover:bg-white/[0.05] transition-colors duration-500"
                        >
                            {/* Subtle gradient hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                        <p className="text-sm text-zinc-400 font-medium tracking-wider uppercase">
                                            {project.role}
                                        </p>
                                    </div>
                                    <a
                                        href={project.link}
                                        className="p-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 text-white"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                </div>

                                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-4 py-1.5 rounded-full bg-black/50 border border-white/10 text-xs font-medium tracking-wide text-zinc-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
