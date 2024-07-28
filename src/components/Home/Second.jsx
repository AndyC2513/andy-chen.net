import Loader from "../Loader";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CameraAnimate from "./CameraAnimate";

const Second = ({ islandScale, setIsRotating, setCurrentStage }) => {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 0]);
  const [cameraRotation, setCameraRotation] = useState([0, 0, 0]);
  const [isMoving, setMoving] = useState(false);
  const [stage, setStage] = useState(1);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    setCameraPosition([90, 3.6, -54.3]);
    setCameraRotation([0.1, -5, 0.1]);
    setStage(1);

    if (!isMoving) {
      setActiveButton(null);
    }
  }, []);

  const handleClick = (buttonIndex, position, rotation, stage) => {
    setActiveButton(buttonIndex);
    setCameraPosition(position);
    setCameraRotation(rotation);
    setStage(stage);
  };

  return (
    <section className="w-full h-screen relative">
      {/* Overlaying Text */}
      {stage === 1 && !isMoving && (
        <div className="absolute right-80 h-0 flex flex-col justify-items-start z-10 pointer-events-none mt-96 w-1/5">
          <span className="text-yellow-500 text-4xl bg-transparent p-2 rounded font-bold">
            Hey, I am Andy
          </span>
          <span className="text-yellow-100 text-2x1 bg-transparent p-2 rounded font-medium">
            I am currently a third-year full-time student at the University of
            British Columbia pursuing a batchelor's degree in Computer Science.
            Thank you for checking out my website!
          </span>
        </div>
      )}

      {stage === 2 && !isMoving && (
        <div className="absolute justify-center h-full flex flex-col justify-items-start z-10 left-1/4 pointer-events-none w-96 pt-40">
          <span className="text-yellow-500 text-4xl bg-transparent p-0 rounded font-bold pl-2">
            About Me:
          </span>
          <span className="text-yellow-100 text-2xl bg-transparent p-0 rounded font-medium pl-2">
            I am passionate about web development, cyber security as well as
            data science. My passion outside of software include badminton,
            cooking and (no surprise) video games.
          </span>
        </div>
      )}

      {stage === 3 && !isMoving && (
        <div className="absolute left-80 h-0 flex flex-col justify-items-start z-10 pointer-events-none mt-96 w-1/5">
          <br />
          <br />
          <span className="text-orange-500 text-2xl bg-transparent p-0 rounded font-semibold pl-2">
            Developed by:
          </span>
          <span className="text-yellow-100 text-2xl bg-transparent p-0 rounded font-medium pl-2">
            Andy Chen
          </span>
          <span className="text-orange-500 text-2xl bg-transparent p-0 rounded font-semibold pl-2">
            Inspired by:
          </span>
          <span className="text-yellow-100 text-2xl bg-transparent p-0 rounded font-medium pl-2">
            joshuas.world <br></br>
            threejs-graces.tiiny.site
          </span>
        </div>
      )}

      {/* Overlaying Buttons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex space-x-10">
        <button
          className={`w-7 h-7 ${activeButton == 1 ? "bg-slate-600" : "bg-slate-400" } hover:bg-slate-600 active:bg-slate-600 rounded-full`}
          onClick={() => handleClick(1, [24, -9, -97], [0.15, -3.9, 0], 1)}
          disabled={activeButton !== null && activeButton == 1}
        />
        <button
          className={`w-7 h-7 ${activeButton == 2 ? "bg-slate-600" : "bg-slate-400" } hover:bg-slate-600 active:bg-slate-600 rounded-full`}
          onClick={() => handleClick(2, [-58, 4, -15], [0.6, -2, 0.6], 2)}
          disabled={activeButton !== null && activeButton == 2}
        />
        <button
          className={`w-7 h-7 ${activeButton == 3 ? "bg-slate-600" : "bg-slate-400" } hover:bg-slate-600 active:bg-slate-600 rounded-full`}
          onClick={() => handleClick(3, [-13, 0, -10], [0, -0.4, 0], 3)}
          disabled={activeButton !== null && activeButton == 3}
        />
      </div>

      {/* 3D Canvas */}
      <Canvas
        className={`w-full h-screen bg-transparent`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <CameraAnimate
            islandScale={islandScale}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            cameraPosition={cameraPosition}
            cameraRotation={cameraRotation}
            setMoving={setMoving}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Second;
