let startTime;
let running = false;
let elapsedTime = 0;
let timerInterval;

function start() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(update, 1); // Update every millisecond
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(timerInterval);
        running = false;
        elapsedTime = Date.now() - startTime;
    }
}

function reset() {
    clearInterval(timerInterval);
    running = false;
    elapsedTime = 0;
    document.getElementById("display").innerHTML = "00:00:000"; // Reset to display milliseconds
}

function update() {
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let minutes = Math.floor(elapsedTime / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000));

    // Pad with leading zeros if necessary
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    milliseconds = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;

    document.getElementById("display").innerHTML = `${minutes}:${seconds}:${milliseconds}`;
}
