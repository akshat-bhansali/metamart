import React from 'react'

const Plane = () => {
  return (
    <mesh rotation-x ={Math.PI *-0.5} receiveShadow>
        <planeGeometry args={[200,200]}/>
        <meshStandardMaterial color={"green"}/>
    </mesh>
  )
}

export default Plane
