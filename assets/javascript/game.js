// 1. When we initialize we update the wins and losses counter and randomly select a target number (19-120).
//     a. We'll need a variable for target number that gets randomly selected from between 19 and 120)
//     b. When the new number gets selected we have to make sure the wins and losses stay up to date
//     c. We'll also need a function for initialization which will do all this.

// Variables
var targetNumber = Math.floor((Math.random() * 120) + 19);

// Wins
var winCounter = 0;
var wins = $("#wins");
wins.text("Wins: " + winCounter);

// Losses
var lossCounter = 0;
var losses = $("#losses");
losses.text("Losses: " + lossCounter);


// Initialization Function
function initialization () {
    console.log(targetNumber);
}

initialization()



// 2. When the player clicks a crystal a radom number gets assigned to it and stays assigned, so if it's clicked again it's still the same number.
//     a. The crystal number should be randomly selected between 1 and 12 and that number should be assigned to the crystal.
//     b. We'll need a flag for if the crystal has been clicked so that it doesnt get re-assigned when it's clicked again.



// 3. When the crystal gets clicked we add the number to the overall score.
//     a. We'll have to do math and update the dome, which means making a function of like (result + number) or something.



// 4. If the number and the score match you win --> we update the win counter and re-initialize. Else If the your score goes over the number you lose --> we update the lose counter and re-initialize.
//     a. If result === target number --> win else if resut > target number --> lose.