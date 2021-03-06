"use strict";

//... rest of javascript code


// console.log("Hello World!");
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

// the following line will show the OK/CANCEL confirm dialog
// var confirmed = confirm('Are you sure you want to do XYZ?');
// console.log(confirmed); // will be either true or false

var userInput = prompt('What is your favorite color?');

alert("Great, "+ userInput + " is my favorite color too!");

// Answer for exercise 3 #1 from previous homework
//https://java.codeup.com/javascript-i/introduction/working-with-data-types-operators-and-variables/

/*
You have rented some movies for your kids:
The little mermaid (for 3 days),
Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?
 */

alert("The price of the movies are: " + (3+5+1) * 3);

alert("Payment for the week: " + ((400*6) + (380*4) + (350*10)));

var full = confirm("Is the class full?");
var conflict = confirm("Is there a conflict?");
alert("You can enroll in class:" + (!full && !conflict));

var premium = confirm("Are you a premium member");
var quantity = Number(prompt("How many items did you buy"));
var expired = confirm("Is the coupon expired");
alert("You can get the discount" + ((!expired) && (premium || (quantity > 2 ))));

var username = 'codeup';
var password = 'notastrongpassword';

var password_is_five_character = password.length >= 5;
var password_doesnt_contains_username = !password.includes(username);
var username_less_than_20_characters = username.length <= 20;
var contains_no_whitespace = password === password.trim() && username === username.trim();

console.log(password_is_five_character);
console.log(password_doesnt_contains_username);
console.log(username_less_than_20_characters);
console.log(contains_no_whitespace);
