//Game of War

//------SETUP-----------
//Create a class of Card ✔
//Create a class of Deck ✔
//Create a function that shuffles the deck of cards into random order ✔
//Create a function that splits the deck in half ✔
//Player and Computer start with an array of 26 cards each ✔

//------RENDER DECK TO THE DOM-----
//Create a function that checks for suit and displays appropriate suit image on card ✔
//Within function also render the card value to the card ✔

//------GAMEPLAY--------
//On button click, flip each card over ✔
//Compare value of each card, card with higher value wins ✔
//Dynamically update score (+1, -1) after each round ✔
//Add both cards to the array of the winner ✔

//-------WAR (Tie)-------
//Create a function that splices next 3 cards in array then flips the 4th ✔

//RUNNING INTO AN ISSUE IF THERE IS WAR AND ONE PLAYER HAS LESS THAN 5 CARDS IN THEIR HAND
//TRYING TO FIGURE OUT HOW TO BEST ERROR HANDLE THIS INSTANCE
//FOR NOW, THE GAME BREAKS IN THIS SCENARIO

let suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//create a card object
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

//create a deck object
class Deck {
  constructor() {
    this.deck = [];
  }
  createDeck(suits, values) {
    for (let suit of suits) {
      for (let value of values) {
        this.deck.push(new Card(suit, value));
      }
    }
    return this.deck;
  }

  //create shuffle function
  shuffle() {
    let counter = this.deck.length,
      temp,
      i;

    while (counter) {
      i = Math.floor(Math.random() * counter--);
      temp = this.deck[counter];
      this.deck[counter] = this.deck[i];
      this.deck[i] = temp;
    }
    return this.deck;
  }

  //create deal function that deals 26 cards
  deal() {
    let hand = [];
    while (hand.length < 26) {
      hand.push(this.deck.pop());
    }
    return hand;
  }
}

//create a new deck and shuffle it
let deck = new Deck();
deck.createDeck(suits, values);
deck.shuffle();

//assign half the deck to the player and half the deck to the computer
let playerHand = deck.deal();
let computerHand = deck.deal();

// console.log(playerHand);
// console.log(computerHand);

//select intro button and store in a variable
const playBtn = document.querySelector(".play-button");
//select intro screen and store in a variable
const introScreen = document.querySelector(".intro");
//select score area and store in a variable
const scoreBoard = document.querySelector(".score");
//select match screen and store in a variable
const matchScreen = document.querySelector(".match");
//select war screen and store in a variable
const warScreen = document.querySelector(".war");
//select winner screen and store in a variable
const winnerScreen = document.querySelector(".winner-display");
//select header for mobile and store in a variable
const headerMobile = document.querySelector(".header");
//select rules button and store in a variable
const rulesBtn = document.querySelector(".rules-button");
//select close button and store in a variable
const closeBtn = document.querySelector(".close-button");
//select rules screen and store in a variable
const rulesScreen = document.querySelector(".rules-container");

//open rules
const showRules = () => {
  rulesBtn.addEventListener("click", () => {
    introScreen.classList.add("hide");
    rulesScreen.classList.add("fadeIn");
  });
};
showRules();

const closeRules = () => {
  closeBtn.addEventListener("click", () => {
    rulesScreen.classList.remove("fadeIn");
    introScreen.classList.remove("hide");
    introScreen.classList.add("fadeIn");
  });
};
closeRules();

//start our game
const startGame = () => {
  //create event listener for playBtn
  playBtn.addEventListener("click", () => {
    introScreen.classList.add("fadeOut");
    introScreen.classList.remove("fadeIn");
    matchScreen.classList.add("fadeIn");
    scoreBoard.classList.add("fadeIn");
    headerMobile.classList.add("fadeIn");
  });
};

startGame();

//-------------------------NOW IN GAMEPLAY MODE---------------------//

//function that displays suit and value in playerHand array to card
const createPlayerCard = playerCard => {
  //converts face card number values into name to append ("A","K","Q","J")
  if (playerCard.value === 11) {
    document.querySelector(".player-card .card-value p").textContent = "J";
  } else if (playerCard.value === 12) {
    document.querySelector(".player-card .card-value p").textContent = "Q";
  } else if (playerCard.value === 13) {
    document.querySelector(".player-card .card-value p").textContent = "K";
  } else if (playerCard.value === 14) {
    document.querySelector(".player-card .card-value p").textContent = "A";
  } else {
    document.querySelector(".player-card .card-value p").textContent =
      playerCard.value;
  }
  //conditions that determine which suit gets rendered to the card
  if (playerCard.suit === "Spades") {
    document.querySelector(".player-card .spades").classList.add("show");
    document.querySelector(".player-card .clubs").classList.remove("show");
    document.querySelector(".player-card .hearts").classList.remove("show");
    document.querySelector(".player-card .diamonds").classList.remove("show");
  } else if (playerCard.suit === "Clubs") {
    document.querySelector(".player-card .clubs").classList.add("show");
    document.querySelector(".player-card .spades").classList.remove("show");
    document.querySelector(".player-card .hearts").classList.remove("show");
    document.querySelector(".player-card .diamonds").classList.remove("show");
  } else if (playerCard.suit === "Hearts") {
    document.querySelector(".player-card .hearts").classList.add("show");
    document.querySelector(".player-card .spades").classList.remove("show");
    document.querySelector(".player-card .clubs").classList.remove("show");
    document.querySelector(".player-card .diamonds").classList.remove("show");
  } else if (playerCard.suit === "Diamonds") {
    document.querySelector(".player-card .diamonds").classList.add("show");
    document.querySelector(".player-card .spades").classList.remove("show");
    document.querySelector(".player-card .clubs").classList.remove("show");
    document.querySelector(".player-card .hearts").classList.remove("show");
  }
};

//function that displays suit and value in playerHand array to card
const createComputerCard = computerCard => {
  //converts face card number values into name to append ("A","K","Q","J")
  if (computerCard.value === 11) {
    document.querySelector(".computer-card .card-value p").textContent = "J";
  } else if (computerCard.value === 12) {
    document.querySelector(".computer-card .card-value p").textContent = "Q";
  } else if (computerCard.value === 13) {
    document.querySelector(".computer-card .card-value p").textContent = "K";
  } else if (computerCard.value === 14) {
    document.querySelector(".computer-card .card-value p").textContent = "A";
  } else {
    document.querySelector(".computer-card .card-value p").textContent =
      computerCard.value;
  }
  //conditions that determine which suit gets rendered to the card
  if (computerCard.suit === "Spades") {
    document.querySelector(".computer-card .spades").classList.add("show");
    document.querySelector(".computer-card .clubs").classList.remove("show");
    document.querySelector(".computer-card .hearts").classList.remove("show");
    document.querySelector(".computer-card .diamonds").classList.remove("show");
  } else if (computerCard.suit === "Clubs") {
    document.querySelector(".computer-card .clubs").classList.add("show");
    document.querySelector(".computer-card .spades").classList.remove("show");
    document.querySelector(".computer-card .hearts").classList.remove("show");
    document.querySelector(".computer-card .diamonds").classList.remove("show");
  } else if (computerCard.suit === "Hearts") {
    document.querySelector(".computer-card .hearts").classList.add("show");
    document.querySelector(".computer-card .spades").classList.remove("show");
    document.querySelector(".computer-card .clubs").classList.remove("show");
    document.querySelector(".computer-card .diamonds").classList.remove("show");
  } else if (computerCard.suit === "Diamonds") {
    document.querySelector(".computer-card .diamonds").classList.add("show");
    document.querySelector(".computer-card .spades").classList.remove("show");
    document.querySelector(".computer-card .clubs").classList.remove("show");
    document.querySelector(".computer-card .hearts").classList.remove("show");
  }
};

//play our game
const playGame = () => {
  //select flip button and store in a variable
  const flipBtn = document.querySelector(".match button");
  const playerCard = document.querySelector(".player-card");
  const computerCard = document.querySelector(".computer-card");

  //create event listener for flipBtn
  flipBtn.addEventListener("click", () => {
    createPlayerCard(playerHand[0]);
    createComputerCard(computerHand[0]);
    playerCard.classList.add("active");
    computerCard.classList.add("active");
    flipBtn.disabled = true;
    setTimeout(() => {
      playerCard.classList.remove("active");
      computerCard.classList.remove("active");
      flipBtn.disabled = false;
      document.querySelector(".match-winner").textContent = "";
      document.querySelector(".war-declared").textContent = "";
    }, 1500);
    compareCards(playerHand[0].value, computerHand[0].value);
  });
};

playGame();

let playerScore = document.querySelector(".player-score p");
let computerScore = document.querySelector(".computer-score p");
//function that updates the score
const updateScore = () => {
  setTimeout(() => {
    playerScore.textContent = playerHand.length;
    computerScore.textContent = computerHand.length;
    declareWinner();
  }, 1500);
};

//function that compares the value of each card
const compareCards = (player, computer) => {
  // player wins
  if (player > computer) {
    setTimeout(() => {
      document.querySelector(".match-winner").textContent = "Player Wins!";
    }, 500);
    playerHand = playerHand.concat([playerHand.shift(), computerHand.shift()]);
    updateScore();
    return;
  }
  //computer wins
  else if (computer > player) {
    setTimeout(() => {
      document.querySelector(".match-winner").textContent = "Computer Wins!";
    }, 500);
    computerHand = computerHand.concat([
      computerHand.shift(),
      playerHand.shift()
    ]);
    updateScore();
    return;
  }
  // //tie(war)
  else {
    setTimeout(() => {
      document.querySelector(".war-declared").textContent = "WAR";
    }, 700);
    document.querySelector(".match button").disabled = true;
    setTimeout(() => {
      war();
    }, 2000);
  }
};

//----------------------DEFINE ACTIONS FOR WAR--------------------------//

warArray = [];

const createWarArray = () => {
  //if not able to draw 4 cards, draw as many as possible
  if (playerHand.length <= 4) {
    warArray = warArray.concat(playerHand.splice(0, playerHand.length - 1));
    warArray = warArray.concat(computerHand.splice(0, 4));
    console.log(warArray);
  } else if (computerHand.length <= 4) {
    warArray = warArray.concat(computerHand.splice(0, computerHand.length - 1));
    warArray = warArray.concat(playerHand.splice(0, 4));
    console.log(warArray);
  } else warArray = warArray.concat(playerHand.splice(0, 4));
  warArray = warArray.concat(computerHand.splice(0, 4));
};

//function that displays suit and value in playerHand array to card
const createPlayerWarCard = playerCard => {
  //converts face card number values into name to append ("A","K","Q","J")
  if (playerCard.value === 11) {
    document.querySelector(".war-player-card .card-value p").textContent = "J";
  } else if (playerCard.value === 12) {
    document.querySelector(".war-player-card .card-value p").textContent = "Q";
  } else if (playerCard.value === 13) {
    document.querySelector(".war-player-card .card-value p").textContent = "K";
  } else if (playerCard.value === 14) {
    document.querySelector(".war-player-card .card-value p").textContent = "A";
  } else {
    document.querySelector(".war-player-card .card-value p").textContent =
      playerCard.value;
  }
  //conditions that determine which suit gets rendered to the card
  if (playerCard.suit === "Spades") {
    document.querySelector(".war-player-card .spades").classList.add("show");
    document.querySelector(".war-player-card .clubs").classList.remove("show");
    document.querySelector(".war-player-card .hearts").classList.remove("show");
    document
      .querySelector(".war-player-card .diamonds")
      .classList.remove("show");
  } else if (playerCard.suit === "Clubs") {
    document.querySelector(".war-player-card .clubs").classList.add("show");
    document.querySelector(".war-player-card .spades").classList.remove("show");
    document.querySelector(".war-player-card .hearts").classList.remove("show");
    document
      .querySelector(".war-player-card .diamonds")
      .classList.remove("show");
  } else if (playerCard.suit === "Hearts") {
    document.querySelector(".war-player-card .hearts").classList.add("show");
    document.querySelector(".war-player-card .spades").classList.remove("show");
    document.querySelector(".war-player-card .clubs").classList.remove("show");
    document
      .querySelector(".war-player-card .diamonds")
      .classList.remove("show");
  } else if (playerCard.suit === "Diamonds") {
    document.querySelector(".war-player-card .diamonds").classList.add("show");
    document.querySelector(".war-player-card .spades").classList.remove("show");
    document.querySelector(".war-player-card .clubs").classList.remove("show");
    document.querySelector(".war-player-card .hearts").classList.remove("show");
  }
};

//function that displays suit and value in playerHand array to card
const createComputerWarCard = computerCard => {
  //converts face card number values into name to append ("A","K","Q","J")
  if (computerCard.value === 11) {
    document.querySelector(".war-computer-card .card-value p").textContent =
      "J";
  } else if (computerCard.value === 12) {
    document.querySelector(".war-computer-card .card-value p").textContent =
      "Q";
  } else if (computerCard.value === 13) {
    document.querySelector(".war-computer-card .card-value p").textContent =
      "K";
  } else if (computerCard.value === 14) {
    document.querySelector(".war-computer-card .card-value p").textContent =
      "A";
  } else {
    document.querySelector(".war-computer-card .card-value p").textContent =
      computerCard.value;
  }
  //conditions that determine which suit gets rendered to the card
  if (computerCard.suit === "Spades") {
    document.querySelector(".war-computer-card .spades").classList.add("show");
    document
      .querySelector(".war-computer-card .clubs")
      .classList.remove("show");
    document
      .querySelector(".war-computer-card .hearts")
      .classList.remove("show");
    document
      .querySelector(".war-computer-card .diamonds")
      .classList.remove("show");
  } else if (computerCard.suit === "Clubs") {
    document.querySelector(".war-computer-card .clubs").classList.add("show");
    document
      .querySelector(".war-computer-card .spades")
      .classList.remove("show");
    document
      .querySelector(".war-computer-card .hearts")
      .classList.remove("show");
    document
      .querySelector(".war-computer-card .diamonds")
      .classList.remove("show");
  } else if (computerCard.suit === "Hearts") {
    document.querySelector(".war-computer-card .hearts").classList.add("show");
    document
      .querySelector(".war-computer-card .spades")
      .classList.remove("show");
    document
      .querySelector(".war-computer-card .clubs")
      .classList.remove("show");
    document
      .querySelector(".war-computer-card .diamonds")
      .classList.remove("show");
  } else if (computerCard.suit === "Diamonds") {
    document
      .querySelector(".war-computer-card .diamonds")
      .classList.add("show");
    document
      .querySelector(".war-computer-card .spades")
      .classList.remove("show");
    document
      .querySelector(".war-computer-card .clubs")
      .classList.remove("show");
    document
      .querySelector(".war-computer-card .hearts")
      .classList.remove("show");
  }
};

//countdown from 3 to settle war
const warCountdown = seconds => {
  let counter = seconds;

  let interval = setInterval(() => {
    document.querySelector(".war-countdown").textContent = counter--;
    if (counter < 0) {
      // The code here will run when the timer has reached zero
      showWarCards();
      clearInterval(interval);
      document.querySelector(".war-countdown").textContent = "";
    }
  }, 1000);
};

//function that flips the war card to be compared
const showWarCards = () => {
  const warPlayerCard = document.querySelector(".war-player-card");
  const warComputerCard = document.querySelector(".war-computer-card");
  createPlayerWarCard(playerHand[0]);
  createComputerWarCard(computerHand[0]);
  warPlayerCard.classList.add("active");
  warComputerCard.classList.add("active");
  setTimeout(() => {
    compareWarCards(playerHand[0].value, computerHand[0].value);
  }, 500);
};

//function to compare the war cards of each player
const compareWarCards = (player, computer) => {
  // console.log(playerHand[0], computerHand[0]);
  if (player > computer) {
    playerHand = playerHand.concat([
      ...warArray,
      playerHand.shift(),
      computerHand.shift()
    ]);
    document.querySelector(".war-winner").textContent = "Player Wins War!";
    updateScore();
    warArray = [];
    return;
  } else if (computer > player) {
    computerHand = computerHand.concat([
      ...warArray,
      playerHand.shift(),
      computerHand.shift()
    ]);
    document.querySelector(".war-winner").textContent = "Computer Wins War!";
    updateScore();
    warArray = [];
    return;
  } else document.querySelector(".war-again").textContent = "WAR";
  setTimeout(() => {
    war();
  }, 1500);
  return;
};

//function that ends war and returns to the main game
const endWar = () => {
  setTimeout(() => {
    document.querySelector(".match button").disabled = false;
    warScreen.classList.remove("fadeIn");
    matchScreen.classList.add("fadeIn");
    document.querySelector(".war-winner").textContent = "";
    document.querySelector(".war-again").textContent = "";
    document.querySelector(".winner p").textContent = "";
    document.querySelector(".player-card").classList.remove("active");
    document.querySelector(".computer-card").classList.remove("active");
    // console.log(playerHand, computerHand);
  }, 5500);
  document.querySelector(".war-player-card").classList.remove("active");
  document.querySelector(".war-computer-card").classList.remove("active");
};

//our main war function
const war = () => {
  createWarArray();
  matchScreen.classList.remove("fadeIn");
  warScreen.classList.add("fadeIn");
  document.querySelector(".war-description").textContent =
    "Drawing 3 cards from each pile";
  warCountdown(3);
  endWar();
};

//--------------Winner Function -------------------//

const displayWinner = () => {
  matchScreen.classList.remove("fadeIn");
  warScreen.classList.remove("fadeIn");
  scoreBoard.classList.remove("fadeIn");
  document.querySelector(".winner-display").classList.add("fadeIn");
  document.querySelector(".reset-button").addEventListener("click", () => {
    location.reload();
  });
};

const declareWinner = () => {
  const winnerText = document.querySelector(".winner-display p");
  if (playerHand.length === 0) {
    winnerText.textContent = "Game Over. Computer Wins!";
    displayWinner();
  } else if (computerHand.length === 0) {
    winnerText.textContent = "Game Over. Player Wins!";
    displayWinner();
  }
};
