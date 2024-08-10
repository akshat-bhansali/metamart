"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import MapFloor from "../../components/ThreeD/MapFloor";
import Lights from "../../components/ThreeD/Lights";
import { Character } from "../../components/ThreeD/Character";
import StoorFloor from "@/components/ThreeD/StoreFloor";

export default function page() {
  const testing = true;
  return (
    <>
      <div className="bg-gray-500 h-[100vh]">
        <Canvas shadows camera={{ position: [0, 10, 10], fov: 50 }}>
          {testing ? <axesHelper visible={testing} args={[200]} /> : null}
          {testing ? <gridHelper args={[10, 10]} /> : null}
          <OrbitControls />
          {testing ? <Stats /> : null}
          <Lights />
            <MapFloor />
            <Character/>
            <StoorFloor/>
        </Canvas>
      </div>
    </>
  );
}
