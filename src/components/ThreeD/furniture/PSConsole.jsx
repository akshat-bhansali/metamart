/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PSConsole(props) {
  const { nodes, materials } = useGLTF('./models/PSconsole.glb')
 
  return (
    <group {...props} dispose={null} scale={[1.5,1.5,1.5]} position={[-16,5,24]}>
      <mesh
        name="PS4_Base"
        castShadow
        receiveShadow
        geometry={nodes.PS4_Base.geometry}
        material={materials.Material}
      />
      <group name="PS4_Top" position={[0, 0.113, -0.042]}>
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['Material.001']}
        />
        <mesh
          name="Cube001_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['Material.002']}
        />
      </group>
      <mesh
        name="PS4_Controller"
        castShadow
        receiveShadow
        geometry={nodes.PS4_Controller.geometry}
        material={materials.joystick}
        position={[0.332, 0.088, 0.944]}
        rotation={[0.536, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('./models/PSconsole.glb')
