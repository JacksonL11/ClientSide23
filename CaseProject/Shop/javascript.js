
 function startTimer(hours, display) {
  var timer = hours * 60 * 60;
  setInterval(function () {
    display.textContent = Math.floor(timer / 3600) + " hours " + Math.floor(timer % 3600 / 60) + " mins " + (timer % 60) + " secs";
    if (--timer < 0) {
      clearInterval(this);
    }
  }, 1000);
}

