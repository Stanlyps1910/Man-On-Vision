import React from 'react';
import { motion } from 'framer-motion';

const PortalIntro = ({ onEnter }) => {
    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-stone-950 text-white"
        >
            {/* Background Grain/Noise could be added here */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="text-center relative z-10"
            >
                <div className="mb-12 relative">
                    <motion.h1 
                        animate={{ 
                            opacity: [0.5, 1, 0.5],
                            scale: [0.98, 1, 0.98]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="text-6xl md:text-8xl font-serif tracking-[0.4em] text-white"
                    >
                        M.O.V
                    </motion.h1>
                    <motion.div 
                        className="absolute -inset-4 border border-white/5 rounded-full"
                        animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>

                <p className="text-stone-500 tracking-[0.8em] text-[10px] uppercase mb-16 font-medium">
                    Entertainment Production House
                </p>
                
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onEnter}
                    className="group relative px-12 py-5 overflow-hidden rounded-full border border-white/10"
                >
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 text-[10px] tracking-[0.5em] uppercase font-bold group-hover:text-stone-950 transition-colors duration-500">
                        Click to Enter
                    </span>
                </motion.button>
            </motion.div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 overflow-hidden">
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-[8px] tracking-[0.6em] text-stone-600 uppercase"
                >
                    Est. MMXXIV
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PortalIntro;
