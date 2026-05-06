import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';

import WaveBackground from '../../../components/common/WaveBackground';

const HeroSection = () => {
    const { isDarkMode } = useTheme();
    
    return (
        <section 
            id="home" 
            className={`relative h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-1000 bg-transparent`}
        >
            {/* Local Hero Background - Fades out on scroll to reveal global LiquidMaze */}
            <div className="absolute inset-0 z-0">
                <WaveBackground />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                
                {/* 1. Zoomable Logo Icon — cropped to hide baked-in text */}
                <motion.div
                    id="hero-logo-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="relative flex flex-col items-center justify-center"
                    style={{ willChange: 'transform, opacity', transformOrigin: '50% 55%' }}
                >
                    {/* Glow Effect for Dark Mode */}
                    <AnimatePresence>
                        {isDarkMode && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1.1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full"
                            />
                        )}
                    </AnimatePresence>

                    {/* Cropped image — aspectRatio clips the bottom text out of view */}
                    <div 
                        className="w-[200px] md:w-[450px] overflow-hidden"
                        style={{ aspectRatio: '1 / 0.72' }}
                    >
                        <img 
                            src="/assets/MOV-logo.png" 
                            alt="Man On Vision Logo" 
                            fetchPriority="high"
                            decoding="async"
                            className="w-full h-auto object-contain object-top"
                            style={{ mixBlendMode: 'multiply' }}
                        />
                    </div>
                </motion.div>

                {/* 2. Separate Text — Gen-Z font, theme-aware colors */}
                <motion.div
                    id="hero-text-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    className="mt-4 md:mt-6 text-center"
                >
                    <h1 
                        className={`text-xl md:text-3xl font-bold tracking-[0.3em] uppercase transition-colors duration-1000 ${
                            isDarkMode ? 'text-white' : 'text-stone-900'
                        }`}
                        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                        MAN ON VISION
                    </h1>
                    <p 
                        className={`text-[10px] md:text-xs tracking-[0.5em] uppercase mt-2 font-medium transition-colors duration-1000 ${
                            isDarkMode ? 'text-stone-400' : 'text-stone-500'
                        }`}
                        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                        ENTERTAINMENT
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
                <div className={`w-[1px] h-12 transition-colors duration-1000 ${isDarkMode ? 'bg-white' : 'bg-stone-900'}`} />
            </div>
        </section>
    );
};

export default HeroSection;
