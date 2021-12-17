// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerText = password;
}

function generatePassword() {
  var length = prompt("Please pick a length of least 8 characters and no more than 128 characters.");
  var response = userAnswerArray(userAnswersPrompts());
  var inputValidation = validateInput(length, response);
  
  if (!inputValidation.validInput) {
    length = inputValidation.validation.length;
    response = inputValidation.validation.arr;
  }

  var str = charOptions(response);
  var newPassword = [];
  var splitStr = str.split("");

  // if the string of possible chars is shorter than
  // the password length the user selected
  // repeat the possible char arr 
  if (splitStr.length < length) {
    var lengthDifference = length - splitStr.length;
    for (var i = 0; i < lengthDifference; i++) {
      var currentLetter = [...splitStr[i]];
      splitStr.push(currentLetter);
    }
  }

  // loop through the array of possible char and grab
  // random chars from the list
  for (var i = 0; i < length; i++) {
    var j = Math.floor(Math.random() * (i + 1));
    var currentChar = splitStr[j];
    newPassword.push(currentChar);
  }

  // return newPassword and join the array into a string
  return newPassword.join("");
}

// This functions stores the User's Input as an object
function userAnswersPrompts () {
  var userInput = {
    lowerCase: prompt("If you would like to included lowercase characters, type Y"),
    upperCase: prompt("If you would like to included uppercase characters, type Y"),
    numbers: prompt("If you would like to included numeric characters, type Y"),
    specialChars: prompt("If you would like to included special characters, type Y")
  }

  return userInput;
}

// This function turns the user prompts into an array
function userAnswerArray (userInputObj) {

  var upperCaseInput = [];

  Object.values(userInputObj).forEach(x => {
    upperCaseInput.push(x.toUpperCase());
  });

  return upperCaseInput;
}

// This function compiles the possible characters to use based on the users answers
function charOptions (userAnswerArray) {
  var charArr = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIKLMNOPQRSTUVWXYZ", "0123456789", " !\"#$%\&\'()*+,-./:;<=>?@[\\]^_`{|}~"];

  var possibleChars = "";

  userAnswerArray.forEach((x, i) => {
    if (x === "Y") {
      possibleChars += charArr[i];
    }
  });
  
  // return a string of possible characters to use
  return possibleChars;
}

// This function is a validation test
function validateInput(checkLength, checkArray) {
  var validation = {
    validInput: false,
    length: checkLength,
    arr: checkArray
  }

  if (checkLength > 7 && checkLength  < 128) {
    validation.length = checkLength;
    validation.validInput = true;
  } else {
    validation.length = prompt("Please enter a valid character length. Any number over 7 or under 129");  
    validation.validInput = false;
  }

  if (checkArray.includes("Y")) {
    validation.arr = checkArray;
    validation.validInput = true;
  } else {
    validation.arr = prompt("You need to pick at least one character type.");
    charOptions(userAnswers());
    validation.validInput = false;
  }

  return validation;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

