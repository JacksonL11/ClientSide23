/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Jackson Lawrence
      Date:   04/25/23

      Filename: project03-01.js
*/
// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
      const item1 = document.getElementById('item1');
      const item2 = document.getElementById('item2');
      const item3 = document.getElementById('item3');
      const item4 = document.getElementById('item4');
      const item5 = document.getElementById('item5');
      const billTotal = document.getElementById('billTotal');
      const menuPrices = {
         item1: 11.95,
         item2: 13.95,
         item3: 10.95,
         item4: 17.95,
         item5: 8.95
      };
      function calculateBillTotal() {
         const item1Cost = item1.value * menuPrices.item1;
         const item2Cost = item2.value * menuPrices.item2;
         const item3Cost = item3.value * menuPrices.item3;
         const item4Cost = item4.value * menuPrices.item4;
         const item5Cost = item5.value * menuPrices.item5;

         const total = item1Cost + item2Cost + item3Cost + item4Cost + item5Cost;
         billTotal.textContent = total.toFixed(2);
      }
      item1.addEventListener('input', calculateBillTotal);
      item2.addEventListener('input', calculateBillTotal);
      item3.addEventListener('input', calculateBillTotal);
      item4.addEventListener('input', calculateBillTotal);
      item5.addEventListener('input', calculateBillTotal);
