import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CircleGeometry, MeshStandardMaterial } from "three";

export function Headphones3(props) {
  const { nodes, materials } = useGLTF("./models/headphones3.glb");
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
      position={[5, 6.4, 22.2]}
      scale={[0.3, 0.3, 0.3]}
      rotation={[Math.PI, Math.PI / 2, Math.PI]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plastic_band.geometry}
        material={materials.Plastic}
        position={[0, 2.722, 0]}
        scale={0.352}
      />
      <group rotation={[0, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["Plastic.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.metal}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ear_piece_rubber.geometry}
        material={materials.rubber}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plastic_holder.geometry}
        material={materials["plastic 2"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Plastic.002"]}
        scale={0.373}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.steel}
        position={[0, 2.722, 0]}
        scale={0.352}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.steel}
        scale={[0.094, 0.06, 0.094]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
      />
      {hovered && (
        <mesh
          ref={outlineRef}
          geometry={new CircleGeometry(5, 64)} // Adjust radius and segments as needed
          position={[-0.35, -6.2, 0.35]} // Adjust position to highlight the desired area
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

useGLTF.preload("./models/headphones3.glb");
