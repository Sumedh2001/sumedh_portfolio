"use client";

import { motion } from "framer-motion";

export function Experience() {
    const experiences = [
        {
            company: "BKUK Group",
            location: "London, UK",
            role: "Data Analyst",
            period: "02/2025 – Present",
            achievements: [
                "Architected and tracked patterns based on data usage and trends to pinpoint specific areas for improvement.",
                "Engineered comprehensive dashboards and data comparisons to identify emerging trends and market opportunities.",
                "Translated online survey datasets into statistical reports to guide senior management decision-making.",
            ],
        },
        {
            company: "Pizza Hut",
            location: "London, UK",
            role: "Shift Manager",
            period: "03/2024 – 08/2024",
            achievements: [
                "Modernized departmental workflows by aligning local practices with corporate standards to maximize service speed.",
                "Led a diverse team in a high-pressure environment, consistently exceeding customer experience benchmarks.",
            ],
        },
    ];

    return (
        <section className="relative z-20 bg-[#121212] w-full py-32 px-[5%] md:px-[10%] text-white border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Experience
                    </h2>
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
                </motion.div>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline dot for desktop or mobile */}
                            <div className="hidden md:block absolute left-[-41px] top-2 w-[11px] h-[11px] rounded-full bg-white/50 ring-4 ring-[#121212]" />

                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
                                    <div className="text-lg text-zinc-300 font-medium">
                                        {exp.company} <span className="text-zinc-600 px-2">•</span> {exp.location}
                                    </div>
                                </div>
                                <div className="mt-2 md:mt-0 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide text-zinc-400 self-start md:self-auto">
                                    {exp.period}
                                </div>
                            </div>

                            <ul className="space-y-3 text-zinc-400 text-lg leading-relaxed list-none">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="relative pl-6">
                                        <span className="absolute left-0 top-[10px] w-2 h-[2px] bg-white/20" />
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    <div className="hidden md:block absolute left-[5%] md:left-[10%] top-[250px] bottom-32 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent pointer-events-none" style={{ marginLeft: "auto" }} />
                </div>
            </div>
        </section>
    );
}
