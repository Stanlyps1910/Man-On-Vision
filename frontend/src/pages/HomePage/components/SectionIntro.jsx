import React from 'react';
import { motion } from 'framer-motion';
import LiquidMazeStatic from '../../../components/common/LiquidMazeStatic';

const SectionIntro = () => {
    return (
        <section id="about" className="scroll-section min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-transparent py-20 md:py-0">
            {/* 2nd Background: Ultra-Thin & Sharp (Light Theme) */}
            <LiquidMazeStatic 
                color1="#ffb040" 
                color2="#ff5a96" 
                bgColor="#fff5f2" 
                density={1.2} 
                speed={0.015} 
            />

            <div className="text-center px-6 md:px-10 relative z-10">
                <h2 className="animate-item text-5xl md:text-8xl font-serif text-stone-900 tracking-tighter italic mb-8">
                    Directing the <br className="md:hidden" /> <span className="text-orange-600">Future</span>
                </h2>
                <p className="animate-item text-stone-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed tracking-wide font-light">
                    We are more than a production house. We are architects of digital legacies, 
                    curating immersive experiences that transcend the traditional boundaries 
                    of entertainment.
                </p>
            </div>
        </section>
    );
};

export default SectionIntro;
