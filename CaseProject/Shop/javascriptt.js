var hoursLeft = 24;

function countDown() {
   hoursLeft--;
   console.log("Hours left in the day: " + hoursLeft);

   if (hoursLeft === 0) {
      clearInterval(timer);
      console.log("Time's up!");
   }
}

var timer = setInterval(countDown, 3600 * 1000);
