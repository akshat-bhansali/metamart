import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CircleGeometry, MeshStandardMaterial } from "three";

export function Headphones2(props) {
  const { nodes, materials } = useGLTF("./models/headphones2.glb");
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
      position={[12.25, 5.5, 17.3]}
      scale={[0.4, 0.4, 0.4]}
      rotation={[Math.PI, Math.PI / 2, Math.PI]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["uploads-files-4630106-headphone+8"].geometry}
        material={materials.initialShadingGroup}
        rotation={[Math.PI / 2, 0, 0]}
      />

      {hovered && (
        <mesh
          ref={outlineRef}
          geometry={new CircleGeometry(4, 64)} // Adjust radius and segments as needed
          position={[-0.35, -2.4, 0.35]} // Adjust position to highlight the desired area
          rotation={[Math.PI / 2, 0, 0]}
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

useGLTF.preload("./models/headphones2.glb");
