// Strings

// Exercise no 1

var sameWords = "captain";
sameWords = sameWords.slice(1, 3);

console.log(sameWords);

// Exercise no 2

var char = "Karachi";
var numOfChar = char.length;

console.log(numOfChar);

// Exercise no 3

var animal = "elephant";
var seg = animal.slice(2, 6);

console.log(seg);

// Exercise no 4

var char1 = "Pakistan";
var numOfChar1 = char1.length;

console.log(numOfChar1);

// Exercise no 5

var firstVar = "Karachi";
var slicedVar1 = firstVar.slice(0, 1);
var slicedVar2 = firstVar.slice(4);

var plusSliced = slicedVar1 + slicedVar2;

console.log(plusSliced);

// Exercise no 6

var text = "To be or not to be.";
var indx = text.indexOf("be");

console.log(indx);

// Exercise no 7

var text2 = "To be or not to be.";
var indx2 = text2.lastIndexOf("be");

console.log(indx2);

// Exercise no 8

var findIndex = "go to University or go home";
var secIndex = findIndex.lastIndexOf("go");

console.log(secIndex);

// Exercise no 9

var str = ["Apple", "Orange", "Banana"];
var check = str.indexOf("Orange");
if (check > -1) {
  console.log("Found");
} else {
  console.log("Not Found");
}

// Exercise no 10

var alphabets = "abcde";
alphabets = alphabets.charAt(2);

console.log(alphabets);

// c is in index 2

// Exercise no 11

var cha = "abcdefghihkl";
var char10 = cha.charAt(10);

console.log(char10);

// Exercise no 12

var alphabet = "abcdefghijklmnopqrst";

var lastChar = alphabet.charAt(alphabet.length - 1);

console.log(lastChar);

// Exercise no 13

var input = "abcdefghijklmnopqrst";

var cha = input.charAt(4);

console.log(cha);

// Exercise no 14

var alphabetics = "Ammad";
var char3 = alphabetics.charAt(3);

if (alphabetics.charAt(3) == char3) {
  console.log("Found");
} else {
  console.log("Not Found");
}

// Exercise no 15

var reply = "I said no";

var charArray = [];

for (var i = 0; i < reply.length; i++) {
  charArray[i] = reply.charAt(i);
}
console.log(charArray);

var revisedReply = reply.replace("no", "yes");
console.log(revisedReply);

// Exercise no 16

var str = "1 in wording";

var newStr = str.replace("1", "one");

console.log(newStr);

// Exercise no 17

var x = "Hello! World";

var y = x.replace(/l/g, "p");

console.log(y);
