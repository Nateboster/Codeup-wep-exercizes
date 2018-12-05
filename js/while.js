"use srticts"

// var i = 2;
//
// while (i < 65537) {
//     console.log(i);
//     i += i;
// }

//-----------------------ooo

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("cones to sell :" + allCones);

var i = 0;

do {
    var randCone = Math.floor(Math.random() * 5) + 1;
    console.log("total cones sold :" + i);
    console.log( "customer wants " + randCone + " cones");
    i += randCone;

} while (i < allCones);

if(allCones < i){
    console.log("I can't sell you " + randCone + " cones, I only have " + (allCones - (i - randCone)));
}else{
    console.log("Yay! I sold them all!");
}

//-----------------------ooo