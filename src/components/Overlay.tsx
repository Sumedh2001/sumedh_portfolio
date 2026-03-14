"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Opacity transitions based on scroll depths
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);

    // Parallax Y transitions
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.75], [50, -50]);

    return (
        <div
            ref={containerRef}
            className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10"
        >
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-[5%] md:px-[10%]">
                {/* Section 1 (0% scroll) */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-x-0 top-1/2 -translate-y-[60%] flex flex-col items-center text-center w-full pointer-events-auto"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4">
                        Sumedh Acharya
                    </h1>
                    <p className="text-xl md:text-3xl text-zinc-400 font-light tracking-wide mb-8">
                        Data Analyst.
                    </p>
                    <a
                        href="/SUMEDH ACHARYA 1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium tracking-wide backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
                    >
                        <span>View Resume</span>
                        <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </motion.div>

                {/* Section 2 (30% scroll) */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 max-w-2xl"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                        I turn data into decisions.
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-zinc-400 font-light">
                        Extracting actionable insights from complex datasets to drive business growth.
                    </p>
                </motion.div>

                {/* Section 3 (60% scroll) */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 max-w-2xl text-right"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                        Bridging numbers <br /> & strategy.
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-zinc-400 font-light ml-auto">
                        From predictive modeling to interactive dashboards, I bring clarity to chaos.
                    </p>
                    <div className="mt-12 flex flex-col gap-2 text-zinc-300 font-medium">
                        <a href="mailto:sumedh.india2025@gmail.com" className="hover:text-white transition-colors">✉️ sumedh.india2025@gmail.com</a>
                        <p>📞 +91 8380899423</p>
                        <p>📍 Pune, Maharashtra</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
