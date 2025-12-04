export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="text-2xl font-bold text-white tracking-tighter mb-6">
                            COMBAT<span className="text-vivid-red">GYM</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            The premier combat sports facility dedicated to forging champions in life and in the ring.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholders */}
                            <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-vivid-red transition-colors cursor-pointer"></div>
                            <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-vivid-red transition-colors cursor-pointer"></div>
                            <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-vivid-red transition-colors cursor-pointer"></div>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Company</h4>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Programs</h4>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Boxing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Muay Thai</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Jiu-Jitsu</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Private Training</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Newsletter</h4>
                        <p className="text-gray-500 text-sm mb-4">Subscribe for the latest updates and training tips.</p>
                        <div className="flex">
                            <input type="email" placeholder="Email Address" className="bg-gray-900 border-none text-white px-4 py-2 w-full focus:ring-1 focus:ring-vivid-red outline-none" />
                            <button className="bg-vivid-red px-4 py-2 font-bold uppercase text-sm hover:bg-red-700 transition-colors">
                                Go
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>&copy; 2024 CombatGym. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
