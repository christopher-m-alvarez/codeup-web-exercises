


//function showMultiplicationTable(x) {
//    for(let y = 1; y<= 10; y++)
//    console.log(x + " x " + y + " = " + (x*y));
//}
//
//alert(showMultiplicationTable(7))

//function showMultiplicationTable() {
//
//    for (let Num = 0; Num < 10; Num++) {
//        var ranNum = Math.ceil(Math.random() * (200 - 20) + 20);
//        if (ranNum % 2 === 0)
//
//        {
//            console.log(" This number is even" + ranNum)
//        } else {
//            console.log(" This number is odd" + ranNum)
//        }
//    }
//}
//showMultiplicationTable();

//#4 short way

//for (var index = 1,number = "";index < 10;index++) {
//    number += "1";
//    console.log(index * number)
//}


//function tree(){
//    for (let x=1; x<10; x++){
//        var number ="";
//        number=x;
//        for(let y = 1; y<x; y++){
//            number = number+x.toString();
//        }
//        console.log(number.toString());
//    }
//}
//tree()

var message = "";
for (let index = 100; index >= 5; index = index - 5){
    message = message + "index is: " + index + "\n";
}
alert(message)