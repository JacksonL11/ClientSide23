function startTimer(duration, display) {
  var timer = duration;
  setInterval(function () {
    var hours = Math.floor(timer / 3600);
    var minutes = Math.floor((timer % 3600) / 60);
    display.textContent = hours + " hours " + minutes + " mins";
    if (--timer < 0) {
      clearInterval(this);
    }
  }, 1000);
}

