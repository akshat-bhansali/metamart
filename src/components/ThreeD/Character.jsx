import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { useInput } from "../../hooks/useInput";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuarternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

const directionOffset = ({ forward, backward, left, right }) => {
  var directionOffset = 0;
  if (forward) {
    if (left) {
      directionOffset = Math.PI / 4; // w+a
    } else if (right) {
      directionOffset = -Math.PI / 4; // w+d
    }
  } else if (backward) {
    if (left) {
      directionOffset = Math.PI / 4 + Math.PI / 2; // s+a
    } else if (right) {
      directionOffset = -Math.PI / 4 - Math.PI / 2; // s+d
    } else {
      directionOffset = Math.PI; // s
    }
  } else if (left) {
    directionOffset = Math.PI / 2; // a
  } else if (right) {
    directionOffset = -Math.PI / 2; // d
  }
  return directionOffset;
};

export function Character(props) {
  const { nodes, materials, animations } = useGLTF("./models/diya.glb");
  console.log(animations);
  const { forward, backward, left, right, jump, shift, break_dance, backflip } = useInput();
  const currentAction = useRef("");
  const controlRef = useRef();
  const camera = useThree((state) => state.camera);

  const gltf = useLoader(GLTFLoader, "./models/diya.glb");
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  gltf.scene.scale.set(3, 3, 3);
  gltf.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });

  const updateCameraTarget = (moveX, moveZ) => {
    camera.position.x += moveX;
    camera.position.z += moveZ;
    cameraTarget.x = gltf.scene.position.x;
    cameraTarget.y = gltf.scene.position.y + 2;
    cameraTarget.z = gltf.scene.position.z;
    if (controlRef.current) controlRef.current.target = cameraTarget;
  };

  useEffect(() => {
    let action = "";

    if (break_dance) {
      action = "break_dance";
    } else if (backflip) {
      action = "backflip";
    } else if (forward || backward || left || right) {
      action = shift ? "running" : "walking";
    } else {
      action = "idle";
    }

    if (currentAction.current !== action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
  }, [forward, backward, left, right, jump, shift, break_dance, backflip]);

  useFrame((state, delta) => {
    if (currentAction.current === "running" || currentAction.current === "walking") {
      let angleYCameraDirection = Math.atan2(
        camera.position.x - gltf.scene.position.x,
        camera.position.z - gltf.scene.position.z
      );
      let newDirectionOffset = directionOffset({
        forward,
        backward,
        left,
        right,
      });

      rotateQuarternion.setFromAxisAngle(
        rotateAngle,
        angleYCameraDirection + newDirectionOffset
      );

      gltf.scene.quaternion.rotateTowards(rotateQuarternion, 0.2);

      camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

      const velocity = currentAction.current === "running" ? 10 : 5;
      const moveX = walkDirection.x * velocity * delta;
      const moveZ = walkDirection.z * velocity * delta;
      gltf.scene.position.x += moveX;
      gltf.scene.position.z += moveZ;

      updateCameraTarget(moveX, moveZ);
    }
  });

  return (
    <>
      <OrbitControls ref={controlRef} />
      <primitive object={gltf.scene} />
    </>
  );
}

useGLTF.preload("./models/diya.glb");
