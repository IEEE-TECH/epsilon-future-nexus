import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Simple floating shape component
const FloatingShape = ({
    position,
    color,
    size = 1,
    speed = 1
}: {
    position: [number, number, number];
    color: string;
    size?: number;
    speed?: number;
}) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.1 * speed;
            meshRef.current.rotation.y += delta * 0.15 * speed;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.3}>
            <mesh ref={meshRef} position={position}>
                <octahedronGeometry args={[size, 0]} />
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.3}
                    wireframe
                />
            </mesh>
        </Float>
    );
};

// Scene content - minimal for performance
const SceneContent = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(({ pointer }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                pointer.x * 0.1,
                0.02
            );
            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                pointer.y * 0.05,
                0.02
            );
        }
    });

    return (
        <group ref={groupRef}>
            <FloatingShape position={[-4, 2, -6]} color="#00b8d4" size={1.2} speed={0.8} />
            <FloatingShape position={[4, -1, -5]} color="#0091ea" size={0.9} speed={1.2} />
            <FloatingShape position={[-2, -3, -8]} color="#00838f" size={1.5} speed={0.6} />
            <FloatingShape position={[3, 3, -10]} color="#00acc1" size={1} speed={1} />
        </group>
    );
};

// Main exported component
export const ThreeBackground = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas
                gl={{
                    antialias: false,
                    alpha: true,
                    powerPreference: 'low-power',
                    failIfMajorPerformanceCaveat: false
                }}
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={1}
                style={{ background: 'transparent' }}
            >
                <Suspense fallback={null}>
                    <SceneContent />
                </Suspense>
            </Canvas>
        </div>
    );
};
