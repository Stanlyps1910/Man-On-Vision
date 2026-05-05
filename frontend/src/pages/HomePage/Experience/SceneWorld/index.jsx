import React from 'react';
import { Environment, Float, ContactShadows } from '@react-three/drei';
import TopographicMesh from './TopographicMesh';
import CenterpieceModel from './CenterpieceModel';
import FloatingPanels from './FloatingPanels';

const SceneWorld = () => {
    return (
        <group>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} color="orange" intensity={1} />
            
            <Environment preset="city" />
            
            <TopographicMesh />
            
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <CenterpieceModel />
            </Float>

            <FloatingPanels />

            <ContactShadows 
                position={[0, -2, 0]} 
                opacity={0.4} 
                scale={20} 
                blur={2.4} 
                far={4.5} 
            />
        </group>
    );
};

export default SceneWorld;
