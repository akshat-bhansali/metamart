/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Laptop2(props) {
  const { nodes, materials } = useGLTF('./models/laptop2.glb')
  return (
    <group {...props} dispose={null} position={[20,5,-20]} scale={[1.2,1.2,1.2]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Acer-Logo_2011'].geometry}
        material={materials['Acer-Logo_2011']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Acer-Logo_2011001'].geometry}
        material={materials['Acer-Logo_2011']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
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
          material={materials['Material.032']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body_Plane_3.geometry}
          material={materials.Matte_Black}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Full_HD_Sticker.geometry}
        material={materials.Full_HD_Sticker}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hdmi_Cube002.geometry}
        material={materials.Keycaps}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
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
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
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
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
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
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
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
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OLED_Screen_Plane004_2.geometry}
          material={materials.Display}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
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
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RTX_Sticker.geometry}
        material={materials.RTX_Sticker}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ryzen_Sticker.geometry}
        material={materials.Ryzen_Sticker}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen_Plane003.geometry}
        material={materials.Matte_Black}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
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
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
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
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
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
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
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
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.USB_Metal_2_Cube013.geometry}
        material={materials.Keycaps}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.USB_Metal_Cube011.geometry}
        material={materials.Keycaps}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
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
    </group>
  )
}

useGLTF.preload('./models/laptop2.glb')
