import React from 'react';

const FloatingPanels = () => {
    return (
        <group>
            {[...Array(5)].map((_, i) => (
                <mesh key={i} position={[(i - 2) * 3, Math.sin(i) * 2, -5]}>
                    <planeGeometry args={[2, 1.2]} />
                    <meshStandardMaterial color="#292524" transparent opacity={0.5} />
                </mesh>
            ))}
        </group>
    );
};

export default FloatingPanels;
