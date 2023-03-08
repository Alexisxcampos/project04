/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Alexis Campos
      Date: 03/07/2023

      Filename: project02-04.js
 */
 //declare constants
 const CHICKEN_PRICE = 10.95;
 const HALIBUT_PRICE = 13.95;
 const BURGER_PRICE = 9.95;
 const SALMON_PRICE = 18.95;
 const SALAD_PRICE = 7.95;
 const SALES_TAX = 0.07;
 
//Add event handler
document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;
 
 //calculate total cost of meal
 function calcTotal() {
	 let cost = 0;
	 let buyChicken = document.getElementById("chicken").checked;
	 let buyHalibut = document.getElementById("halibut").checked;
	 let buyBurger = document.getElementById("burger").checked;
	 let buySalmon = document.getElementById("salmon").checked;
	 let buySalad = document.getElementById("salad").checked;
 
//Add the cost of Chicken if selected 
cost += (buyChicken) ? CHICKEN_PRICE : 0;

//Add the cost of Halibut if selected
cost += (buyHalibut) ? HALIBUT_PRICE : 0;

//Add the cost of Burger if selected
cost += (buyBurger) ? BURGER_PRICE : 0;

//Add the cost of Salmon if selected
cost += (buySalmon) ? SALMON_PRICE : 0;

//Add the cost of Salad if selected
cost += (buySalad) ? SALAD_PRICE : 0;

//Display the total cost
document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

//Calaculate the tax total
 let tax = cost * SALES_TAX;

//Display the total tax
document.getElementById("foodTax").innerHTML = formatCurrency(tax);

//calculate the total cost
let totalCost = cost + tax;

//Display the total cost
document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
 }

 
// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
