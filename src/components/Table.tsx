'use client'
import { Canvas, ThreeElements } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import React, { useEffect } from 'react'
import * as THREE from 'three'
function TableModel() {
  const { scene } = useGLTF("https://wayizhojrtgepgaihluv.supabase.co/storage/v1/object/public/my-models/Table.glb")
  return <primitive object={scene} scale={2} />
}

export default function Table(props: ThreeElements['mesh']) {
  return (
    <mesh
    position={[1.2,4.5,0]} 
      scale={3.5}>
        <TableModel  />
    </mesh>
  )
}
