import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial, CircleGeometry, Mesh } from "three";

export function Mobile(props) {
  const { nodes, materials } = useGLTF("./models/mobile.glb");
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
        scale={[10, 10, 10]}
        position={[-16, 6.4, -16.3]}
        rotation-z={Math.PI / 2}
        rotation-x={Math.PI * -1.1}
        rotation-y={Math.PI * 1.5}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <group scale={[0.039, 0.042, 0.039]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials.phone}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials.black_bit}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_2.geometry}
            material={materials.screen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_3.geometry}
            material={materials.lens}
          />
        </group>
      </group>
      {/* Outline Mesh */}
      <mesh
        ref={outlineRef}
        geometry={new CircleGeometry(2, 32)} // Adjust size to match mobile width
        position={[-16, 5.1, -16.3]} // Position below the mobile
        rotation={[Math.PI / 2, 0, 0]} // Align horizontally
        material={
          new MeshStandardMaterial({
            color: hovered ? "blue" : "transparent",
            transparent: true,
            visible: hovered ? true : false,
            opacity: 0.5,
            side: 2, // Double-side rendering to make sure it's visible from all angles
          })
        }
      />
    </group>
  );
}

useGLTF.preload("./models/mobile.glb");
