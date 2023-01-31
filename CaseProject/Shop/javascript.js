function startTimer(duration, display) {
  var timer = duration;
  setInterval(function () {
    display.textContent = --timer + "hrs";
    if (timer === 0) {
      clearInterval(this);
    }
  }, 24);
}



