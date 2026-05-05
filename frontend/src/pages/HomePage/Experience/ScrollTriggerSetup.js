import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollTriggerSetup = () => {
    // Register ScrollTrigger with GSAP
    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
    
    return null;
};

export default ScrollTriggerSetup;
