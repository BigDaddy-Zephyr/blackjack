function card(value, name, suit) {
  this.value = value;
  this.name = name;
  this.suit = suit;
}

function deck() {
  this.names = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K','A'];
  this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  var cards = [];

  for (var s = 0; s < this.suits.length; s++) {
    for (var n = 0; n < this.names.length; n++) {
      cards.push(new card(n + 1, this.names[n], this.suits[s]));

    }
  }
  
  return cards.sort( () => Math.random() - 0.5);
}

var hand = deck();
// console.log(hand);
// playerhand
function hit(){
   return [hand.pop(), hand.pop()]
}
// console.log(hit());
// DealerHand 
function dealHand(){
  return hit();
  
} 
// console.log(dealHand());

function cardCount(){
  var sum = 0;
 var result = hit().map(a => a.name);
 console.log(parseInt( result));
//  for(let i = 0; i<result.length; i++){
//    if(result[i] == 'A' ){
//      result= 10
//    }
//   sum = sum+result[i];
//  }
//  return sum;
}
console.log(cardCount());