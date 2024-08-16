import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CircleGeometry, MeshStandardMaterial } from "three";

export function Speaker10(props) {
  const { nodes, materials } = useGLTF("./models/speaker3.glb");
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();
  const outlineRef = useRef();
  const whiteMaterial = new MeshStandardMaterial({ color: "white" });

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
      scale={[0.6, 0.6, 0.6]}
      rotation={[0, Math.PI * 2.7, 0]}
      position={[21, 5, 18]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bitton_1.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bluetooth.geometry}
        material={materials["Material.003"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Button_2.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Charger.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cloth.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder1.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder2.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder3.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder4.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_logo.geometry}
        material={nodes.Front_logo.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hanger.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.L_Speaker.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.L_Speaker1.geometry}
        material={whiteMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_Body.geometry}
        material={materials["Material.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Minus.geometry}
        material={materials["Material.004"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.logo}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_1.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_2.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Play.geometry}
        material={materials["Material.006"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plus.geometry}
        material={materials["Material.005"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R_Speaker.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R_Speaker1.geometry}
        material={whiteMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rubber.geometry}
        material={materials.side1}
        rotation={[Math.PI / 2, 0, 0]}
      />

      {hovered && (
        <mesh
          ref={outlineRef}
          geometry={new CircleGeometry(5, 64)} // Adjust radius and segments as needed
          position={[1.5, -0.7, -0.5]} // Adjust position to highlight the desired area
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
      )}
    </group>
  );
}

useGLTF.preload("./models/speaker3.glb");
