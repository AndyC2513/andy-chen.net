import { useRef, useEffect } from "react";
import Sky from "../models/Sky";
import Volcano from "../models/Volcano";
import Airship from "../models/Airship";
import { a, useSpring } from "@react-spring/three";

// The Main component is the main component of the application. It contains the 3D models and the camera.
const Main = ({
  isRotating,
  islandPosition,
  islandScale,
  islandRotation,
  setIsRotating,
  setCurrentStage,
  planePosition,
  planeScale,
  cameraPosition,
  cameraRotation,
  userViewing,
  setMoving,
}) => {
  // Camera
  const cameraRef = useRef();

  // Camera animation
  const { position, rotation } = useSpring({
    position: cameraPosition,
    rotation: cameraRotation,
    config: { mass: 1, tension: 20, friction: 9 },
    onRest: () => setMoving(false),
  });

  useEffect(() => {
    setMoving(true);
  }, [cameraPosition, cameraRotation]);

  return (
    <a.perspectiveCamera
      ref={cameraRef}
      position={position}
      rotation={rotation}
    >
      {/* Lights */}
      <directionalLight position={[9, 1, 1]} intensity={1.8} />
      <ambientLight intensity={0.3} />
      <hemisphereLight
        skyColor="#b1e1ff"
        groundColor={"#000000"}
        intensity={0.9}
      />

      {/* Models */}
      <Sky isRotating={isRotating} />
      <Volcano
        position={islandPosition}
        scale={islandScale}
        rotation={islandRotation}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
        userViewing={userViewing}
        setMoving={setMoving}
      />
      <Airship
        position={planePosition}
        planeScale={planeScale}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        rotation={[0, 0, 0]}
        userViewing={userViewing}
      />
    </a.perspectiveCamera>
  );
};

export default Main;
