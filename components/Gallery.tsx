'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const classes = [
    { name: 'Boxing', image: '/images/gallery_boxing_class_1764807106818.png', id: '01' },
    { name: 'Muay Thai', image: '/images/gallery_muay_thai_1764807152799.png', id: '02' },
    { name: 'Jiu-Jitsu', image: '/images/gallery_bjj_class_1764807131134.png', id: '03' },
    { name: 'Strength', image: '/images/gallery_boxing_class_1764807106818.png', id: '04' },
];

export default function Gallery() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-0">
                    {classes.map((cls) => (
                        <div key={cls.id} className="relative h-screen w-screen flex-shrink-0 flex items-center justify-center overflow-hidden group">
                            <motion.div
                                className="absolute inset-0"
                                style={{ scale: 1.1 }}
                            >
                                <Image
                                    src={cls.image}
                                    alt={cls.name}
                                    fill
                                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                            <div className="relative z-10 text-center">
                                <span className="block text-vivid-red text-xl font-bold tracking-widest mb-4">{cls.id}</span>
                                <h3 className="text-[10vw] font-black text-white uppercase leading-none mix-blend-difference">{cls.name}</h3>
                                <motion.button
                                    whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
                                    className="mt-8 px-8 py-3 border border-white/30 text-white uppercase tracking-widest transition-colors"
                                >
                                    View Class
                                </motion.button>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
