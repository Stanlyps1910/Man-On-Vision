import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import SectionIntro from './components/SectionIntro';
import ScrollWrapper from './components/ScrollWrapper';
import Navbar from '../../components/Navbar';
import useGSAPAnimations from './hooks/useGSAPAnimations';

const HomePage = () => {
    const mainRef = useRef(null);
    
    // Apply GSAP animations to the entire page
    useGSAPAnimations(mainRef);

    return (
        <main ref={mainRef} className="relative w-full bg-stone-950 overflow-x-hidden">
            <Navbar />
            
            {/* The Integrated Intro Flow (Hero + First Story Section) */}
            <div id="intro-container" className="relative w-full overflow-hidden">
                <HeroSection />
                <div id="flow-section" className="absolute inset-0 opacity-0 pointer-events-none">
                    <SectionIntro />
                </div>
            </div>

            <ScrollWrapper />
        </main>
    );
};

export default HomePage;
