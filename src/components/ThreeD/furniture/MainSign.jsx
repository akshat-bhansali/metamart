/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, Text } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export function MainSign(props) {
  const { nodes, materials } = useGLTF("./models/mainSign.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[30, 5.3, 43]}
      rotation={[0, Math.PI*1.7, 0]}
      scale={1}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.001"]}
        position={[-0.144, 0.084, -0.03]}
        scale={[0.425, 0.159, 0.425]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={
          new MeshStandardMaterial({
            color: "grey", // Set the color to grey
          })
        }
        position={[0, 4.492, 0]}
        scale={[0.127, 0.059, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Material}
        position={[0, 0.272, 0]}
        scale={0.277}
      />
      <Text
        position={[-0.2, 6, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        fontSize={0.5}
        color="black"
        anchorX="center"
        anchorY="middle"
        scale={3}
      >
        Customisation
      </Text>
      <Text
        position={[0.2, 6, 0]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={0.5}
        color="black"
        anchorX="center"
        anchorY="middle"
        scale={3}
      >
        Customisation
      </Text>
    </group>
  );
}

useGLTF.preload("./models/mainSign.glb");
