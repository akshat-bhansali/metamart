import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PS52(props) {
  const { nodes, materials } = useGLTF('./models/2console.glb')

  // Override the black material colors if needed
  materials.body_black.color.set('#000000') // Pure black
  materials.usb_port_inner.color.set('#1a1a1a') // Slightly off-black for contrast

  return (
    <group {...props} dispose={null} scale={[2, 2, 2]} position={[-16,5,20]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.stand}>
        <group position={[0, 0.9, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_1.geometry}
            material={materials.body_black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_2.geometry}
            material={materials.emission_blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={nodes.Plane.material}
            position={[0, 0.01, 0.1]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials.usb_port_inner}
            position={[0, 0.01, -0.1]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.usb_port_inner}
        position={[0.684, 0.427, -0.141]}
        scale={[0.03, 0.267, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials.usb_port_inner}
        position={[0.766, 0.828, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials.usb_port_inner}
        position={[0.776, 0.742, 0]}

      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve008.geometry}
        material={materials.usb_port_inner}
        position={[-0.6, 1.403, 0.156]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.201, 0.172, 1.201]}
      />
      
    </group>
  )
}

useGLTF.preload('./models/2console.glb')
