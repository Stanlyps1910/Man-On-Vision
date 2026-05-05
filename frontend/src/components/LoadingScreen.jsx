import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WaveBackground from './common/WaveBackground';

const LoadingScreen = ({ onFinished }) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsComplete(true);
                        setTimeout(onFinished, 1000);
                    }, 500);
                    return 100;
                }
                return prev + 1.5;
            });
        }, 30);

        return () => clearInterval(timer);
    }, [onFinished]);


    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        scale: 1.2,
                        filter: 'blur(20px)',
                    }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-white"
                >
                    <WaveBackground />
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-center"
                        >
                            <h1 className="text-6xl md:text-8xl font-serif text-stone-900 mb-4 tracking-tighter">
                                Man On Vision
                            </h1>
                            <p className="text-orange-600/60 uppercase tracking-[0.8em] text-[10px] md:text-xs font-black mb-12">
                                Entertainment Production House
                            </p>
                        </motion.div>

                        <div className="w-64 h-[1px] bg-stone-100 rounded-full overflow-hidden relative">
                            <motion.div 
                                className="absolute inset-y-0 left-0 bg-stone-900"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "linear" }}
                            />
                        </div>
                        

                        {progress < 100 && (
                            <motion.span 
                                className="mt-4 text-[10px] uppercase tracking-widest text-stone-400 font-medium"
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Preparing the Experience
                            </motion.span>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
