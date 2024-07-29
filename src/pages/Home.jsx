import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Main from "../components/Home/Main";
import ButtonArray from "../components/Home/ButtonArray";
import TextDisplay from "../components/Home/TextDisplay";

const Home = () => {
  // State for the rotation of the island
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 0]);
  const [cameraRotation, setCameraRotation] = useState([0, 0, 0]);
  const [userViewing, setUserViewing] = useState(false);
  const [isMoving, setMoving] = useState(false);
  const [buttonIndex, setButtonIndex] = useState(null);

  const adjustCameraPosition = () => {
    let firstPosition;
    let secondPosition;
    let thirdPosition;
    let fourthPosition;

    if (window.innerWidth < 768) {
      firstPosition = [0, 0, 0];
      secondPosition = [2.5, -2, 20];
      thirdPosition = [43, -9, 70];
      fourthPosition = [65, 40, -92];
    } else {
      firstPosition = [0, 0, 0];
      secondPosition = [-78, 0, -49];
      thirdPosition = [10, 25, 50];
      fourthPosition = [80, 30, -75];
    }

    return [firstPosition, secondPosition, thirdPosition, fourthPosition];
  };

  const adjustCameraRotation = () => {
    let firstRotation;
    let secondRotation;
    let thirdRotation;
    let fourthRotation;

    if (window.innerWidth < 768) {
      firstRotation = [0, 0, 0];
      secondRotation = [0.1, 0.1, 0];
      thirdRotation = [0, 0.4, 0];
      fourthRotation = [0.3, 2, 0];
    } else {
      firstRotation = [0, 0, 0];
      secondRotation = [0, -1.8, 0.1];
      thirdRotation = [-0.1, 0.1, 0];
      fourthRotation = [0.2, 1.7, 0.2];
    }

    return [firstRotation, secondRotation, thirdRotation, fourthRotation];
  };

  // Function to adjust the size of the island and plane based on the screen size
  const adjustIslandForScreenSize = () => {
    let screenScale;
    let screenPosition = [-2, -20, -115];
    let rotation = [-1.4, 0, 1];

    if (window.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7];
    } else {
      screenScale = [0.9, 0.9, 0.9];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, -10, -30];
    } else {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, -8, -18];
    }

    return [screenScale, screenPosition];
  };

  // Get the adjusted values for the island and plane
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  const [firstPosition, secondPosition, thirdPosition, fourthPosition] =
    adjustCameraPosition();

  const [firstRotation, secondRotation, thirdRotation, fourthRotation] =
    adjustCameraRotation();

  useEffect(() => {
    setCameraPosition(firstPosition);
    setCameraRotation(firstRotation);
  }, []);

  return (
    <section className="w-full h-screen relative">
      <ButtonArray
        setCameraPosition={setCameraPosition}
        setCameraRotation={setCameraRotation}
        firstPosition={firstPosition}
        secondPosition={secondPosition}
        thirdPosition={thirdPosition}
        fourthPosition={fourthPosition}
        firstRotation={firstRotation}
        secondRotation={secondRotation}
        thirdRotation={thirdRotation}
        fourthRotation={fourthRotation}
        setUserViewing={setUserViewing}
        setIsRotating={setIsRotating}
        setButtonIndex={setButtonIndex}
        buttonIndex={buttonIndex}
      />
      <TextDisplay buttonIndex={buttonIndex} isMoving={isMoving} />


      {/* 3D Canvas */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <Main
            isRotating={isRotating}
            islandPosition={islandPosition}
            islandScale={islandScale}
            islandRotation={islandRotation}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            planePosition={planePosition}
            planeScale={planeScale}
            cameraPosition={cameraPosition}
            cameraRotation={cameraRotation}
            setMoving={setMoving}
            userViewing={userViewing}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
