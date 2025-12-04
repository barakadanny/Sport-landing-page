'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
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

                    <div className="space-y-4">
                        {[
                            { name: 'Drop In', price: '$25', period: '/class' },
                            { name: 'Monthly', price: '$149', period: '/month', featured: true },
                            { name: 'Yearly', price: '$1200', period: '/year' },
                        ].map((plan, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`p-8 border ${plan.featured ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-200'} flex items-center justify-between hover:scale-[1.02] transition-transform duration-300 cursor-pointer group`}
                            >
                                <div>
                                    <h3 className="text-2xl font-black uppercase mb-1">{plan.name}</h3>
                                    <div className="flex items-center gap-2 text-sm opacity-60">
                                        <Check size={16} />
                                        <span>Full Access</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className={`text-4xl font-black ${plan.featured ? 'text-vivid-red' : 'text-black'}`}>{plan.price}</span>
                                    <span className="text-xs font-bold uppercase tracking-widest block opacity-50">{plan.period}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
