/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PlantPot1(props) {
  const { nodes, materials } = useGLTF("./models/plant3.glb");
  return (
    <group {...props} dispose={null} position={[-48,0,-45]} scale={6}>
      <group position={[0.871, 0.484, -0.028]} rotation={[-Math.PI, 1.309, -Math.PI]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002.geometry}
          material={materials.b_s08_m1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_1.geometry}
          material={materials.b_s08_m2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_2.geometry}
          material={materials.b_s08_m3}
        />
      </group>
      <group
        position={[1.977, -0.174, -0.104]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003.geometry}
          material={materials.b_s08_pot_m1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_1.geometry}
          material={materials.b_s08_pot_m2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_2.geometry}
          material={materials.b_s08_pot_m3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_3.geometry}
          material={materials.b_s08_pot_m4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_4.geometry}
          material={materials.b_s08_pot_m5}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/plant3.glb");