import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CircleGeometry, MeshStandardMaterial } from "three";

export function PSConsole(props) {
  const { nodes, materials } = useGLTF("./models/PSconsole.glb");
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();
  const outlineRef = useRef();

  const handlePointerOver = () => {
    setHovered(true);
    if (groupRef.current) {
      groupRef.current.position.y += 0.5;
    }
  };

  const handlePointerOut = () => {
    setHovered(false);
    if (groupRef.current) {
      groupRef.current.position.y -= 0.5;
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
      scale={[1.5, 1.5, 1.5]}
      position={[-16, 5, 24]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <mesh
        name="PS4_Base"
        castShadow
        receiveShadow
        geometry={nodes.PS4_Base.geometry}
        material={materials.Material}
      />
      <group name="PS4_Top" position={[0, 0.113, -0.042]}>
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          name="Cube001_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        name="PS4_Controller"
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
