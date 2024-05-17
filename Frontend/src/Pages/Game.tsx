import { useState } from "react";
import {
  initializeGame,
  moveCard,
  isGameWon,
  GameState,
  getRandomValue,
} from "../GameLogic";
import DeckOfCards from "../Components/DeckOfCards";
import ResetButton from "../Components/ResetButton";
import "./Game.css";

export default function Game() {
  const [gameState, setGameState] = useState<GameState>(() => initializeGame());
  const [gameWon, setGameWon] = useState(false);
  const [targetValue, setTargetValue] = useState<string>(() =>
    getRandomValue()
  );

  const handleMoveCard = (
    sourceTowerIndex: number,
    targetTowerIndex: number
  ) => {
    const newGameState: GameState = { ...gameState };
    const towerKeys = Object.keys(newGameState) as Array<keyof GameState>;
    const sourceTowerKey = towerKeys[sourceTowerIndex];
    const targetTowerKey = towerKeys[targetTowerIndex];
    moveCard(newGameState[sourceTowerKey], newGameState[targetTowerKey]);
    setGameState(newGameState);
    setGameWon(isGameWon(newGameState, targetValue));
  };

  const handleReset = () => {
    setGameState(initializeGame());
    setGameWon(false);
    setTargetValue(getRandomValue());
  };

  return (
    <div>
      <h1 className="title">¡Bienvenido al Juego!</h1>
      <div className="game-info">
        <span>Valor a ordenar: {targetValue}</span>
        <ResetButton onReset={handleReset} />
      </div>
      <div className="game-board">
        <DeckOfCards
          tower={gameState.leftTower}
          onMoveCard={() => handleMoveCard(0, 1)}
        />
        <DeckOfCards
          tower={gameState.centerTower}
          onMoveCard={() => handleMoveCard(1, 2)}
        />
        <DeckOfCards
          tower={gameState.rightTower}
          onMoveCard={() => handleMoveCard(2, 0)}
        />
      </div>
      {gameWon && (
        <div className="game-won">¡Felicidades, has ganado el juego!</div>
      )}
    </div>
  );
}
