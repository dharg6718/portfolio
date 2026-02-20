import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.02;
      ref.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f5ff"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function InnerMesh() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.1;
      ref.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2.5, 1]} />
      <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

const HeroScene = () => (
  <div className="absolute inset-0">
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.5} />
      <ParticleField />
      <InnerMesh />
    </Canvas>
  </div>
);

export default HeroScene;
