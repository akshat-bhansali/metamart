import React from 'react'
import { Plant } from './furniture/Plant'
import { Plant2 } from './furniture/Plant2'
import { Sofa } from './furniture/Sofa'
import { Sofa2 } from './furniture/Sofa2'
import { Sofa3 } from './furniture/Sofa3'

import { Chair } from './furniture/Chair'
import { Chair2 } from './furniture/Chair2'
const Furniture = () => {
  return (
    <>
      <Sofa/>
      <Sofa2/>
      <Sofa3/>
      <Plant/>
      <Plant2/>
      <Chair/>
      <Chair2/>
    </>
  )
}

export default Furniture
