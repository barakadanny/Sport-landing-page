'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { MouseEvent } from 'react';

const coaches = [
    {
        name: 'Alex',
        role: 'Boxing',
        image: '/images/featured_athlete_portrait_1764807085451.png',
        stats: { exp: '12 Yrs', fights: '45', wins: '42' }
    },
    {
        name: 'Sarah',
        role: 'Muay Thai',
        image: '/images/featured_athlete_portrait_1764807085451.png',
        stats: { exp: '8 Yrs', fights: '28', wins: '25' }
    },
    {
        name: 'Marcus',
        role: 'Strength',
        image: '/images/featured_athlete_portrait_1764807085451.png',
        stats: { exp: '15 Yrs', clients: '500+', certs: 'CSCS' }
    },
];

function CoachCard({ coach, index }: { coach: any, index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onMouseMove={handleMouseMove}
            className="group relative h-[500px] bg-black border border-white/10 overflow-hidden"
        >
            <Image
                src={coach.image}
                alt={coach.name}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
            />

            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255, 30, 30, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                <div className="overflow-hidden">
                    <h3 className="text-5xl font-black text-white uppercase mb-2 translate-y-0 transition-transform duration-500">{coach.name}</h3>
                </div>
                <p className="text-vivid-red font-bold uppercase tracking-widest text-sm mb-6">{coach.role}</p>

                {/* Stats Reveal */}
                <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {Object.entries(coach.stats).map(([key, value], i) => (
                        <div key={i}>
                            <div className="text-xl font-black text-white">{value as string}</div>
                            <div className="text-[10px] uppercase tracking-wider text-gray-500">{key}</div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Team() {
    return (
        <section className="w-full bg-[#050505] py-20">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex items-end justify-between mb-18 border-b border-white/10 pb-8"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Elite <br /> Squad</h2>
                    <div className="text-right hidden md:block">
                        <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
                            Forged in the fires of competition. <br /> Ready to mold you into a champion.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {coaches.map((coach, idx) => (
                        <CoachCard key={idx} coach={coach} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
