//Game of War

//------SETUP-----------
//Create a class of Card ✔
//Create a class of Deck ✔
//Create a function that shuffles the deck of cards into random order ✔
//Create a function that splits the deck in half ✔
// Player and Computer start with an array of 26 cards each ✔

//------GAMEPLAY--------
//On button click, flip each card over
//Compare value of each card, card with higher value wins
//Dynamically update score (+1, -1) after each round
//Add both cards to the array of the winner (push or unshift??)





let suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

//create a card object
class Card {
  constructor(suit, value){
    this.suit = suit;
    this.value = value;
  }
}

//create a deck object
class Deck {
  constructor() {
    this.deck = []
  }
  createDeck(suits, values) {
    for(let suit of suits){
      for(let value of values){
        this.deck.push(new Card(suit,value));
      }
    }
    return this.deck
  }

  //create shuffle function
  shuffle() {
    let counter = this.deck.length, temp, i;

    while(counter) {
      i = Math.floor(Math.random() * counter--);
      temp = this.deck[counter];
      this.deck[counter] = this.deck[i];
      this.deck[i] = temp;
    }
    return this.deck;
  }

  //create deal function that deals 26 cards
  deal() {
    let hand = []
    while (hand.length<26) {
      hand.push(this.deck.pop())
    }
    return hand;
  }

}

//create a new deck and shuffle it
let deck = new Deck()
deck.createDeck(suits,values)
deck.shuffle()

//assign half the deck to the player and half the deck to the computer
let playerHand = deck.deal()
let computerHand = deck.deal()

console.log(playerHand)
console.log(computerHand)

  //start our game
  const startGame = () => {
    //select intro button and store in a variable
    const playBtn = document.querySelector(".intro button");
    //select intro screen and store in a variable
    const introScreen = document.querySelector(".intro");
    //select score area and store in a variable
    const scoreBoard  = document.querySelector(".score")
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

  //play our game
  const playGame = () => {
    //select flip button and store in a variable
    const flipBtn = document.querySelector(".match button")
    const playerCard = document.querySelector(".player-card")
    const computerCard = document.querySelector(".computer-card")

    //create event listener for flipBtn
    flipBtn.addEventListener("click", () => {
      playerCard.classList.toggle("active")
      computerCard.classList.toggle("active")
    })
  }

  playGame();