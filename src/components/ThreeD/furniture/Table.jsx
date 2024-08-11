import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from "three"

export function Table(props) {
  const { nodes, materials } = useGLTF('./models/table.glb')
  const mainFrameTexture = useTexture('./textures/table/main_frame.png') 
  const drawersTexxture = useTexture('./textures/table/drawers.png')

  // Apply the texture to the desired material
  materials['Material #661116'].map = mainFrameTexture;
  materials['Material #661116'].map.wrapS = materials['Material #661116'].map.wrapT = THREE.RepeatWrapping
  materials['Material #661116'].map.repeat.set(1, 1) // Adjust texture repeat as needed
  materials['Material #661116'].needsUpdate = true
  materials['Material #30'].map = drawersTexxture;
  materials['Material #30'].map.wrapS = materials['Material #30'].map.wrapT = THREE.RepeatWrapping
  materials['Material #30'].map.repeat.set(1, 1) // Adjust texture repeat as needed
  materials['Material #30'].needsUpdate = true

  return (
    <group {...props} dispose={null} rotation-y={Math.PI * -0.5} position={[40,3.5,0]}>
      <group position={[0.923, 0.193, 0.237]} scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001.geometry}
          material={materials['Material #661116']}
          position={[0, -2.205, 1.799]}
          rotation={[-3.139, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box004.geometry}
          material={materials['Material #30']}
          position={[15.37, 8.924, -4.791]}
          rotation={[1.573, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box005.geometry}
          material={materials['Material #30']}
          position={[15.37, 5.82, -4.799]}
          rotation={[1.573, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box006.geometry}
          material={materials['Material #30']}
          position={[15.37, 2.702, -4.806]}
          rotation={[1.573, 0, -Math.PI]}
        />
        <group position={[-18.517, -2.859, -2.704]} rotation={[-3.139, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh003.geometry}
            material={materials['Material #661116']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh003_1.geometry}
            material={materials['Material #661117']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle001.geometry}
          material={materials['Material #30']}
          position={[-15.43, 2.704, -4.82]}
          rotation={[1.573, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle002.geometry}
          material={materials['Material #661116']}
          position={[0.132, -2.34, 0.118]}
          rotation={[-3.139, 0, 0]}
          scale={0.887}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/table.glb')
