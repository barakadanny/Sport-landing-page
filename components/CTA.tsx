'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function CTA() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Magnetic Button Logic
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.3;
        const y = (clientY - (top + height / 2)) * 0.3;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <section ref={containerRef} className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
            >
                <Image
                    src="/images/cta_dark_gritty.png"
                    alt="Dark Gritty Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90" />
                <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
                <motion.h2
                    style={{ opacity }}
                    className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-12 relative leading-none"
                >
                    <span className="block text-4xl md:text-6xl mb-4 opacity-80">Unleash</span>
                    <span className="block text-[12rem] md:text-[16rem] leading-[0.8] text-vivid-red mix-blend-screen filter drop-shadow-[0_0_30px_rgba(255,30,30,0.6)]">YOUR</span>
                    <span className="block text-4xl md:text-6xl mt-4 opacity-80">Potential</span>
                </motion.h2>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-16 py-6 bg-vivid-red text-white font-black uppercase text-2xl tracking-widest hover:bg-red-600 transition-colors duration-300 shadow-[0_0_20px_rgba(255,30,30,0.4)]"
                >
                    Start Your Journey
                </motion.button>
            </div>

            {/* Speed Lines Overlay (CSS) */}
            <div className="absolute inset-0 pointer-events-none opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        </section>
    );
}
