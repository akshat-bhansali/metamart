/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Forklift(props) {
  const { nodes, materials } = useGLTF("./models/forklift.glb");
  return (
    <group {...props} dispose={null} position={[55,0,40]} scale={5}>
      <group
        position={[-0.51, 0.273, -1.052]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.091, 0.069, 0.069]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials.Material}
        />
      </group>
      <group
        position={[0.51, 0.253, -1.052]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.091, 0.069, 0.069]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials.Material}
        />
      </group>
      <group
        position={[-0.507, 0.325, 0.594]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.091, 0.069, 0.069]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials.Material}
        />
      </group>
      <group
        position={[0.516, 0.325, 0.594]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.091, 0.069, 0.069]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane000_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane000_2.geometry}
          material={materials.Material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.002"]}
        position={[0.554, 0.7, -0.747]}
        scale={[0.02, 0.063, 0.063]}
      />
      <group position={[0, 0.498, -0.373]} scale={[0.091, 0.069, 0.069]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0, 0.498, -0.373]} scale={[0.091, 0.069, 0.069]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_2.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_3.geometry}
          material={materials.Material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/forklift.glb");
