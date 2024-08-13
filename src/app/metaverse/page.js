"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import MapFloor from "../../components/ThreeD/MapFloor";
import Lights from "../../components/ThreeD/Lights";
import { Character } from "../../components/ThreeD/Character";
import StoreFrame from "@/components/ThreeD/StoreFrame";
import Furniture from "@/components/ThreeD/Furniture";
import { SittingChar } from "@/components/ThreeD/characters/SittingChar";
import { SittingChar2 } from "@/components/ThreeD/characters/SittingChar2";
import { Staff } from "@/components/ThreeD/characters/Staff";
import { Segmented, Avatar, Button } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  RobotOutlined,
} from "@ant-design/icons";
import { useState } from "react";

export default function Page() {
  const testing = true;
  const [segment, setSegment] = useState("user1");

  return (
    <>
      <div className="bg-gray-500 h-[100vh] relative">
        {/* Segmented Control in the top center with only icons */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Segmented
            options={[
              {
                label: (
                  <Avatar
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    shape="square"
                    size="large"
                  />
                ),
                value: "user1",
              },
              {
                label: (
                  <Avatar
                    style={{ backgroundColor: "#f56a00" }}
                    shape="square"
                    size="large"
                  >
                    K
                  </Avatar>
                ),
                value: "user2",
              },
              {
                label: (
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                    shape="square"
                    size="large"
                  />
                ),
                value: "user3",
              },
            ]}
            value={segment}
            onChange={(value) => setSegment(value)}
          />
        </div>

        {/* Floating Button for Cart */}
        <div className="fixed bottom-4 right-4 z-20">
          <Button
            shape="circle"
            icon={<ShoppingCartOutlined />}
            size="large"
            style={{ backgroundColor: "#87d068", color: "white" }}
          />
        </div>

        {/* Floating Button for AI */}
        <div className="fixed bottom-16 right-4 z-20">
          <Button
            shape="circle"
            icon={<RobotOutlined />}
            size="large"
            style={{ backgroundColor: "#1890ff", color: "white" }}
          />
        </div>

        {/* Controls for Movement */}
        <div className="absolute bottom-4 left-4 z-20">
          <div className="flex">
            <div className="flex flex-col items-center ml-4">
              <Button
                shape="default"
                style={{ width: 40, height: 40, margin: 1, borderRadius: 5, opacity: 0.7 }}
              >
                W
              </Button>
              <div className="flex flex-row">
                <Button
                  shape="default"
                  style={{ width: 40, height: 40, margin: 1, borderRadius: 5, opacity: 0.7 }}
                >
                  A
                </Button>
                <Button
                  shape="default"
                  style={{ width: 40, height: 40, margin: 1, borderRadius: 5, opacity: 0.7 }}
                >
                  S
                </Button>
                <Button
                  shape="default"
                  style={{ width: 40, height: 40, margin: 1, borderRadius: 5, opacity: 0.7 }}
                >
                  D
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center ml-4">
              <div className="flex flex-row">
                <Button
                  shape="default"
                  style={{ width: 40, height: 40, margin: 1, borderRadius: 5, opacity: 0.7 }}
                >
                  1
                </Button>
                <Button
                  shape="default"
                  style={{ width: 40, height: 40, margin: 1, borderRadius: 5, opacity: 0.7 }}
                >
                  2
                </Button>
              </div>
              <Button
                shape="default"
                style={{ width: 50, height: 40, margin: 1, borderRadius: 5, opacity: 0.7 }}
              >
                Shift
              </Button>
            </div>
          </div>
        </div>

        <Canvas
          shadows
          camera={{ position: [0, 30, 55], fov: 50 }}
          style={{ zIndex: 0 }} // Ensure Canvas has a lower z-index
        >
          {testing ? <axesHelper visible={testing} args={[200]} /> : null}
          {testing ? <gridHelper args={[200, 200]} /> : null}
          <OrbitControls />
          {testing ? <Stats /> : null}
          <Lights />
          <MapFloor />
          <Character />
          <StoreFrame />
          <Furniture />
          <SittingChar />
          <SittingChar2 />
          <Staff />
        </Canvas>
      </div>
    </>
  );
}
