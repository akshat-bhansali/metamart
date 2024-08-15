import React, { useRef, useState } from "react";
import { useGLTF} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CircleGeometry, MeshStandardMaterial } from "three";

export function CustomPhone({ onClick }) {
  const { nodes, materials } = useGLTF("./models/white_white.glb");
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
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

  // Rotate the model infinitely
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.07; // Adjust the rotation speed here
    }
  });

  return (
    <group onClick={onClick}>
      <group
        dispose={null}
        position={[29.5, 4, 35]}
        scale={0.125}
        ref={groupRef}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.354}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["uploads-files-2943098-samsung+galaxy+s21+ultra_1"].geometry
            }
            material={materials.aiStandardSurface11SG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["uploads-files-2943098-samsung+galaxy+s21+ultra_2"].geometry
            }
            material={materials.back}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["uploads-files-2943098-samsung+galaxy+s21+ultra_3"].geometry
            }
            material={materials.aiStandardSurface1SG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["uploads-files-2943098-samsung+galaxy+s21+ultra_4"].geometry
            }
            material={materials.initialShadingGroup}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["uploads-files-2943098-samsung+galaxy+s21+ultra_5"].geometry
            }
            material={materials.aiStandardSurface14SG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["uploads-files-2943098-samsung+galaxy+s21+ultra_6"].geometry
            }
            material={materials.aiStandardSurface12SG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["uploads-files-2943098-samsung+galaxy+s21+ultra_7"].geometry
            }
            material={materials.sideFrame}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["uploads-files-2943098-samsung+galaxy+s21+ultra_8"].geometry
            }
            material={materials.aiStandardSurface17SG}
          />
        </group>
      </group>
      {/* Outline Mesh */}
      <mesh
        ref={outlineRef}
        geometry={new CircleGeometry(1, 32)} // Adjust size to fit the mobile model
        position={[29.5, 5.25, 35]} // Adjust position to fit around the mobile model
        rotation={[Math.PI / 2, 0, 0]} // Align horizontally
        material={
          new MeshStandardMaterial({
            color: hovered ? "blue" : "transparent",
            visible: hovered?true:false,
            transparent: true,
            opacity: 0.5,
            side: 2, // Double-side rendering
          })
        }
      />
    </group>
  );
}

useGLTF.preload("./models/white_white.glb");
