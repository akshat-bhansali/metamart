import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { AmbientLight, DirectionalLight } from '@react-three/fiber'

export function Laptop23(props) {
  const { nodes, materials } = useGLTF('./models/laptop3.glb')

  // Apply some basic light
  return (
    <group {...props} dispose={null} scale={[10, 10, 10]} position={[16, 5, -16]}>
      <directionalLight position={[10, 10, 5]} intensity={2} />

      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Display_Display_Plane_1.geometry}
          material={materials.Cover_Silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Display_Display_Plane_2.geometry}
          material={materials.Display_Glass}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keyboard_Keyboard_Plane.geometry}
        material={materials.Keyboard_Black_Plastic}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rubber_Strip_Rubber_Stripes.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Silver_colour_Cover_Cover_Plane_1.geometry}
          material={materials.Cover_Silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Silver_colour_Cover_Cover_Plane_2.geometry}
          material={materials.TouchPad_Silver}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/laptop3.glb')
