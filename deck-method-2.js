// const getCards = () => {
//     fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
// }
// getCards()

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

  //create deal function
  deal() {
    let hand = []
    while (hand.length<2) {
      hand.push(this.deck.pop())
    }
    return hand;
  }

}
let deck = new Deck()
deck.createDeck(suits,values)
console.log(deck.shuffle());