// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerText = password;

}

function generatePassword() {
  var length = prompt("Please pick a length at least 8 characters and no more than 128 characters.");
  var str = charOptions(charTypes());
  var newPassword = [];
  var splitStr = str.split("");

  // if the string pf possible chars is shorter than
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

// This functions stores the User's Input
function charTypes() {
  var lowerCase = prompt("If you would like to included lowercase characters, type YES");
  var upperCase = prompt("If you would like to included uppercase characters, type YES");
  var numbers = prompt("If you would like to included numeric characters, type YES");
  var specialChars = prompt("If you would like to included special characters, type YES");
    
  // object that stores the character possiblities
  var charChoices = {
    lowerCase: false,
    upperCase: false, 
    numbers: false,
    specialChars: false
  }

  // this makes all the user prompt uppercase
  var promptInputs = [lowerCase, upperCase, numbers, specialChars];
  var allUpperInput = [];
  promptInputs.forEach(x => {
    allUpperInput.push(x.toUpperCase())
  }); 

  // if user prompt value is YES, change the value to true 
  if (allUpperInput[0] === "YES") {
    charChoices.lowerCase = true;
  } 
  /// if user prompt value is YES, change the value to true 
  if (allUpperInput[1] === "YES") {
    charChoices.upperCase = true;
  } 
  // if user prompt value is YES, change the value to true 
  if (allUpperInput[2] === "YES") {
    charChoices.numbers = true;
  } 
  // if user prompt value is YES, change the value to true 
  if (allUpperInput[3] === "YES") {
    charChoices.specialChars = true;
  } 
  
  console.log(charChoices);
  return charChoices;
}

// This function compiles the possible characters to use based on the users answers
function charOptions (charObj) {
  var charArr = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIKLMNOPQRSTUVWXYZ", "0123456789", "!+-"];

  var possibleChars = "";

  Object.values(charObj).map((key, i) => {
    if (key) {
      possibleChars += charArr[i];
    }
  });

  return possibleChars;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

