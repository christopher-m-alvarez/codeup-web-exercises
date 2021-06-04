


//function showMultiplicationTable(x) {
//    for(let y = 1; y<= 10; y++)
//    console.log(x + " x " + y + " = " + (x*y));
//}
//
//alert(showMultiplicationTable(7))

function showMultiplicationTable() {

    for (let Num = 0; Num < 10; Num++) {
        var ranNum = Math.ceil(Math.random() * 100) + 10;
        if (ranNum % 2 === 0)

        {
            console.log(" This number is even" + ranNum)
        } else {
            console.log(" This number is odd" + ranNum)
        }
    }
}
showMultiplicationTable();