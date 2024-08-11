"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import MapFloor from "../../components/ThreeD/MapFloor";
import Lights from "../../components/ThreeD/Lights";
import { Character } from "../../components/ThreeD/Character";
import StoreFloor from "@/components/ThreeD/StoreFloor";
import StoreWalls from "@/components/ThreeD/storeWalls/StoreWalls";
import StoreWalls2 from "@/components/ThreeD/storeWalls/StoreWalls2";
import StoreWalls3 from "@/components/ThreeD/storeWalls/StoreWalls3";
import StoreWalls4 from "@/components/ThreeD/storeWalls/StoreWalls4";
import StoreWalls5 from "@/components/ThreeD/storeWalls/StoreWalls5";
import { Door } from "@/components/ThreeD/storeWalls/Door";
import StoreWalls6 from "@/components/ThreeD/storeWalls/StoreWall6";
import StoreFrame from "@/components/ThreeD/StoreFrame";

export default function page() {
  const testing = true;
  return (
    <>
      <div className="bg-gray-500 h-[100vh]">
        <Canvas shadows camera={{ position: [0, 10, 10], fov: 50 }}>
          {testing ? <axesHelper visible={testing} args={[200]} /> : null}
          {testing ? <gridHelper args={[200, 200]} /> : null}
          <OrbitControls />
          {testing ? <Stats /> : null}
          <Lights />
            <MapFloor />
            <Character/>
            <StoreFrame/>
        </Canvas>
      </div>
    </>
  );
}
