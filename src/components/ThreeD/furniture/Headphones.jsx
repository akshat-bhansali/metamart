import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CircleGeometry, MeshStandardMaterial } from "three";

export function Headphones(props) {
  const { nodes, materials } = useGLTF("./models/headphones.glb");
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();
  const outlineRef = useRef();

  const handlePointerOver = () => {
    setHovered(true);
    if (groupRef.current) {
      groupRef.current.position.y += 0.5; // Lift the item on hover
    }
  };

  const handlePointerOut = () => {
    setHovered(false);
    if (groupRef.current) {
      groupRef.current.position.y -= 0.5; // Lower the item when pointer leaves
    }
  };

  const handleClick = (event) => {
    event.stopPropagation();
    props.onClick(); 
  };

  return (
    <group
      {...props}
      ref={groupRef}
      dispose={null}
      position={[10.1, 6.3, 18.2]}
      scale={[3, 3, 3]}
      rotation={[Math.PI / 2, 0, Math.PI / 2]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <group
        position={[-0.225, 0.042, 0.01]}
        rotation={[-1.725, 0, 0]}
        scale={[1.244, 2.879, 2.923]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001.geometry}
          material={materials["Plastic Rubber Matt"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_1.geometry}
          material={materials["Metal Chrome Marked"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_2.geometry}
          material={materials["Fabric Curtain"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_3.geometry}
          material={materials["Fabric Small Weave"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_4.geometry}
          material={materials.Stainless}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_5.geometry}
          material={materials.PlasticWhite}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_6.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_7.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphones_open001_8.geometry}
          material={materials["Material.001"]}
        />
      </group>

      {hovered && (
        <mesh
          ref={outlineRef}
          geometry={new CircleGeometry(0.5, 64)} // Adjust radius and segments as needed
          position={[-0.35, 0.1, 0.55]} // Adjust position to highlight the desired area
          rotation={[Math.PI, 0, 0]}
          material={
            new MeshStandardMaterial({
              color: "blue",
              transparent: true,
              visible: hovered ? true : false,
              opacity: 0.5,
              side: 2,
            })
          }
        />
      )}
    </group>
  );
}

useGLTF.preload("./models/headphones.glb");
