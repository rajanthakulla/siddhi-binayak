"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function TacticalCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[2, 0]} />
        <meshPhysicalMaterial 
          color="#6C63FF" 
          emissive="#2A2640"
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
      <mesh scale={0.8}>
        <octahedronGeometry args={[2, 0]} />
        <MeshDistortMaterial 
          color="#1E1E2E" 
          distort={0.4} 
          speed={2} 
          roughness={0} 
          metalness={1}
        />
      </mesh>
    </Float>
  );
}

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#6C63FF" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#4A5240" />
        <TacticalCore />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};
