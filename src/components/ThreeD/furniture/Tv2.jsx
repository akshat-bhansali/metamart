import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CircleGeometry, MeshStandardMaterial } from "three";
import * as THREE from "three";

export function Tv2(props) {
  const { nodes, materials } = useGLTF("./models/tv2.glb");
  const videoRef = useRef();
  const outlineRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "./videos/i am ironman.mp4"; // Replace with your video file path
    video.loop = true;
    video.muted = true;
    video.play();

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;

    videoRef.current.material = new THREE.MeshBasicMaterial({
      map: videoTexture,
    });
  }, []);

  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };


  const handleClick = (event) => {
    event.stopPropagation();
    props.onClick();
  };

  return (
    <group
      {...props}
      dispose={null}
      rotation-y={Math.PI}
      scale={[4, 4, 4]}
      position={[13.5, 8, 47.5]}
      onClick={handleClick}
    >
      <group name="Scene">
        <group
          name="Plane"
          position={[0, 0.733, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1, 0.596]}
        >
          <mesh
            name="Plane_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Plane_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane_2.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            name="Plane_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane_3.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.016"]}
          position={[0.342, 0.735, -0.49]}
          rotation={[0, 0, -1.601]}
          scale={0.148}
        />
        <group
          name="Cylinder"
          position={[0.336, 0.811, -0.453]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[-0.012, -0.02, -0.012]}
        >
          <mesh
            name="Cylinder_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials["YELLOW RUB"]}
          />
          <mesh
            name="Cylinder_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={materials.metal}
          />
          <mesh
            name="Cylinder_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_3.geometry}
            material={materials["Material.017"]}
          />
          <mesh
            name="Cylinder_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_4.geometry}
            material={materials["Material.018"]}
          />
          <mesh
            name="Cylinder_5"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_5.geometry}
            material={materials["Material.019"]}
          />
          <mesh
            name="Cylinder_6"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_6.geometry}
            material={materials["Material.020"]}
          />
          <mesh
            name="Cylinder_7"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_7.geometry}
            material={materials["Material.021"]}
          />
        </group>
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["Material.022"]}
          position={[0.329, 0.535, -0.452]}
          scale={[-0.005, -0.018, -0.001]}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[0.328, 0.454, -0.445]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.007, 0.002, 0.009]}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[0.323, 0.461, -0.445]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.014, 0.002, 0.009]}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[0.328, 0.454, -0.445]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.014, 0.002, 0.009]}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.STAND}
          position={[0.002, 0.836, -0.472]}
          rotation={[-1.551, 0, 0]}
          scale={[0.071, 0.021, 0.313]}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.GLASS}
          position={[0.003, 0.83, -0.223]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.481}
        />
        <mesh
          name="Text"
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials["Material.023"]}
          position={[-0.015, 0.145, -0.3]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.035}
        />

        {/* Add a new plane with video texture */}
        <mesh
          rotation-x={Math.PI * 2}
          scale={[1.6, 1.4, 1.5]}
          ref={videoRef} // Attach the ref here for the video texture
          castShadow
          receiveShadow
          geometry={new THREE.PlaneGeometry(1.2, 0.75)} // Adjust the size to fit the TV screen
          position={[0, 0.75, -0.3]} // Adjust position to place the plane on top of the TV
          rotation={[-Math.PI / 2, 0, 0]} // Adjust the rotation to align with the TV screen
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        />
        {hovered && (
          <mesh
            ref={outlineRef}
            geometry={new CircleGeometry(1.2, 64)} // Adjust radius and segments as needed
            position={[0, 0.8, -0.6]} // Adjust position to highlight the desired area
            rotation={[0, 0, 0]}
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
    </group>
  );
}

useGLTF.preload("./models/tv2.glb");
