import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
    position: [number, number, number];
    color: string;
    speed?: number;
    rotationSpeed?: number;
    type?: 'box' | 'torus' | 'octahedron';
}

const FloatingShape = ({
    position,
    color,
    speed = 1,
    rotationSpeed = 1,
    type = 'box'
}: FloatingShapeProps) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2 * rotationSpeed;
            meshRef.current.rotation.y += delta * 0.3 * rotationSpeed;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={position}>
                {type === 'box' && <boxGeometry args={[1, 1, 1]} />}
                {type === 'torus' && <torusGeometry args={[0.8, 0.2, 16, 32]} />}
                {type === 'octahedron' && <octahedronGeometry args={[1]} />}
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.4}
                    wireframe={true}
                />
            </mesh>
        </Float>
    );
};

const SceneContent = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(({ mouse }) => {
        if (groupRef.current) {
            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                mouse.y * 0.1,
                0.05
            );
            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                mouse.x * 0.1,
                0.05
            );
        }
    });

    return (
        <group ref={groupRef}>
            <FloatingShape position={[-3, 2, -5]} color="#00d4ff" type="octahedron" speed={1.5} />
            <FloatingShape position={[3, -1, -4]} color="#00aaff" type="torus" speed={1.2} />
            <FloatingShape position={[-2, -3, -6]} color="#0088ff" type="box" speed={0.8} />
            <FloatingShape position={[4, 3, -8]} color="#00d4ff" type="octahedron" speed={1} />
            <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
        </group>
    );
};

export const ThreeScene = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'default',
                    failIfMajorPerformanceCaveat: false
                }}
                camera={{ position: [0, 0, 8], fov: 75 }}
                dpr={[1, 1.5]}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.3} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
                    <SceneContent />
                </Suspense>
            </Canvas>
        </div>
    );
};
