/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Headphones7(props) {
  const { nodes, materials } = useGLTF('./models/headphones4.glb')
  return (
    <group {...props} dispose={null}  position={[11.7,7.2,22]} scale={[15,10,10]} >
      <group position={[0.039, 0, -0.023]} rotation={[0, 0, -1.92]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004.geometry}
          material={materials.BaseColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004_1.geometry}
          material={materials.TrimColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004_2.geometry}
          material={materials.Lights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Earcup.geometry}
          material={materials.EarcupsFabric}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.EarpieceMesh.geometry}
            material={materials.MeshMaterial}
            position={[0, -0.002, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HeadSet.geometry}
          material={materials.TrimColor}
          position={[-0.062, 0.003, 0]}
          rotation={[0, 0, 1.764]}
          scale={0.158}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HeadSetFabric.geometry}
            material={materials.HeadFabric}
            position={[-0.428, -0.42, 0]}
            scale={[0.962, 0.956, 0.932]}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./models/headphones4.glb')
