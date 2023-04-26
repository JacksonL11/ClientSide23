/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: Jackson Lawrence
      Date:   04/25/23

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8", "PotatoMan23"];
let reviewType = ["P", "N", "", "", ""];
let stars = [5, 2, 1, 4, 5];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024", "11/22/2024"];
let reviews = [  "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",  "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",  "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",  "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",  "This game is a jack of all trades, great game while staying fit> My cup of tea."];
let reviewTitles = [  "My Favorite Workout Game",  "Poor Choreography",  "Buggy with Poor Tech Support",  "Nice Improvement",  "Addictive Fun"];
let allReviews = [];
for (let i = 0; i < reviewers.length; i++) {
  let review = {
    reviewer: reviewers[i],
    type: reviewType[i],
    stars: stars[i],
    date: reviewDates[i],
    review: reviews[i],
    title: reviewTitles[i]
  };
  allReviews.push(review);
}
allReviews.sort((a, b) => b.stars - a.stars);
for (let i = 0; i < allReviews.length; i++) {
  let review = allReviews[i];
  let reviewCode = "";
  if (review.type === "P") {
    reviewCode += "<table class='prime'>";
  } else if (review.type === "N") {
    reviewCode += "<table class='new'>";
  } else {
    reviewCode += "<table>";
  }
  reviewCode += "<caption>" + review.title + "</caption>";
  reviewCode += "<tr><th>By</th><td>" + review.reviewer + "</td></tr>";
  reviewCode += "<tr><th>Review Date</th><td>" + review.date + "</td></tr>";
  reviewCode += "<tr><th>Rating</th><td>" + starImages(review.stars) + "</td></tr>";
  reviewCode += "<tr><td colspan='2'>" + review.review + "</td></tr>";
  reviewCode += "</table>";
  
  let article = document.getElementsByTagName("article")[0];
  article.insertAdjacentHTML("beforeend", reviewCode);
}
function starImages(rating) {
  let imageText = "";
  for (let i = 1; i <= rating; i++) {
    imageText += "<img src='star.png' alt=''>";
  }
  return imageText;
}
