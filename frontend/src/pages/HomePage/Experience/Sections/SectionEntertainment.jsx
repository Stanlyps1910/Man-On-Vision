import React from 'react';

const SectionEntertainment = () => {
    return (
        <section className="h-screen flex items-center justify-end px-10 md:px-32">
            <div className="max-w-2xl text-right text-white">
                <h2 className="text-6xl md:text-9xl font-serif tracking-tighter leading-none mb-8 italic text-orange-600">Entertainment</h2>
                <p className="text-stone-400 text-lg md:text-xl font-serif max-w-lg ml-auto border-r border-white pr-8">
                    Large-scale immersive spectacles that define the modern era of entertainment.
                </p>
            </div>
        </section>
    );
};

export default SectionEntertainment;
