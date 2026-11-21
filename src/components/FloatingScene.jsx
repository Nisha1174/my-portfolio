
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function GlassObjects() {
  const sculpture = useRef(null);
  const pearl = useRef(null);
  const crystal = useRef(null);

  useFrame((state, delta) => {
    if (sculpture.current) {
      sculpture.current.rotation.y += delta * 0.12;
      sculpture.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.12;
    }

    if (pearl.current) {
      pearl.current.rotation.y += delta * 0.2;
    }

    if (crystal.current) {
      crystal.current.rotation.x += delta * 0.18;
      crystal.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group position={[-0.65, 0, 0]} scale={0.82}>

      {/* Main glass sculpture */}
      <Float speed={0.8} floatIntensity={0.18}>
  <group ref={sculpture} position={[1.5, 0.1, -0.2]}>

          <mesh rotation={[0.7, 0.2, 0.4]}>
            <torusGeometry args={[1.05, 0.11, 32, 120]} />
            <meshPhysicalMaterial
              color="#d9d0ed"
              metalness={0.15}
              roughness={0.08}
              transmission={0.8}
              thickness={1}
              clearcoat={1}
            />
          </mesh>

          <mesh rotation={[1.1, 0.4, 0.9]}>
            <torusGeometry args={[0.82, 0.045, 24, 100]} />
            <meshPhysicalMaterial
              color="#eee3d4"
              metalness={0.35}
              roughness={0.12}
              clearcoat={1}
            />
          </mesh>

        </group>
      </Float>

      {/* Floating pearl */}
      <Float speed={1.5} floatIntensity={0.45}>
        <mesh
          ref={pearl}
          position={[2.9, 1.15, 0.3]}
        >
          <sphereGeometry args={[0.25, 64, 64]} />
          <meshPhysicalMaterial
            color="#f2e8f6"
            metalness={0.25}
            roughness={0.08}
            clearcoat={1}
          />
        </mesh>
      </Float>

      {/* Lavender glass crystal */}
      <Float speed={1.8} rotationIntensity={0.4}>
        <mesh
          ref={crystal}
          position={[2.8, -1.15, 0.1]}
        >
          <octahedronGeometry args={[0.3, 2]} />
          <meshPhysicalMaterial
            color="#b8a9dd"
            metalness={0.15}
            roughness={0.12}
            transmission={0.65}
            thickness={1.5}
            clearcoat={1}
          />
        </mesh>
      </Float>

      {/* Small pearl */}
      <Float speed={2} floatIntensity={0.5}>
        <mesh position={[1.1, -1.65, 0]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial
            color="#d9c8a8"
            metalness={0.55}
            roughness={0.18}
          />
        </mesh>
      </Float>

      {/* Small decorative glass sphere */}
      <Float speed={1.4}>
        <mesh position={[3.2, 0.05, -0.5]}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshPhysicalMaterial
            color="#d8c8ed"
            roughness={0.08}
            metalness={0.1}
            transmission={0.7}
          />
        </mesh>
      </Float>

    </group>
  );
}

export default function FloatingScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{
        alpha: true,
        antialias: true
      }}
    >
      <ambientLight intensity={1.5} />

<directionalLight
  position={[3, 5, 5]}
  intensity={2}
  color="#ffffff"
/>

<pointLight
  position={[1, 2, 3]}
  intensity={10}
  color="#c7b6ef"
/>

<pointLight
  position={[-3, -2, 2]}
  intensity={5}
  color="#eadcc8"
/>
      <GlassObjects />
    </Canvas>
  );
}
