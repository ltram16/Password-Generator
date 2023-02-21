// Assignment Code
var generateBtn = document.querySelector("#generate");

// Alphabet, Numbers, Special Characters
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", ",", ";", ":", "{", "}", "[", "]", "/", "?", "-", "_", "."];

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
  var passwordLength = prompt('How many characters do you want to include in the password? (8 - 128 characters)', '10')
  var useUppercase = confirm('Would you like to include uppercase letters? Click OK to use.')
  var useLowercase = confirm('Would you like to include lowercase letters? Click OK to use.')
  var useNumbers = confirm('Would you like to include numbers? Click OK to use.')
  var usespecialChar = confirm('Would you like to include special characters? Click OK to use.')
}
