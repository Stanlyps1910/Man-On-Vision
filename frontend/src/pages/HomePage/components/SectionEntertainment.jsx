import React from 'react';

const SectionEntertainment = () => {
    return (
        <section className="scroll-section min-h-screen w-full flex items-center justify-center bg-stone-950 overflow-hidden relative py-20 md:py-0">
            {/* Background Parallax Element */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <h2 className="text-[30vw] font-serif font-black tracking-tighter select-none text-white">SPECTACLE</h2>
            </div>

            <div className="max-w-4xl text-center px-10 relative z-10">
                <h2 className="animate-item text-5xl md:text-9xl font-serif text-white tracking-tighter mb-8 italic">
                    Immersive <br /> <span className="text-orange-600">Experiences</span>
                </h2>
                <p className="animate-item text-stone-500 text-base md:text-xl font-serif max-w-xl mx-auto border-t border-white/10 pt-8">
                    Entertainment is an emotion. Our production capabilities extend into large-scale event management and immersive digital spectacles.
                </p>
            </div>
        </section>
    );
};

export default SectionEntertainment;
