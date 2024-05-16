import React from "react";
import Card from "./Card";

interface CardStackProps {
  cards: { value: string; suit: any }[];
}

const DeckOfCards: React.FC<CardStackProps> = ({ cards }) => {
  return (
    <div className="cardStack">
      {cards.map((card, index) => (
        <Card key={index} value={card.value} suit={card.suit} />
      ))}
    </div>
  );
};

export default DeckOfCards;
