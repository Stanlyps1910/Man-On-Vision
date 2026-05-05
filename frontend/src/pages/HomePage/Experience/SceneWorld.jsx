import React from 'react';
import { Environment, Float, ContactShadows } from '@react-three/drei';
import TopographicMesh from './TopographicMesh';
import CenterpieceModel from './CenterpieceModel';
import FloatingPanel from './FloatingPanel';

const SceneWorld = () => {
    return (
        <group>
            <Environment preset="studio" />
            
            <TopographicMesh />
            
            <CenterpieceModel />

            {/* Reusable Floating Panels */}
            <FloatingPanel 
                position={[-5, 2, -5]} 
                content="Production" 
                depth={0.5} 
            />
            <FloatingPanel 
                position={[6, -3, -8]} 
                content="Entertainment" 
                depth={0.8} 
            />
            <FloatingPanel 
                position={[-8, -5, -12]} 
                content="Showcase" 
                depth={1.2} 
            />

            <ContactShadows 
                position={[0, -5, 0]} 
                opacity={0.3} 
                scale={40} 
                blur={2} 
                far={10} 
            />
        </group>
    );
};

export default SceneWorld;
