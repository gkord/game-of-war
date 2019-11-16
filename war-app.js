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
//Create a function that splices next 3 cards in array then flips the 4th

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

console.log(playerHand);
console.log(computerHand);

//start our game
const startGame = () => {
  //select intro button and store in a variable
  const playBtn = document.querySelector(".intro button");
  //select intro screen and store in a variable
  const introScreen = document.querySelector(".intro");
  //select score area and store in a variable
  const scoreBoard = document.querySelector(".score");
  //select match screen and store in a variable
  const matchScreen = document.querySelector(".match");

  //create event listener for playBtn
  playBtn.addEventListener("click", () => {
    introScreen.classList.add("fadeOut");
    matchScreen.classList.add("fadeIn");
    scoreBoard.classList.add("fadeIn");
  });
};

startGame();

//-------------------------NOW IN GAMEPLAY MODE---------------------//

//function that displays suit and value in playerHand array to card
const createPlayerCard = () => {
  //converts face card number values into name to append ("A","K","Q","J")
  if (playerHand[0].value === 11) {
    document.querySelector(".player-card .card-value p").textContent = "J";
  } else if (playerHand[0].value === 12) {
    document.querySelector(".player-card .card-value p").textContent = "Q";
  } else if (playerHand[0].value === 13) {
    document.querySelector(".player-card .card-value p").textContent = "K";
  } else if (playerHand[0].value === 14) {
    document.querySelector(".player-card .card-value p").textContent = "A";
  } else {
    document.querySelector(".player-card .card-value p").textContent =
      playerHand[0].value;
  }
  //conditions that determine which suit gets rendered to the card
  if (playerHand[0].suit === "Spades") {
    document.querySelector(".player-card .spades").classList.add("show");
    document.querySelector(".player-card .clubs").classList.remove("show");
    document.querySelector(".player-card .hearts").classList.remove("show");
    document.querySelector(".player-card .diamonds").classList.remove("show");
  } else if (playerHand[0].suit === "Clubs") {
    document.querySelector(".player-card .clubs").classList.add("show");
    document.querySelector(".player-card .spades").classList.remove("show");
    document.querySelector(".player-card .hearts").classList.remove("show");
    document.querySelector(".player-card .diamonds").classList.remove("show");
  } else if (playerHand[0].suit === "Hearts") {
    document.querySelector(".player-card .hearts").classList.add("show");
    document.querySelector(".player-card .spades").classList.remove("show");
    document.querySelector(".player-card .clubs").classList.remove("show");
    document.querySelector(".player-card .diamonds").classList.remove("show");
  } else if (playerHand[0].suit === "Diamonds") {
    document.querySelector(".player-card .diamonds").classList.add("show");
    document.querySelector(".player-card .spades").classList.remove("show");
    document.querySelector(".player-card .clubs").classList.remove("show");
    document.querySelector(".player-card .hearts").classList.remove("show");
  }
};

//function that displays suit and value in playerHand array to card
const createComputerCard = () => {
  //converts face card number values into name to append ("A","K","Q","J")
  if (computerHand[0].value === 11) {
    document.querySelector(".computer-card .card-value p").textContent = "J";
  } else if (computerHand[0].value === 12) {
    document.querySelector(".computer-card .card-value p").textContent = "Q";
  } else if (computerHand[0].value === 13) {
    document.querySelector(".computer-card .card-value p").textContent = "K";
  } else if (computerHand[0].value === 14) {
    document.querySelector(".computer-card .card-value p").textContent = "A";
  } else {
    document.querySelector(".computer-card .card-value p").textContent =
      computerHand[0].value;
  }
  //conditions that determine which suit gets rendered to the card
  if (computerHand[0].suit === "Spades") {
    document.querySelector(".computer-card .spades").classList.add("show");
    document.querySelector(".computer-card .clubs").classList.remove("show");
    document.querySelector(".computer-card .hearts").classList.remove("show");
    document.querySelector(".computer-card .diamonds").classList.remove("show");
  } else if (computerHand[0].suit === "Clubs") {
    document.querySelector(".computer-card .clubs").classList.add("show");
    document.querySelector(".computer-card .spades").classList.remove("show");
    document.querySelector(".computer-card .hearts").classList.remove("show");
    document.querySelector(".computer-card .diamonds").classList.remove("show");
  } else if (computerHand[0].suit === "Hearts") {
    document.querySelector(".computer-card .hearts").classList.add("show");
    document.querySelector(".computer-card .spades").classList.remove("show");
    document.querySelector(".computer-card .clubs").classList.remove("show");
    document.querySelector(".computer-card .diamonds").classList.remove("show");
  } else if (computerHand[0].suit === "Diamonds") {
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
    createPlayerCard();
    createComputerCard();
    playerCard.classList.add("active");
    computerCard.classList.add("active");
    compareCards(playerHand[0].value, computerHand[0].value);
    console.log(playerHand.length, computerHand.length);
  });
};

playGame();


//function that updates the score
const updateScore = () => {
  const playerScore = document.querySelector(".player-score p");
  const computerScore = document.querySelector(".computer-score p");
  playerScore.textContent = playerHand.length;
  computerScore.textContent = computerHand.length;
};

//function that compares the value of each card
const compareCards = (player, computer) => {
  // player wins
  if (player > computer) {
    document.querySelector(".winner p").textContent = "Player Wins!";
    playerHand = playerHand.concat([playerHand.shift(), computerHand.shift()]);
    updateScore();
    return;
  }
  //computer wins
  else if (computer > player) {
    document.querySelector(".winner p").textContent = "Computer Wins!";
    computerHand = computerHand.concat([computerHand.shift(), playerHand.shift()]);
    updateScore();
    return;
  }
  // //tie(war)
  else {
    document.querySelector(".winner p").textContent = "WAR!";
    document.querySelector(".match button").disabled = true;
    setTimeout(() => {
      war();
    }, 1500);
    // playerHand = playerHand.concat(playerHand.shift())
    // computerHand = computerHand.concat(computerHand.shift())
  }
};

//----------------------DEFINE ACTIONS FOR WAR--------------------------//

// warArray = []

// const createWarArray = () => {
//   warArray = warArray.concat(playerHand.splice(0, 4))
//   warArray = warArray.concat(computerHand.splice(0,4));
//   console.log(warArray)
// }
// createWarArray()



function startCountdown(seconds){
  let counter = seconds;

  let interval = setInterval(() => {
    document.querySelector(".war-countdown").textContent = counter--;
    if(counter < 0 ){
      console.log(playerHand[3], computerHand[3]);
      // The code here will run when
      // the timer has reached zero.
      
      clearInterval(interval);
      document.querySelector(".war-countdown").textContent = "";
    };
  }, 1000);
};

const war = () => {
  document.querySelector('.match').classList.remove('fadeIn')
  document.querySelector('.war').classList.add('fadeIn')
  document.querySelector(".war-description").textContent = "Drawing 3 cards from each pile"
  startCountdown(3)
}

// const compareWarCards = (player,computer) => {
//   console.log(player,computer)
//   if (player > computer) {
//     playerHand = playerHand.concat(warArray)
//     // document.querySelector(".winner p").textContent = "Player Wins War!";
//   } else {
//     computerHand = computerHand.concat(warArray)
//     // document.querySelector(".winner p").textContent = "Computer Wins War!";
//   }
//   console.log(playerHand, computerHand)
// }
// compareWarCards(playerHand[0], computerHand[0])