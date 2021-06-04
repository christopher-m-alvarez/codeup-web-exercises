"use strict";



let totalCanSell = Math.ceil(Math.random() * (100 - 50 ) + 50);
console.log("The number of cones I can sell" + totalCanSell);

let totalSold = 0;

do {
    let conesBought = Math.ceil(Math.random() * (5 - 1) + 1);

    if ((totalSold + conesBought) > totalCanSell) {
        console.log("I'm sorry, I can't sell " + conesBought);
        continue;
    }
    console.log("My customer bought" + conesBought);
    totalSold = totalSold + conesBought;
    console.log("I've sold this many " + totalSold);

} while (totalSold < totalCanSell);