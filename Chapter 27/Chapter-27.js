// Random Numbers

//Exercise no 1

var randomNum = Math.random();

var convertedNum = Math.ceil(randomNum * 50);

console.log(convertedNum);

//Exercise no 2

var randomNum1 = Math.random();

console.log(randomNum1);

//Exercise no 3

var x = Math.random();

var dice = Math.ceil(x * 6);

console.log("Rolling Dice Number " + dice);

//Exercise no 4

var x1 = Math.random();

var toss = Math.floor(x1 * 2);

if (toss == 0) {
  console.log("Head");
} else {
  console.log("Tail");
}
