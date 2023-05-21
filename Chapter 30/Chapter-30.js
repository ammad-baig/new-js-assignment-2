// Controlling the length of decimals

// Exercise no 1

var num = 3.141592653589793;

var roundedNum = num.toFixed(4);

var newNum = roundedNum.toString();

console.log(newNum);

// Exercise no 2

var num1 = 3.141592653589793;

num1 = Number(num1.toFixed(2));

console.log(num1);

// Exercise no 3

var num2= 3.141592653589793;

if (num2.toFixed(2).toString().length > 4) {
  console.log("True");
} else {
    console.log("False");
}

// Exercise no 4

var num3 = 3.141592653589793;

num3 = num3.toFixed(2).toString();

alert(num3);

