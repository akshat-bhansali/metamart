import { useTexture } from '@react-three/drei';
import React from 'react';
import * as THREE from "three";

const MapFloor = () => {
  const map = useTexture("./textures/map_floor/grassy_cobblestone_diff_1k.png");
  const displacementMap = useTexture("./textures/map_floor/grassy_cobblestone_disp_1k.png");
  const normalMap = useTexture("./textures/map_floor/grassy_cobblestone_nor_gl_1k.png");
  const roughMap = useTexture("./textures/map_floor/grassy_cobblestone_rough_1k.png");

  const textureRepeat = 40; 

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
      <planeGeometry args={[200, 200]} /> 
      <meshStandardMaterial
        map={map}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughMap}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default MapFloor;
