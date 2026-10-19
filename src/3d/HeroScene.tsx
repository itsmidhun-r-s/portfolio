import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { ParticleField } from './ParticleField';

function TechCore() {
  const outerMesh = useRef<THREE.Mesh>(null!);
  const innerMesh = useRef<THREE.Mesh>(null!);
  const ring1 = useRef<THREE.Group>(null!);
  const ring2 = useRef<THREE.Group>(null!);
  const ring3 = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    // Gentle rotation
    if (outerMesh.current) {
      outerMesh.current.rotation.x += delta * 0.2;
      outerMesh.current.rotation.y += delta * 0.25;
    }
    if (innerMesh.current) {
      innerMesh.current.rotation.x -= delta * 0.3;
      innerMesh.current.rotation.y -= delta * 0.35;
      const t = state.clock.getElapsedTime();
      const scale = 1 + Math.sin(t * 2) * 0.08;
      innerMesh.current.scale.set(scale, scale, scale);
    }
    if (ring1.current) ring1.current.rotation.z += delta * 0.3;
    if (ring2.current) ring2.current.rotation.x -= delta * 0.25;
    if (ring3.current) ring3.current.rotation.y += delta * 0.2;
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Holographic Icosahedron */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        {/* Wireframe Outer Shell */}
        <mesh ref={outerMesh}>
          <icosahedronGeometry args={[1.3, 1]} />
          <meshStandardMaterial
            color="#38BDF8"
            wireframe
            emissive="#0284C7"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        {/* Pulsating Inner Core */}
        <mesh ref={innerMesh}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#10B981"
            emissive="#059669"
            emissiveIntensity={0.8}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>

        {/* Orbital Ring 1 - React / Frontend Plane */}
        <group ref={ring1} rotation={[Math.PI / 4, 0, 0]}>
          <mesh>
            <torusGeometry args={[1.9, 0.015, 16, 64]} />
            <meshBasicMaterial color="#38BDF8" transparent opacity={0.6} />
          </mesh>
          <mesh position={[1.9, 0, 0]}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={1} />
          </mesh>
        </group>

        {/* Orbital Ring 2 - Python / Backend Plane */}
        <group ref={ring2} rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
          <mesh>
            <torusGeometry args={[2.3, 0.015, 16, 64]} />
            <meshBasicMaterial color="#10B981" transparent opacity={0.5} />
          </mesh>
          <mesh position={[-2.3, 0, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={1} />
          </mesh>
        </group>

        {/* Orbital Ring 3 - Database / Cloud Plane */}
        <group ref={ring3} rotation={[Math.PI / 6, -Math.PI / 4, 0]}>
          <mesh>
            <torusGeometry args={[2.7, 0.012, 16, 64]} />
            <meshBasicMaterial color="#8B5CF6" transparent opacity={0.4} />
          </mesh>
          <mesh position={[0, 2.7, 0]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={1} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#E0F2FE" />
          <pointLight position={[-10, -5, -5]} intensity={0.8} color="#0284C7" />
          <pointLight position={[5, -5, 5]} intensity={0.6} color="#10B981" />

          <TechCore />
          <ParticleField count={220} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 2.3}
            rotateSpeed={0.5}
            autoRotate
            autoRotateSpeed={0.6}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
