import React from "react";
import "./styles/ResetButton.css";
import iconReload from "../assets/reload.svg";

interface ResetButtonProps {
  onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
  return (
    <button className="buttonContainer" onClick={onReset}>
      <img src={iconReload} alt="Reload" />
      REINICIAR
    </button>
  );
};

export default ResetButton;
