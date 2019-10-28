class Deck {
  constructor() {
    this.deck = [];
    this.dealtCards = [];
  }

  // generates a deck of cards
  generateDeck() {
    // creates card generator function
    let card = (suit, value) => {
      let name = `${value} of ${suit}`;
      //returns key and values into each instance of the this.deck array
      return { name: name, suit: suit, value: value };
    };

    let values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    let suits = ["Clubs", "Diamonds", "Spades", "Hearts"];

    for (let s = 0; s < suits.length; s++) {
      for (let v = 0; v < values.length; v++) {
        this.deck.push(card(suits[s], values[v]));
      }
    }
  }

  // prints the deck of card objects
  printDeck() {
    if (this.deck.length === 0) {
      console.log(
        "Deck has not been generated. Call generate_deck() on deck object before continuing."
      );
    } else {
      for (let c = 0; c < this.deck.length; c++) {
        console.log(this.deck[c]);
      }
    }
  }
}
const deck = new Deck();
deck.generateDeck();
console.log(deck.printDeck());
