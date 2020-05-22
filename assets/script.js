// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// these are the strings that the password will use
let lowerChar = ["asdfghjklpoiuytrewqzxcvbnm"];
let upperChar = ["ASDFGHJKLQWERTYUIOPZXCVBNM"];
let sym = ["!@#$%^&*(){}[]<>"];
let num = ["1234567890"];

// this is the empty variable that will spit that password out later
let aggregate = "";

// User Input
let passLengthInput = "";
let lowercaseInput;
let uppercaseInput;
let symbolsInput;
let numbersInput;


// let's create some prompts and confirms! These will tell us what the user desires. 
function passwordLengthPrompt() {
  passLength = prompt("Hello! Pick a number between 8 - 128.");
  while(passLength < 8 || passLength > 128) {
    alert("Nah ah ah. You didn't say the magic numbers.");
    passLength = prompt("Let's give that another go. Pick a number between 8 - 128.");
  }
}

function lowercaseConfirm() {
  lowercaseInput = confirm('Do you want your password to have lowercase letters?');
}

function uppercaseConfirm() {
  uppercaseInput = confirm('Do you want your password to have uppercase letters?');
}

function symbolsConfirm() {
  symbolsInput = confirm('Do you want your password to have symbols?');
}

function numbersConfirm() {
  numbersInput = confirm('Do you want your password to have numbers?');
}


// making the function that includes the for loop 
// and calling the conditionals from above --- this is the password generator.
function generatePassword() {
  if (lowercaseInput == true) {
    aggregate += lowerChar;
  }

  if (uppercaseInput == true) {
    aggregate += upperChar;
  }

  if (symbolsInput == true) {
    aggregate += sym;
  }

  if (numbersInput == true) {
    aggregate += num;
  }

  for (let i = 0; i < passLength; i++) {
    passLengthInput += aggregate.charAt(Math.floor(Math.random() * aggregate.length));
  }

  return passLengthInput;
}



// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  passwordLengthPrompt();
  lowercaseConfirm();
  uppercaseConfirm();
  symbolsConfirm();
  numbersConfirm();
  generatePassword();
  writePassword();
});
