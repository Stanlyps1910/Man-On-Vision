import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TopographicMesh = () => {
    const meshRef = useRef();
    
    const count = 100;
    const sep = 0.2;
    
    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[20, 20, 128, 128]} />
            <meshStandardMaterial 
                color="#1c1917" 
                wireframe 
                transparent 
                opacity={0.2}
            />
        </mesh>
    );
};

export default TopographicMesh;
