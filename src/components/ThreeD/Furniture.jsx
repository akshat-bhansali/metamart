import React, { useRef, useState } from "react";
import { Plant } from "./furniture/Plant";
import { Plant2 } from "./furniture/Plant2";
import { Sofa } from "./furniture/Sofa";
import { Sofa2 } from "./furniture/Sofa2";
import { Sofa3 } from "./furniture/Sofa3";

import { Chair } from "./furniture/Chair";
import { Chair2 } from "./furniture/Chair2";
import { Table } from "./furniture/Table";
import { Pc } from "./furniture/Pc";
import { Tele } from "./furniture/Tele";
import { TvStand } from "./furniture/TvStand";
import { Tv1 } from "./furniture/Tv1";
import { Tv2 } from "./furniture/Tv2";
import { Tv3 } from "./furniture/Tv3";
import { MainTable } from "./furniture/MainTable";
import { MainTable2 } from "./furniture/MainTable2";
import { Cash } from "./furniture/Cash";
import { Laptop1 } from "./furniture/Laptop1";
import { Laptop2 } from "./furniture/Laptop2";
import { Laptop4 } from "./furniture/Laptop4";
import { Laptop3 } from "./furniture/Laptop3";
import { Laptop5 } from "./furniture/Laptop5";
import { Laptop6 } from "./furniture/Laptop6";
import { HelpDesk } from "./furniture/HelpDesk";
import { Mobile } from "./furniture/Mobile";
import { MobileStand } from "./furniture/MobileStand";
import { Mobile2 } from "./furniture/Mobile2";
import { MobileStand2 } from "./furniture/MobileStand2";
import { MobileStand3 } from "./furniture/MobileStand3";
import { MobileStand4 } from "./furniture/MobileStand4";
import { Mobile3 } from "./furniture/Mobile3";
import { Mobile4 } from "./furniture/Mobile4";
import { Headphones } from "./furniture/Headphones";
import { Headphones2 } from "./furniture/Headphones2";
import { Headphones3 } from "./furniture/Headphones3";
import { Headphones4 } from "./furniture/Headphones4";
import { Headphones5 } from "./furniture/Headphones5";
import { Headphones6 } from "./furniture/Headphones6";
import { Chair3 } from "./furniture/Chair3";
import { HeadphoneStand } from "./furniture/HeadphoneStand";
import { HeadphoneStand2 } from "./furniture/HeadphoneStand2";
import { HeadphoneStand3 } from "./furniture/HeadphoneStand3";
import { House } from "./House1";
import { Lamp } from "./furniture/Lamp";
import { Lamp2 } from "./furniture/Lamp2";
import { Lamp3 } from "./furniture/Lamp3";
import { Lamp4 } from "./furniture/Lamp4";
import { Lamp5 } from "./furniture/Lamp5";
import { Lamp6 } from "./furniture/Lamp6";
import { Lamp7 } from "./furniture/Lamp7";
import { Lamp8 } from "./furniture/Lamp8";
import { Billboard } from "./furniture/Billboard";
import { Speaker } from "./furniture/Speaker";
import { Speaker2 } from "./furniture/Speaker2";
import { Speaker3 } from "./furniture/Speaker3";
import { Speaker4 } from "./furniture/Speaker4";
import { Speaker5 } from "./furniture/Speaker5";
import { Speaker6 } from "./furniture/Speaker6";
import { Speaker7 } from "./furniture/Speaker7";
import { Speaker8 } from "./furniture/Speaker8";
import { Speaker9 } from "./furniture/Speaker9";
import { Speaker10 } from "./furniture/Speaker10";
import { BoyStatue } from "./furniture/BoyStatue";
import { Headphones7 } from "./furniture/Headphones7";
import { Sony } from "./furniture/Sony";
import { PS5 } from "./furniture/PS5";
import { PS52 } from "./furniture/PS52";
import { Samsung } from "./furniture/Samsung";
import { PSLogo } from "./furniture/PSLogo";
import { PSLogo2 } from "./furniture/PSLogo2";
import { PSConsole } from "./furniture/PSConsole";
import { PSConsole2 } from "./furniture/PSConsole2";
import { PSConsole3 } from "./furniture/PSConsole3";
import { PSConsole4 } from "./furniture/PSConsole4";
import { LegoDeadpool } from "./furniture/LegoDeadpool";

import { Apple } from "./furniture/Apple";
import { Bit } from "./furniture/Bit";
import { Metal } from "./furniture/Metal1";
import { Metal2 } from "./furniture/Metal2";
import { Cart1 } from "./furniture/Cart1";
import { Cart2 } from "./furniture/Cart2";
import { Cart3 } from "./furniture/Cart3";
import { Mother } from "./characters/Mother";
import { Child } from "./characters/Child";
import { Road } from "./furniture/Road";
import { Cctv1 } from "./furniture/Cctv1";
import { Cctv2 } from "./furniture/CCtv2";
import { Cctv3 } from "./furniture/Cctv3";
import { Cctv4 } from "./furniture/CCtv4";
import { MobileStand5 } from "./furniture/MobileStand5";
import { MobileStand6 } from "./furniture/MobileStand6";
import { MobileStand7 } from "./furniture/MobileStand7";
import { MobileStand8 } from "./furniture/MobileStand8";
import { Mobile5 } from "./furniture/Mobile5";
import { Mobile6 } from "./furniture/Mobile6";
import { Mobile7 } from "./furniture/Mobile7";
import { Mobile8 } from "./furniture/Mobile8";
import { Warehouse } from "./furniture/Warehouse";
import { Fence } from "./furniture/Fence";
import { Fence3 } from "./furniture/Fence3";
import { Fence2 } from "./furniture/Fence2";
import { Fence4 } from "./furniture/Fence4";
import { Fence5 } from "./furniture/Fence5";
import { Fence6 } from "./furniture/Fence6";
import { Fence7 } from "./furniture/Fence7";
import { Fence8 } from "./furniture/Fence8";
import { Fence9 } from "./furniture/Fence9";
import { Fence10 } from "./furniture/Fence10";
import { Fence11 } from "./furniture/Fence11";
import { Fence12 } from "./furniture/Fence12";
import { FireExtinguisher } from "./furniture/FireExtinguisher";
import { Benches } from "./furniture/Benches";
import { Barrier1 } from "./furniture/Barrier1";
import { Barrier2 } from "./furniture/Barrier2";
import { Forklift } from "./furniture/Forklift";
import { TollGate } from "./furniture/TollGate";
import { Crate } from "./furniture/Crate";
import { Crates2 } from "./furniture/Crates2";
import { CircleGeometry, MeshStandardMaterial } from "three";
import { Ps5Box1 } from "./furniture/Ps5Box1";
import { Ps5Box2 } from "./furniture/Ps5Box2";
import { Ps5Box3 } from "./furniture/Ps5Box3";
import { Ps5Box4 } from "./furniture/Ps5Box4";
import { PlantPot1 } from "./furniture/PlantPot1";
import { PlantPot2 } from "./furniture/PlantPot2";
import { Frames } from "./furniture/Frames";
import { Frames2 } from "./furniture/Frames2";
import { Open24 } from "./furniture/Open24";
import { BushRow1 } from "./furniture/BushRow1";
import { BushRow2 } from "./furniture/BushRow2";
import { BushRow4 } from "./furniture/BushRow4";
import { BushRow5 } from "./furniture/BushRow5";
import { Dumpster } from "./furniture/Dumpster";
import { Cases } from "./furniture/Cases";
import { Truck } from "./furniture/Truck";
import { PhoneBox } from "./furniture/PhoneBox";
import { PhoneBox2 } from "./furniture/PhoneBox2";
import { PhoneBox3 } from "./furniture/PhoneBox3";
import { MainSign } from "./furniture/MainSign";
import { NoParking1 } from "./furniture/NoParking1";
import { NoParking2 } from "./furniture/NoParking2";
import { TrafficLight } from "./furniture/TrafficLight";
import { CustomPhone } from "./furniture/CustomPhone";
import { MakeInIndia } from "./furniture/MakeInIndia";
import { Rickshaw } from "./furniture/Rickshaw";
const Furniture = ({ onLaptopClick }) => {
  const handleLaptopClick = (modelPath) => {
    onLaptopClick(modelPath);
  };
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();
  const outlineRef = useRef();

  const handlePointerOver = () => {
    setHovered(true);
    if (groupRef.current) {
      groupRef.current.position.y += 0.5;
    }
  };

  const handlePointerOut = () => {
    setHovered(false);
    if (groupRef.current) {
      groupRef.current.position.y -= 0.5;
    }
  };
  return (
    <>
      <Sofa />
      <Sofa2 />
      <Sofa3 />
      <Plant />
      <Plant2 />
      <Chair />
      <Chair2 />
      <Table />
      <Pc />
      <Tele />
      <TvStand />
      <Tv1 onClick={() => handleLaptopClick("./models/tv1.glb")} />
      <Tv2 onClick={() => handleLaptopClick("./models/tv2.glb")} />
      <Tv3 onClick={() => handleLaptopClick("./models/tv3.glb")} />
      <MainTable />
      <MainTable2 />
      <Cash />
      <Laptop1 onClick={() => handleLaptopClick("./models/laptop1.glb")} />
      <Laptop2 onClick={() => handleLaptopClick("./models/laptop2.glb")} />
      <Laptop3 onClick={() => handleLaptopClick("./models/laptop3.glb")} />
      <Laptop4 onClick={() => handleLaptopClick("./models/laptop2.glb")} />
      <Laptop5 onClick={() => handleLaptopClick("./models/laptop1.glb")} />
      <Laptop6 onClick={() => handleLaptopClick("./models/laptop3.glb")} />
      <Billboard />
      <HelpDesk />
      <MobileStand />
      <MobileStand2 />
      <MobileStand3 />
      <MobileStand4 />
      <Mobile onClick={() => handleLaptopClick("./models/mobile.glb")} />
      <Mobile2 onClick={() => handleLaptopClick("./models/mobile2.glb")} />
      <Mobile3 onClick={() => handleLaptopClick("./models/mobile3.glb")} />
      <Mobile4 onClick={() => handleLaptopClick("./models/mobile4.glb")} />
      <Mobile5 onClick={() => handleLaptopClick("./models/mobile2.glb")} />
      <Mobile6 onClick={() => handleLaptopClick("./models/mobile.glb")} />
      <Mobile7 onClick={() => handleLaptopClick("./models/mobile4.glb")} />
      <Mobile8 onClick={() => handleLaptopClick("./models/mobile3.glb")} />
      <MobileStand5 />
      <MobileStand6 />
      <MobileStand7 />
      <MobileStand8 />
      <Headphones
        onClick={() => handleLaptopClick("./models/headphones.glb")}
      />
      <Headphones2
        onClick={() => handleLaptopClick("./models/headphones2.glb")}
      />
      <Headphones3
        onClick={() => handleLaptopClick("./models/headphones3.glb")}
      />
      <Headphones4
        onClick={() => handleLaptopClick("./models/headphones4.glb")}
      />
      <Headphones5
        onClick={() => handleLaptopClick("./models/headphones4.glb")}
      />
      <Headphones6
        onClick={() => handleLaptopClick("./models/headphones4.glb")}
      />
      <HeadphoneStand />
      <Chair3 />
      <HeadphoneStand2 />
      <HeadphoneStand3 />
      {/* <House/> */}
      <Lamp />
      <Lamp2 />
      <Lamp3 />
      <Lamp4 />
      <Lamp5 />
      <Lamp6 />
      <Lamp7 />
      <Lamp8 />
      <Speaker />
      <Speaker2 />
      <Speaker3 />
      <Speaker4 />
      <Speaker5 />
      <Speaker6 />
      <PS5 onClick={() => handleLaptopClick("./models/console2.glb")} />
      <PS52 onClick={() => handleLaptopClick("./models/console2.glb")} />
      <PSLogo />
      <PSLogo2 />
      <PSConsole onClick={() => handleLaptopClick("./models/PSConsole.glb")} />
      <PSConsole2 onClick={() => handleLaptopClick("./models/PSConsole.glb")} />
      <PSConsole3 onClick={() => handleLaptopClick("./models/PSConsole.glb")} />
      <PSConsole4 onClick={() => handleLaptopClick("./models/PSConsole.glb")} />
      <LegoDeadpool />
      <Speaker7 onClick={() => handleLaptopClick("./models/speaker2.glb")} />
      <Speaker8 onClick={() => handleLaptopClick("./models/speaker2.glb")} />
      <Speaker9 onClick={() => handleLaptopClick("./models/speaker3.glb")} />
      <Speaker10 onClick={() => handleLaptopClick("./models/speaker3.glb")} />
      <BoyStatue />
      <Headphones7 />
      <Metal />
      <Metal2 />
      <MakeInIndia/>
      <Rickshaw/>
      <group
        ref={groupRef}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <group onClick={() => handleLaptopClick("cart")}>
          <Cart1 />
          <Cart2 />
          <Cart3 />
        </group>
        {/* Circular Highlight Mesh */}
        <mesh
          ref={outlineRef}
          geometry={new CircleGeometry(8, 64)} // Adjust radius and segments as needed
          position={[41.5, 0, -27]} // Adjust position to highlight the desired area
          rotation={[Math.PI / 2, 0, 0]}
          material={
            new MeshStandardMaterial({
              color: hovered ? "blue" : "transparent",
              visible: hovered ? true : false,
              transparent: true,
              opacity: 0.5,
              side: 2,
            })
          }
        />
      </group>
      <Mother />
      <Child />
      <Road />
      <Cctv1 />
      <Cctv2 />
      <Cctv3 />
      <Cctv4 />
      <Fence />
      <Fence3 />
      <Fence2 />
      <Fence4 />
      <Fence5 />
      <Fence6 />
      <Fence7 />
      <Fence8 />
      <Fence9 />
      <Fence10 />
      <Fence11 />
      <Fence12 />
      <Warehouse />
      <FireExtinguisher />
      <Benches />
      <Barrier1 />
      <Barrier2 />
      <Forklift />
      <TollGate />
      <Ps5Box1 />
      <Ps5Box2 />
      <Ps5Box3 />
      <Ps5Box4 />
      <Plant />
      <Plant2 />
      <PlantPot1 />
      <PlantPot2 />
      <Crate />
      <Crates2 />
      <Frames />
      <Frames2 />
      <Open24 />
      <BushRow1 />
      <BushRow2 />
      <BushRow4 />
      <BushRow5 />
      <Dumpster />
      <Truck />
      {/* <Sign/> */}
      <Cases />
      <PhoneBox />
      <PhoneBox2 />
      <PhoneBox3 />
      <MainSign />
      <NoParking1 />
      <NoParking2 />
      <TrafficLight />
    </>
  );
};

export default Furniture;
