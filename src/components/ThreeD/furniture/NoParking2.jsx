/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function NoParking2(props) {
  const { nodes, materials } = useGLTF("./models/noParking.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[0, 8.5, -82]}
      rotation={[0, (Math.PI / 2) * -1, 0]}
      scale={75}
    >
      <group position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NoParking002.geometry}
          material={materials.NoParking1}
          position={[0, 0.312, -8.043]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[2.149, 2.149, 0.081]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole002.geometry}
          material={materials.Pole1}
          position={[0, 0, 1.431]}
          scale={[0.241, 0.241, 9.452]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SignageContinuation002.geometry}
          material={materials.Continuation_Start}
          position={[0, 0.267, -4.032]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.336, 0.04, 0.149]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/noParking.glb");
