'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 50 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 50 && isScrolled) {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          width: isScrolled ? "auto" : "100%",
          top: isScrolled ? "2rem" : "0rem",
          borderRadius: isScrolled ? "9999px" : "0px",
          background: isScrolled ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
          border: isScrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
          padding: isScrolled ? "1rem 2rem" : "1.5rem 3rem",
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], type: "spring", stiffness: 200, damping: 25 }}
        className="fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between backdrop-blur-md"
        style={{
          maxWidth: isScrolled ? "90%" : "100%",
        }}
      >
        <Link href="/" className="text-xl font-black text-white tracking-tighter shrink-0">
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

        <button className="bg-vivid-red text-white px-6 py-2 rounded-full font-bold uppercase text-xs tracking-wider hover:bg-red-600 transition-colors shrink-0">
          Join
        </button>
      </motion.nav>
    </>
  );
}
