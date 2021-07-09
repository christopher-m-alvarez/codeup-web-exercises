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

// July 7th 2021
// TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
var personOne = {
    firstName: "silvia",
    lastName: "floopertan",
    ageInYears: 34,
    heightInInches: 65
}

personOne.getFullName = function(){
    return this.firstName + " " + this.lastName
}; console.log(personOne.getFullName());


// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73
}

personTwo.getNicelyFormattedFullName(){

}


// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62
}


// July 8th 2021
// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
//  where each object has 2 properties: originalString and countOfLetters
// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]

function arrayOfStrings(array){
    var objects = {}


    for (let i = 0; i < array.length; i ++){
        objects.push({ originalString:array[i], lengthOfOriginalString:array[i].length})
    }
    return objects;

}
var Objects = arrayOfStrings(["hello", "dave"])


// Part 2
// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//          returns: "hello dave"

function arrayofObjectsToString(arrayOfObjectParam){
    var results = []

    arrayOfObjectParam.forEach(function (object){

        results.push(object.originalString)

    })

    console.log(results)

}

arrayofObjectsToString(Objects)





// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches equal to or greater than 65.
var people = [personOne,personTwo,personThree];
// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//

function getTallUsers (arrayUsers){

    var tallUsers = []

    for (let i = 0; i < arrayUsers.length; i++){

        var currentUser = arrayUsers[i].name

        var currentUserHeight = (arrayUsers[i].heightInInches >= 65)

        passingResults.push(
            {
                name: currentUser,
                heightInInches: currentUserHeight
            }
        )
    }
    return tallUsers
}