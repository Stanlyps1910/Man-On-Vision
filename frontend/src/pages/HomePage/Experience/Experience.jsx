import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, PerspectiveCamera } from '@react-three/drei';
import CameraRig from './CameraRig';
import ScrollManager from './ScrollManager';

const Experience = () => {
    return (
        <div className="w-full h-screen overflow-hidden">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
                
                {/* Basic Lighting */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />

                <Suspense fallback={null}>
                    {/* ScrollControls with 5 pages as requested */}
                    <ScrollControls pages={5} damping={0.1}>
                        <ScrollManager />
                        <CameraRig />
                        
                        {/* Placeholder Mesh */}
                        <mesh>
                            <boxGeometry args={[2, 2, 2]} />
                            <meshStandardMaterial color="#f97316" />
                        </mesh>
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Experience;
