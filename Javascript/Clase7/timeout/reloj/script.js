const startButton$$ = document.getElementById("startBtn");
const stopButton$$ = document.getElementById("stopBtn");
const resetBtn$$ = document.getElementById("resetBtn");
const miSpans$$ = document.querySelectorAll("span");
let countSeconds = 0;
let countmilSeconds = 0;
let intervalIdSeconds;
let intervalIdMilSeconds;
startButton$$.addEventListener("click", () => {
    intervalIdSeconds = setInterval(() => {
        countSeconds++;
        countmilSeconds = 0;
    miSpans$$[0].textContent = countSeconds;
  }, 1000);
  intervalIdMilSeconds = setInterval(() => {
    countmilSeconds++;
    miSpans$$[1].textContent = countmilSeconds.toString().padStart(2,'0');
  }, 10);
});

stopButton$$.addEventListener("click", () => {
    clearInterval(intervalIdSeconds);
    clearInterval(intervalIdMilSeconds);
})

resetBtn$$.addEventListener("click", () => {
   countSeconds = 0;
   countmilSeconds = 0;
   miSpans$$[0].textContent = countSeconds;
   miSpans$$[1].textContent = countmilSeconds;
})
