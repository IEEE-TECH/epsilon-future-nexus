import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const EpsilonLogo3D = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <Float floatIntensity={0.5} rotationIntensity={0.3} speed={2}>
            <group ref={groupRef} scale={0.8}>
                {/* Main curved part (C shape) - Using a semi-torus */}
                <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <torusGeometry args={[1.5, 0.35, 16, 48, Math.PI * 1.5]} />
                    <meshBasicMaterial
                        color="#00d4ff"
                        transparent
                        opacity={0.9}
                    />
                </mesh>

                {/* Center bar */}
                <mesh position={[-0.3, 0, 0]}>
                    <boxGeometry args={[1.5, 0.5, 0.5]} />
                    <meshBasicMaterial
                        color="#00d4ff"
                        transparent
                        opacity={0.9}
                    />
                </mesh>

                {/* Glow rings */}
                <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <torusGeometry args={[1.8, 0.05, 8, 48, Math.PI * 1.5]} />
                    <meshBasicMaterial color="#00d4ff" transparent opacity={0.3} />
                </mesh>
            </group>
        </Float>
    );
};
