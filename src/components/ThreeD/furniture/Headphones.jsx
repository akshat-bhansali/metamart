/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Headphones(props) {
  const { nodes, materials } = useGLTF('./models/headphones.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.225, 0.042, 0.01]}
        rotation={[-1.725, 0, 0]}
        scale={[1.244, 2.879, 2.923]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001.geometry}
          material={materials['Plastic Rubber Matt']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_1.geometry}
          material={materials['Metal Chrome Marked']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_2.geometry}
          material={materials['Fabric Curtain']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_3.geometry}
          material={materials['Fabric Small Weave']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_4.geometry}
          material={materials.Stainless}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_5.geometry}
          material={materials.PlasticWhite}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_6.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_7.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_8.geometry}
          material={materials['Material.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/headphones.glb')
