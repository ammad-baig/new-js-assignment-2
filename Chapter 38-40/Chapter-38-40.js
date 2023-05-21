// Local vs. Global Variables

// Exercise no 1

function calculateSum() {
  var result = var1 + var2;

  //These are local Variables
}

// Exercise no 2

var globalVariable = "this is global variable";

function accessGlobalVariable() {
  console.log(globalVariable);
}

accessGlobalVariable();

// Switch Statements

// Exercise no 1

var fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Selected fruit: Apple");
    break;
  case "banana":
    console.log("Selected fruit: Banana");
    break;
  case "orange":
    console.log("Selected fruit: Orange");
    break;
  default:
    console.log("Selected fruit: Unknown");
    break;
}

// Exercise no 2

var cityName = prompt("Enter a city name:");
var message;

switch (cityName) {
  case "Karachi":
    message = "You entered Karachi!";
    alert(message);
    break;
  case "Lahore":
    message = "You entered Lahore!";
    alert(message);
    break;
  case "Islamabad":
    message = "You entered Islamabad!";
    alert(message);
    break;
  default:
    message = "City not recognized!";
    alert(message);
    break;
}
