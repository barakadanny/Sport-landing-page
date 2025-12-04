'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Featured() {
    return (
        <section className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden py-24">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2 mb-12 md:mb-0">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-7xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter text-black mb-12"
                        >
                            Forged <br /> In <span className="text-outline-red text-transparent">Fire</span>
                        </motion.h2>

                        <div className="grid grid-cols-2 gap-12 max-w-md">
                            {[
                                { label: 'Champions', value: '50+' },
                                { label: 'Coaches', value: '15' },
                                { label: 'Access', value: '24/7' },
                                { label: 'Results', value: '100%' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                >
                                    <div className="text-4xl font-black text-vivid-red mb-1">{stat.value}</div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-gray-500">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative h-[800px]">
                        <motion.div
                            initial={{ clipPath: 'inset(100% 0 0 0)' }}
                            whileInView={{ clipPath: 'inset(0 0 0 0)' }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0"
                        >
                            <Image
                                src="/images/featured_athlete_portrait_1764807085451.png"
                                alt="Featured"
                                fill
                                className="object-cover grayscale contrast-125"
                            />
                            {/* Text Mask Effect Overlay */}
                            <div className="absolute inset-0 bg-vivid-red mix-blend-multiply opacity-20"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
