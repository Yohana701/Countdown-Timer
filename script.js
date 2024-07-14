let countdownValue = 0;
let countdownInterval;
let isPaused = false;

const countdownDisplay = document.getElementById('countdown-value');
const countdownInput = document.getElementById('countdown-input');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');

// Update countdown display
function updateCountdownDisplay() {
    countdownDisplay.textContent = countdownValue + ' seconds';
}

// Start the countdown
function startCountdown() {
    countdownValue = parseInt(countdownInput.value);
    updateCountdownDisplay();

    startButton.disabled = true;
    pauseButton.textContent = 'Pause Timer';

    countdownInterval = setInterval(() => {
        if (!isPaused) {
            countdownValue--;
            updateCountdownDisplay();

            if (countdownValue <= 0) {
                clearInterval(countdownInterval);
                startButton.disabled = false;
                pauseButton.disabled = true;
                countdownDisplay.textContent = 'Countdown complete!';
            }
        }
    }, 1000);
}

// Pause or Resume the countdown
function pauseOrResumeCountdown() {
    if (!isPaused) {
        clearInterval(countdownInterval);
        isPaused = true;
        pauseButton.textContent = 'Resume Timer';
    } else {
        isPaused = false;
        pauseButton.textContent = 'Pause Timer';
        countdownInterval = setInterval(() => {
            if (!isPaused) {
                countdownValue--;
                updateCountdownDisplay();

                if (countdownValue <= 0) {
                    clearInterval(countdownInterval);
                    startButton.disabled = false;
                    pauseButton.disabled = true;
                    countdownDisplay.textContent = 'Countdown complete!';
                }
            }
        }, 1000);
    }
}

// Reset the countdown
function resetCountdown() {
    clearInterval(countdownInterval);
    countdownValue = parseInt(countdownInput.value);
    updateCountdownDisplay();
    startButton.disabled = false;
    pauseButton.disabled = false;
    isPaused = false;
    pauseButton.textContent = 'Pause Timer';
}

// Event listeners
startButton.addEventListener('click', startCountdown);
pauseButton.addEventListener('click', pauseOrResumeCountdown);
resetButton.addEventListener('click', resetCountdown);
