'use client'
import Image from "next/image";
import {ThreeScene} from "@/components/ThreeScence";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei"
import Table from "@/components/Table";
import FlowerPot from "@/components/Flower";
import Coin from "@/components/Coin";
import { useState } from "react";
export default function Home() {
  const rowConfig = [3, 5, 7] 
  const spacing = 1.5
  const [items, setItems] = useState(
    rowConfig.map((count) => Array(count).fill(true))
  )
  const [selected, setSelected] = useState<{ row: number; cols: number[] } | null>(null)

  const handleSelect = (row: number, col: number) => {
    if (!items[row][col]) return

    if (!selected) {
      setSelected({ row, cols: [col] })
      return
    }

    // nếu cùng hàng → toggle
    if (selected.row === row) {
      setSelected((prev) => {
        if (!prev) return null
        const exists = prev.cols.includes(col)
        return {
          row,
          cols: exists ? prev.cols.filter((c) => c !== col) : [...prev.cols, col],
        }
      })
    } else {
      // khác hàng → reset sang hàng mới
      setSelected({ row, cols: [col] })
    }
  }

  const handleConfirm = () => {
    if (!selected) return
    setItems((prev) =>
      prev.map((rowItems, r) =>
        r === selected.row
          ? rowItems.map((alive, c) => (selected.cols.includes(c) ? false : alive))
          : rowItems
      )
    )
    setSelected(null)
  }

  return (
    <Canvas style={{ background: "lightblue",width: "100vw", height: "100vh" }} camera={{ position: [0, 0, 15], fov: 60, near: 0.1, far: 1000 }}>
      <axesHelper args={[5]} />
      <ambientLight intensity={Math.PI / 2} />
      <gridHelper args={[40, 40]} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Table ></Table>
      {items.map((rowItems, row) => {
          const rowLength = rowItems.length
          return rowItems.map((alive, col) => {
            if (!alive) return null
            const x = (col - rowLength + 3.7) 
            const z = (row - rowConfig.length / 2 + 0.5) * spacing
            const isSelected = selected?.row === row && selected.cols.includes(col)
            return (
              <Coin
                key={`${row}-${col}`}
                position={[x, 5.5, z]}
                selected={isSelected}
                onClick={() => {
                  handleSelect(row, col)
                  console.log(isSelected,`Clicked on item at row ${row}, col ${col}`)
                }}
              />
            )
          })
        })}
      
      <FlowerPot></FlowerPot>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
  </Canvas>
  );
}
