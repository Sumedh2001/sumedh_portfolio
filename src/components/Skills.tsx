"use client";

import { motion } from "framer-motion";

export function Skills() {
    const categories = [
        {
            title: "Data Visualization",
            skills: ["Power BI", "Tableau", "Advanced Excel", "Pivot Tables", "Power Query"],
        },
        {
            title: "Programming",
            skills: ["Python (Pandas, NumPy, Matplotlib)", "R", "SQL", "HTML/CSS", "JavaScript (Basic)", "C#"],
        },
        {
            title: "Machine Learning & AI",
            skills: ["Predictive Modelling", "Regression", "Prompt Engineering", "ChatGPT/Gemini/Claude"],
        },
        {
            title: "Platform & Tools",
            skills: ["AWS (Basics)", "n8n", "Unity"],
        },
    ];

    return (
        <section className="relative z-20 bg-[#121212] w-full py-32 px-[5%] md:px-[10%] text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Technical Arsenal
                    </h2>
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors duration-500"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-white/90">
                                {category.title}
                            </h3>
                            <ul className="space-y-4">
                                {category.skills.map((skill, i) => (
                                    <li key={i} className="flex items-center text-zinc-400 font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-3 group-hover:bg-white/50 transition-colors duration-500" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
