const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let sec = 1;
let min = 1;

function time() {
    console.log("cliquei no TIME")
    clearInterval(interval);
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    sec = 1;
    min = 1;
    clearInterval(interval);
    interval = setInterval(() => {
    if (sec == 60) {
        secondsEl.textContent = "00";
        sec = 1;
        if (min < 10) {
        minutesEl.textContent = "0" + min++;
        } else {
        minutesEl.textContent = min++;
        }
    } else {
        if (sec < 10) {
        secondsEl.textContent = "0" + sec++;
        } else {
        secondsEl.textContent = sec++;
        }
    }
    }, 1000);
}


function nextTime() {
    console.log("cliquei no TIME")
    interval = setInterval(() => {
    if (sec == 60) {
        secondsEl.textContent = "00";
        sec = 1;
        if (min < 10) {
        minutesEl.textContent = "0" + min++;
        } else {
        minutesEl.textContent = min++;
        }
    } else {
        if (sec < 10) {
        secondsEl.textContent = "0" + sec++;
        } else {
        secondsEl.textContent = sec++;
        }
    }
    }, 1000);
}

function stoptime() {
    console.log("cliquei no STOP")
    clearInterval(interval);
}

function resettime() {
    console.log("cliquei no RESET")
    clearInterval(interval);
    
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    sec = 1;
    min = 1;
}


startBtn.addEventListener("click", time);

pauseBtn.addEventListener("click", stoptime);

resetBtn.addEventListener("click", resettime);

resumeBtn.addEventListener("click", nextTime);