/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Cart3(props) {
  const { nodes, materials } = useGLTF("./models/cart.glb");
  return (
    <group {...props} dispose={null}>
      <group
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.1, 0.1, 0.1]}
        position={[45, 0, -29]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["uploads-files-48816-Shopping_Cart_1"].geometry}
          material={materials.wire_028149177}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["uploads-files-48816-Shopping_Cart_2"].geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["uploads-files-48816-Shopping_Cart_3"].geometry}
          material={materials.Silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["uploads-files-48816-Shopping_Cart_4"].geometry}
          material={materials.wire_224086086}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["uploads-files-48816-Shopping_Cart_5"].geometry}
          material={materials.wire_166229229}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["uploads-files-48816-Shopping_Cart_6"].geometry}
          material={materials.wire_028089177}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["uploads-files-48816-Shopping_Cart_7"].geometry}
          material={materials.wire_087225198}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["uploads-files-48816-Shopping_Cart_8"].geometry}
          material={materials.wire_135110008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["uploads-files-48816-Shopping_Cart_9"].geometry}
          material={materials.wire_213154229}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["uploads-files-48816-Shopping_Cart_10"].geometry}
          material={materials.wire_153228184}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["uploads-files-48816-Shopping_Cart_11"].geometry}
          material={materials.wire_225087143}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["uploads-files-48816-Shopping_Cart_12"].geometry}
          material={materials.wire_008061138}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["uploads-files-48816-Shopping_Cart_13"].geometry}
          material={materials.wire_008110135}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/cart.glb");