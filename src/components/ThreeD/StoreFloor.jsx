import { useTexture } from '@react-three/drei';
import React from 'react';
import * as THREE from "three";

const StoorFloor = () => {
  const map = useTexture("./textures/store_floor/wood_floor_worn_diff_1k.png");
  const displacementMap = useTexture("./textures/store_floor/wood_floor_worn_disp_1k.png");
  const normalMap = useTexture("./textures/store_floor/wood_floor_worn_nor_gl_1k.png");
  const roughMap = useTexture("./textures/store_floor/wood_floor_worn_rough_1k.png");

  const textureRepeat = 10; 

  map.repeat.set(textureRepeat, textureRepeat);
  displacementMap.repeat.set(textureRepeat, textureRepeat);
  normalMap.repeat.set(textureRepeat, textureRepeat);
  roughMap.repeat.set(textureRepeat, textureRepeat);

  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping;
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
  roughMap.wrapS = roughMap.wrapT = THREE.RepeatWrapping;

  return (
    <mesh rotation-x={Math.PI * -0.5} receiveShadow>
      <planeGeometry args={[100, 100]} /> 
      <meshStandardMaterial
        map={map}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughMap}
      />
    </mesh>
  );
};

export default StoorFloor;
