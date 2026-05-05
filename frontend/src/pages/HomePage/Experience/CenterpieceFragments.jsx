import React, { useMemo } from 'react';
import { Float, MeshDistortMaterial } from '@react-three/drei';

const CenterpieceFragments = () => {
    const fragments = useMemo(() => {
        return [...Array(12)].map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 4
            ],
            scale: Math.random() * 0.5 + 0.2,
            speed: Math.random() * 2 + 1
        }));
    }, []);

    return (
        <group>
            {fragments.map((f, i) => (
                <Float key={i} speed={f.speed} rotationIntensity={2} floatIntensity={2}>
                    <mesh position={f.position} scale={f.scale}>
                        <boxGeometry args={[1, 1, 0.1]} />
                        <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.2} />
                    </mesh>
                </Float>
            ))}
        </group>
    );
};

export default CenterpieceFragments;
