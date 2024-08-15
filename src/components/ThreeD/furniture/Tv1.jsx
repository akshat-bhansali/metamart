import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CircleGeometry, MeshStandardMaterial } from "three";
import * as THREE from "three";

export function Tv1(props) {
  const { nodes, materials } = useGLTF("./models/tv1.glb");
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

  const handleClick = (event) => {
    event.stopPropagation();
    props.onClick();
  };
  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

  return (
    <group
      {...props}
      dispose={null}
      rotation-y={Math.PI}
      scale={[1.5, 1.5, 1.5]}
      position={[-4, 4.5, 45]}
      onClick={handleClick}
    >
      <group name="Plane002" position={[0.009, 0.005, 0.161]}>
        <mesh
          name="Plane013"
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          name="Plane013_1"
          castShadow
          receiveShadow
          geometry={nodes.Plane013_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          name="Plane013_2"
          castShadow
          receiveShadow
          geometry={nodes.Plane013_2.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          name="Plane013_3"
          castShadow
          receiveShadow
          geometry={nodes.Plane013_3.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          name="Plane013_4"
          castShadow
          receiveShadow
          geometry={nodes.Plane013_4.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          name="Plane013_5"
          castShadow
          receiveShadow
          geometry={nodes.Plane013_5.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          name="Plane013_6"
          castShadow
          receiveShadow
          geometry={nodes.Plane013_6.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Plane013_7"
          castShadow
          receiveShadow
          geometry={nodes.Plane013_7.geometry}
          material={materials["Material.009"]}
        />
      </group>

      {/* Add a new plane with video texture */}
      <mesh
        ref={videoRef} // Attach the ref here for the video texture
        castShadow
        receiveShadow
        geometry={new THREE.PlaneGeometry(1.2, 0.75)} // Adjust the size to fit the TV screen
        position={[0, 2.9, 0.1]} // Adjust position to place the plane on top of the TV
        scale={[7.4, 6.7, 7]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />
      {hovered && (
        <mesh
          ref={outlineRef}
          geometry={new CircleGeometry(5, 64)} // Adjust radius and segments as needed
          position={[0, 2, -3.3]} // Adjust position to highlight the desired area
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
  );
}

useGLTF.preload("./models/tv1.glb");
