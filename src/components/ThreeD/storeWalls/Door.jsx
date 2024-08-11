import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, Text } from '@react-three/drei'
import * as THREE from "three";

export function Door(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/door.glb')
  const { actions } = useAnimations(animations, group)
    const[vis,setVis] = useState(true);
  const handleClick = () => {
    const action = actions?.open;
    setVis(false);
    if (action) {
      action.reset(); // Reset the animation to the start
      action.setLoop(THREE.LoopOnce); // Ensure the animation plays only once
      action.clampWhenFinished = true; // Prevent the animation from looping or reversing
      action.play(); // Play the animation
      setTimeout(() => {
        setVis(true);
    }, 6000);
    }
  }

  return (
    <group ref={group} {...props} dispose={null} onClick={handleClick} rotation-y={Math.PI * -0.5} position={[-50,-0.2,0]}>
      <group name="Scene">
        <mesh
          name="OutBoddy"
          castShadow
          receiveShadow
          geometry={nodes.OutBoddy.geometry}
          material={materials.text}
          position={[0.407, 8.584, -0.005]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.154, 5.752, 0.362]}
          material-transparent={false}  // Ensure it's not transparent
          material-opacity={1}           // Set full opacity
        />
        <group
          name="DoorBoddy"
          position={[3.685, 6.012, -0.017]}
          rotation={[-Math.PI, 0.036, -Math.PI]}
          scale={[3.279, 0.422, 0.167]}
          >
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials['text.001']}
            material-transparent={false}  // Ensure it's not transparent
            material-opacity={1}           // Set full opacity
          />
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials['text.005']}
            material-transparent={false}  // Ensure it's not transparent
            material-opacity={1}           // Set full opacity
          />
          <mesh
            name="Cube001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials['text.006']}
            material-transparent={false}  // Ensure it's not transparent
            material-opacity={1}           // Set full opacity
          />
          <group
            name="Locker"
            position={[1.846, 1.228, -1.564]}
            rotation={[-Math.PI, 0.5, -Math.PI]}
            scale={[0.067, 1.757, 0.099]}>
            <mesh
              name="Cube003"
              castShadow
              receiveShadow
              geometry={nodes.Cube003.geometry}
              material={materials['text.002']}
              material-transparent={false}  // Ensure it's not transparent
              material-opacity={1}           // Set full opacity
            />
            <mesh
              name="Cube003_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube003_1.geometry}
              material={materials['text.004']}
              material-transparent={false}  // Ensure it's not transparent
              material-opacity={1}           // Set full opacity
            />
          </group>
          <group
            name="Locker001"
            position={[1.842, 1.228, 1.238]}
            rotation={[0, -0.247, 0]}
            scale={[0.067, 1.757, 0.099]}>
            <mesh
              name="Cube004"
              castShadow
              receiveShadow
              geometry={nodes.Cube004.geometry}
              material={materials['text.002']}
              material-transparent={false}  // Ensure it's not transparent
              material-opacity={1}           // Set full opacity
            />
            <mesh
              name="Cube004_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube004_1.geometry}
              material={materials['text.004']}
              material-transparent={false}  // Ensure it's not transparent
              material-opacity={1}           // Set full opacity
            />
            <mesh
              name="Mesh001"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001.geometry}
              material={materials['text.003']}
              position={[0.094, 0.427, -0.774]}
              rotation={[-3.142, -0.197, -3.142]}
              scale={[0.419, 0.107, 4.779]}
              material-transparent={false}  // Ensure it's not transparent
              material-opacity={1}           // Set full opacity
            />
          </group>
        </group>
        {/* Add PUSH and PULL Texts */}
        <Text
          position={[0.5, 9, 0.2]} // Position on the door
          rotation={[0, 0, 0]} // Facing the user
          fontSize={2} // Adjust font size
          color="black" // Text color
          anchorX="center"
          anchorY="middle"
          visible={vis}
        >
          PUSH
        </Text>
        <Text
          position={[0.5, 9, -0.5]} // Position on the opposite side
          rotation={[0, Math.PI, 0]} // Facing the user
          fontSize={2} // Adjust font size
          color="black" // Text color
          anchorX="center"
          anchorY="middle"
          visible={vis}
        >
          PULL
        </Text>
      </group>
    </group>
  )
}

useGLTF.preload('./models/door.glb')
