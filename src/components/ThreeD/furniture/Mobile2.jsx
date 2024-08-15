import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial, CircleGeometry, Mesh } from "three";

export function Mobile2(props) {
  const { nodes, materials } = useGLTF("./models/mobile2.glb");
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
        position={[-21, 5.6, -16]}
        rotation-x={Math.PI * -0.1}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <group position={[0, 0.074, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials.Body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={materials.Display}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_2.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials.Body}
            position={[0.019, -0.005, -0.065]}
            scale={[1.314, 1, 1.199]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002.geometry}
              material={materials["Glass.001"]}
              position={[0, -0.001, 0]}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.camara}
            position={[-0.011, 0.003, -0.07]}
            scale={-0.002}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002.geometry}
              material={materials["Glass.001"]}
              position={[0, -0.585, -0.003]}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials.camara}
            position={[0.023, -0.005, -0.065]}
            scale={[0.002, 0, 0.002]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials.camara}
            position={[0.015, -0.005, -0.065]}
            scale={[0.002, 0, 0.002]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MI_Logo.geometry}
            material={materials["MI Logo"]}
            position={[0, -0.004, 0.048]}
            rotation={[0, 0, -Math.PI]}
            scale={0.01}
          />
        </group>
      </group>
      {/* Outline Mesh */}
      <mesh
        ref={outlineRef}
        geometry={new CircleGeometry(2, 32)} // Adjust size to match mobile width
        position={[-21, 5.1, -16]} // Position below the mobile
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

useGLTF.preload("./models/mobile2.glb");
