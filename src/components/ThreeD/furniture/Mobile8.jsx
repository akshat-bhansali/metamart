import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CircleGeometry, MeshStandardMaterial } from "three";

export function Mobile8(props) {
  const { nodes, materials } = useGLTF("./models/mobile3.glb");
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
    <group>
      <group
        {...props}
        ref={groupRef}
        dispose={null}
        scale={[6, 6, 6]}
        position={[-31, 6.5, -23.7]}
        rotation={[Math.PI * 1.1, 0, Math.PI]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body_Cube003.geometry}
          material={materials["Material.003"]}
          rotation={[-3.133, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Glass_Cube006.geometry}
          material={materials["Material.004"]}
          rotation={[-3.133, 0, 0]}
        />
      </group>
      {/* Outline Mesh */}
      <mesh
        ref={outlineRef}
        geometry={new CircleGeometry(2, 32)} // Adjust size to fit the mobile model
        position={[-31, 5.1, -23.7]} // Adjust position to fit around the mobile model
        rotation={[Math.PI / 2, 0, 0]} // Align horizontally
        material={
          new MeshStandardMaterial({
            color: hovered ? "blue" : "transparent",
            transparent: true,
            visible: hovered ? true : false,
            opacity: 0.5,
            side: 2, // Double-side rendering
          })
        }
      />
    </group>
  );
}

useGLTF.preload("./models/mobile3.glb");
