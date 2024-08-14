import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function FireExtinguisher(props) {
  const { nodes, materials } = useGLTF("./models/FireExtinguisher.glb");
  return (
    <group {...props} dispose={null} position={[-48, 0, -48]} scale={12}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FireExtinguisher.geometry}
        material={materials.FireExtinguisher}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FireExtinguisherTag.geometry}
        material={materials.FireExtinguisher}
        position={[0, 0.356, 0]}
      />
    </group>
  );
}

useGLTF.preload("./models/FireExtinguisher.glb");
