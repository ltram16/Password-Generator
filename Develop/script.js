// Assignment Code
var generateBtn = document.querySelector("#generate");

// Alphabet, Numbers, Special Characters
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", ",", ";", ":", "{", "}", "[", "]", "/", "?", "-", "_", "."];

// Add function to get random integers
// use sample code https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomChar(max) {
  return Math.floor(Math.random() * max);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate password
function generatePassword() {
  // add prompts to generate password
  var passwordLength = prompt('How many characters do you want to include in the password? (8 - 128 characters)',);
  // add alert to redo if the password length is less than 8 or greater 128
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Please choose between 8 and 128 characters.")
    return generatePassword()
  }

  var useUppercase = confirm('Would you like to include uppercase letters? Click OK to use.');
  var useLowercase = confirm('Would you like to include lowercase letters? Click OK to use.');
  var useNumbers = confirm('Would you like to include numbers? Click OK to use.');
  var usespecialChar = confirm('Would you like to include special characters? Click OK to use.');

  // add characters based on user's input
  var userInput = [];
  if (useUppercase) {
    userInput = userInput.concat(uppercase);
  }

  if (useLowercase) {
    userInput = userInput.concat(lowercase);
  } 

  if (useNumbers) {
    userInput = userInput.concat(numbers);
  } 

   if (usespecialChar) {
    userInput = userInput.concat(specialCharacters);
  }


  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    password = password + userInput[getRandomChar(userInput.length)]
  }
  
  return password
}
