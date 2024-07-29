import { useState } from "react";

const TextDisplay = ({ buttonIndex, isMoving }) => {
  return (
    <>
      {/* Overlaying Text */}
      {buttonIndex === 2 && !isMoving && window.innerWidth >= 768 && (
        <div className="absolute right-64 h-0 flex flex-col justify-items-start z-10 pointer-events-none mt-56 w-1/5">
          <span className="text-yellow-500 text-4xl bg-transparent p-2 rounded font-bold">
            Hey, I am Andy
          </span>
          <span className="text-yellow-100 bg-transparent p-2 rounded font-medium">
            I am currently a third-year full-time student at the University of
            British Columbia pursuing a batchelor's degree in Computer Science.
            Thank you for checking out my website!
          </span>
        </div>
      )}

      {buttonIndex === 3 && !isMoving && window.innerWidth >= 768 && (
        <div className="absolute justify-center h-full flex flex-col justify-items-start z-10 right-80 pointer-events-none w-1/4 pt-60">
          <span className="text-yellow-500 text-4xl bg-transparent p-2 rounded font-bold">
            About Me:
          </span>
          <span className="text-yellow-100 bg-transparent p-2 rounded font-medium">
            I am passionate about web development, cyber security as well as
            data science. My passion outside of software include badminton,
            cooking and (no surprise) video games.
          </span>
        </div>
      )}

      {buttonIndex === 4 && !isMoving && window.innerWidth >= 768 && (
        <div className="absolute left-96 h-0 flex flex-col justify-items-start z-10 pointer-events-none mt-96 w-1/5">
          <span className="text-yellow-500 text-2xl bg-transparent p-0 rounded font-semibold pl-2">
            Developed by:
          </span>
          <span className="text-yellow-100 bg-transparent p-0 rounded font-medium pl-2">
            Andy Chen
          </span>
          <span className="text-yellow-500 text-2xl bg-transparent p-0 rounded font-semibold pl-2">
            Inspired by:
          </span>
          <span className="text-yellow-100 bg-transparent p-0 rounded font-medium pl-2">
            joshuas.world <br></br>
            threejs-graces.tiiny.site
          </span>
        </div>
      )}
    </>
  );
};

export default TextDisplay;
