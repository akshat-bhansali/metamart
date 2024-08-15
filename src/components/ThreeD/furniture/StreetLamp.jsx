import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function StreetLamp(props) {
  const { nodes, materials } = useGLTF('./models/Street_Lamp_1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.glass.geometry} material={materials.glass} />
      <mesh castShadow receiveShadow geometry={nodes.Lamp.geometry} material={materials.Lamp} />
      <mesh castShadow receiveShadow geometry={nodes.bulb.geometry} material={materials.bulb} />
      <mesh castShadow receiveShadow geometry={nodes.wick.geometry} material={materials.wick} />
    </group>
  )
}

useGLTF.preload('./models/Street_Lamp_1.glb')
