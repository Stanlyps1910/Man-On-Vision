import React from 'react';
import { motion } from 'framer-motion';
import LiquidMazeStatic from '../../../components/common/LiquidMazeStatic';

const SectionProduction = () => {
    return (
        <section id="services" className="scroll-section min-h-screen w-full flex items-center justify-center bg-stone-950 relative overflow-hidden py-24 md:py-0">
            {/* 2nd Background: Dark Mode Variation */}
            <LiquidMazeStatic 
                color1="#ff5a96" 
                color2="#ffb040" 
                bgColor="#0c0a09" 
                density={0.8} 
                opacity={0.4}
                speed={0.02} 
            />

            <div className="max-w-6xl w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 relative z-10">
                {[
                    { title: "Cinematography", desc: "Ultra-high-definition visual storytelling." },
                    { title: "Visual Arts", desc: "Digital landscapes that push boundaries." },
                    { title: "Entertainment", desc: "Live-action spectacles and immersive media." }
                ].map((item, i) => (
                    <div key={i} className="animate-item group p-8 md:p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                        <h3 className="text-2xl font-serif text-white mb-4 italic group-hover:text-orange-500 transition-colors">{item.title}</h3>
                        <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionProduction;
