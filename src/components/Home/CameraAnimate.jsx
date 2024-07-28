import Sky from "../../models/Sky";
import Volcano from "../../models/Volcano";
import { a } from "@react-spring/three";
import { useSpring } from "@react-spring/core";
import { useRef, useEffect } from "react";

const CameraAnimate = ({ islandScale, setIsRotating, setCurrentStage, cameraPosition, cameraRotation, setMoving }) => {
  const cameraRef = useRef();

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
    <a.perspectiveCamera ref={cameraRef} position={position} rotation={rotation}>
      {/* Lights */}
      <directionalLight position={[10, 1, 1]} intensity={2} />
      <ambientLight intensity={0.5} />
      <hemisphereLight
        skyColor="#b1e1ff"
        groundColor={"#000000"}
        intensity={1}
      />

      {/* Models */}
      <Sky isRotating={false} />
      <Volcano
        position={[-46, -9, -40]}
        scale={islandScale}
        rotation={[-1.4, 0, 3.2]}
        isRotating={false}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
      />
    </a.perspectiveCamera>
  );
};

export default CameraAnimate;
