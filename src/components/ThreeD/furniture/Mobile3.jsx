/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mobile3(props) {
  const { nodes, materials } = useGLTF('./models/mobile3.glb')
  return (
    <group {...props} dispose={null} scale={[6,6,6]} position={[-25,6.5,-20.3]} rotation-x={Math.PI*-0.1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_Cube003.geometry}
        material={materials['Material.003']}
        rotation={[-3.133, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass_Cube006.geometry}
        material={materials['Material.004']}
        rotation={[-3.133, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('./models/mobile3.glb')