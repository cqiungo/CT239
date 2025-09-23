'use client'
import Image from "next/image";
import {ThreeScene} from "@/components/ThreeScence";
import { Canvas } from "@react-three/fiber";
export default function Home() {
  return (
    <Canvas>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    <ThreeScene position={[-1.2, 0, 0]} />
    <ThreeScene position={[1.2, 0, 0]} />
  </Canvas>
  );
}
