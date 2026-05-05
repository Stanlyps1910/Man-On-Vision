import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGSAPAnimations = (rootRef) => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            window.heroTwirl = 0;

            // 1. CINEMATIC OVERLAY TRANSITION (THE FLOW)
            const introTl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#intro-container",
                    start: "top top",
                    end: "+=200%",     // Perfect scroll distance
                    scrub: 1.2,        // Responsive but smooth
                    pin: true,         // Pin the whole container
                    pinSpacing: true,  // Allow next section to wait
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        window.heroTwirl = self.progress * 20; // Intense hypnotic swirl
                    }
                }
            });

            // The 'Travel Through' Animation
            introTl
                .to("#hero-logo-container", { 
                    scale: 150, 
                    ease: "power2.in", 
                    duration: 3 
                })
                .to("#hero-logo-container", {
                    opacity: 0,
                    duration: 0.5
                }, "-=0.5")
                .to("#hero-canvas", { 
                    opacity: 0, 
                    filter: "blur(100px)",
                    duration: 2.5 
                }, 0.5)
                .to("#home", {
                    backgroundColor: "#ffffff",
                    duration: 2.5
                }, 0.5)
                
                // THE FLOW: The Next World Dissolves In Over the Hero
                .to("#flow-section", {
                    opacity: 1,
                    scale: 1,
                    pointerEvents: "auto",
                    duration: 1.5,
                    ease: "power2.out"
                }, "-=1.5"); // Reveal starts exactly as the logo reaches the 'portal' phase

            // 2. STORYTELLING SECTIONS (SUBSEQUENT)
            const sections = gsap.utils.toArray('.scroll-section');
            sections.forEach((section) => {
                // Skip the first section as it's part of the flow overlay
                if (section.id === 'about') return;

                // Animate Items
                gsap.fromTo(section.querySelectorAll('.animate-item'), 
                    { opacity: 0, y: 50 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        stagger: 0.2,
                        duration: 1.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Pinning for standard sections
                ScrollTrigger.create({
                    trigger: section,
                    start: "top top",
                    pin: true,
                    pinSpacing: true,
                    scrub: true
                });
            });

            // 3. HORIZONTAL SCROLL (SHOWCASE)
            const horizontalSection = document.querySelector('#gallery');
            const horizontalContent = document.querySelector('#horizontal-scroll-content');
            
            if (horizontalSection && horizontalContent) {
                gsap.to(horizontalContent, {
                    x: () => -(horizontalContent.scrollWidth - window.innerWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: horizontalSection,
                        start: "top top",
                        end: () => `+=${horizontalContent.scrollWidth}`,
                        scrub: 1,
                        pin: true,
                        invalidateOnRefresh: true,
                    }
                });
            }
        }, rootRef);

        return () => ctx.revert();
    }, [rootRef]);
};

export default useGSAPAnimations;
