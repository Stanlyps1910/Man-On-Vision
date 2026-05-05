import React from 'react';
import { Html, Float } from '@react-three/drei';

const FloatingPanel = ({ position, content, depth }) => {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh position={position}>
                <boxGeometry args={[3, 2, 0.1]} />
                <meshStandardMaterial 
                    color="#1c1917" 
                    transparent 
                    opacity={0.8} 
                    metalness={0.5}
                    roughness={0.2}
                />
                
                <Html 
                    distanceFactor={10} 
                    position={[0, 0, 0.06]} 
                    transform 
                    occlude
                >
                    <div className="w-64 p-6 text-white font-serif select-none pointer-events-none">
                        <h3 className="text-2xl mb-2 italic text-orange-500">{content}</h3>
                        <p className="text-[10px] uppercase tracking-widest opacity-50">Man On Vision Studio</p>
                    </div>
                </Html>
            </mesh>
        </Float>
    );
};

export default FloatingPanel;
