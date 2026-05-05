import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

const GSAPController = () => {
    const scroll = useScroll();
    const { camera, scene } = useThree();
    const tl = useRef();

    useLayoutEffect(() => {
        tl.current = gsap.timeline({ defaults: { duration: 1, ease: 'power2.inOut' } });
        
        // Sequence of animations
        tl.current
            // Section 1 to 2
            .to(camera.position, { z: 5, y: 2 }, 1)
            .to(scene.rotation, { y: Math.PI * 0.5 }, 1)
            
            // Section 2 to 3
            .to(camera.position, { x: 10, z: 15 }, 2)
            .to(scene.rotation, { y: Math.PI }, 2)
            
            // Section 3 to 4
            .to(camera.position, { x: -10, y: -5, z: 20 }, 3)
            
            // Section 4 to 5
            .to(camera.position, { x: 0, y: 0, z: 10 }, 4);
            
    }, [camera, scene]);

    useFrame(() => {
        if (tl.current) {
            tl.current.seek(scroll.offset * tl.current.duration());
        }
    });

    return null;
};

export default GSAPController;
