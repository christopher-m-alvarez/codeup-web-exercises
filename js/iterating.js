(function(){
    "use strict";

    /**
     *
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */


       var names = ["chris", "john", "smith", "antonio"];

    console.log(names);


    /**
     *
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("There are " + names.length + "names in the array");

    /**
     *
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("The first name is: " + names[0]);
    console.log("The second name is: " + names[1]);
    console.log("The third name is: " + names[2]);
    console.log("The fourth name is: " + names[3]);


    /**
     *
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(var y = 0; y < names.length; y++) {
        console.log("The name at index " + y + " is: " + names[y]);
    }


    /**
     *
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name){
        console.log("Here is a lovely name: " + name + ".");
    });

    /**
     *
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(array){
        return array[0];
    }

    function second(array){
        return array[1];
    }

    function last(array){
        return array[array.length - 1];
    }

    console.log(first(["chris", "john", "smith", "antonio"]));
    console.log(second(["chris", "john", "smith", "antonio"]));
    console.log(last(["chris", "john", "smith", "antonio"]));



})();