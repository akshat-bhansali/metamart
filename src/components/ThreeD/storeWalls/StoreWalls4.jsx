import { useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

const StoreWalls4 = () => {
  const map = useTexture("./textures/store_walls/beige_wall_001_diff_1k.png");
  const displacementMap = useTexture(
    "./textures/store_walls/beige_wall_001_disp_1k.png"
  );
  const normalMap = useTexture(
    "./textures/store_walls/beige_wall_001_nor_gl_1k.png"
  );
  const roughMap = useTexture(
    "./textures/store_walls/beige_wall_001_rough_1k.png"
  );

  const textureRepeat = 2;

  map.repeat.set(textureRepeat, textureRepeat);
  displacementMap.repeat.set(textureRepeat, textureRepeat);
  normalMap.repeat.set(textureRepeat, textureRepeat);
  roughMap.repeat.set(textureRepeat, textureRepeat);

  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping;
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
  roughMap.wrapS = roughMap.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <mesh
        rotation-y={Math.PI * -0.5}
        position={[-49.8, 9.3, 30]}
        receiveShadow
        scale={[0.87,1.25,1]}
      >
        <planeGeometry args={[46, 15]} />
        <meshStandardMaterial
          map={map}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughMap}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};

export default StoreWalls4;
