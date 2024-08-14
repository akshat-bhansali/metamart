import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Sony(props) {
  const { nodes, materials } = useGLTF('./models/sony.glb')
  return (
    <group {...props} dispose={null} position={[49.5,10,-35.5]} rotation={[0,-Math.PI/2,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.001']}
      />
    </group>
  )
}

useGLTF.preload('./models/sony.glb')
