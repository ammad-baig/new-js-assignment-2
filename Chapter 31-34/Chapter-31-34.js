// Date & Time

// Exercise no 1

var dObj = new Date();

console.log(dObj);

// Exercise no 2

var date = new Date();

var dStr = date.toString();

console.log(dStr);

// Exercise no 3

var d = date.getDay();

console.log(d);

// Exercise no 4

var dayNames = ["sun", "mon", "tue", "wed", "thrs", "fri", "sat"];

var currentDay = dayNames[date.getDay()];

alert(currentDay);

// Exercise no 5

var currentDate = new Date();

var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var date = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var miliSeconds = currentDate.getMilliseconds();

var dateTime = {
  year: year,
  month: month,
  date: date,
  hours: hours,
  minutes: minutes,
  seconds: seconds,
  miliSeconds: miliSeconds,
};

console.log(dateTime);

// Exercise no 6

var later = new Date(2020, 11, 31);

console.log(later);

// Exercise no 7

var early = new Date(1992, 01, 02);

console.log(early);
// Exercise no 8

var curentYear = new Date();
var year1980 = new Date(1980, 00, 01);

alert(curentYear - year1980.getTime());

// Exercise no 9

var date = new Date();
date.setFullYear(2020);

console.log(date);
// Exercise no 10

var date = new Date();
date.setMonth(08);

console.log(date);

// Exercise no 11

var date = new Date();
date.setDate(07);

console.log(date);

// Exercise no 12

var date = new Date();
date.setMinutes(prompt("Enter minutes"));

console.log(date);

// Exercise no 13

var date = new Date();
date.setHours(prompt("Enter Hours"));

console.log(date);

// Exercise no 14

var dateofbirth = new Date(prompt("Enter Your DOB ", "mm dd yyyy"));

dateofbirth = dateofbirth.getTime();
// console.log(dateofbirth);

var CurrentTime = new Date();
CurrentTime = CurrentTime.getTime();
// console.log(CurrentTime);

var Calculate = CurrentTime - dateofbirth;
// console.log(Calculate);

var Year = Calculate / (1000 * 60 * 60 * 24 * 365);
console.log("Your age is " + Year.toFixed(1));
