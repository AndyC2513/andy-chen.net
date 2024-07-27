import { useState } from "react";
import Second from "../components/Second";
import Main from "../components/Main";

const Home = () => {
  // State for the rotation of the island
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

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

  return (
    <>
      <Main
        isRotating={isRotating}
        islandPosition={islandPosition}
        islandScale={islandScale}
        islandRotation={islandRotation}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
        planePosition={planePosition}
        planeScale={planeScale}
      />
      <Second
        islandScale={islandScale}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
      />
    </>
  );
};

export default Home;
