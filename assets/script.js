// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("Please pick a length of least 8 characters and no more than 128 characters.");
  var str = "";

  if (length > 7 && length < 138) {
    var response = userAnswerArray(userAnswersPrompts());
    str = charOptions(response, length);  
  } else {
    //generatePassword();
    var length = prompt("Please pick a length of least 8 characters and no more than 128 characters.");
    var response = userAnswerArray(userAnswersPrompts());
    str = charOptions(response, length);  
  }

  return str;
}

// This functions stores the User's Input as an object
function userAnswersPrompts() {
  var userInput = {
    lowerCase: prompt("If you would like to included lowercase characters, type Y"),
    upperCase: prompt("If you would like to included uppercase characters, type Y"),
    numbers: prompt("If you would like to included numeric characters, type Y"),
    specialChars: prompt("If you would like to included special characters, type Y")
  }

  return userInput;
}

// This function turns the user prompts into an array
function userAnswerArray(userInputObj) {

  var upperCaseInput = [];

  Object.values(userInputObj).forEach(x => {
    upperCaseInput.push(x.toUpperCase());
  });

  return upperCaseInput;
}

// This function compiles the possible characters to use based on the user's answers
function charOptions(userAnswerArray, passwordLength) {
  var charArr = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIKLMNOPQRSTUVWXYZ", "0123456789", " !\"#$%\&\'()*+,-./:;<=>?@[\\]^_`{|}~"];
  var possibleChars = "";
  var finalCharOptions = "";

  userAnswerArray.forEach((x, i) => {
    if (x === "Y") {
      possibleChars += charArr[i];
    }
  });

  for (var i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * possibleChars.length);
    finalCharOptions += possibleChars[randomIndex]
  }

  return finalCharOptions;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerText = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());