let count = 5;

const timer = setInterval(function() {
  console.log(count);
  count--;
  if (count === 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}, 1000);
