import React from "react";
import Card from "./Card";
import { Card as CardType } from "../GameLogic";

interface DeckOfCardsProps {
  tower: CardType[];
  onMoveCard: () => void;
}

const DeckOfCards: React.FC<DeckOfCardsProps> = ({ tower, onMoveCard }) => {
  return (
    <div className="deck-of-cards" onClick={onMoveCard}>
      {tower.length > 0 ? (
        <Card
          suit={tower[tower.length - 1].suit}
          value={tower[tower.length - 1].value}
        />
      ) : (
        <div className="empty-slot" />
      )}
    </div>
  );
};

export default DeckOfCards;
