import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import airshipScene from "../assets/3d/airship.glb";
import { useFrame } from "@react-three/fiber";

const Airship = ({ isRotating, planeScale, userViewing, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(airshipScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if ((isRotating && !userViewing) || (!isRotating && userViewing)) {
      actions["armature_airship|Scene"].play();
    } else {
      actions["armature_airship|Scene"].stop();
    }
  }, [actions, isRotating, userViewing]);

  return (
    <mesh {...props} ref={ref} scale={planeScale}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Airship;
