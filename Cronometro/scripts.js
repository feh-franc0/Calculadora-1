const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;
let sec = 50;
let min = 1;

function time() {
    interval = setInterval(() => {
        if (sec==60) {
            secondsEl.textContent = "00"
            sec = 1
            if (min<10){
                minutesEl.textContent = "0" + min++
            }
            else {
                minutesEl.textContent = min++
            }
        } else {
            if (sec<10){
                secondsEl.textContent = "0"+ sec++
            }
            else {
                secondsEl.textContent = sec++
            }
        }

    },1000)
 }

 function stoptime() {
    clearInterval(interval)
 }

startBtn.addEventListener("click",time)

pauseBtn.addEventListener("click", stoptime)