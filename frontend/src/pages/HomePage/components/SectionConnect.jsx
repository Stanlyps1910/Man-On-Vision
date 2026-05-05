import React from 'react';
import LiquidMazeStatic from '../../../components/common/LiquidMazeStatic';

const SectionConnect = () => {
    return (
        <section className="scroll-section min-h-screen w-full flex items-center justify-center bg-stone-950 relative overflow-hidden py-24 md:py-0">
            {/* 2nd Background: Minimal Accents */}
            <LiquidMazeStatic 
                color1="#ffb040" 
                color2="#ff5a96" 
                bgColor="#0c0a09" 
                density={0.5} 
                opacity={0.3}
                speed={0.01} 
            />

            <div className="text-center px-10 relative z-10">
                <h2 className="animate-item text-5xl md:text-[12rem] font-serif text-white tracking-tighter leading-none mb-10 md:mb-16 italic">
                    Let's <span className="text-orange-600">Create.</span>
                </h2>
                <div className="animate-item flex flex-col md:flex-row gap-8 items-center justify-center">
                    <button className="w-full md:w-auto px-12 md:px-16 py-5 md:py-6 bg-white text-stone-950 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        Start Production
                    </button>
                    <button className="w-full md:w-auto px-12 md:px-16 py-5 md:py-6 border border-white/20 text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-stone-950 transition-all">
                        Access Portal
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SectionConnect;
