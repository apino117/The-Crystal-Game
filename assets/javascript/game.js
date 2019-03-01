// ------------------------------------------------- PSUEDOCODE ---------------------------------------------------------------------- //

// 1. When we initialize we update the wins and losses counter and randomly select a target number (19-120).
//     a. We'll need a variable for target number that gets randomly selected from between 19 and 120)
//     b. When the new number gets selected we have to make sure the wins and losses stay up to date
//     c. We'll also need a function for initialization which will do all this.

// 2. When the player clicks a crystal a radom number gets assigned to it and stays assigned, so if it's clicked again it's still the same number.
//     a. The crystal number should be randomly selected between 1 and 12 and that number should be assigned to the crystal.
//     b. We'll need a flag for if the crystal has been clicked so that it doesnt get re-assigned when it's clicked again.



// 3. When the crystal gets clicked we add the number to the overall score.
//     a. We'll have to do math and update the dome, which means making a function of like (result + number) or something.



// 4. If the number and the score match you win --> we update the win counter and re-initialize. Else If the your score goes over the number you lose --> we update the lose counter and re-initialize.
//     a. If result === target number --> win else if resut > target number --> lose.

// ------------------------------------------------- JAVASCRIPT ---------------------------------------------------------------------- //

// Wins
var winCounter = 0;
var wins = $("#wins");
wins.text("Wins: " + winCounter);

// Losses
var lossCounter = 0;
var losses = $("#losses");
losses.text("Losses: " + lossCounter);

// Crystals
var prismatic = $("#crystal1");
var ruby = $("#crystal2");
var sapphire = $("#crystal3");
var diamond = $("#crystal4");

// Variables
var targetNumber = Math.floor((Math.random() * 120) + 19);
$("#targetnumb").text("Target Number: " + targetNumber);
var activeScore = 0;
$("#activescore").text("Active Score: " + activeScore);

$(document).ready(function () {

    // Note to self: put all bvariables outside of global scope first. 


    // Initialization Function
    initialization();

    function initialization() {

        console.log(activeScore);

        // Crystal Numbers 
        prismNumber = Math.floor((Math.random() * 12) + 1);
        rubyNumber = Math.floor((Math.random() * 12) + 1);
        sapphireNumber = Math.floor((Math.random() * 12) + 1);
        diamondNumber = Math.floor((Math.random() * 12) + 1);


        // On Click Functions for the Crystals

        // When prism gets clicked
        $(prismatic).on("click", function () {

            // Add number to score
            activeScore += prismNumber;

            // Update DOM
            $("#activescore").text("Active Score: " + activeScore);

            winCheck(activeScore, targetNumber);
        })
        // When ruby gets clicked
        $(ruby).on("click", function () {

            // Add number to score
            activeScore += rubyNumber;

            // Update DOM
            $("#activescore").text("Active Score: " + activeScore);

            winCheck(activeScore, targetNumber);

        })
        // When sapphire gets clicked
        $(sapphire).on("click", function () {

            // Add number to score
            activeScore += sapphireNumber;

            // Update DOM
            $("#activescore").text("Active Score: " + activeScore);

            winCheck(activeScore, targetNumber);
        })
        // When diamond gets clicked
        $(diamond).on("click", function () {

            // Add number to score
            activeScore += diamondNumber;

            // Update DOM
            $("#activescore").text("Active Score: " + activeScore);

            winCheck(activeScore, targetNumber);
        })
    }

    // Win condition function
    function winCheck(x, y) {
        if (x === y) {
            alert("Win");
            winCounter++;
            wins.text("Wins: " + winCounter);
            resetNumber();

        } else if (x > y) {
            alert("Lose");
            lossCounter++;
            losses.text("Losses: " + lossCounter);
            resetNumber();
        }
    }

    function resetNumber() {

        // Reset Score + Number
        activeScore = 0;
        targetNumber = Math.floor((Math.random() * 120) + 19);
        // Update DOM
        $("#activescore").text("Active Score: " + activeScore);
        $("#targetnumb").text("Target Number: " + targetNumber);
    }

})