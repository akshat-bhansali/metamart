/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Laptop1(props) {
  const { nodes, materials } = useGLTF('./models/laptop1.glb')
  return (
    <group {...props} dispose={null} scale={[12,12,12]} position={[10,5,-20]}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005.geometry}
          material={materials['Laptop.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_1.geometry}
          material={materials['_Spaeaker_Laptop_.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_2.geometry}
          material={materials['Keyboard.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_3.geometry}
          material={materials['Track_Pad.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_4.geometry}
          material={materials['Feet.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_5.geometry}
          material={materials['Screen_Grey.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_7.geometry}
          material={materials['Image.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_8.geometry}
          material={materials['Black_Gloss.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_9.geometry}
          material={materials['Keys.009']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/laptop1.glb')
