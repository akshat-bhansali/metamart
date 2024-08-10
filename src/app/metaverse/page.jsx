"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Plane from "@/components/Plane";
import Lights from "@/components/Lights";

export default function page() {
  const testing = true;
  return (
    <>
      <div className="bg-gray-500 h-[100vh]">
        <Canvas shadows   camera={{ position: [0, 10, 10], fov: 50 }}>
          {testing ? <axesHelper visible={testing} args={[200]} /> : null}
          {testing ? <gridHelper args={[10, 10]} /> : null}
          <OrbitControls />
          {testing ? <Stats /> : null}
          <Lights />
            <Plane />
        </Canvas>
      </div>
    </>
  );
}
