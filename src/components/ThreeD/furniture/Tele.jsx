import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Tele(props) {
  const { nodes, materials } = useGLTF("./models/tele.glb");

  const phoneTexture = useTexture("./textures/solids/black.jpg");
  const dialTexture = useTexture("./textures/solids/gray.png");
  const dialCenterTexture = useTexture("./textures/solids/white.jpg");

  materials.Phone.map = phoneTexture;
  materials.mia_material_x1.map = dialCenterTexture;
  materials.PhoneDial = dialTexture;

  return (
    <group
      {...props}
      dispose={null}
      scale={[20, 20, 20]}
      position={[40, 7.5, 7]}
      rotation-y={Math.PI * 0.3}
    >
      <mesh
        name="phone_base"
        castShadow
        receiveShadow
        geometry={nodes.phone_base.geometry}
        material={materials.Phone}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
        material-transparent={false}
        material-opacity={1}
      >
        <mesh
          name="finger_stop"
          castShadow
          receiveShadow
          geometry={nodes.finger_stop.geometry}
          material={materials.Phone}
          material-transparent={false}
          material-opacity={1}
        />
      </mesh>
      <mesh
        name="phone_sit"
        castShadow
        receiveShadow
        geometry={nodes.phone_sit.geometry}
        material={materials.Phone}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
        material-transparent={false}
        material-opacity={1}
      />
      <mesh
        name="phone"
        castShadow
        receiveShadow
        geometry={nodes.phone.geometry}
        material={materials.Phone}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
        material-transparent={false}
        material-opacity={1}
      />
      <mesh
        name="dial"
        castShadow
        receiveShadow
        geometry={nodes.dial.geometry}
        material={dialTexture} // Apply the dial texture here
        position={[-0.038, 0.085, 0]}
        rotation={[Math.PI / 2, -0.768, 0]}
        scale={0.01}
        material-transparent={false}
        material-opacity={1}
      />
      <mesh
        name="dial_center"
        castShadow
        receiveShadow
        geometry={nodes.dial_center.geometry}
        material={materials.mia_material_x1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
        material-transparent={false}
        material-opacity={1}
      />
    </group>
  );
}

useGLTF.preload("./models/tele.glb");
