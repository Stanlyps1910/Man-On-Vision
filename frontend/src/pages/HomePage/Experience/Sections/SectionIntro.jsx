import React from 'react';
import { motion } from 'framer-motion';

const SectionIntro = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-center px-4"
            >
                <span className="text-orange-600 font-bold uppercase tracking-[0.8em] text-[10px] mb-6 block">The Premiere</span>
                <h2 className="text-7xl md:text-[14rem] font-serif text-white mb-4 tracking-tighter leading-none">
                    M.O.V
                </h2>
                <p className="text-stone-500 uppercase tracking-[1em] text-[10px] md:text-xs font-black">
                    Man On Vision Studios
                </p>
            </motion.div>
            
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
                <div className="w-[1px] h-16 bg-gradient-to-b from-orange-600 to-transparent" />
                <span className="text-[8px] uppercase tracking-[0.5em] text-stone-600 font-bold animate-pulse">Scroll to Explore</span>
            </div>
        </section>
    );
};

export default SectionIntro;
