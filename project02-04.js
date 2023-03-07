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
 
 //calculate total cost of meal
 function calcTotal () {
	 let cost = 0;
	 let buyChicken = document.getElementById("chicken");
	 let buyHalibut = document.getElementById("halibut");
	 let buyBurger = document.getElementById("burger");
	 let buySalmon = document.getElementById("salmon");
	 let buySalad = document.getElementById("salad");
 
//Add the cost of Chicken if selected 
cost += buyChicken ? CHICKEN_PRICE : 0.0;

//Add the cost of Halibut if selected
cost += buyHalibut ? HALIBUT_PRICE : 0.0;

//Add the cost of Burger if selected
cost += buyBurger ? BURGER_PRICE : 0.0;

//Add the cost of Salmon if selected
cost += buySalmon ? SALMON_PRICE : 0.0;

//Add the cost of Salad if selected
cost += buySalad ? SALAD_PRICE : 0.0;

//Calaculate the tax total
var tax = cost * SALES_TAX

//Display the total cost
document.GetElementById("foodTotal").innerHTML = formatCurrency(cost);

//Display the total tax
document.GetElementById("foodTax").innerHTML = formatCurrency(tax);



 }

 
// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
