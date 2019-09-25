function card(value, name, suit) {
  this.value = value;
  this.name = name;
  this.suit = suit;
}

function deck() {
  this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  var cards = [];

  for (var s = 0; s < this.suits.length; s++) {
    for (var n = 0; n < this.names.length; n++) {

      if (n == 9 || n == 10 || n == 11) {

        cards.push(new card(10, this.names[n], this.suits[s]));
      } else if (n === 12) {
        cards.push(new card(11, this.names[n], this.suits[s]));
      }
      else {
        cards.push(new card(n + 2, this.names[n], this.suits[s]));
      }

    }
  }
  return cards.sort(() => Math.random() - 0.5);
}
;
var k = 1;
let hand = deck();
// console.log(hand);





var play_hand = []
var comp_hand = []
var hand_count = 0;
var temp = 0;
var count = 0, countp = 0, countc = 0;
var j = 0;
var comp_count = 0;


function display(target, hand) {
  hand.forEach((card, index) => {
    let element = document.createElement('p');
    element.innerHTML = card.value + " " + card.suit;
    document.getElementById(target).appendChild(element);
  })
}



//generating 2 cards for player and dealer
var total = 0;
$(function () {
  $('#deal').click(function () {
    // document.getElementById("output1").innerHTML = play_hand[0].value;
    // document.getElementById("output2").innerHTML = play_hand[1].value;
    total = play_hand[0].value + play_hand[1].value;
    $("#play_hand").empty();
    display("play_hand", play_hand);
    displayCount();
  });
  $('#stand').click(function () {
    comp_hand.push(hand.pop());
    comp_hand.push(hand.pop());
    $("#comp_hand").empty();
    display("comp_hand", comp_hand);
    // $("#play_hand").empty();
    // document.getElementById("cc1").innerHTML = comp_hand[0].value;
    // document.getElementById("cc2").innerHTML = comp_hand[1].value;
    $("#hit").attr("disabled", true);
    // for (var s = 0, count = 0; s < comp_hand.length; s++) {
    //   comp_count += comp_hand[s].value;
    // }


    while (k) {
      comp_count = 0;
      for (var s = 0, count = 0; s < comp_hand.length; s++) {

        comp_count += comp_hand[s].value;
        document.getElementById("total_c").innerHTML = comp_count;
      }
      let play_count = player_count();
      console.log("Computer count", comp_count);
      console.log("Player count", play_count);
      if (comp_count > play_count) {
        // document.getElementById("cc3").innerHTML = comp_hand[2].value;
        if (comp_count > 21) {
          comp_count = 0;
          document.getElementById("bust_c").innerHTML = "BUST";
        }
        alert(showdown());
        k = 0;
        break;
      }
      if (comp_count == 21) {
        alert(showdown());
        k = 0;
        break;
      }
      if (comp_count == play_count) {
        alert(showdown());
        k = 0;
        break;
      }




      // if (comp_count > 21) {
      //   comp_count = 0;
      //   alert(showdown());
      //   k = 0;
      //   break;
      // }
      if (comp_count < 21) {
        if (comp_count < player_count()) {
          comp_hand.push(hand.pop());
          $("#comp_hand").empty();
          display("comp_hand", play_hand);
          // document.getElementById("cc3").innerHTML = comp_hand[2].value;////////////
          comp_count = 0;
          for (var s = 0, count = 0; s < comp_hand.length; s++) {
            comp_count += comp_hand[s].value;
          }
          document.getElementById("total_c").innerHTML = comp_count;
          // k = 0;
        }


      }
    }



  }


  );

  // function actualHandCount(anarray){

  //   for (var s = 0, count = 0; s < anarrya.length; s++) {
  //     comp_count += comp_hand[s].value;

  //   }
  // }

  $('#hit').click(function () {
    hit();
    // play_hand.forEach(=>{



    // })
    $("#play_hand").empty();
    display("play_hand", play_hand);
    // document.getElementById("hC").innerHTML = addingHit();

    // document.getElementById("total").innerHTML = total + update;
  });
  // $('#count').click(function () {
  //   document.getElementById("count").innerHTML = count1();
  // });
  // $('#stand').click(function () {


  //   // alert(showdown());
  // })

});
let update = updatedValue();
function updatedValue() {
  var x = hand.pop();
  console.log(x.value);
  return x.value
}


hit();
hit();
console.log("Cards for Player : ")
console.log(play_hand);
countp = count1();
console.log("\nPlayer : " + countp + "\n");
console.log("Cards for Dealer : ");
console.log(comp_hand);
countc = count2();
console.log("Dealer : " + countc);
showdown();

//Counting total cards of Player
function count1() {
  for (var s = 0; s < play_hand.length; s++) {
    count += play_hand[s].value;

    if (play_hand[0].name == 'A' && play_hand[s].name == 'K' || play_hand[0].name == 'A' && play_hand[s].name == 'Q' ||
      play_hand[0].name == 'A' && play_hand[s].name == 'J' || play_hand[0].name == 'K' && play_hand[s].name == 'A' ||
      play_hand[0].name == 'Q' && play_hand[s].name == 'A' || play_hand[0].name == 'J' && play_hand[s].name == 'A') {
      console.log("\n B L A C K J A C K !\n Player Won!")
    }

    else if (play_hand[s].name == "A" && count < 11) {
      play_hand[s].value = 11;
      console.log("-- A is 11 --")
      count += 10;
    }
    else if (play_hand[s].value == "A" && count > 11) {
      play_hand[s].value = 1;
      console.log("-- A is 1 --")
    }


  }
  return count;
}

function displayCount() {


  document.getElementById("total").innerHTML = player_count();


}


//counting total Dealer's cards
// function count2() {
//   count = 0;
//   for (var s = 0; s < comp_hand.length; s++) {
//     count += comp_hand[s].value;

//     if (comp_hand[0].name == 'A' && comp_hand[s].name == 'K' || comp_hand[0].name == 'A' && comp_hand[s].name == 'Q' ||
//       comp_hand[0].name == 'A' && comp_hand[s].name == 'J' || comp_hand[0].name == 'K' && comp_hand[s].name == 'A' ||
//       comp_hand[0].name == 'Q' && comp_hand[s].name == 'A' || comp_hand[0].name == 'J' && comp_hand[s].name == 'A') {
//       console.log("\n B L A C K J A C K !\n Dealer Won!")
//     }

//     if (comp_hand[s].name == "A" && count <= 11) {
//       comp_hand[s].value = 11;
//       console.log("-- A is 11 --")
//       count += 10;
//     }

//     else if (comp_hand[s].value == "A" && count > 11) {
//       comp_hand[s].value = 1;
//       console.log("-- A is 1 --")
//     }
//   }

//   return count;

// }

function player_count() {
  temp = 0;
  for (var i = 0; i < play_hand.length; i++) {

    temp = play_hand[i].value + temp;
  }

  if (temp == 21) {
    document.getElementById("bust").innerHTML = "HOLY SHIT 21!";
    $("#hit").attr("disabled", true);
  }

  if (temp > 21) {
    document.getElementById("bust").innerHTML = "BUST";
    $("#hit").attr("disabled", true);
    temp = 0;

  }
  return temp;
}



function hit() {
  play_hand.push(hand.pop());

  for (var s = 0; s < play_hand.length; s++) {

    if (play_hand[s].name == "A" && temp > 11) {
      play_hand[s].value = 1;
      console.log("-- A is 1 --")
      // temp = temp - 10;
    }
    // if (play_hand[s].name == "A" && player_count() <= 11) {
    //   play_hand[s].value = 11;
    //   console.log("-- A is 11 --")
    //   // count += 10;
    // }
  }
  // for(play_hand.value)


  // console.log("////////");
  $("#play_hand").empty();
  display("play_hand", play_hand);
  // total = play_hand[0].value + play_hand[1].value;
  displayCount();
  // comp_hand.push(hand.pop());
  j++;
  if (j > 2) {
    // console.log("////////");
    displayCount();
  }
}


// function addingHit() {

//   hit();

//   $("#play_hand").empty();
//   display("play_hand", play_hand);
//   // document.getElementById("output3").innerHTML = play_hand[2].value;


//   // return play_hand[play_hand.length].value;
// }


function compHit() {


  for (var s = 0; s < comp_hand.length; s++) {
    count += comp_hand[s].value;
  }




}

function split() {
  //when the player gets 2 same cards then he should have the option to split

}


//Check for winner
function showdown() {
  if (temp > comp_count) { return ("Player wins!") }
  else if (comp_count > temp) { return ("Dealer wins") }
  else { return ("PUSH!") }
}

