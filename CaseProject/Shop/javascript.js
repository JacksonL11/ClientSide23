function startTimer(hours, display) {
  var remaining = hours * 3600;
  setInterval(function () {
    var hours = Math.floor(remaining / 3600);
    var minutes = Math.floor((remaining % 3600) / 60);
    display.textContent = hours + " hours " + minutes + " mins";
    if (--remaining < 0) {
      clearInterval(this);
    }
  }, 1000);
}



