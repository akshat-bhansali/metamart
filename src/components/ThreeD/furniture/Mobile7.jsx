import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CircleGeometry, MeshStandardMaterial } from "three";

export function Mobile7(props) {
  const { nodes, materials } = useGLTF("./models/mobile4.glb");
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
        scale={[35, 35, 35]}
        position={[-23.6, 5.4, -24.2]}
        rotation={[Math.PI * 0.015, Math.PI * -0.4, Math.PI * -0.065]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Buttons007_Cube044.geometry}
          material={materials["Screen_material.001"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Buttons008_Cube045.geometry}
          material={materials["Screen_material.001"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Buttons_Cube046.geometry}
          material={materials["Screen_material.001"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.012}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.camera001_camera_1.geometry}
            material={materials.gray_glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.camera001_camera_2.geometry}
            material={materials.Black_glass}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.012}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.camera002_camera001_1.geometry}
            material={materials.gray_glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.camera002_camera001_2.geometry}
            material={materials.Black_glass}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.012}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.camera003_camera002_1.geometry}
            material={materials.gray_glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.camera003_camera002_2.geometry}
            material={materials.Black_glass}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.012}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.camera004_camera003_1.geometry}
            material={materials.gray_glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.camera004_camera003_2.geometry}
            material={materials.Black_glass}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.012}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.camera_camera004_1.geometry}
            material={materials.gray_glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.camera_camera004_2.geometry}
            material={materials.Black_glass}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.012}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022_Cube047_1.geometry}
            material={materials["phone_material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022_Cube047_2.geometry}
            material={materials.material_port}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.flashlight001_Circle017.geometry}
          material={materials.flashlight}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.frame001_Circle019.geometry}
          material={materials["Screen_material.001"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Frame003_Frame001.geometry}
          material={materials["Screen_material.001"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Inscriptions_Mesh.geometry}
          material={materials.glass}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.012}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.phone002_1.geometry}
            material={materials.phone_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.phone002_2.geometry}
            material={materials["phone_material.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scanner002_Cube043.geometry}
          material={materials.glass_}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.012}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Screen002_Plane003_1.geometry}
            material={materials["Screen_material.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Screen002_Plane003_2.geometry}
            material={materials["Screen_material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Screen002_Plane003_3.geometry}
            material={materials["Screen_material.002"]}
          />
        </group>
      </group>
      {/* Outline Mesh */}
      <mesh
        ref={outlineRef}
        geometry={new CircleGeometry(2, 32)} // Adjust size to fit the mobile model
        position={[-26, 5.1, -24.2]} // Adjust position to fit around the mobile model
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

useGLTF.preload("./models/mobile4.glb");
