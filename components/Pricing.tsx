'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';

export default function Pricing() {
    const [selected, setSelected] = useState(1); // Default to Monthly (index 1)

    return (
        <section className="w-full bg-white py-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[0.8] mb-12">
                            Start <br /> Your <br /> Journey
                        </h2>
                        <p className="text-xl text-gray-500 max-w-md mb-12">
                            Choose the plan that fits your goals. No hidden fees, no contracts, just results.
                        </p>
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
