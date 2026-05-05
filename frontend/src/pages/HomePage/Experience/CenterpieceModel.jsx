import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import CenterpieceFragments from './CenterpieceFragments';
import CenterpieceAssemblyAnimation from './CenterpieceAssemblyAnimation';

const CenterpieceModel = () => {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            // Constant rotation
            groupRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group ref={groupRef}>
            <CenterpieceFragments />
            <CenterpieceAssemblyAnimation />
        </group>
    );
};

export default CenterpieceModel;
