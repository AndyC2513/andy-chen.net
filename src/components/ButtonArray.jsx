const ButtonArray = ({
  setCameraPosition,
  setCameraRotation,
  firstPosition,
  secondPosition,
  thirdPosition,
  fourthPosition,
  firstRotation,
  secondRotation,
  thirdRotation,
  fourthRotation,
  setUserViewing,
  setButtonIndex,
  buttonIndex,
  setFirstLoad,
}) => {
  // Function to handle button click
  const handleClick = (stage, position, rotation) => {
    setCameraPosition(position);
    setCameraRotation(rotation);
    setButtonIndex(stage);
    setFirstLoad(false);

    // Check if user is viewing the model
    if (stage !== 4 && (stage !== undefined || stage !== null)) {
      setUserViewing(true);
    } else {
      setUserViewing(false);
    }
  };

  return (
    <>
      {/* Overlaying Buttons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex space-x-10">
        <button
          className={`w-5 h-5 ${
            buttonIndex !== null && buttonIndex == 1
              ? "bg-slate-600"
              : "bg-slate-100"
          } hover:bg-slate-600 rounded-full`}
          onClick={() => handleClick(1, firstPosition, firstRotation)}
          disabled={buttonIndex !== null && buttonIndex == 1}
        />
        <button
          className={`w-5 h-5 ${
            buttonIndex !== null && buttonIndex == 2
              ? "bg-slate-600"
              : "bg-slate-100"
          } hover:bg-slate-600 rounded-full`}
          onClick={() => handleClick(2, secondPosition, secondRotation)}
          disabled={buttonIndex !== null && buttonIndex == 2}
        />
        <button
          className={`w-5 h-5 ${
            buttonIndex !== null && buttonIndex == 3
              ? "bg-slate-600"
              : "bg-slate-100"
          } hover:bg-slate-600 rounded-full`}
          onClick={() => handleClick(3, thirdPosition, thirdRotation)}
          disabled={buttonIndex !== null && buttonIndex == 3}
        />
        <button
          className={`w-5 h-5 ${
            buttonIndex !== null && buttonIndex == 4
              ? "bg-slate-600"
              : "bg-slate-100"
          } hover:bg-slate-600 rounded-full`}
          onClick={() => handleClick(4, fourthPosition, fourthRotation)}
          disabled={buttonIndex !== null && buttonIndex == 4}
        />
      </div>
    </>
  );
};

export default ButtonArray;
