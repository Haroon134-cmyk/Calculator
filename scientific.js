const prompt = require('prompt-sync')();
var n1 = 0;
var n2 = 0;
var operator = -1;
while(operator != 0){
    if(n1 === 0){
        n1 = prompt("Enter a Number");
    }
    console.log("Press 0 to quite");
    console.log("Press 1 to add another number");
    console.log("Press 2 to subtract a number");
    console.log("Press 3 to Multiply a number");
    console.log("Press 4 to divide with a Number");
    console.log("Press 5 to take modulus of Naumber");
    console.log("Press 6 to take square of given number");
    console.log("Press 7 to take square root of given number");
    console.log("Press 8 to take sin of given number");
    console.log("Press 9 to take cos of given number");
    console.log("Press 10 to take tan of given number");
    console.log("Press 11 to take inverse of sin of given number");
    console.log("Press 12 to take inverse cos of given number");
    console.log("Press 13 to take inverse tan of given number");
    operator = prompt("Enter Operation");
    if(operator == "1"){
        n2 = prompt("Enter Number");
        n1 = parseFloat(n1)+parseFloat(n2);
        console.log("Resultant number is "+(n1));
    }
    else if(operator == "2"){
        n2 = prompt("Enter Number");
        n1 = parseFloat(n1)-parseFloat(n2);
        console.log("Resultant number is "+(n1));
    }
    else if(operator == "3"){
        n2 = prompt("Enter Number");
        n1 = parseFloat(n1)*parseFloat(n2);
        console.log("Resultant number is "+(n1));
    }
    else if(operator == "4"){
        n2 = prompt("Enter Number");
        n1 = parseFloat(n1)/parseFloat(n2);
        console.log("Resultant number is "+(n1));
    }
    else if(operator == "5"){
        n2 = prompt("Enter Number");
        n1 = parseFloat(n1)%parseFloat(n2);
        console.log("Resultant number is "+(n1));
    }
    else if(operator == "6"){
       n1 = parseFloat(n1)*parseFloat(n1);
        console.log("Resultant number is "+(n1));
    }
    else if(operator == "7"){
        n1 = Math.sqrt(parseFloat(n1));
        console.log("Resultant number is "+(n1));
    }
    else if(operator == "8"){
        n1 = Math.sin(parseFloat(n1));
        console.log("Resultant number is "+n1);
    }
    else if(operator == "9"){
       n1 = Math.cos(parseFloat(n1));
        console.log("Resultant number is "+(n1));
    }
    else if(operator == "10"){
        n1 = Math.tan(parseFloat(n1));
        console.log("Resultant number is "+(n1));
    }
    else if(operator == "11"){
        n1 = Math.asin(parseFloat(n1));
        console.log("Resultant number is "+n1);
    }
    else if(operator == "12"){
       n1 = Math.acos(parseFloat(n1));
        console.log("Resultant number is "+(n1));
    }
    else if(operator == "13"){
        n1 = Math.atan(parseFloat(n1));
        console.log("Resultant number is "+(n1));
    }

}
