
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Fence9(props) {
  const { nodes, materials } = useGLTF('./models/fence1.glb')
  return (
    <group {...props} dispose={null} position={[123.5,2.3,-11]} scale={[2,2.2,0]} rotation={[0,Math.PI/2,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wire_fence001.geometry}
        material={materials['Material.006']}
        position={[-4.479, 3.504, -0.181]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wire_fence002.geometry}
        material={materials['Material.006']}
        position={[0.032, 4.276, -0.149]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wire_fence.geometry}
        material={materials['Material.006']}
        position={[4.551, 3.504, -0.181]}
      />
    </group>
  )
}

useGLTF.preload('./models/fence1.glb')
