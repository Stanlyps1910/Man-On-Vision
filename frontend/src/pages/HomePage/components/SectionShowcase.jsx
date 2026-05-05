import React from 'react';

const SectionShowcase = () => {
    return (
        <section id="gallery" className="h-screen w-full bg-stone-900 overflow-hidden relative">
            <div className="absolute top-12 left-6 md:top-20 md:left-20 z-10">
                <h2 className="text-3xl md:text-6xl font-serif text-white tracking-tighter italic">Global Showcase</h2>
                <p className="text-orange-600 tracking-[0.5em] text-[10px] uppercase font-bold mt-4">Scroll down to explore horizontally</p>
            </div>

            <div 
                id="horizontal-scroll-content" 
                className="h-full flex items-center gap-12 px-[10vw] min-w-max"
            >
                {[
                    { title: "The Last Frame", category: "Cinematic" },
                    { title: "Neon Nights", category: "Music Video" },
                    { title: "Legacy", category: "Documentary" },
                    { title: "Digital Zen", category: "Immersive" },
                    { title: "Visionary", category: "Short Film" }
                ].map((item, i) => (
                    <div 
                        key={i} 
                        className="w-[85vw] md:w-[35vw] aspect-[16/9] bg-stone-800 rounded-2xl md:rounded-3xl overflow-hidden relative group cursor-pointer border border-white/5"
                    >
                        {/* Placeholder for images */}
                        <div className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-900 group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                        
                        <div className="absolute bottom-10 left-10">
                            <span className="text-orange-600 font-bold text-[10px] uppercase tracking-widest mb-2 block">{item.category}</span>
                            <h3 className="text-3xl font-serif text-white">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionShowcase;
