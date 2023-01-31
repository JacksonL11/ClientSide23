function startTimer(endDate, display) {
  var now = new Date();
  var remaining = (endDate - now) / 1000;
  setInterval(function () {
    var days = Math.floor(remaining / (3600 * 24));
    display.textContent = days + " days";
    if (--remaining < 0) {
      clearInterval(this);
    }
  }, 1000);
}



