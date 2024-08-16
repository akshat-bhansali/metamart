import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CircleGeometry, MeshStandardMaterial } from "three";

export function Speaker7(props) {
  const { nodes, materials } = useGLTF("./models/speaker2.glb");
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
      scale={[0.8, 0.8, 0.8]}
      rotation={[0, Math.PI / 2, 0]}
      position={[6.5, 5.9, 20]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <group position={[0.589, 1.282, 0.017]} scale={[0.757, 0.786, 0.786]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_3.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_4.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_5.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_6.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_7.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Back_hole002.geometry}
          material={materials["Material.010"]}
          position={[-0.779, -1.631, -0.021]}
          scale={[1.322, 1.272, 1.272]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Backplate.geometry}
          material={materials["Material.018"]}
          position={[-2.089, -1.631, -0.021]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.201, 1.248, 1.201]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_plate.geometry}
          material={materials["Material.017"]}
          position={[0.066, -3.001, 0.927]}
          scale={[0.143, 0.012, 0.137]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_plate001.geometry}
          material={materials["Material.017"]}
          position={[0.066, -3.001, -0.988]}
          scale={[0.143, 0.012, 0.137]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_plate002.geometry}
          material={materials["Material.017"]}
          position={[-1.849, -3.001, -0.988]}
          scale={[0.143, 0.012, 0.137]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_plate003.geometry}
          material={materials["Material.017"]}
          position={[-1.832, -3.001, 0.927]}
          scale={[0.143, 0.012, 0.137]}
        />
        <group
          position={[-2.115, -1.039, -0.03]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.081, 0.084, 0.081]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_1.geometry}
            material={materials["Material.012"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JBL_plate.geometry}
          material={materials["Material.007"]}
          position={[0.495, -2.788, -0.021]}
          scale={[0.132, 0.127, 0.127]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LEd.geometry}
          material={materials["Material.019"]}
          position={[0.494, -0.52, -0.021]}
          scale={[0.014, 0.014, 0.056]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.On_off.geometry}
          material={materials["Material.013"]}
          position={[-2.186, -2.094, 1.253]}
          scale={[0.372, 0.358, 0.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003.geometry}
          material={materials["Material.009"]}
          position={[-2.091, 0.633, -0.394]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.038, 0.04, 0.038]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004.geometry}
          material={materials["Material.009"]}
          position={[-2.091, -0.163, -0.001]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.038, 0.04, 0.038]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006.geometry}
          material={materials["Material.009"]}
          position={[-2.091, 0.643, 0.351]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.038, 0.04, 0.038]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007.geometry}
          material={materials["Material.009"]}
          position={[-2.091, 0.168, -1.09]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.037, 0.039, 0.037]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere008.geometry}
          material={materials["Material.009"]}
          position={[-2.091, 0.168, 1.056]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.037, 0.039, 0.037]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere009.geometry}
          material={materials["Material.009"]}
          position={[-2.091, 0.966, 0.682]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.037, 0.039, 0.037]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere010.geometry}
          material={materials["Material.009"]}
          position={[-2.091, 0.966, -0.747]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.037, 0.039, 0.037]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere011.geometry}
          material={materials["Material.009"]}
          position={[-2.091, -2.65, -0.726]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.037, 0.039, 0.037]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere012.geometry}
          material={materials["Material.009"]}
          position={[-2.091, -2.65, 1.143]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.037, 0.039, 0.037]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere013.geometry}
          material={materials["Material.009"]}
          position={[-2.091, -0.13, -0.303]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.037, 0.039, 0.037]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere014.geometry}
          material={materials["Material.009"]}
          position={[-2.091, -0.13, 0.717]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.037, 0.039, 0.037]}
        />
      </group>

      {hovered && (
        <mesh
          ref={outlineRef}
          geometry={new CircleGeometry(2, 64)} // Adjust radius and segments as needed
          position={[0, -1.7, 0]} // Adjust position to highlight the desired area
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

useGLTF.preload("./models/speaker2.glb");
