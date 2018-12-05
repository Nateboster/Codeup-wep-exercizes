// "use strict";
// console.log("Hello from external JavaScript");
// alert("Welcome to my website");
// var favColor = prompt("What is your favorite color?");
// alert("Great, " + favColor + " is my favorite color too!");

//******************************
// 3.1
//******************************
// const price = 3.00;
// var thm = prompt("how many days are you renting the little mermaid?");
// var bb = prompt("how many days are you renting brother bear?");
// var herc = prompt("how many days are you renting hercules?");
// alert("you will pay $" + thm * price + " for the little mermaid"
//     + "\nyou will pay $" + bb * price + " for brother bear"
//     + "\nyou will pay $" + herc * price + " for hercules"
//     + "\nyour total payment will be $" + (thm * price + bb * price + herc * price));
//******************************
// 3.2
//******************************
// var ggl = 400;
// var amz = 380;
// var fcb = 350;
// var pay1 = prompt("How many hours did you work for google?");
// var pay2 = prompt("How many hours did you work for amazon?");
// var pay3 = prompt("How many hours did you work for facebook?");
// var total1 = ggl * pay1;
// var total2 = amz * pay2;
// var total3 = fcb * pay3;
// alert("you will receive " + total1 +" from google. "
//     + "\nyou will receive " + total2 + " from amazon. "
//     + "\nyou will receive " + total3 + " from facebook. " + "\nyour total pay will be "
//     + (total1 + total2 + total3));
//******************************
// 3.3
//******************************
// var full = confirm("is there room in the class?");
// var conflict = confirm("are there no schedule conflicts?");
// if (conflict && full == true) {
//     alert("You can enroll in class.");
// }  else{
//         alert("You can not enroll in class.");
// }
//******************************
// 3.4
//******************************
// var minItems = confirm("do you have at least two items?");
// var prem = confirm(" do you have a premium membership?");
// var nonExpired = confirm("is the offer expired?");
// if ((prem || minItems) && !nonExpired == true) {
//     alert("You can use the offer");
// }  else{
//         alert("You can not use the offer.");
// }


function sayHello(name) {
    return  "Hello " + name;

}