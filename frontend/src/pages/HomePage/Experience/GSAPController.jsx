import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const GSAPController = () => {
    const scroll = useScroll();
    const tl = useRef();

    useLayoutEffect(() => {
        tl.current = gsap.timeline();
        
        // Example timeline
        // tl.current.to(someMesh.position, { x: 5, duration: 1 })
    }, []);

    useFrame(() => {
        if (tl.current) {
            tl.current.seek(scroll.offset * tl.current.duration());
        }
    });

    return null;
};

export default GSAPController;
