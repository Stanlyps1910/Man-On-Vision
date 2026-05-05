import React from 'react';

const SectionProduction = () => {
    return (
        <section className="h-screen flex items-center px-10 md:px-32">
            <div className="max-w-2xl text-white">
                <h2 className="text-6xl md:text-9xl font-serif tracking-tighter leading-none mb-8 italic">Production</h2>
                <p className="text-stone-400 text-lg md:text-xl font-serif max-w-lg border-l border-orange-600 pl-8">
                    From initial concept to the final frame, we bring stories to life with cinematic precision.
                </p>
            </div>
        </section>
    );
};

export default SectionProduction;
