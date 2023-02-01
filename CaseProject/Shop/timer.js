console.log(document.getElementById("countdown"))
document.addEventListener("DOMContentLoaded", function() {
  var hoursLeft = 24;

  function countDown() {
    hoursLeft--;
    document.getElementById("countdown").innerHTML = "Hours left in the day: " + hoursLeft;

    if (hoursLeft === 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "Time's up!";
    }
  }

  var timer = setInterval(countDown, 3600 * 1000);
});
