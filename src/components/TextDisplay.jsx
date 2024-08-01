const TextDisplay = ({ buttonIndex, isMoving, firstLoad }) => {
  return (
    <>
      {/* Overlaying Text */}
      {buttonIndex === 1 && (!isMoving || firstLoad) && (
        <div className="mt-48 flex flex-col items-center pop-box-square w-auto mx-10">
          <span className="text-black text-4xl bg-transparent p-2 rounded font-bold">
            Hey, I am Andy
          </span>
          <span className="text-black bg-transparent p-2 rounded font-medium">
            I am currently a third-year full-time student at the University of
            British Columbia pursuing a batchelor's degree in Computer Science.
            Thank you for checking out my website!
          </span>
        </div>
      )}

      {buttonIndex === 2 && !isMoving && (
        <div className="mt-44 flex flex-col items-center pop-box-square w-auto mx-10">
          <span className="text-black text-4xl bg-transparent p-2 rounded font-bold">
            About Me:
          </span>
          <span className="text-black bg-transparent p-2 rounded font-medium">
            I am passionate about web development, cyber security as well as
            data science. My passion outside of software include badminton,
            cooking and (no surprise) video games.
          </span>
        </div>
      )}

      {buttonIndex === 3 && !isMoving && (
        <div className="mt-60 flex flex-col items-center pop-box-square w-auto mx-10">
          <span className="text-black text-4xl bg-transparent p-2 rounded font-bold">
            Developed by:
          </span>
          <span className="text-black bg-transparent p-2 rounded font-medium">
            Andy Chen
          </span>
          <span className="text-black text-4xl bg-transparent p-2 rounded font-bold">
            Inspired by:
          </span>
          <span className="text-black bg-transparent p-2 rounded font-medium">
            joshuas.world <br></br>
            threejs-graces.tiiny.site
          </span>
        </div>
      )}
    </>
  );
};

export default TextDisplay;
