import React from 'react';
import { motion } from 'framer-motion';

const SectionConnect = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-white">
            <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                className="text-center"
            >
                <h2 className="text-7xl md:text-[10rem] font-serif mb-16 tracking-tighter leading-none italic">
                    Let's <span className="text-orange-600">Create</span>
                </h2>
                <div className="flex gap-8 justify-center">
                    <button className="px-12 py-5 bg-white text-stone-950 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all">
                        Start Production
                    </button>
                    <button className="px-12 py-5 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-stone-950 transition-all">
                        Contact Studio
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default SectionConnect;
