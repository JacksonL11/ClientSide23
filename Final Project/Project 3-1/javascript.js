/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Jackson Lawrence
      Date:   04/25/23

      Filename: project03-01.js
*/






 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
   let menuItems = document.getElementsByClassName("menuItem");
   for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", calcTotal);
   }
   function calcTotal() {
      let orderTotal = 0;
      for (let i = 0; i < menuItems.length; i++) {
         if (menuItems[i].checked) {
            orderTotal += Number(menuItems[i].value);
         }
      }
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
   }
   function formatCurrency(amount) {
      let formatted = "$" + amount.toFixed(2);
      return formatted;
   }
