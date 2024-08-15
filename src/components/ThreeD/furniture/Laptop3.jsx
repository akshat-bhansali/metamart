import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CircleGeometry, MeshStandardMaterial } from "three";

export function Laptop3(props) {
  const { nodes, materials } = useGLTF("./models/laptop3.glb");
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
      scale={[10, 10, 10]}
      position={[16, 5, -16]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <directionalLight position={[10, 10, 5]} intensity={2} />

      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Display_Display_Plane_1.geometry}
          material={materials.Cover_Silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Display_Display_Plane_2.geometry}
          material={materials.Display_Glass}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keyboard_Keyboard_Plane.geometry}
        material={materials.Keyboard_Black_Plastic}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rubber_Strip_Rubber_Stripes.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Silver_colour_Cover_Cover_Plane_1.geometry}
          material={materials.Cover_Silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Silver_colour_Cover_Cover_Plane_2.geometry}
          material={materials.TouchPad_Silver}
        />
      </group>

      {/* Outline Mesh */}
      <mesh
        ref={outlineRef}
        geometry={new CircleGeometry(0.3, 32)} // Adjust size accordingly
        position={[0, -0.02, -0.02]} // Slightly offset to be behind the laptop
        rotation={[Math.PI / 2, 0, 0]}
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

useGLTF.preload("./models/laptop3.glb");
