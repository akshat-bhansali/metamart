/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Warehouse(props) {
  const { nodes, materials } = useGLTF('./models/warehouse.glb')
  return (
    <group {...props} dispose={null} position={[92,4,-9]} scale={[680,400,376]} rotation={[0,-Math.PI/2,0]}>
      <group position={[-0.001, 0.012, 0.01]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.lambert4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.lambert5}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube6.geometry}
        material={materials.lambert2}
        position={[0, 0.036, 0.008]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pPlane1.geometry}
        material={materials.lambert9}
        position={[0.014, -0.01, 0.011]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder10.geometry}
        material={materials.lambert10}
        position={[0.01, -0.001, -0.047]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder11.geometry}
        material={materials.lambert10}
        position={[-0.028, -0.001, -0.047]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder18.geometry}
        material={materials.lambert10}
        position={[0.015, 0, 0.009]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube20.geometry}
        material={materials.lambert3}
        position={[0, 0, -0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube21.geometry}
        material={materials.lambert10}
        position={[0, 0, -0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube22.geometry}
        material={materials.lambert10}
        position={[-0.032, 0, -0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube23.geometry}
        material={materials.lambert10}
        position={[-0.065, 0, -0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube24.geometry}
        material={materials.lambert10}
        position={[-0.096, 0, -0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder19.geometry}
        material={materials.lambert10}
        position={[-0.008, 0, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder20.geometry}
        material={materials.lambert10}
        position={[0.172, 0, 0.009]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.011}
      />
    </group>
  )
}

useGLTF.preload('./models/warehouse.glb')
