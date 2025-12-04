'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Intro() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section ref={containerRef} className="relative w-full py-32 bg-white overflow-hidden">
            {/* Marquee Text Background */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full opacity-5 pointer-events-none whitespace-nowrap">
                <motion.div style={{ x }} className="text-[20vw] font-black uppercase leading-none text-black">
                    Discipline • Power • Respect • Discipline • Power • Respect
                </motion.div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-6xl md:text-8xl font-black text-black uppercase leading-[0.9] mb-8">
                                We Are <br /> <span className="text-vivid-red">Warriors</span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-md">
                                Forget everything you know about fitness. We don't just train bodies; we forge spirits. Enter a realm where your only competition is the person you were yesterday.
                            </p>
                            <button className="group relative px-8 py-4 bg-black text-white font-bold uppercase tracking-wider overflow-hidden">
                                <span className="relative z-10 group-hover:text-black transition-colors duration-300">Our Philosophy</span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </button>
                        </motion.div>
                    </div>

                    <div className="relative flex justify-center">
                        <motion.div
                            style={{ rotate }}
                            className="absolute inset-0 m-auto w-[500px] h-[500px] border-[1px] border-black/10 rounded-full"
                        />
                        <motion.div
                            style={{ rotate: useTransform(scrollYProgress, [0, 1], [360, 0]) }}
                            className="absolute inset-0 m-auto w-[400px] h-[400px] border-[1px] border-vivid-red/20 rounded-full"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full h-[600px]"
                        >
                            <Image
                                src="/images/intro_athlete_kick_1764807052100.png"
                                alt="Athlete"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
