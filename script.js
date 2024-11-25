const createTimerButton = document.getElementById("createTimer");
const timerList = document.getElementById("timersList");

createTimerButton.addEventListener("click", () => {
  const label = document.getElementById("timerLabel").value.trim();
  const minutes = parseInt(document.getElementById("timerMinutes").value);

  if (!label || isNaN(minutes) || minutes <= 0) {
    alert("Please enter a valid label and time.");
    return;
  }

  addTimer(label, minutes);
});

function addTimer(label, minutes) {
  const timerElement = document.createElement("div");
  timerElement.classList.add("timer");

  const timerLabel = document.createElement("span");
  timerLabel.classList.add("timer-label");
  timerLabel.textContent = label;

  const timerCountdown = document.createElement("span");
  timerCountdown.classList.add("timer-countdown");
  timerCountdown.textContent = formatTime(minutes * 60);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    timerElement.remove();
  });

  timerElement.appendChild(timerLabel);
  timerElement.appendChild(timerCountdown);
  timerElement.appendChild(removeButton);
  timerList.appendChild(timerElement);

  startCountdown(minutes * 60, timerCountdown);
}

function startCountdown(seconds, display) {
  const interval = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(interval);
      display.textContent = "Time's up!";
      return;
    }
    seconds--;
    display.textContent = formatTime(seconds);
  }, 1000);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}
