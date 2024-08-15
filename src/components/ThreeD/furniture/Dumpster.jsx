import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dumpster(props) {
  const { nodes, materials } = useGLTF("./models/dumpster.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[120, 0, -70]}
      rotation={[0, 0, 0]}
      scale={8}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.dumpster}
        position={[-0.022, 0.555, -0.008]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder000.geometry}
          material={materials.dumpster}
          position={[0.405, 0.59, -0.005]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/dumpster.glb");
