import React from 'react'
import { Plant } from './furniture/Plant'
import { Plant2 } from './furniture/Plant2'
import { Sofa } from './furniture/Sofa'
import { Sofa2 } from './furniture/Sofa2'
import { Sofa3 } from './furniture/Sofa3'

import { Chair } from './furniture/Chair'
import { Chair2 } from './furniture/Chair2'
import { Table } from './furniture/Table'
import { Pc } from './furniture/Pc'
import { Tele } from './furniture/Tele'
import { TvStand } from './furniture/TvStand'
import { Tv1 } from './furniture/Tv1'
import { Tv2 } from './furniture/Tv2'
import { Tv3 } from './furniture/Tv3'
import { MainTable } from './furniture/MainTable'
import { MainTable2 } from './furniture/MainTable2'
import { Cash } from './furniture/Cash'
import { Laptop1 } from './furniture/Laptop1'
import { Laptop2 } from './furniture/Laptop2'
import { Laptop4 } from './furniture/Laptop4'
import { Laptop3 } from './furniture/Laptop3'
import { Laptop5 } from './furniture/Laptop5'
import { Laptop6 } from './furniture/Laptop6'
import { HelpDesk } from './furniture/HelpDesk'
import { Mobile } from './furniture/Mobile'
import { MobileStand } from './furniture/MobileStand'
import { Mobile2 } from './furniture/Mobile2'
import { MobileStand2 } from './furniture/MobileStand2'
import { MobileStand3 } from './furniture/MobileStand3'
import { MobileStand4 } from './furniture/MobileStand4'
import { Mobile3 } from './furniture/Mobile3'
import { Mobile4 } from './furniture/Mobile4'
import { Headphones } from './furniture/Headphones'
import { Headphones2 } from './furniture/Headphones2'
import { Headphones3 } from './furniture/Headphones3'
import { Headphones4 } from './furniture/Headphones4'
import { Headphones5 } from './furniture/Headphones5'
import { Headphones6 } from './furniture/Headphones6'
import { Chair3 } from './furniture/Chair3'
import { HeadphoneStand } from './furniture/HeadphoneStand'
import { HeadphoneStand2 } from './furniture/HeadphoneStand2'
import { HeadphoneStand3 } from './furniture/HeadphoneStand3'
import { House } from './House1'
import { Lamp } from './furniture/Lamp'
import { Lamp2 } from './furniture/Lamp2'
import { Lamp3 } from './furniture/Lamp3'
import { Lamp4 } from './furniture/Lamp4'
import { Lamp5 } from './furniture/Lamp5'
import { Lamp6 } from './furniture/Lamp6'
import { Lamp7 } from './furniture/Lamp7'
import { Lamp8 } from './furniture/Lamp8'
import { Billboard } from './furniture/Billboard'
import { Speaker } from './furniture/Speeaker'
import { Speaker2 } from './furniture/Speaker2'
import { Speaker3 } from './furniture/Speaker3'
import { Speaker4 } from './furniture/Speaker4'
import { Speaker5 } from './furniture/Speaker5'
import { Speaker6 } from './furniture/Speaker6'
import { Speaker7 } from './furniture/Speaker7'
import { Speaker8 } from './furniture/Speaker8'
import { Speaker9 } from './furniture/Speaker9'
import { Speaker10 } from './furniture/Speaker10'
import { BoyStatue } from './furniture/BoyStatue'
import { Headphones7 } from './furniture/Headphones7'
import {Sony} from './furniture/Sony'
import {PS5} from './furniture/PS5'
import {PS52} from './furniture/PS52'
import { Samsung } from './furniture/Samsung'
import { PSLogo } from './furniture/PSLogo'
import {PSLogo2} from './furniture/PSLogo2'
import { PSConsole } from './furniture/PSConsole'
import { PSConsole2 } from './furniture/PSConsole2'
import { PSConsole3 } from './furniture/PSConsole3'
import { PSConsole4 } from './furniture/PSConsole4'
import { LegoDeadpool } from './furniture/LegoDeadpool'

import { Shelf } from './furniture/Shelf'
import { Apple } from './furniture/Apple'
import { Bit } from './furniture/Bit'
const Furniture = ({onLaptopClick }) => {
  const handleLaptopClick = (modelPath) => {
    onLaptopClick(modelPath);
  };
  return (
    <>
      <Sofa/>
      <Sofa2/>
      <Sofa3/>
      <Plant/>
      <Plant2/>
      <Chair/>
      <Chair2/>
      <Table/>
      <Pc/>
      <Tele/>
      <TvStand/>
      <Tv1/>
      <Tv2/>
      <Tv3/>
      <MainTable/>
      <MainTable2/>
      <Cash/> 
      <Laptop1 onClick={() => handleLaptopClick('./models/laptop1.glb')} />
      <Laptop2 onClick={() => handleLaptopClick('./models/laptop2.glb')} />
      <Laptop3 onClick={() => handleLaptopClick('./models/laptop3.glb')} />
      <Laptop4 onClick={() => handleLaptopClick('./models/laptop2.glb')} />
      <Laptop5 onClick={() => handleLaptopClick('./models/laptop1.glb')} />
      <Laptop6 onClick={() => handleLaptopClick('./models/laptop3.glb')} />
      <Billboard/>
      <HelpDesk/>
      <Mobile/>
      <MobileStand/>
      <Mobile2/>
      <MobileStand2/>
      <MobileStand3/>
      <MobileStand4/>
      <Mobile3/>
      <Mobile4/>
      <Headphones/>
      <Headphones2/>
      <Headphones3/>
      <Headphones4/>
      <Headphones5/>
      <Headphones6/>
      <HeadphoneStand/>
      <Chair3/>
      <HeadphoneStand2/>
      <HeadphoneStand3/>
      {/* <House/> */}
      <Lamp/>
      <Lamp2/>
      <Lamp3/>
      <Lamp4/>
      <Lamp5/>
      <Lamp6/>
      <Lamp7/>
      <Lamp8/>
      <Speaker/>
      <Speaker2/>
      <Speaker3/>
      <Speaker4/>
      <Speaker5/>
      <Speaker6/>
      <PS5 onClick={() => handleLaptopClick('./models/2console.glb')}/>
      <PS52 onClick={() => handleLaptopClick('./models/2console.glb')}/>
      <PSLogo/>
      <PSLogo2/>
      <Samsung/>
      <PSConsole onClick={() => handleLaptopClick('./models/PSConsole.glb')}/>
      <PSConsole2 onClick={() => handleLaptopClick('./models/PSConsole.glb')}/>
      <PSConsole3 onClick={() => handleLaptopClick('./models/PSConsole.glb')}/>
      <PSConsole4 onClick={() => handleLaptopClick('./models/PSConsole.glb')}/>
      <LegoDeadpool/>
      <Speaker7/>
      <Speaker8/>
      <Speaker9/>
      <Speaker10/>
      <BoyStatue/>
      <Headphones7/>
      <Sony/>
      <Apple/>
      <Bit/>
    </>
  )
}

export default Furniture
