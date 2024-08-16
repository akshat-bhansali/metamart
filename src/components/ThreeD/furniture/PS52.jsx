import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CircleGeometry, MeshStandardMaterial } from "three";

export function PS52(props) {
  const { nodes, materials } = useGLTF("./models/console2.glb");
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();
  const outlineRef = useRef();

  // Override the black material colors if needed
  materials.body_black.color.set("#000000"); // Pure black
  materials.usb_port_inner.color.set("#1a1a1a"); // Slightly off-black for contrast

  const handlePointerOver = () => {
    setHovered(true);
    if (groupRef.current) {
      groupRef.current.position.y += 0.5;
    }
  };
  const handleClick = (event) => {
    event.stopPropagation();
    props.onClick(); 
  };
  const handlePointerOut = () => {
    setHovered(false);
    if (groupRef.current) {
      groupRef.current.position.y -= 0.5;
    }
  };

  return (
    <group
      {...props}
      ref={groupRef}
      dispose={null}
      scale={[2, 2, 2]}
      position={[-20, 5, 20]}
      rotation={[0, (Math.PI / 2) * 3, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.stand}
      >
        <group position={[0, 0.9, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_1.geometry}
            material={materials.body_black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_2.geometry}
            material={materials.emission_blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={nodes.Plane.material}
            position={[0, 0.01, 0.1]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials.usb_port_inner}
            position={[0, 0.01, -0.1]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.usb_port_inner}
        position={[0.684, 0.427, -0.141]}
        scale={[0.03, 0.267, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials.usb_port_inner}
        position={[0.766, 0.828, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials.usb_port_inner}
        position={[0.776, 0.742, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve008.geometry}
        material={materials.usb_port_inner}
        position={[-0.6, 1.403, 0.156]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.201, 0.172, 1.201]}
      />

      {/* Circular Highlight Mesh */}
      <mesh
        ref={outlineRef}
        geometry={new CircleGeometry(1, 64)} // Adjust radius and segments as needed
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

useGLTF.preload("./models/console2.glb");
