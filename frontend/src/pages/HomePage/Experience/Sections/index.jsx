import React from 'react';
import SectionIntro from './SectionIntro';
import SectionProduction from './SectionProduction';
import SectionEntertainment from './SectionEntertainment';
import SectionShowcase from './SectionShowcase';
import SectionConnect from './SectionConnect';

const Sections = () => {
    return (
        <div className="w-screen">
            <SectionIntro />
            <SectionProduction />
            <SectionEntertainment />
            <SectionShowcase />
            <SectionConnect />
        </div>
    );
};

export default Sections;
