import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CircleGeometry, MeshStandardMaterial } from "three";

export function Headphones6(props) {
  const { nodes, materials } = useGLTF("./models/headphones4.glb");
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
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      position={[21.5, 5.9, 22]}
      scale={[10, 10, 10]}
      rotation={[Math.PI / 2, Math.PI / 2, Math.PI * 1.5]}
      onClick={handleClick}
    >
      <group position={[0.039, 0, -0.023]} rotation={[0, 0, -1.92]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004.geometry}
          material={materials.BaseColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004_1.geometry}
          material={materials.TrimColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004_2.geometry}
          material={materials.Lights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Earcup.geometry}
          material={materials.EarcupsFabric}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.EarpieceMesh.geometry}
            material={materials.MeshMaterial}
            position={[0, -0.002, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HeadSet.geometry}
          material={materials.TrimColor}
          position={[-0.062, 0.003, 0]}
          rotation={[0, 0, 1.764]}
          scale={0.158}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HeadSetFabric.geometry}
            material={materials.HeadFabric}
            position={[-0.428, -0.42, 0]}
            scale={[0.962, 0.956, 0.932]}
          />
        </mesh>
      </group>
      {hovered && (
        <mesh
          ref={outlineRef}
          geometry={new CircleGeometry(0.15, 64)} // Adjust radius and segments as needed
          position={[0, -0.13, 0]} // Adjust position to highlight the desired area
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

useGLTF.preload("./models/headphones4.glb");
