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

      if (n == 10 || n == 11 || n == 12) {

        cards.push(new card(10, this.names[n], this.suits[s]));
      }
      else {
        cards.push(new card(n+1 , this.names[n], this.suits[s]));
      }

    }
  }
  return cards.sort( () => Math.random() - 0.5);
}
;

let hand = deck();
console.log(hand);





var play_hand = []
var comp_hand = []
var hand_count = 0;

var count=0, countp = 0, countc=0;


//generating 2 cards for player and dealer

$(function(){
  $('#deal').click(function(){
      document.getElementById("output1").innerHTML = play_hand[0].value ;
      document.getElementById("output2").innerHTML = play_hand[1].value ;
  });
  $('#deal').click(function(){
    document.getElementById("cc1").innerHTML = comp_hand[0].value ;
    document.getElementById("cc2").innerHTML = comp_hand[1].value ;
  });
  $('#hit').click(function(){
    document.getElementById("hC").innerHTML = play_hand[0].value ;
  });
  $('#stand').click(function(){
   alert(showdown());
  })

});



hit();
hit();
console.log("Cards for Player : ")
console.log(play_hand);
countp=count1();
console.log("\nPlayer : "+countp+"\n");
console.log("Cards for Dealer : ");
console.log(comp_hand);
countc=count2();
console.log("Dealer : "+countc);
showdown();

//Counting total cards of Player
function count1() {
  for (var s = 0; s < play_hand.length; s++) 
  {
    count+=play_hand[s].value;

    if(play_hand[0].name=='A' && play_hand[s].name=='K'|| play_hand[0].name=='A' && play_hand[s].name=='Q'||
    play_hand[0].name=='A' && play_hand[s].name=='J'||play_hand[0].name=='K' && play_hand[s].name=='A'||
    play_hand[0].name=='Q' && play_hand[s].name=='A'||play_hand[0].name=='J' && play_hand[s].name=='A')
    {  console.log("\n B L A C K J A C K !\n Player Won!")
    }

    else if (play_hand[s].name == "A" && count<11)
    {
      play_hand[s].value=11;     
      console.log("-- A is 11 --")
      count+=10;
    }
    else if(play_hand[s].value == "A" && count>11)
    {
      play_hand[s].value=1;
      console.log("-- A is 1 --")
    }

    
}
return count;
}

//counting total Dealer's cards
function count2() {
  count=0;
  for (var s = 0; s < comp_hand.length; s++) 
  {
    count+=comp_hand[s].value;

    if(comp_hand[0].name=='A' && comp_hand[s].name=='K'|| comp_hand[0].name=='A' && comp_hand[s].name=='Q'||
    comp_hand[0].name=='A' && comp_hand[s].name=='J'||comp_hand[0].name=='K' && comp_hand[s].name=='A'||
    comp_hand[0].name=='Q' && comp_hand[s].name=='A'||comp_hand[0].name=='J' && comp_hand[s].name=='A')
    {  console.log("\n B L A C K J A C K !\n Dealer Won!")
    }

      if (comp_hand[s].name == "A" && count<=11){
        comp_hand[s].value=11;     
        console.log("-- A is 11 --")
        count+=10;
  } 
  
    else if(comp_hand[s].value == "A" && count>11)
    {
      comp_hand[s].value=1;
      console.log("-- A is 1 --")
    }
}

return count;

}


function hit() {
  play_hand.push(hand.pop());
  comp_hand.push(hand.pop());
}
function split() {
  //when the player gets 2 same cards then he should have the option to split
  
}


//Check for winner
function showdown()
{
  if(countp>countc){return("Player wins!")}
  else if(countc>countp){return("Dealer wins")}
  else {return("PUSH!")}
}

