import { ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                    {/* Brand / Mission */}
                    <div className="md:col-span-4">
                        <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">
                            Combat<span className="text-vivid-red">Gym</span>
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                            Forging champions through discipline, pain, and perseverance. The only easy day was yesterday.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-2">
                        <h4 className="font-bold uppercase tracking-widest text-sm text-gray-500 mb-8">Explore</h4>
                        <ul className="space-y-4 text-lg font-medium">
                            <li><a href="#" className="hover:text-vivid-red transition-colors">Classes</a></li>
                            <li><a href="#" className="hover:text-vivid-red transition-colors">Coaches</a></li>
                            <li><a href="#" className="hover:text-vivid-red transition-colors">Schedule</a></li>
                            <li><a href="#" className="hover:text-vivid-red transition-colors">Membership</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold uppercase tracking-widest text-sm text-gray-500 mb-8">Company</h4>
                        <ul className="space-y-4 text-lg font-medium">
                            <li><a href="#" className="hover:text-vivid-red transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-vivid-red transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-vivid-red transition-colors">Press</a></li>
                            <li><a href="#" className="hover:text-vivid-red transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-4">
                        <h4 className="font-bold uppercase tracking-widest text-sm text-gray-500 mb-8">Join the Ranks</h4>
                        <div className="flex border-b border-white/20 pb-4 group focus-within:border-vivid-red transition-colors">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-none text-white text-xl w-full focus:ring-0 placeholder-gray-600 outline-none"
                            />
                            <button className="text-gray-400 group-focus-within:text-vivid-red transition-colors">
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-12">
                    <div className="text-sm text-gray-600 space-x-6 mb-8 md:mb-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>

                    {/* Giant Text */}
                    <div className="w-full md:w-auto text-center md:text-right">
                        <h1 className="text-[12vw] md:text-[10vw] font-black uppercase leading-[0.8] tracking-tighter text-white/5 select-none pointer-events-none">
                            Combat
                        </h1>
                    </div>
                </div>
            </div>
        </footer>
    );
}
