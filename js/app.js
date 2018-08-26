/*
 * Create a list that holds all of your cards
 */
const icons = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-anchor", "fa-leaf", "fa-bicycle", "fa-diamond", "fa-bomb", "fa-leaf", "fa-bomb", "fa-bolt", "fa-bicycle",
    "fa-paper-plane-o", "fa-cube"
];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

let moves = document.getElementsByClassName('moves');
let clicks = 0;
var children = $(".card").children().removeClass(icons); //removes all the icons from the cards
let clickedcards = [];
let matchedcards = [];
let star = document.getElementsByClassName('fa-star');
let stars = 5;
let newstar = $(".star")
let bugfixer = 0;
let minutes = 0;
let ones = 0;
let tens = 0;
let clock = $(".clock")
var time = 0;
const score = $(".score-panel")
let newTime;
const win = $(".win");
const game = $(".container");
let wins = 0;
/*<------------------------------------------------------------------------------THIS IS A DIVIDER--------------------------------------------------------------------------------------------------------------->*/
shuffle(icons);
/*<------------------------------------------------------------------------------THIS IS A DIVIDER--------------------------------------------------------------------------------------------------------------->*/
function resetTime() {
    newTime = setInterval(timer, 1000)

    function timer() {
        ones = ones + 1;
        if (ones == 10) {
            tens = tens + 1;
            ones = 0;
        }
        if (tens == 6) {
            tens = 0;
            minutes = minutes + 1;
        }
        ones = ones.toString();
        tens = tens.toString();
        minutes = minutes.toString();

        time = minutes.concat(":", tens, ones)

        clock[0].innerHTML = time;
        clock[1].innerHTML = time;

        ones = Number(ones);
        tens = Number(tens);
        minutes = Number(minutes);
    }

}
/*<------------------------------------------------------------------------------THIS IS A DIVIDER--------------------------------------------------------------------------------------------------------------->*/
function clickshuffle() {
    for (x = 0; x < icons.length; x++) {
        children[x].classList.add(icons[x]);
    }
}
$(".restart").click(function functionName() {
    $(".card").children().removeClass(icons, 'show open check match');
    $(".card").removeClass('show open check match')
    shuffle(icons);
    clickshuffle();
    clicks = 0;
    ones = 0;
    tens = 0;
    minutes = 0;
    clearInterval(newTime);
    clickedcards.pop();
    clickedcards.pop();
    for (x = 0; x < 2; x++) {
        moves[x].innerHTML = 0;
        clock[x].innerHTML = "0:00";
    }
    if (clicks >= 20) {
        if (1 == bugfixer) {
            newstar[5].classList.add("fa-star");
            newstar[2].classList.add("fa-star");
            console.log(123);
        }
        if (2 == bugfixer) {
            newstar[4].classList.add("fa-star");
            newstar[1].classList.add("fa-star");
        }
        if (3 == bugfixer) {
            newstar[3].classList.add("fa-star");
            newstar[0].classList.add("fa-star");

        }
    }
    if (wins == 1) {
        win[0].style.display = "none";
        game[0].style.display = "flex";
        wins = wins - 1;
    }
    $(".start").click(function time() {
        resetTime()
        $(".start").off("click", time);
    });
});
/*<------------------------------------------------------------------------------THIS IS A DIVIDER--------------------------------------------------------------------------------------------------------------->*/
clickshuffle();
/*<------------------------------------------------------------------------------THIS IS A DIVIDER--------------------------------------------------------------------------------------------------------------->*/
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
/*<------------------------------------------------------------------------------THIS IS A DIVIDER--------------------------------------------------------------------------------------------------------------->*/
function mismatch() {
    var two = document.getElementsByClassName('check');
    for (x = 0; x < two.length + 2; x++) {
        two[0].classList.remove('show', 'open', 'check');
    }
}
/*<------------------------------------------------------------------------------THIS IS A DIVIDER--------------------------------------------------------------------------------------------------------------->*/
$(".deck").click(function() {
    if (event.target.classList.value != "card show open check") {
        if (event.target.nodeName === 'LI') //check to make sure it a card
        {
            clickedcards.push(event.target); //add the element to the array to keep track of the amount of cards clicked
            event.target.classList.add('show', 'open', 'check');
            clicks = clicks + 1;
            moves[0].innerHTML = clicks;
            moves[1].innerHTML = clicks; //tracks the amount of clicks
            if (clickedcards.length == 2) {
                if (clickedcards[0].innerHTML == clickedcards[1].innerHTML) {
                    for (x = 0; x < clickedcards.length; x++) {
                        clickedcards[x].classList.add('match');
                        clickedcards[x].classList.remove('check');
                        matchedcards.push(clickedcards[x]);
                    }
                } else {
                    setTimeout(function() {
                        mismatch();
                        clickedcards.pop();
                        clickedcards.pop();
                        clickedcards.pop(); // this is to make sure that more then one card can be clicked
                    }, 500);
                }
                clickedcards.pop();
                clickedcards.pop();
                clickedcards.pop();
            }
        }
        if (matchedcards.length == 16) {
            setTimeout(function() { //checks if you won
                win[0].style.display = "flex";
                game[0].style.display = "none";
                clearInterval(newTime);
                wins = wins + 1;
                for (x = 0; x < 40; x++) {
                    matchedcards.pop();
                }
            }, 1000);
        }
        if (bugfixer == 0) //Makes it so that the same if statement doesn't get run twice {
            if (clicks > 20) {
                star[5].classList.remove("fa-star");
                star[2].classList.remove("fa-star");
                bugfixer = bugfixer + 1;
                stars = stars + 2;
            }
    }
    if (bugfixer == 1) {
        if (clicks > 35) {
            star[3].classList.remove("fa-star");
            star[1].classList.remove("fa-star");
            bugfixer = bugfixer + 1;
            stars = stars + 2;
        }
    }
    if (bugfixer == 2) {
        if (clicks > 50) {
            star[1].classList.remove("fa-star");
            star[0].classList.remove("fa-star");
            bugfixer = bugfixer + 1;
            stars = stars + 2;
        }
    }

});
/*<------------------------------------------------------------------------------THIS IS A DIVIDER--------------------------------------------------------------------------------------------------------------->*/
$(".start").click(function time() {
    resetTime();
    $(".start").off("click", time);
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
