import "../App.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/game');
  };
  
  return (
    <div className="landingPageContainer">
      <button className="startButton" onClick={handleClick}>Iniciar Juego!</button>
    </div>
  );
}

export default LandingPage;
