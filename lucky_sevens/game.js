// Functions to provide user experience and game logic

function clearErrors() {
    if (document.forms["luckySevens"]["startingBet"].parentElement.className.indexOf("has-") != -1) {
        document.forms["luckySevens"]["startingBet"].parentElement.className = "form-group";
    }
}

function rollDice() {
    return Math.ceil(Math.random() * 6);
}

function calculate(startingBet) {
    // Initialising tracking variables
    var numRolls = 0;
    var biggestPot = startingBet;
    var numRollsAtbiggestPot = 0;

    // Keep rolling dice until all money is gone
    while (startingBet > 0) {
        var value1 = rollDice();
        var value2 = rollDice();

        if (value1 + value2 === 7) {
            startingBet += 4;
        } else {
            startingBet -= 1;
        }

        // Updating tracker variabes
        numRolls += 1;
        if (startingBet > biggestPot) {
            biggestPot = startingBet;
            numRollsAtbiggestPot = numRolls;
        }
    }

    // Return values in hash table
    return {"numRolls":numRolls, "biggestPot":biggestPot, "numRollsAtbiggestPot":numRollsAtbiggestPot};
}


function validate() {
    clearErrors();
    var inputAmount = document.forms["luckySevens"]["startingBet"].value;

    // Throwing an error if the entered number is less than 0 or empty.
    if (inputAmount <= 0 || inputAmount == "") {
        alert("The starting bet must be a number greater than 0.");
        document.forms["luckySevens"]["startingBet"].parentElement.className = "form-group has-error";
        document.forms["luckySevens"]["startingBet"].value = "";
        document.forms["luckySevens"]["startingBet"].focus();
        return false;
    }

    // Passing starting bet argument to calculate function,
    // returning a hashtable of results
    inputAmount = Number(inputAmount);
    var results = calculate(inputAmount);

    // Displaying results
    document.getElementById("resultsTable").style.display = "block";
    document.getElementById("playButton").innerText = "Play again!";
    document.getElementById("startingBetResult").innerText = "$"+inputAmount;
    document.getElementById("totalRollsResult").innerText = results["numRolls"];
    document.getElementById("biggestPotResult").innerText = "$"+results["biggestPot"];
    document.getElementById("numRollsAtbiggestPotResult").innerText = results["numRollsAtbiggestPot"];
    return false;

}
