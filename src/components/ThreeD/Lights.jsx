import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
  const lightRef = useRef(null);
  // useHelper(lightRef, DirectionalLightHelper, 5, "red"); // shows where light is
  return (
    <>
      <ambientLight intensity={2} /> {/* background lighting */}
    {/* use hemisphere light to make top light blue and bottom light green fror sky and ground */}
    {/* use point light for lamps */}
      {/* main light */}
      <directionalLight
        color={"white"}
        position={[0, 50, 50]}
        ref={lightRef}
        castShadow
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-bottom={-50}
        shadow-camera-top={50}
      />
      {/* shadow-camera-dir is used to increase shadown allowance space */}
      {/* castShadow => directionalLight
      shadows => Canvas
      receiveShadow => mesh (plane)
      castShadow => mesh(sphere) */}
    </>
  );
};

export default Lights;
