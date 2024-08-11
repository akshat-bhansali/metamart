import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Plant(props) {
  const { nodes, materials } = useGLTF('./models/plant.glb')

  // Ensure the material is not transparent and is rendered correctly
  materials.eb_house_plant_01.transparent = false
  materials.eb_house_plant_01.depthWrite = true // Ensures correct rendering order
  materials.eb_house_plant_01.depthTest = true // Ensures the material is rendered based on depth
  materials.eb_house_plant_01.opacity = 1

  return (
    <group {...props} dispose={null} scale={[0.2, 0.2, 0.2]} position={[15,0,-45]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface8.geometry}
        material={materials.eb_house_plant_01}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('./models/plant.glb')
