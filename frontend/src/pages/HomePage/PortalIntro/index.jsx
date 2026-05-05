import React from 'react';
import { motion } from 'framer-motion';

const PortalIntro = ({ onStart }) => {
    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-stone-950 text-white"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="text-center"
            >
                <h1 className="text-4xl md:text-6xl font-serif tracking-[0.3em] mb-4">MAN ON VISION</h1>
                <p className="text-orange-500 tracking-[0.5em] text-[10px] md:text-xs mb-12 uppercase">The Wedding Artist</p>
                
                <motion.button
                    whileHover={{ scale: 1.05, letterSpacing: "0.6em" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onStart}
                    className="px-12 py-4 border border-white/20 rounded-full text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-stone-950 transition-all duration-500"
                >
                    Enter the Vision
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default PortalIntro;
