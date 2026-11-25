
let wins = 0;
let losses = 0;
let draws = 0;
let results = [];
let gameStarted = false;

function startGame() {

    let name = document.getElementById("playerName").value;

    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    gameStarted = true;

    document.getElementById("welcome").innerHTML =
        "Welcome, " + name + "!";

    document.getElementById("startTime").innerHTML =
        "Game started on: " + new Date();
}

function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function playRound(playerChoice) {

    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }

    let computerChoice = getComputerChoice();
    let result;

    if (playerChoice === computerChoice) {
        result = "Draw";
        draws++;
    }

    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        result = "Win";
        wins++;
    }

    else {
        result = "Lose";
        losses++;
    }

    document.getElementById("playerImg").src =
        playerChoice + ".jpg";

    document.getElementById("computerImg").src =
        computerChoice + ".jpg";

    // Display Result and Colour
    let resultElement = document.getElementById("result");

    resultElement.innerHTML =
        "You: " + playerChoice +
        " | Computer: " + computerChoice +
        " | Result: " + result;

    if (result === "Win") {
        resultElement.style.color = "green";
    }

    else if (result === "Lose") {
        resultElement.style.color = "red";
    }

    else {
        resultElement.style.color = "grey";
    }

    // Update Scoreboard
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Store Result in Array
    results.push(result);

    // Add Round to History Table
    let round = results.length;

    document.getElementById("history").innerHTML +=
        "<tr><td>" + round +
        "</td><td>" + playerChoice +
        "</td><td>" + computerChoice +
        "</td><td>" + result +
        "</td></tr>";
}

// Show Summary Function
function showSummary() {

    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }

    let totalRounds = results.length;
    let totalWins = 0;

    for (let i = 0; i < results.length; i++) {

        if (results[i] === "Win") {
            totalWins++;
        }
    }

    let percentage = 0;

    if (totalRounds > 0) {
        percentage = Math.round(
            (totalWins / totalRounds) * 100
        );
    }

    document.getElementById("summary").innerHTML =
        "<h3>Game Summary</h3>" +
        "Total Rounds: " + totalRounds + "<br>" +
        "Wins: " + wins + "<br>" +
        "Losses: " + losses + "<br>" +
        "Draws: " + draws + "<br>" +
        "Win Percentage: " + percentage + "%";
}

// Reset Game Function
function resetGame() {

    wins = 0;
    losses = 0;
    draws = 0;

    results = [];
    gameStarted = false;

    // Reset Scoreboard
    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;

    // Clear Result and Summary
    document.getElementById("result").innerHTML = "";
    document.getElementById("summary").innerHTML = "";
    document.getElementById("welcome").innerHTML = "";
    document.getElementById("startTime").innerHTML = "";

    // Clear Images
    document.getElementById("playerImg").src = "rock.jpg";
    document.getElementById("computerImg").src = "rock.jpg";

    // Reset History Table
    document.getElementById("history").innerHTML =
        "<tr><th>Round</th><th>You</th><th>Computer</th><th>Result</th></tr>";

    // Clear Player Name
    document.getElementById("playerName").value = "";
}
