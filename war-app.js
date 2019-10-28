//Game of War
//Create a class of Card ✔
//Create a class of Deck ✔
//Create a function that shuffles the deck of cards into random order ✔
//Create a function that splits the deck in half ✔






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