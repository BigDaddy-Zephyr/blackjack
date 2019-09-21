function card(value, name, suit) {
  this.value = value;
  this.name = name;
  this.suit = suit;
}

function deck() {
  this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  var cards = [];

  for (var s = 0; s < this.suits.length; s++) {
    for (var n = 0; n < this.names.length; n++) {

      if (n == 10 || n == 11 || n == 12) {

        cards.push(new card(10, this.names[n], this.suits[s]));
      }
      else {
        cards.push(new card(n + 1, this.names[n], this.suits[s]));
      }

    }
  }

  return cards.sort(function abc() { return Math.random() - 0.5 });    //generating random cards
}
// console.log(cards);
let hand = deck();
// console.log(hand);
var play_hand = []
var hand_count = 0;
var count = 0;
// let play_hand = [hand.pop(), hand.pop()]
console.log("cards for player")
//generating 2 cards for player
hit();
hit();

console.log(play_hand);
count1();
function hit() {


  play_hand.push(hand.pop());
  // play_hand = deck.push(hand.pop());

}
// console.log(play_hand);



// let comp_hand = deck.push(hand.pop());
console.log("cards for computer");
// console.log(comp_hand);                       //generating 2 cards for computer


function count1() {

  for (var s = 0; s < play_hand.length; s++) {
    if (play_hand[s].name == 'A' && count + play_hand[s].value < 21)
      console.log(count + play_hand[s].value)
    else {
      console.log(count + 1);
    }
  }
  
  console.log(play_hand[s]);
  count = count + play_hand[s].value;



}

// for (var n = 0; n < play_hand.length; n++) {
count = count + play_hand[s].value;
console.log(count);

//returns the count of the cards, 
// one important condition here is the one for A(it can have 1 or 11 as values)



function split() {
  //when the player gets 2 same cards then he should have the option to split

}

function showdown() {
  //function which checks counts for both player and computer and returns who won the game


}






// function hit() {






//   // for (var s = 0; s < this.suits.length; s++) {
//   //   for (var n = 0; n < this.names.length; n++) {
//   //     if (suits[s] && names[n] == play_hand) {
//   //       return false
//   //       // } else if (suits[s] && names[n] == comp_hand) {
//   //       //   return false
//   //     }
//   //     else {

//   //       return true
//   //     }
//   //   }
//   //   return play_hand
//   // }
// }
// console.log(hit())