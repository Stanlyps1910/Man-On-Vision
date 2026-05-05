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
            exit={{ scale: 2, opacity: 0 }}
            className="fixed inset-0 z-[1500] bg-white flex items-center justify-center"
        >
            <motion.div 
                animate={{ 
                    scale: [1, 10],
                    opacity: [1, 0]
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-1 h-1 bg-stone-900 rounded-full"
            />
        </motion.div>
    );
};

export default DiveTransition;
