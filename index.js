const prompt = require("prompt-sync")();
var n1, n2, operator;
n1 = prompt("Enter Your First Number");
while(isNaN(n1)){
    console.log("Please Enter a Number");
    n1 = prompt("Enter Your First Number");
}
n2 = prompt("Enter Your Second Number");
while(isNaN(n2)){
    console.log("Please Enter a Number");
    n2 = prompt("Enter Your Second Number");
}
operator = prompt("Enter Operation");
switch(operator){
    case "+":
        console.log("Result of Sum is "+(parseFloat(n1)+parseFloat(n2)));
        break;
    case "-":
        console.log("Result of Minus is "+(parseFloat(n1)-parseFloat(n2)));
        break;
    case "*":
        console.log("Result of Multiplication is "+(parseFloat(n1)+parseFloat(n2)));
        break;
    case "/":
        console.log("Result of Division  is "+(parseFloat(n1)+parseFloat(n2)));
        break;
    
    default:
        console.log("Not a valid Operator");
}

