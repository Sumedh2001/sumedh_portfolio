"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 75;

export function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [renderTrigger, setRenderTrigger] = useState(0);

    // Scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Preload Images
    useEffect(() => {
        const loadFrame = (index: number) => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                const fileIndex = index.toString().padStart(2, "0");
                img.src = `/sequence/frame_${fileIndex}_delay-0.066s.png`;
                img.onload = () => {
                    imagesRef.current[index] = img;
                    if (index === 0 || index % 5 === 0 || index === FRAME_COUNT - 1) {
                        setRenderTrigger(prev => prev + 1);
                    }
                    resolve();
                };
                img.onerror = () => resolve();
            });
        };

        const loadSequence = async () => {
            // Load first frame instantly
            await loadFrame(0);

            // Load next 5 frames sequentially
            for (let i = 1; i <= 5; i++) {
                await loadFrame(i);
            }

            // Load the rest concurrently in small batches
            const remaining = [];
            for (let i = 6; i < FRAME_COUNT; i++) remaining.push(i);

            const batchSize = 5;
            for (let i = 0; i < remaining.length; i += batchSize) {
                const batch = remaining.slice(i, i + batchSize);
                await Promise.all(batch.map(idx => loadFrame(idx)));
            }
        };

        loadSequence();
    }, []);

    const drawImage = useCallback((targetIndex: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let img = imagesRef.current[targetIndex];

        // Fallback to closest loaded frame if not loaded
        if (!img || !img.complete) {
            let found = false;
            for (let i = targetIndex - 1; i >= 0; i--) {
                if (imagesRef.current[i] && imagesRef.current[i].complete) {
                    img = imagesRef.current[i];
                    found = true;
                    break;
                }
            }
            if (!found) {
                for (let i = targetIndex + 1; i < FRAME_COUNT; i++) {
                    if (imagesRef.current[i] && imagesRef.current[i].complete) {
                        img = imagesRef.current[i];
                        break;
                    }
                }
            }
        }

        if (!img || !img.complete) return;

        // Set canvas internal resolution to window size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Object-fit: cover calculation
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
            drawHeight = canvas.width / imgRatio;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }, [renderTrigger]);

    // Draw exactly when scroll changes
    useMotionValueEvent(currentIndex, "change", (latest) => {
        const frameIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latest)));
        drawImage(frameIndex);
    });

    // Handle Resize and Initial Draw
    useEffect(() => {
        const handleResize = () => {
            const currentFrame = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(currentIndex.get())));
            drawImage(currentFrame);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [currentIndex, drawImage]);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full"
                />
            </div>
        </div>
    );
}
