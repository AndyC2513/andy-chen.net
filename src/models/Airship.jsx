import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import airshipScene from "../assets/3d/airship.glb";

// The Airship component is a simple component that displays the airship model.
const Airship = ({ isRotating, planeScale, userViewing, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(airshipScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    const action = actions["armature_airship|Scene"];
    action.timeScale = 2;
    if ((isRotating && !userViewing) || (!isRotating && userViewing)) {
      action.paused = false;
      action.play();
    } else {
      action.paused = true;
    }
  }, [actions, isRotating, userViewing]);

  return (
    <mesh {...props} ref={ref} scale={planeScale}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Airship;
