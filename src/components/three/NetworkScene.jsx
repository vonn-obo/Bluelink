import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";
import { CONFIG } from "@/config";

const PRIMARY = "#3457e0";
const SIGNAL = "#22c55e";
const GHOST = "#94a3b8";

// Distributes N nodes around the hub using the golden-angle spiral —
// avoids the flat "clock face" look of evenly-spaced 2D angles.
function spiralPosition(index, total, radius) {
  const y = total > 1 ? 1 - (index / (total - 1)) * 1.2 + 0.1 : 0.3;
  const r = Math.sqrt(Math.max(1 - y * y, 0));
  const theta = index * 2.399963;
  return new THREE.Vector3(Math.cos(theta) * r * radius, y * radius * 0.7, Math.sin(theta) * r * radius);
}

function GlowNode({ position, color, scale = 1 }) {
  return (
    <group position={position}>
      {/* Lit core — meshStandardMaterial + emissive gives real shading (a
          highlight + falloff), which is what actually reads as "3D" rather
          than a flat-colored disc. */}
      <mesh scale={scale}>
        <sphereGeometry args={[0.16, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.55} roughness={0.3} metalness={0.4} />
      </mesh>
      {/* Soft outer glow */}
      <mesh scale={scale}>
        <sphereGeometry args={[0.34, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.14} depthWrite={false} />
      </mesh>
    </group>
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function Scene({ reducedMotion }) {
  const group = useRef();
  const services = CONFIG.services;
  const nodes = useMemo(() => {
    const count = Math.max(services.length, 3);
    return Array.from({ length: count }, (_, i) => spiralPosition(i, count, 2.2));
  }, [services.length]);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reducedMotion) {
      group.current.rotation.y += delta * 0.18;
    }
    const { x, y } = state.pointer;
    // Base tilt keeps the ring visibly 3/4-on even with the pointer centered —
    // a dead-on camera angle is what made the previous version read as flat.
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -0.32 + y * 0.18, 0.04);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -x * 0.12, 0.04);
  });

  return (
    <group ref={group} rotation={[-0.32, 0, 0]}>
      <GlowNode position={[0, 0, 0]} color={PRIMARY} scale={1.6} />
      {nodes.map((pos, i) => {
        const hasService = Boolean(services[i]);
        const color = hasService ? SIGNAL : GHOST;
        return (
          <group key={i}>
            <Line
              points={[
                [0, 0, 0],
                [pos.x, pos.y, pos.z],
              ]}
              color={PRIMARY}
              transparent
              opacity={hasService ? 0.4 : 0.15}
              dashed={!hasService}
              dashScale={8}
            />
            <Float speed={reducedMotion ? 0 : 1.4} rotationIntensity={0} floatIntensity={reducedMotion ? 0 : 0.7}>
              <GlowNode position={pos} color={color} />
            </Float>
          </group>
        );
      })}
    </group>
  );
}

export default function NetworkScene() {
  const reducedMotion = useReducedMotion();

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [1.8, 1.1, 4.6], fov: 52 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 4, 4]} intensity={60} color="#ffffff" />
      <pointLight position={[-3, -2, 3]} intensity={20} color={PRIMARY} />
      <Scene reducedMotion={reducedMotion} />
    </Canvas>
  );
}
