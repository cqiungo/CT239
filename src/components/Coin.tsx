'use client'
import { useGLTF } from "@react-three/drei"
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber"
import React, { useRef, useState } from "react"
import * as THREE from "three"
function CoinModel({ selected }: { selected: boolean }) {
  const { scene } = useGLTF(
    "https://wayizhojrtgepgaihluv.supabase.co/storage/v1/object/public/my-models/Coin.glb"
  )

  // clone để không sửa trực tiếp vào scene gốc
  const clonedScene = scene.clone()

  clonedScene.traverse((child: any) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: selected ? "hotpink" : "orange",
      })
    }
  })

  return <primitive object={clonedScene} scale={0.5} rotation={[Math.PI / 2, 0, 0]} />
}
export default function Coin({
  position,
  selected,
  onClick,
}: {
  position: [number, number, number]
  selected: boolean
  onClick: () => void
}) {
  return (
    <group position={position} onClick={onClick}>
      <CoinModel selected={selected} />
    </group>
  )
}
