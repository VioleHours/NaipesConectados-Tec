import React from "react";
import "./Card.css";

type CardProps = {
  suit: "hearts" | "diamonds" | "clubs" | "spades";
  value: string;
};

const Card: React.FC<CardProps> = ({ suit, value }) => {
  const suitSymbols: Record<string, string> = {
    hearts: "♥️",
    diamonds: "♦️",
    clubs: "♣️",
    spades: "♠️",
  };

  return (
    <div className="card">
      <div className={`card-value-top ${suit}`}>
        {value}
        <br />
        {suitSymbols[suit]}
      </div>
      <div className={`card-suit ${suit}`}>{suitSymbols[suit]}</div>
      <div className={`card-value-bottom ${suit}`}>
        {value}
        <br />
        {suitSymbols[suit]}
      </div>
    </div>
  );
};

export default Card;
