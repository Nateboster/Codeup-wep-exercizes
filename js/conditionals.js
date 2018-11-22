"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
// var userNumber = confirm("would you like to enter a number?")
// if (userNumber){
//     var userNum = prompt("enter number");
//     if(!isNaN(parseFloat(userNum))){
//         if(userNum % 2 == 0) {
//             alert("even");
//         }else{
//             alert("odd");
//         }
//
//         if (userNum > 0){
//             alert("positive");
//         }else{
//             alert("negative");
//         }
//
//         alert(useNum + "plu 100" + parseFloat(userNum)+ 100));
//     }else{
//         alert("not valid")
//     }
// }else{
//     alert(goodbye)
// }
// ---------------------
// var numConf = confirm("would you like to enter a number?");
//
// if (numConf == true) {
//     var number = prompt("enter in a number");
// }else{
//     alert("fine be that way");
// }
// // ----------------------
// if (!isNaN(number)){
//     (function (number) {
//     if (number % 2 == 0){
//         alert("even");
//     }else{
//         alert("odd");
//     }
// })();
// }else{
//     alert("You did not enter a number.");
// }
// ----------------------
// (function (number) {
//     if (number % 2 == 0){
//         alert("even");
//     }else{
//         alert("odd");
//     }
// })();
// (function (number) {
//     alert(number + 100);
// })();
// (function (number) {
//     if (number < 0){
//         alert("number is negative");
//     }else{
//         alert("number is positive");
//     }
// })();


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

// function analyzeColor(color) {
//   // var color = color.toLowerCase('');
//     if (color === 'red'){
//         return 'red is the color of fire';
//     }else if(color ==='orange'){
//         return 'orange is the color of the setting sun';
//     }else if(color ==='yellow'){
//         return 'yellow is the color of old daffodils';
//     }else if(color === 'green'){
//         return 'green is the color of grass';
//     }else if(color === 'blue'){
//         return 'blue is the color of the sky';
//     }else if(color === 'indigo'){
//         return 'indigo shouldn\'t be on this list';
//     }else if(color === 'violet'){
//         return 'violet is the color of plums';
//     }else{
//         return 'I don\'t know anything about that color';
//     }
// }
// ---------------------------------------------------
// var userColor = prompt("whats your favorite color?")
// switch (userColor){
//     case 'red':
//         alert('red is the color of fire') ;
//         break;
//     case 'orange':
//         alert('orange is the color of the setting sun');
//         break;
//     case 'yellow':
//         alert('yellow is the color of old daffodils');
//         break;
//     case 'green':
//         alert('green is the color of grass');
//         break;
//     case 'blue':
//         alert('blue is the color of the sky');
//         break;
//     case 'indigo':
//         alert('indigo shouldn\'t be on this list');
//         break;
//     case 'violet':
//         alert('violet is the color of plums');
//         break;
//     default:
//         alert('I don\'t know anything about that color');
//         break;
// }

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var total = prompt("what is your total bill?");
var luckyNumber = Math.floor(Math.random() * 6);

function calculateTotal(luckyNumber,total) {
    if (luckyNumber === 1){
        return (total - (total * .10));
    }else if(luckyNumber === 2){
        return (total - (total * .25));
    }else if(luckyNumber === 3){
        return (total - (total * .35));
    }else if(luckyNumber === 4){
        return (total - (total * .50));
    }else{
        return (total - total);
    }
}

alert("your lucky number was : " + luckyNumber
    + "\nYour total cost before discount : "
    + total + "\nYour total cost after discount : "
    + calculateTotal(luckyNumber,total));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

