'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 flex items-center gap-12 shadow-2xl">
          <Link href="/" className="text-xl font-black text-white tracking-tighter">
            C<span className="text-vivid-red">G</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {['Classes', 'Trainers', 'Membership', 'Contact'].map((item) => (
              <Link key={item} href="#" className="text-sm font-bold uppercase text-gray-300 hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-vivid-red transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <button className="bg-vivid-red text-white px-6 py-2 rounded-full font-bold uppercase text-xs tracking-wider hover:bg-red-600 transition-colors">
            Join
          </button>
        </div>
      </motion.nav>
    </>
  );
}
