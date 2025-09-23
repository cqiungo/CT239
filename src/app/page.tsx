'use client'
import Image from "next/image";
import {ThreeScene} from "@/components/ThreeScence";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"

export default function Home() {
  return (
    <Canvas style={{ background: "lightblue",width: "100vw", height: "100vh" }} camera={{ position: [0, 0, 15], fov: 60, near: 0.1, far: 1000 }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <ThreeScene position={[-5.2, 0, 0]} />
      <ThreeScene position={[5.2, 0, 0]} />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
  </Canvas>
  );
}
