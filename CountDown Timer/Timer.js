document.getElementById('startButton').addEventListener('click', function() {
    let seconds = parseInt(document.getElementById('secondsInput').value);

    if (isNaN(seconds) || seconds <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    let timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = `Time Remaining: ${seconds}s`;

    let countdown = setInterval(() => {
        seconds--;
        timerDisplay.textContent = `Time Remaining: ${seconds}s`;
        
        if (seconds <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "Time's up!!";
        }
    }, 1000);
});
