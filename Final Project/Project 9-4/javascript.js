"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in local storage
      Author: 
      Date:   

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function() {
  // Check if localStorage is available
  if (typeof(Storage) !== "undefined") {
    // Get the user's best time from localStorage
    let bestTime = localStorage.getItem("bestTime");
    // If the user has a best time, update the bestText object
    if (bestTime) {
      bestText.textContent = `${bestTime} seconds`;
    }
  }
});

// Function to update the user's best time in localStorage
function updateRecord(event) {
  // Get the user's current time
  let currentTime = clockTimer.textContent;
  // Get the user's best time from localStorage
  let bestTime = localStorage.getItem("bestTime");
  // If the user doesn't have a best time, set it to the current time
  if (!bestTime) {
    localStorage.setItem("bestTime", currentTime);
  }
  // If the user has a best time, compare it to the current time and update it if necessary
  else {
    if (currentTime < bestTime) {
      localStorage.setItem("bestTime", currentTime);
    }
  }
}

// Function to get the user's best time from localStorage
function getBestTime() {
  // If the localStorage key exists, return the integer value
  let bestTime = localStorage.getItem('bestTime');
  if (bestTime !== null) {
    return parseInt(bestTime);
  }
  // If the localStorage key doesn't exist, return 9999
  else {
    return 9999;
  }
}

