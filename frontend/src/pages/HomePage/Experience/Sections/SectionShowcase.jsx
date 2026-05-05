import React from 'react';

const SectionShowcase = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center relative bg-black/40 backdrop-blur-sm">
            <div className="max-w-6xl w-full px-10">
                <h2 className="text-6xl md:text-9xl font-serif text-white mb-12 tracking-tighter italic">Showcase</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="aspect-[4/5] bg-stone-900/50 border border-white/5 rounded-2xl hover:border-orange-500/50 transition-colors cursor-pointer p-8 flex flex-col justify-end">
                            <p className="text-orange-600 text-[10px] tracking-widest uppercase mb-2">Cinematic</p>
                            <h3 className="text-2xl text-white font-serif">Project Alpha {i}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionShowcase;
