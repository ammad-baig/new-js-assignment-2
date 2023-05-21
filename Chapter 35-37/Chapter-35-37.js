// Functions

// Exercise no 1

function displayAlert() {
  alert("This is Function Alert");
}
displayAlert();

// Exercise no 2

function askName() {
  var name = prompt("Enter name");
  console.log(name);
}

askName();
// Exercise no 3

function callTwoFunctions() {
  firstFunction();

  secondFunction();
}

// Exercise no 4

function askName1() {
  alert(prompt("Enter name"));
}
askName1();

// Exercise no 5

var variable = 42;
var string = "Hello";
var number = 7;

function concat(a, b, c) {
  console.log(variable, string, number);
}

concat(variable, string, number);

// Exercise no 6

function concatenate(param1, param2) {
  var result = param1 + param2;
  console.log("Concatenated result: " + result);
}

concatenate("Hello", " World!");

// Exercise no 7

function multiply(param1, param2, param3) {
  var result = param1 * param2 * param3;
  console.log("Multiplication result: " + result);
}

multiply(2, 3, 4);

// Exercise no 8

var numbers = [4, 7, 10, 15, 2];
var average = calculateAverage(numbers);

function calculateAverage(numbers) {
  var sum = 0;
  var count = numbers.length;

  for (var i = 0; i < count; i++) {
    sum += numbers[i];
  }

  var average = sum / count;
  return average;
}
console.log(average);

// Exercise no 9

function calculateSum(param1, param2) {
  var sum = param1 + param2;
  return sum;
}

var result = calculateSum(3, 7);
console.log(result);

// Exercise no 10

// Same Question no 8

// Exercise no 11

function calculateSum1(param1, param2) {
  var sum = param1 + param2;
  return sum;
}

var result = calculateSum1(3, 7);
console.log(result);

// Exercise no 12

function countLetters(word) {
  var letterCounts = {};

  for (var i = 0; i < word.length; i++) {
    var letter = word[i];

    if (letterCounts[letter]) {
      letterCounts[letter]++;
    } else {
      letterCounts[letter] = 1;
    }
  }

  return letterCounts;
}

var word = "hello";
var counts = countLetters(word);
console.log(counts);

// Exercise no 13

var date = new Date();
function setYear(year) {
  date.setFullYear(year);
  console.log(date);
}

setYear(2003);

// Exercise no 14

function calculateAge(dateOfBirth) {
  var today = new Date();
  var birthDate = new Date(dateOfBirth);

  var age = today.getFullYear() - birthDate.getFullYear();
  var monthDiff = today.getMonth() - birthDate.getMonth();
  var dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

var dateOfBirth = "1999-08-07";
var age = calculateAge(dateOfBirth);
console.log("Age: " + age);

// Exercise no 15

var array = [
  "zaid",
  "haris",
  "raza",
  "abubakar",
  "hassan",
  "hussain",
  "fatima",
];
var wordToSearch = "hassan";
function checkWordPresence(word, array) {
  return array.includes(word);
}
var isPresent = checkWordPresence(wordToSearch, array);
console.log(isPresent);

// Exercise no 16

function repeatLetter(letter, times) {
  return letter.repeat(times);
}

var letter = "abcd";
var repeatedLetter = repeatLetter(letter, 10);
console.log(repeatedLetter);

// Exercise no 17

function reverseArray(arr) {
  return arr.reverse();
}

var array = ["a", "b", "c", "d", "e"];
var reversedArray = reverseArray(array);
console.log(reversedArray);
