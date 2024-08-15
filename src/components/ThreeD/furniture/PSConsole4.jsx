import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CircleGeometry, MeshStandardMaterial } from "three";

export function PSConsole4(props) {
  const { nodes, materials } = useGLTF("./models/PSconsole.glb");
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();
  const outlineRef = useRef();

  const handlePointerOver = () => {
    setHovered(true);
    if (groupRef.current) {
      groupRef.current.position.y += 0.5; // Lift the item on hover
    }
  };
  const handleClick = (event) => {
    event.stopPropagation();
    props.onClick(); 
  };
  const handlePointerOut = () => {
    setHovered(false);
    if (groupRef.current) {
      groupRef.current.position.y -= 0.5; // Lower the item when pointer leaves
    }
  };

  return (
    <group
      {...props}
      ref={groupRef}
      dispose={null}
      scale={[1.5, 1.5, 1.5]}
      position={[-32, 5, 16]}
      rotation={[0, Math.PI, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PS4_Base.geometry}
        material={materials.Material}
      />
      <group position={[0, 0.113, -0.042]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PS4_Controller.geometry}
        material={materials.joystick}
        position={[0.332, 0.088, 0.944]}
        rotation={[0.536, 0, 0]}
      />

      {/* Circular Highlight Mesh */}
      <mesh
        ref={outlineRef}
        geometry={new CircleGeometry(1.5, 64)} // Adjust radius and segments as needed
        position={[0, -0.1, 0]} // Adjust position to highlight the desired area
        rotation={[Math.PI / 2, 0, 0]}
        material={
          new MeshStandardMaterial({
            color: hovered ? "blue" : "transparent",
            transparent: true,
            visible: hovered ? true : false,
            opacity: 0.5,
            side: 2,
          })
        }
      />
    </group>
  );
}

useGLTF.preload("./models/PSconsole.glb");
