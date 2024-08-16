import React from "react";
import StoreFloor from "./StoreFloor";
import { Door } from "./storeWalls/Door";
import StoreWalls6 from "./storeWalls/StoreWall6";
import StoreWalls from "./storeWalls/StoreWalls";
import StoreWalls2 from "./storeWalls/StoreWalls2";
import StoreWalls3 from "./storeWalls/StoreWalls3";
import StoreWalls4 from "./storeWalls/StoreWalls4";
import StoreWalls5 from "./storeWalls/StoreWalls5";
import { GlassDoor } from "./furniture/GlassDoor";

const StoreFrame = () => {
  return (
    <>
      <StoreFloor />
      <StoreWalls />
      <StoreWalls2 />
      <StoreWalls3 />
      <StoreWalls4 />
      <StoreWalls5 />
      <StoreWalls6 />
      {/* <Door /> */}
      <GlassDoor/>
    </>
  );
};

export default StoreFrame;
