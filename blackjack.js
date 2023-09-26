const generateDeck = () => {
  const deck = [];

  const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
  const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

  for (const card of cards) {
    for (const suit of suits) {
      deck.push({
        card: card,
        suit: suit,
      });
    }
  }

  return deck;
};

const drawCard = (deck) => {
  const randomNumber = Math.floor(Math.random() * deck.length);
  deck.splice(randomNumber, 1);
  return deck[randomNumber];
};
const deck = generateDeck();
const card = drawCard(deck);

console.log(card);
console.log(deck.length);
