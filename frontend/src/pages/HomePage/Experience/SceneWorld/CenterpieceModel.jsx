import React from 'react';
import { MeshDistortMaterial } from '@react-three/drei';

const CenterpieceModel = () => {
    return (
        <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshDistortMaterial 
                color="#f97316" 
                speed={2} 
                distort={0.4} 
                radius={1}
            />
        </mesh>
    );
};

export default CenterpieceModel;
