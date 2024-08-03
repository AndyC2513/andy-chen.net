import { useState } from "react";

// The useAlert hook is a custom hook that manages the alert state to alert user whether message goes through.
const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: "", type: "danger" });

  const showAlert = ({ text, type = "danger" }) => {
    setAlert({ show: true, text, type });
  };

  const hideAlert = () => {
    setAlert({ show: false, text: "", type: "danger" });
  };

  return { alert, showAlert, hideAlert };
};

export default useAlert;
