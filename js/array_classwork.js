"use strict";

alert("Here is array classwork");

let test = [];

// array is a memory that stores more than one thing

    test = [100, 99, 95];

    var beagles = [];
    beagles = ["summer", "Dulce", "Obi"];

    var stuff = [1, 2, 3, "a", "b", "c", undefined, null, beagles];

    console.log("Dump the whole array");
    console.log(stuff);

    console.log("output the element");
    console.log(stuff[3]);

    console.log("output the array with a for loop");
    for (let number = 0; number < stuff.length; number++ ) {
        console.log(stuff[number]);
    }