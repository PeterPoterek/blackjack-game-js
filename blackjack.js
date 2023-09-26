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

const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(deck));
playerHand.push(drawCard(deck));

dealerHand.push(drawCard(deck));
dealerHand.push(drawCard(deck));

const checkScore = (hand) => {
  let points = 0;

  for (const cardObject of hand) {
    console.log(cardObject);
    switch (cardObject.card) {
      case "Jack":
      case "Queen":
      case "King":
        points += 10;
        break;
      case "Ace":
        points += 1;
        break;
      default:
        points += Number(cardObject.card);
        break;
    }
  }

  console.log(points);
};

checkScore(playerHand);
checkScore(dealerHand);
