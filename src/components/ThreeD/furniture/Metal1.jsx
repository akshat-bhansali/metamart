import React from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export function Metal(props) {
  const { nodes, materials } = useGLTF("./models/metal.glb");

  const whiteMaterial = new MeshStandardMaterial({ color: "white" });

  return (
    <group {...props} dispose={null}>
      <group
        position={[-40, 7, 9.5]}
        rotation={[0, (Math.PI / 2) * 2, 0]}
        scale={[0.08, 0.08, 0.1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box1733.geometry}
          material={materials.a3r}
          position={[0, -85.275, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box1734.geometry}
          material={materials.a3r}
          position={[0, -84.647, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox001.geometry}
          material={materials.a3r}
          position={[-33.406, -85.587, -0.045]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox002.geometry}
          material={materials.a3r}
          position={[33.982, -85.587, -0.045]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={whiteMaterial}
          position={[0, 42.084, 6.232]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/metal.glb");
