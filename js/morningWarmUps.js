// TODO: Create a function named countSpaces that accepts a string
//  and returns the total number of spaces in the string.


function countSpaces (value){
    if(value === "string"){
        var spaceCount = (my_string.split(" ").length - 1);
        console.log(spaceCount)
    }
}



// TODO: Add validation to function above, if the argument pass
//  is not a string it should return false.

describe('lowerCase', function () {
    describe("Validation", function () {
        it(`should return false when called without passing an argument`, function () {
            expect(lowerCase()).toBeFalse()
        });

    });
}}}

// July 6th 2021
// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
    function capitalizeAllNames(str) {
        var allnames = str[0];
        for (var i = 0; i < str.length; i++) {
            names = str[i];
            if (names.length > allnames.length) {
                allnames = names;
            }
        }
        return allnames.toUpperCase();
    }


// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]