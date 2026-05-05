import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const DiveTransition = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(onComplete, 2000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1500] bg-white flex items-center justify-center overflow-hidden"
        >
            {/* Warp effect lines */}
            <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                            scale: [0, 4], 
                            opacity: [0, 1, 0],
                            rotate: i * 18
                        }}
                        transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            delay: i * 0.1,
                            ease: "easeIn"
                        }}
                        className="absolute w-[1px] h-64 bg-stone-900 origin-bottom"
                        style={{ transformOrigin: 'center 0px' }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 2, ease: "circIn" }}
                className="relative z-10 text-stone-950 font-serif italic text-4xl tracking-tighter"
            >
                Diving into Vision...
            </motion.div>
            
            {/* Flash at the end */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1] }}
                transition={{ duration: 2, times: [0, 0.8, 1] }}
                className="absolute inset-0 bg-stone-950 z-50"
            />
        </motion.div>
    );
};

export default DiveTransition;
