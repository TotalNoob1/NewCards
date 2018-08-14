/*
 * Create a list that holds all of your cards
 */
 const icons = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor","fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond","fa fa-camera-retro", "fa fa-leaf", "fa fa-camera-retro", "fa fa-bolt", "fa fa-bicycle",
 "fa fa-paper-plane-o", "fa fa-cube"];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
let clickedcards = [];
function mismatch() {
    var two = document.getElementsByClassName('check');
    for (x = 0; x < two.length; x++){
      two[0].classList.remove('show','open','check');
      two[0].classList.remove('show','open','check');
    }
}


$(".deck").click(function(){
  if( event.target.nodeName === 'LI')//check to make sure it a card
  {
    clickedcards.push(event.target);//add the element to the array to keep track of the amount of cards clicked
    event.target.classList.add('show','open','check');
    if(clickedcards.length == 2){

      if (clickedcards[0].innerHTML == clickedcards[1].innerHTML){
        clickedcards[0].classList.add('match');
        clickedcards[1].classList.add('match');
        clickedcards[0].classList.remove('check');
      }else {
        setTimeout(function(){mismatch();}, 1000);
    }
      clickedcards.pop();
      clickedcards.pop();
    }
  }
});


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
