/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial, CircleGeometry } from "three";

export function Laptop2(props) {
  const { nodes, materials } = useGLTF("./models/laptop2.glb");
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();
  const outlineRef = useRef();

  const handlePointerOver = () => {
    setHovered(true);
    if (groupRef.current) {
      groupRef.current.position.y += 0.5;
    }
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
      position={[9, 5, -16]}
      scale={[1.2, 1.2, 1.2]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Acer-Logo_2011"].geometry}
          material={materials["Acer-Logo_2011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Acer-Logo_2011001"].geometry}
          material={materials["Acer-Logo_2011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body_Plane_1.geometry}
          material={materials.Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body_Plane_2.geometry}
          material={materials["Material.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body_Plane_3.geometry}
          material={materials.Matte_Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Full_HD_Sticker.geometry}
          material={materials.Full_HD_Sticker}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hdmi_Cube002.geometry}
          material={materials.Keycaps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HDMI_pin_Cube004_1.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HDMI_pin_Cube004_2.geometry}
          material={materials.Keycaps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphone_jack_Cylinder003_1.geometry}
          material={materials.Keycaps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphone_jack_Cylinder003_2.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hinge_Plane006_1.geometry}
          material={materials.Keycaps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hinge_Plane006_2.geometry}
          material={materials.Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keyboard_Plane012_1.geometry}
          material={materials.Keycaps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keyboard_Plane012_2.geometry}
          material={materials.Glow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OLED_Screen_Plane004_2.geometry}
          material={materials.Display}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Power_port_Cylinder_1.geometry}
          material={materials.Keycaps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Power_port_Cylinder_2.geometry}
          material={materials.Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RTX_Sticker.geometry}
          material={materials.RTX_Sticker}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ryzen_Sticker.geometry}
          material={materials.Ryzen_Sticker}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen_Plane003.geometry}
          material={materials.Matte_Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Type_C_port_2_Cube008_1.geometry}
          material={materials.Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Type_C_port_2_Cube008_2.geometry}
          material={materials.Keycaps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Type_C_port_2_Cube008_3.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Type_C_port_2_Cube008_4.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Type_C_port_Cube_1.geometry}
          material={materials.Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Type_C_port_Cube_2.geometry}
          material={materials.Keycaps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Type_C_port_Cube_3.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.USB_inside001_Cube014_1.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.USB_inside001_Cube014_2.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.USB_inside_Cube012_1.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.USB_inside_Cube012_2.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.USB_Metal_2_Cube013.geometry}
          material={materials.Keycaps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.USB_Metal_Cube011.geometry}
          material={materials.Keycaps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Webcam_Cylinder004_1.geometry}
          material={materials.Keycaps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Webcam_Cylinder004_2.geometry}
          material={materials.Web_cam}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Webcam_Cylinder004_3.geometry}
          material={materials.Webcam_lens}
        />
      </group>

      {/* Outline Mesh */}
      <mesh
        ref={outlineRef}
        geometry={new CircleGeometry(2.6, 32)} // Adjust size accordingly
        position={[0, -0.15, -0.2]} // Slightly offset to be behind the laptop
        rotation={[Math.PI / 2, 0, 0]}
        material={
          new MeshStandardMaterial({
            color: hovered ? "blue" : "transparent",
            transparent: true,
            opacity: 0.5,
            side: 2, // Double-side rendering to make sure it's visible from all angles
          })
        }
      />
    </group>
  );
}

useGLTF.preload("./models/laptop2.glb");
