/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Staff2({ onClick }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/staff2.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    actions?.idle?.play();
  })
  return (
    <group ref={group} onClick={onClick} dispose={null} scale={[6,6,6]} rotation={[0, Math.PI*1.7, 0]} position={[30,0.1,-13]}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Ch07_Body"
            geometry={nodes.Ch07_Body.geometry}
            material={materials.Ch07_body}
            skeleton={nodes.Ch07_Body.skeleton}
          />
          <skinnedMesh
            name="Ch07_Eyelashes"
            geometry={nodes.Ch07_Eyelashes.geometry}
            material={materials.Ch07_hair}
            skeleton={nodes.Ch07_Eyelashes.skeleton}
          />
          <skinnedMesh
            name="Ch07_Hair"
            geometry={nodes.Ch07_Hair.geometry}
            material={materials.Ch07_hair}
            skeleton={nodes.Ch07_Hair.skeleton}
          />
          <skinnedMesh
            name="Ch07_Heels"
            geometry={nodes.Ch07_Heels.geometry}
            material={materials.Ch07_body}
            skeleton={nodes.Ch07_Heels.skeleton}
          />
          <skinnedMesh
            name="Ch07_Pants"
            geometry={nodes.Ch07_Pants.geometry}
            material={materials.Ch07_body}
            skeleton={nodes.Ch07_Pants.skeleton}
          />
          <skinnedMesh
            name="Ch07_Shirt"
            geometry={nodes.Ch07_Shirt.geometry}
            material={materials.Ch07_body}
            skeleton={nodes.Ch07_Shirt.skeleton}
          />
          <skinnedMesh
            name="Ch07_Suit"
            geometry={nodes.Ch07_Suit.geometry}
            material={materials.Ch07_body}
            skeleton={nodes.Ch07_Suit.skeleton}
          />
          <primitive object={nodes.mixamorig8Hips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/staff.glb')