/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MainTable(props) {
  const { nodes, materials } = useGLTF('./models/mainTable.glb')
  return (
    <group {...props} dispose={null} position={[-7,0,22]}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.table.geometry}
      material={materials.wire_088144225}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[0.12,0.2,0.1]}
      position={[19,1.5,0]}
      rotation-z={Math.PI /2}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.table.geometry}
      material={materials.wire_088144225}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[0.12,0.2,0.1]}
      position={[-19,1.5,0]}
      rotation-z={Math.PI /2}
    />
  </group>
  )
}

useGLTF.preload('./models/mainTable.glb')