'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';

const planDetails = [
    {
        title: "Just Passing Through?",
        description: "Perfect for travelers or those wanting to test the waters before diving in.",
        features: ["Access to any single class", "Equipment rental included", "No commitment required"]
    },
    {
        title: "Commit to Greatness",
        description: "The most popular choice for consistent training. Build your skills day by day.",
        features: ["Unlimited classes", "Open gym access", "10% off merchandise", "2 Guest passes / month"]
    },
    {
        title: "All In. No Excuses.",
        description: "For the dedicated athlete ready to transform. Maximum value for maximum effort.",
        features: ["Everything in Monthly", "2 Free PT sessions", "Exclusive gear pack", "Priority workshop booking"]
    }
];

export default function Pricing() {
    const [selected, setSelected] = useState(1); // Default to Monthly (index 1)

    return (
        <section className="w-full bg-white py-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="h-[400px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selected}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-6xl md:text-7xl font-black text-black uppercase tracking-tighter leading-[0.9] mb-8"
                                >
                                    {planDetails[selected].title}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-xl text-gray-500 max-w-md mb-8"
                                >
                                    {planDetails[selected].description}
                                </motion.p>
                                <div className="space-y-4">
                                    {planDetails[selected].features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + (i * 0.1) }}
                                            className="flex items-center gap-3 text-black font-bold"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-vivid-red flex items-center justify-center text-white">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            {feature}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="space-y-4 relative">
                        {[
                            { name: 'Drop In', price: '$25', period: '/class' },
                            { name: 'Monthly', price: '$149', period: '/month' },
                            { name: 'Yearly', price: '$1200', period: '/year' },
                        ].map((plan, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelected(idx)}
                                className={`relative p-8 border border-gray-200 flex items-center justify-between cursor-pointer group overflow-hidden rounded-xl transition-colors duration-300 ${selected === idx ? 'border-transparent' : 'hover:border-gray-300'}`}
                            >
                                {selected === idx && (
                                    <motion.div
                                        layoutId="water-bg"
                                        className="absolute inset-0 bg-black"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 250, damping: 25, mass: 1 }}
                                    >
                                        {/* Optional: Add a subtle texture or gradient to make it look more like 'liquid' material */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-black opacity-80"></div>
                                    </motion.div>
                                )}

                                <div className="relative z-10">
                                    <motion.h3
                                        animate={{ color: selected === idx ? '#ffffff' : '#000000' }}
                                        className="text-2xl font-black uppercase mb-1"
                                    >
                                        {plan.name}
                                    </motion.h3>
                                    <motion.div
                                        animate={{ color: selected === idx ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)' }}
                                        className="flex items-center gap-2 text-sm"
                                    >
                                        <Check size={16} />
                                        <span>Full Access</span>
                                    </motion.div>
                                </div>
                                <div className="text-right relative z-10">
                                    <motion.span
                                        animate={{ color: selected === idx ? '#FF1E1E' : '#000000' }}
                                        className="text-4xl font-black block"
                                    >
                                        {plan.price}
                                    </motion.span>
                                    <motion.span
                                        animate={{ color: selected === idx ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}
                                        className="text-xs font-bold uppercase tracking-widest block"
                                    >
                                        {plan.period}
                                    </motion.span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
