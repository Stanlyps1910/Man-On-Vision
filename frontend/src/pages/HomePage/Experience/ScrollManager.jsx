import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const ScrollManager = () => {
    const scroll = useScroll();

    useFrame(() => {
        // This component can be used to sync other elements or state with the scroll offset
        // For now, it just confirms the sync is functional
        const offset = scroll.offset;
        // console.log("Current Scroll Offset:", offset);
    });

    return null;
};

export default ScrollManager;
