import React from "react";
import "./styles/ResetButton.css";

interface ResetButtonProps {
  onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
  return (
    <button className="buttonContainer" onClick={onReset}>
      <img src="src\assets\reload.svg" alt="Reload" />
      REINICIAR
    </button>
  );
};

export default ResetButton;
