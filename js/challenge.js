let timer = 0;
let intervalId = null;
let likes = {};
let paused = false;

document.getElementById("increment").addEventListener("click", function() {
  if (!paused) {
    timer++;
    updateTimerDisplay();
  }
});

document.getElementById("decrement").addEventListener("click", function() {
  if (!paused) {
    timer--;
    updateTimerDisplay();
  }
});

document.getElementById("like").addEventListener("click", function() {
  likes[timer] = likes[timer] || 0;
  likes[timer]++;
  updateLikesDisplay();
});

document.getElementById("pause").addEventListener("click", function() {
  if (paused) {
    resumeTimer();
  } else {
    pauseTimer();
  }
});

document.getElementById("restart").addEventListener("click", function() {
  clearInterval(intervalId);
  timer = 0;
  likes = {};
  resumeTimer();
  updateTimerDisplay();
  updateLikesDisplay();
});

document.getElementById("submitComment").addEventListener("click", function() {
  const comments = document.getElementById("comments");
  console.log(`Comment: ${comments.value}`);
});

function updateTimerDisplay() {
  document.getElementById("timer").innerHTML = timer;
}

function updateLikesDisplay() {
  document.getElementById("likes").innerHTML = `Likes: ${
    Object.values(likes).reduce((sum, count) => sum + count, 0)
  }`;
}

function pauseTimer() {
  clearInterval(intervalId);
  paused = true;
  document.getElementById("pause").innerHTML = "Resume";
  document.getElementById("increment").disabled = true;
  document.getElementById("decrement").disabled = true;
  document.getElementById("like").disabled = true;
}

function resumeTimer() {
  intervalId = setInterval(function() {
    timer++;
    updateTimerDisplay();
  }, 1000);
  paused = false;
  document.getElementById("pause").innerHTML = "Pause";
  document.getElementById("increment").disabled = false;
  document.getElementById("decrement").disabled = false;
  document.getElementById("like").disabled = false;
}

resumeTimer();
