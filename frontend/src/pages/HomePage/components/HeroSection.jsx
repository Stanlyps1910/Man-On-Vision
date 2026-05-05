import React from 'react';
import { motion } from 'framer-motion';
import WaveBackground from '../../../components/common/WaveBackground';

const HeroSection = () => {
    return (
        <section 
            id="home" 
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white"
        >
            {/* Liquid Maze Background */}
            <div className="absolute inset-0 z-0">
                <WaveBackground />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                
                {/* 1. Zoomable Logo Icon ONLY */}
                <motion.div
                    id="hero-logo-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="relative flex items-center justify-center origin-[50%_45%]" // Precise eye focus
                >
                    <img 
                        src="/assets/MOV-logo.png" 
                        alt="Man On Vision Logo" 
                        className="w-[200px] md:w-[450px] h-auto object-contain drop-shadow-[0_0_30px_rgba(249,115,22,0.3)] filter"
                    />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
                <div className="w-[1px] h-12 bg-stone-900" />
            </div>
        </section>
    );
};

export default HeroSection;
