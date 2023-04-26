/*    JavaScript 7th Edition
      Chapter 4
      Project 04-04

      Application to determine change from a cash amount
      Author: Jackson Lawrence
      Date:   04/25/23

      Filename: project04-04.js
*/

let cashBox = document.getElementById("cash");
let billBox = document.getElementById("bill");
let changeBox = document.getElementById("change");

cashBox.addEventListener("input", runTheRegister);
billBox.addEventListener("input", runTheRegister);
function zeroTheRegister() {
   changeBox.value = 0;
   document.getElementById("bill20").innerHTML = 0;
   document.getElementById("bill10").innerHTML = 0;
   document.getElementById("bill5").innerHTML = 0;
   document.getElementById("bill1").innerHTML = 0;
   document.getElementById("coin25").innerHTML = 0;
   document.getElementById("coin10").innerHTML = 0;
   document.getElementById("coin5").innerHTML = 0;
   document.getElementById("coin1").innerHTML = 0;
   document.getElementById("warning").innerHTML = "";
}

function runTheRegister() {
   try {
      zeroTheRegister();
   
      let cashValue = cashBox.value;
      let billValue = billBox.value;
      
      if (cashValue > 100) {
         throw new Error("Cash amount cannot be more than $100");
      }
      
      let changeValue = cashValue - billValue;  // calculate the change 

      if (changeValue < 0) {
         throw new Error("Cash amount doesn't cover the bill");
      }
   
      changeBox.value = formatCurrency(changeValue); // format the change as currency
   
      calcChange(changeValue); // Determine the units of currency needed for the change
   } catch(error) {
      // Handle the error
      document.getElementById("warning").innerHTML = error.message;
   }
}
function calcChange(changeValue) {
   let bill20Amt = determineCoin(changeValue, 20);
   document.getElementById("bill20").innerHTML = bill20Amt;
   changeValue -= bill20Amt*20;
   let bill10Amt = determineCoin(changeValue, 10);
   document.getElementById("bill10").innerHTML = bill10Amt;
   changeValue -= bill10Amt*10;
   let bill5Amt = determineCoin(changeValue, 5);
   document.getElementById("bill5").innerHTML = bill5Amt;
   changeValue -= bill5Amt*5; // Corrected
   let bill1Amt = determineCoin(changeValue, 1);
   document.getElementById("bill1").innerHTML = bill1Amt;
   changeValue -= bill1Amt*1;
   let coin25Amt = determineCoin(changeValue, 0.25);
   document.getElementById("coin25").innerHTML = coin25Amt;
   changeValue -= coin25Amt*0.25;
   let coin10Amt = determineCoin(changeValue, 0.10);
   document.getElementById("coin10").innerHTML = coin10Amt;
   changeValue -= coin10Amt*0.10;
   
   let coin5Amt = determineCoin(changeValue, 0.05);
   document.getElementById("coin5").innerHTML = coin5Amt;
   changeValue -= coin5Amt*0.05;
 
   let coin1Amt = Math.floor(changeValue*100);
   document.getElementById("coin1").innerHTML = coin1Amt;
   }






function determineCoin(cashValue, currencyUnit) {

   return parseInt(cashValue/currencyUnit);
}
 function formatCurrency(value) {
    return value.toFixed(2);
 }
