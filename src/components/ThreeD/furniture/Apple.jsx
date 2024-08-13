import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Apple(props) {
  const { nodes, materials } = useGLTF('./models/apple.glb')
  return (
    <group {...props} dispose={null} position={[52,9.5,18]} rotation={[Math.PI/2,0,Math.PI/2]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCircle.geometry}
        material={materials['Material.001']}
        position={[0, 2.874, 0.472]}
        scale={2.509}
      />
    </group>
  )
}

useGLTF.preload('./models/apple.glb')