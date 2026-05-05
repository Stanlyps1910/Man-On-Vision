import React from 'react';
import { MeshWobbleMaterial } from '@react-three/drei';

const CenterpieceAssemblyAnimation = () => {
    return (
        <group>
            {/* The "Director Frame" centerpiece */}
            <mesh scale={1.5}>
                <torusGeometry args={[1, 0.05, 16, 100]} />
                <meshStandardMaterial color="white" metalness={1} roughness={0} />
            </mesh>
            
            <mesh>
                <sphereGeometry args={[0.5, 32, 32]} />
                <MeshWobbleMaterial 
                    color="#f97316" 
                    factor={0.5} 
                    speed={2} 
                />
            </mesh>
        </group>
    );
};

export default CenterpieceAssemblyAnimation;
