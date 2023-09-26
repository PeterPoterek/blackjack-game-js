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
  if (deck.length === 0) {
    console.log("The deck is empty.");
    return null;
  }

  const randomNumber = Math.floor(Math.random() * deck.length);
  const drawnCard = deck.splice(randomNumber, 1)[0];

  return drawnCard;
};
const checkScore = (hand) => {
  let points = 0;

  for (const cardObject of hand) {
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

  return points;
};
const deck = generateDeck();

const playerHand = [];
const dealerHand = [];

let playerScore = 0;
let dealerScore = 0;

playerHand.push(drawCard(deck));
playerHand.push(drawCard(deck));

dealerHand.push(drawCard(deck));
dealerHand.push(drawCard(deck));

while (true) {
  playerHand.push(drawCard(deck));

  playerScore = checkScore(playerHand);
  dealerScore = checkScore(dealerHand);

  if (playerScore > 21) {
    console.log(`You lose! Your final score was ${playerScore} while the dealer had ${dealerScore}`);
    break;
  }
  if (playerScore === 21) {
    console.log(`You win! Your final score was ${playerScore} while the dealer had ${dealerScore}`);
    break;
  }

  dealerHand.push(drawCard(deck));
  dealerScore = checkScore(dealerHand);

  if (dealerScore > 21) {
    console.log(`You Win! Your final score was ${playerScore} while the dealer had ${dealerScore}`);
    break;
  }

  if (dealerScore === 21) {
    console.log(`You lose! Your final score was ${playerScore} while the dealer had ${dealerScore}`);
    break;
  }
}
