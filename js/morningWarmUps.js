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

})