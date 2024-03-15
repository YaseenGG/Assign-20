// Chapter 14

// Q1
if (password !== '') {
    if (password.length <= 5) {
        console.log("Password must be greater than 5");
    } else {
        console.log("OK");
    }
} else {
    console.log("Password cannot be empty");
}

// Q3


var num1 = 10;
var num2 = 10;


if (num1 === num2) {
    if (num1 <= num2) {
        alert("Both conditions passed!");
    }
}


// Ch 15

// q1

arr = []

// Q2

arr = ["1"]

//  Q3

var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

// Q4

var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var totalLength = alphabet.length;
alert("The total length of the array is: " + totalLength);

// q5

var myArray = ["firstElement"];

myArray[1] = "secondElement";

alert(myArray[1]);

// ch 16

// Q1

var myArray = ["firstElement"];

myArray.push("secondElement");

alert(myArray[myArray.length - 1]);

// Q2

var Alphabet = ["h", "i", "j", "k"];

Alphabet.pop();

// Q3

var myArray = ["firstElement"];

myArray.unshift("newFirstElement");

alert(myArray[0]);

// q4

var sizes = ["S", "M", "XL", "XXL", "XXXL"];

var index = sizes.indexOf("XL");

sizes.splice(index, 0, "L");

console.log(sizes);

// q5

var sizes = ["S", "M", "XL", "XXL", "XXXL"];

var regSizes = sizes.slice(0, 3);

console.log(regSizes);

// q6

var pets = ["dog", "cat", "ox", "duck", "frog"];

var dogIndex = pets.indexOf("dog");

pets.splice(dogIndex + 1, 0, "parrot", "rabbit");

pets.splice(dogIndex + 1, 3);

console.log(pets);

// q7

var pets = ["dog", "cat", "ox", "duck", "frog"];

var catIndex = pets.indexOf("cat");
var oxIndex = pets.indexOf("ox");

pets.splice(catIndex, 1);
pets.splice(oxIndex, 1);

console.log(pets);

// q8

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];

var reducedPets = pets.slice(3, 5);

console.log(reducedPets);

// ch 17-20

// q1

for (var i = 0; i < 10; i++) {
    console.log("Loop iteration: " + (i + 1));
}

// q2

for (var i = 0; i <= 11; i++) {
    console.log("Loop iteration: " + (i + 1));
}

// q3

// ;

// q4

for (var counterName = 0; counterName < 100; counterName++) {
    console.log("Loop iteration: " + (counterName + 1));
}

//  q5

for (var i = 3; i > 0; i--) {
    console.log("Loop iteration: " + (4 - i));
}

// q6

var array = [1, 2, 3, 4, 5];
var numberOfElements = array.length;

// q7

var flag = true;

// q8

var pets = ["dog", "cat", "bird", "fish"];

for (var i = 0; i < pets.length; i++) {
}

// q9

for (var i = 0; i < 10; i++) {
    if (i === 1) {
        alert("Counter value on the second iteration: " + i);
        break;
    }
}

// q10

var userNames = ["Alice", "Bob", "Charlie", "David", "Emma"];

var firstName = prompt("Enter first name");

for (var i = 0; i < userNames.length; i++) {

    if (firstName === userNames[i]) {
        alert("Welcome!");
        break;
    }
}

if (i === userNames.length) {
    alert("Please write correct user name");
}

// q11

var matchFound = false;
var list = ["item1", "item2", "item3"]; // Example list
var userInput = prompt("Enter an item");

for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}

if (!matchFound) {
    alert("Match not found");
}

//  q12

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}
