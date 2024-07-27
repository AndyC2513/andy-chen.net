import Loader from "../components/Loader";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Volcano from "../models/Volcano";
import Airship from "../models/Airship";

const Main = ({
  isRotating,
  islandPosition,
  islandScale,
  islandRotation,
  setIsRotating,
  setCurrentStage,
  planePosition,
  planeScale,
}) => {
  return (
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
          <Airship
            position={planePosition}
            planeScale={planeScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            rotation={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Main;
