import { useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

const StoreWalls3 = () => {
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
      <mesh rotation-y={Math.PI * -0.5} position={[50.2, 7.5, 0]} receiveShadow>
        <planeGeometry args={[100, 15]} />
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

export default StoreWalls3;
