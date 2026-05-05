import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

const CameraRig = () => {
    const scroll = useScroll();

    useFrame((state) => {
        // Move camera position based on scroll offset
        const offset = scroll.offset;
        state.camera.position.z = THREE.MathUtils.lerp(10, 2, offset);
        state.camera.position.y = THREE.MathUtils.lerp(0, 5, offset);
        state.camera.lookAt(0, 0, 0);
    });

    return null;
};

export default CameraRig;
