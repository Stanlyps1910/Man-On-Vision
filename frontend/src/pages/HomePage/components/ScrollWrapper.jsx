import React from 'react';

// Section Imports
import SectionProduction from './SectionProduction';
import SectionEntertainment from './SectionEntertainment';
import SectionShowcase from './SectionShowcase';
import SectionConnect from './SectionConnect';

const ScrollWrapper = () => {
    return (
        <div className="relative w-full">
            {/* SectionIntro is now part of the Intro Flow in HomePage.jsx */}
            <SectionProduction />
            <SectionEntertainment />
            <SectionShowcase />
            <SectionConnect />
        </div>
    );
};

export default ScrollWrapper;
