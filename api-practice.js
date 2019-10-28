const getHand = () => {
  fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=26")
    .then(res => res.json())
    .then(data => {
      console.log(data.cards[0].image);
      const img = document.createElement("img");
      img.src = `${data.cards[0].image}`;
      document.querySelector(".display").appendChild(img);
    });
};

getHand();

//So far
//Made API call to Deck of Cards
//Returned new deck which draws 26 cards
//Taking the first card off the deck and appending it to the DOM


