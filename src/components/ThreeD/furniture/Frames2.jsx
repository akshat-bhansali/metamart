/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Frames2(props) {
  const { nodes, materials } = useGLTF('./models/frames2.glb')
  return (
    <group>
        <group
      {...props}
      dispose={null}
      position={[49.5, 4, -15]}
      scale={1.25}
      rotation={[0, Math.PI / 2, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_5set_OBJ.geometry}
        material={materials.wire_087225143}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.368}
      />
    </group><group
      {...props}
      dispose={null}
      position={[49.5, 4, 35]}
      scale={1.25}
      rotation={[0, Math.PI / 2, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_5set_OBJ.geometry}
        material={materials.wire_087225143}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.368}
      />
    </group>
    </group>
  );
}

useGLTF.preload('./models/frames2.glb')
