/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cases(props) {
  const { nodes, materials } = useGLTF('./models/cases.glb')
  return (
   <group>
     <group {...props} dispose={null} scale={12} rotation={[-Math.PI/2,0,Math.PI/2]} position={[-13,5.08,-20]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lines.geometry}
        material={nodes.Lines.material}
        position={[0.258, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Star-Wars'].geometry}
        material={materials['Material.001']}
        position={[0.135, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Triangles.geometry}
        material={materials['Material.002']}
        position={[0.379, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nope.geometry}
        material={materials['Material.006']}
        position={[0.498, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MInimal.geometry}
        material={materials['Material.005']}
        position={[-0.493, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Good.geometry}
        material={materials['Material.007']}
        position={[-0.126, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Adidas.geometry}
        material={materials.Material}
        position={[-0.372, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nike.geometry}
        material={materials['Material.004']}
        position={[-0.251, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={materials['Material.003']}
        rotation={[Math.PI, 0, Math.PI]}
      />
    </group>
    <group {...props} dispose={null} scale={12} rotation={[-Math.PI/2,0,-Math.PI/2]} position={[-34.5,5.08,-20]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lines.geometry}
        material={nodes.Lines.material}
        position={[0.258, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Star-Wars'].geometry}
        material={materials['Material.001']}
        position={[0.135, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Triangles.geometry}
        material={materials['Material.002']}
        position={[0.379, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nope.geometry}
        material={materials['Material.006']}
        position={[0.498, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MInimal.geometry}
        material={materials['Material.005']}
        position={[-0.493, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Good.geometry}
        material={materials['Material.007']}
        position={[-0.126, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Adidas.geometry}
        material={materials.Material}
        position={[-0.372, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nike.geometry}
        material={materials['Material.004']}
        position={[-0.251, 0, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={materials['Material.003']}
        rotation={[Math.PI, 0, Math.PI]}
      />
    </group>
   </group>
  )
}

useGLTF.preload('./models/cases.glb')
