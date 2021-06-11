(function() {
    "use strict";

    /**
     *
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {};
    person = {
        firstName: "Chris",
        lastName: "Alvarez"
    }
    console.log(person.firstName)
    console.log(person.lastName)

    /**
     *
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
        return "Hello from " + person.firstName + " " + person.lastName + "!"
    }; console.log(person.sayHello());

    /**
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach ( function (shopper) {
        if (shopper.amount <= 200) {
            let amount = shopper.amount;
            console.log(shopper.name + " owes $" + amount.toFixed(2));

        } else {
            // calculate the discount
            let discount = shopper.amount * .12;
            let amount = shopper.amount - discount;
            console.log(shopper.name + " spent $" + shopper.amount + " gets a discount of $" + discount.toFixed(2) + " and owes $" + amount.toFixed(2));
        }
        // output the data
    });

    /*
    // for each
    shoppers.forEach(function (shopper) {
        let message = shopper.name + " spent: " + shopper.amount;
        if (shopper.amount > 200) {
            message = message + " gets a 12% discount and owes: $" + (shopper.amount - (shopper.amount * .12));
        } else {
            message = message + " and owes $" + shopper.amount;
        }
        console.log(message);
    })
    */




    /**
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Blindness",
                author:{
                    firstName: "Jose",
                    lastName: "Santiago"
                }
        },
        {
            title: "Harry Potter and the Goblet of Fire",
            author:{
                firstName: "J.K.",
                lastName: "Rowling"
            }
        },
        {
            title: "Star Wars Episode I - The Phantom Menace",
            author:{
                firstName: "George",
                lastName: "Lucas"
            }
        },
        {
            title: "The Adventures of Captain Underpants",
            author:{
                firstName: "Dav",
                lastName: "Pilkey"
            }
        },
        {
            title: "Goosebumps The Haunted Mask",
            author:{
                firstName: "R.L.",
                lastName: "Stine"
            }
        },


    ];
    console.log(books[0].title);
    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)
    console.log(books[1].title);
    console.log(books[1].author.firstName)
    console.log(books[1].author.lastName)
    console.log(books[2].title);
    console.log(books[2].author.firstName)
    console.log(books[2].author.lastName)
    console.log(books[3].title);
    console.log(books[3].author.firstName)
    console.log(books[3].author.lastName)
    console.log(books[4].title);
    console.log(books[4].author.firstName)
    console.log(books[4].author.lastName)

    /**
     *
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    console.log("");
    books.forEach( function (book,index) {
        showBookInfo(book, index);
    });

    console.log(books);

    function showBookInfo(book, index) {
        console.log("Book #", index +1);
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    }

    /*
    //for loop
    for (let index = 0; index < books.length; index++) {
        showBookInfo(books[index], index);
        // console.log("Book # " + index);
        // console.log("Title:" + books[index].title);
        // console.log("Author:" + books[index].firstName + " " + books[index].lastName);
        // console.log("---");
    }
    */



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author){
        let name = author.split(" ");
        console.log(name[0])
        console.log(name[1])
        let firstName = "first";
        let lastName = "last";
        return {
            title : title,
            author : {
                firstName : firstName,
                lastName : lastName
            }
        }
    }

    console.log(createBook("1984", "George Orwell"));

    /*
    //Createbook
        function createBook(title, author) {
        // handle the author -- split the string by the space
        let temp = author.split(" ");
        let firstName = temp[0];
        let lastName = temp[1];
        return {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        };
    }
    /*
    var bookTest = createBook("Discord's Apple", "Carrie Vaughn");
    console.log(bookTest);
    books.push(bookTest);
    console.log(books);
    function showBookInfo(book, number) {
        console.log("Book # " + number);
        console.log("Title:" + book.title);
        console.log("Author:" + book.firstName + " " + books.lastName);
        console.log("---");
    }
*/

})();