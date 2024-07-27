import Loader from "../components/Loader";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Volcano from "../models/Volcano";

const Home = () => {
  // State for the rotation of the island
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  // Function to adjust the size of the island and plane based on the screen size
  const adjustIslandForScreenSize = () => {
    let screenScale;
    let screenPosition = [-2, -19, -115];
    let rotation = [-1.4, 0, 1];

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [6, 6, 6];
      screenPosition = [0, -1, 1];
    } else {
      screenScale = [6, 6, 6];
      screenPosition = [0, -1, 1];
    }

    return [screenScale, screenPosition];
  };

  // Get the adjusted values for the island and plane
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <>
      <section className="w-full h-screen relative">
        {/* 3D Canvas */}
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>

            {/* Lights */}
            <directionalLight position={[10, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor={"#000000"}
              intensity={1}
            />

            {/* Models */}
            <Sky isRotating={isRotating} />
            <Bird />
            <Volcano
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Plane
              position={planePosition}
              planeScale={planeScale}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              rotation={[0, 20, 0]}
            />
            
          </Suspense>
        </Canvas>
      </section>
    </>
  );
};

export default Home;
