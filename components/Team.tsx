'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const coaches = [
    { name: 'Alex', role: 'Boxing', image: '/images/featured_athlete_portrait_1764807085451.png' },
    { name: 'Sarah', role: 'Muay Thai', image: '/images/featured_athlete_portrait_1764807085451.png' },
    { name: 'Marcus', role: 'Strength', image: '/images/featured_athlete_portrait_1764807085451.png' },
];

export default function Team() {
    return (
        <section className="w-full bg-[#111] py-20">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex items-end justify-between mb-18 border-b border-white/10 pb-8"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Elite <br /> Squad</h2>
                    <div className="text-right hidden md:block">
                        <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
                            Learn from world-class athletes who have competed at the highest levels.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {coaches.map((coach, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            whileHover={{ y: -20 }}
                            className="group relative h-[450px] bg-black border border-white/5 overflow-hidden"
                        >
                            <Image
                                src={coach.image}
                                alt={coach.name}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

                            <div className="absolute bottom-0 left-0 w-full p-8">
                                <h3 className="text-4xl font-black text-white uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{coach.name}</h3>
                                <p className="text-vivid-red font-bold uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{coach.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
