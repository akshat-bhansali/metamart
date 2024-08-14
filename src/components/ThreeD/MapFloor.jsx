import { useTexture } from '@react-three/drei';
import React from 'react';
import * as THREE from "three";

const MapFloor = () => {
  const map = useTexture("./textures/grass.jpg");
  const displacementMap = useTexture("./textures/map_floor/grassy_cobblestone_disp_1k.png");
  const normalMap = useTexture("./textures/map_floor/grassy_cobblestone_nor_gl_1k.png");
  const roughMap = useTexture("./textures/map_floor/grassy_cobblestone_rough_1k.png");

  const textureRepeat = 20; 

  map.repeat.set(textureRepeat, textureRepeat);
  displacementMap.repeat.set(textureRepeat, textureRepeat);
  normalMap.repeat.set(textureRepeat, textureRepeat);
  roughMap.repeat.set(textureRepeat, textureRepeat);

  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping;
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
  roughMap.wrapS = roughMap.wrapT = THREE.RepeatWrapping;

  return (
    <mesh rotation-x={Math.PI * -0.5} receiveShadow position={[23,-1,0]}>
      <planeGeometry args={[250, 180]} /> 
      <meshStandardMaterial
        map={map}
      />
    </mesh>
  );
};

export default MapFloor;
