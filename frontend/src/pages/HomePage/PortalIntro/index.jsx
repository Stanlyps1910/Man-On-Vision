import React from 'react';
import { motion } from 'framer-motion';

const PortalIntro = ({ onStart }) => {
    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-stone-950 text-white cursor-pointer select-none overflow-hidden"
            onClick={onStart}
        >
            {/* Subtle radial glow behind the logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, rgba(236,72,153,0.04) 40%, transparent 70%)',
                    }}
                />
            </div>

            {/* Subtle grain texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center"
            >
                {/* Logo Icon with gentle breathing animation */}
                <motion.div
                    animate={{ 
                        scale: [1, 1.02, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                >
                    {/* Pulsing ring behind logo */}
                    <motion.div 
                        className="absolute -inset-8 md:-inset-12 border border-white/[0.04] rounded-full"
                        animate={{ scale: [1, 1.15], opacity: [0.6, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                    />
                    <motion.div 
                        className="absolute -inset-8 md:-inset-12 border border-white/[0.03] rounded-full"
                        animate={{ scale: [1, 1.25], opacity: [0.4, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
                    />

                    <img 
                        src="/assets/MOV-portal.png" 
                        alt="Man On Vision" 
                        className="w-[120px] md:w-[200px] h-auto object-contain drop-shadow-[0_0_60px_rgba(249,115,22,0.25)]"
                    />
                </motion.div>

                {/* Brand Text */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                    className="mt-10 md:mt-14 text-center"
                >
                    <h1 
                        className="text-lg md:text-2xl font-bold tracking-[0.4em] uppercase text-white"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                        MAN ON VISION
                    </h1>
                    <p 
                        className="text-[9px] md:text-[11px] tracking-[0.6em] uppercase mt-2 text-stone-500 font-medium"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                        ENTERTAINMENT
                    </p>
                </motion.div>

                {/* Enter Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    className="mt-14 md:mt-16"
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onStart();
                        }}
                        className="group relative px-12 py-4 overflow-hidden rounded-full border border-white/10 hover:border-white/25 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        <span 
                            className="relative z-10 text-[9px] md:text-[10px] tracking-[0.5em] uppercase font-semibold text-white/70 group-hover:text-stone-950 transition-colors duration-500"
                            style={{ fontFamily: '"Inter", sans-serif' }}
                        >
                            Enter the Vision
                        </span>
                    </button>
                </motion.div>
            </motion.div>

            {/* Bottom Tagline */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden">
                <motion.p 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 2.2 }}
                    className="text-[8px] tracking-[0.6em] text-stone-700 uppercase"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                >
                    Est. MMXXIV
                </motion.p>
            </div>
        </motion.div>
    );
};

export default PortalIntro;
