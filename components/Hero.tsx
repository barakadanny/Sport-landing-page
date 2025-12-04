'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    const textVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 1,
                ease: [0.22, 1, 0.36, 1] as any
            }
        })
    };

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">

            {/* Parallax Background Image */}
            <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_combat_athletes_1764807034186.png"
                    alt="Hero"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
            </motion.div>

            {/* Kinetic Typography */}
            <div className="relative z-10 w-full px-6 md:px-12 flex flex-col items-center justify-center text-center">
                <div className="overflow-hidden">
                    <motion.h1
                        custom={0}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ opacity }}
                        className="text-[15vw] leading-[0.8] font-black text-white uppercase tracking-tighter mix-blend-overlay select-none"
                    >
                        Fight
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h1
                        custom={1}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ opacity }}
                        className="text-[15vw] leading-[0.8] font-black text-transparent text-outline uppercase tracking-tighter select-none"
                    >
                        Club
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-12 flex flex-col items-center"
                >
                    <p className="text-white/80 text-lg md:text-xl uppercase tracking-[0.5em] mb-8">Redefine Your Limits</p>
                    <div className="h-24 w-[1px] bg-gradient-to-b from-vivid-red to-transparent"></div>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-12 hidden md:block z-20"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white text-xs">01</div>
                    <span className="text-white/50 text-xs uppercase tracking-widest">Scroll to Explore</span>
                </div>
            </motion.div>
        </section>
    );
}
