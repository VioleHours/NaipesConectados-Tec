export interface Card {
  value: string;
  suit: "hearts" | "diamonds" | "spades" | "clubs";
}

export interface GameState {
  leftTower: Card[];
  centerTower: Card[];
  rightTower: Card[];
}

export function initializeGame(): GameState {
  const cards = generateInitialCards();
  const leftTower = cards;
  const centerTower: Card[] = [];
  const rightTower: Card[] = [];
  return { leftTower, centerTower, rightTower };
}

function generateInitialCards(): Card[] {
  const suits: ("hearts" | "diamonds" | "spades")[] = [
    "hearts",
    "diamonds",
    "spades",
  ];
  const values = ["A", "2", "3", "4"];
  const cards: Card[] = [];
  for (const suit of suits) {
    for (const value of values) {
      cards.push({ value, suit });
    }
  }
  shuffle(cards);
  return cards;
}

function shuffle(array: any[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function moveCard(
  sourceTower: Card[],
  targetTower: Card[],
): void {
  if (sourceTower.length === 0) return;
  const cardToMove = sourceTower.pop();
  if (cardToMove) {
    targetTower.push(cardToMove);
  }
}

export function isGameWon(gameState: GameState, targetValue: string): boolean {
  const { leftTower, centerTower, rightTower } = gameState;
  if (
    leftTower.length === 0 ||
    centerTower.length === 0 ||
    rightTower.length === 0
  )
    return false;
  const topLeftCard = leftTower[leftTower.length - 1];
  const topCenterCard = centerTower[centerTower.length - 1];
  const topRightCard = rightTower[rightTower.length - 1];
  return (
    topLeftCard.value === targetValue &&
    topCenterCard.value === targetValue &&
    topRightCard.value === targetValue
  );
}

export function getRandomValue(): string {
  const values = ["A", "2", "3", "4"];
  return values[Math.floor(Math.random() * values.length)];
}
