"use strict";

// //ID Selectors alerting contents
// var contents = $("#list").html();
// alert(contents);


// //Class Selector using css in java
// $('.codeup').css('border', '1px red solid');

// // Element Selector
// $('li').css('font-size', '20px');
// $('.something').css('background-color', 'red');
// var contents = $("h1").html();
// alert(contents);

// //Multiple Selectors
// $('h1, p, li').css('background-color', 'red');


$('h1').click(function() {
    $(this).css('background-color', '#FF0')
});

$('p').dblclick(function() {
    $(this).css('font-size', '18px')
});

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);