
 var count = 60;
  var counter = setInterval(timer, 1000);

  function timer() {
    count = count - 1;
    if (count <= 0) {
      clearInterval(counter);
      return;
    }

    document.getElementById("timer").innerHTML = count + " secs";
  }



