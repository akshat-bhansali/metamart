/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModPs5Boxel(props) {
  const { nodes, materials } = useGLTF('./models/ps5Box.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box001.geometry}
        material={materials['Material.005']}
        position={[0, -0.309, 0]}
        rotation={[0, -1.571, 0]}
        scale={2.442}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Handle001.geometry}
        material={materials['Material.003']}
        position={[0, 0.737, 0]}
        rotation={[0, -1.571, 0]}
        scale={2.442}
      />
    </group>
  )
}

useGLTF.preload('./models/ps5Box.glb')
