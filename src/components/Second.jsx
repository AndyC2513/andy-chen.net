import Loader from "./Loader";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Sky from "../models/Sky";
import Volcano from "../models/Volcano";

const Second = ({ islandScale, setIsRotating, setCurrentStage }) => {
  return (
    <section className="w-full h-screen relative">
      {/* Overlaying Text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 pointer-events-none">
        <h1 className="text-white text-4xl bg-transparent">HELLO</h1>
      </div>

      {/* 3D Canvas */}
      <Canvas
        className={`w-full h-screen bg-transparent`}
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
          <Sky isRotating={false} />
          <Volcano
            position={[-46, -9, -40]}
            scale={islandScale}
            rotation={[-1.4, 0, 3.2]}
            isRotating={false}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Second;
