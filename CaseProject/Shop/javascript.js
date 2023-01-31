function startTimer(duration, display) {
  var timer = duration;
  setInterval(function () {
    display.textContent = --timer + " secs";
    if (timer === 0) {
      clearInterval(this);
    }
  }, 1000);
}

