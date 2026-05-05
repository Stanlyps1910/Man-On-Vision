import React, { useRef, Suspense, useMemo, useLayoutEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    Float,
    MeshDistortMaterial,
    Environment,
    ContactShadows,
    PerspectiveCamera,
    ScrollControls,
    Scroll,
    useScroll,
    MeshWobbleMaterial,
    Text,
    MeshReflectorMaterial
} from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

const FilmFrame = ({ position, rotation, color = "#ffffff" }) => {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={position} rotation={rotation}>
                <boxGeometry args={[2, 1.2, 0.05]} />
                <meshPhysicalMaterial
                    color={color}
                    transmission={0.9}
                    thickness={0.5}
                    roughness={0.1}
                    metalness={0.1}
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </Float>
    );
};

const FragmentedObject = () => {
    const group = useRef();
    const scroll = useScroll();

    const fragments = useMemo(() => {
        const count = 60;
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15],
                rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
                scale: Math.random() * 0.4 + 0.1
            });
        }
        return temp;
    }, []);

    useFrame((state) => {
        const s = scroll.offset;
        group.current.children.forEach((child, i) => {
            const f = fragments[i];
            // Assemble into a rectangular "screen" shape
            const targetX = (i % 10 - 5) * 0.4;
            const targetY = (Math.floor(i / 10) - 3) * 0.4;

            child.position.x = THREE.MathUtils.lerp(f.position[0], targetX, s);
            child.position.y = THREE.MathUtils.lerp(f.position[1], targetY, s);
            child.position.z = THREE.MathUtils.lerp(f.position[2], 0, s);

            child.rotation.x = THREE.MathUtils.lerp(f.rotation[0], 0, s);
            child.rotation.y = THREE.MathUtils.lerp(f.rotation[1], 0, s);
        });

        group.current.rotation.y = s * Math.PI * 0.5;
    });

    return (
        <group ref={group}>
            {fragments.map((f, i) => (
                <mesh key={i} scale={f.scale}>
                    <boxGeometry args={[1, 1, 1]} />
                    <MeshWobbleMaterial
                        color={i % 2 === 0 ? "#ffffff" : "#f97316"}
                        factor={0.2}
                        speed={1}
                        metalness={0.9}
                        roughness={0.1}
                    />
                </mesh>
            ))}
        </group>
    );
};

const Scene = () => {
    const scroll = useScroll();

    useFrame((state) => {
        const s = scroll.offset;
        // Cinematic Camera Path
        state.camera.position.z = 14 - (s * 10);
        state.camera.position.x = Math.sin(s * Math.PI * 1.5) * 3;
        state.camera.position.y = Math.cos(s * Math.PI) * 1;
        state.camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 14]} fov={60} />
            <ambientLight intensity={0.4} />
            <spotLight position={[15, 15, 15]} angle={0.3} penumbra={1} intensity={3} castShadow />
            <pointLight position={[-15, -15, -15]} intensity={2} color="#f97316" />

            <FragmentedObject />

            {/* Floating Background Elements */}
            <FilmFrame position={[-5, 2, -5]} rotation={[0.2, 0.4, 0]} />
            <FilmFrame position={[6, -3, -8]} rotation={[-0.1, -0.2, 0.2]} color="#f97316" />
            <FilmFrame position={[-8, -5, -12]} rotation={[0.4, -0.1, -0.1]} />

            <ContactShadows
                position={[0, -6, 0]}
                opacity={0.3}
                scale={30}
                blur={2.5}
                far={12}
            />

            <Environment preset="studio" />

            <EffectComposer disableNormalPass>
                <Bloom luminanceThreshold={1} mipmapBlur intensity={0.5} radius={0.4} />
                <ChromaticAberration offset={[0.001, 0.001]} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
        </>
    );
};

const Hero3D = ({ children }) => {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-[#FDFBF7]">
            <Canvas dpr={[1, 2]} gl={{ antialias: true, shadowMapType: THREE.PCFShadowMap }} shadows>
                <Suspense fallback={null}>
                    <ScrollControls pages={5} damping={0.2}>
                        <Scene />
                        <Scroll html>
                            <div className="w-screen selection:bg-orange-500 selection:text-white">
                                {children}
                            </div>
                        </Scroll>
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Hero3D;
