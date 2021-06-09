// Assignment code here


//Global scopes
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
var specialCharcters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
var number = "0123456789";

//Function for password
function generatePassword() {
var newPassword = "";
var selectedPool = "";

//Asking user the length of the password
//isNaN = is not a number
var passwordLength = parseInt(prompt ("How long do you want your password to be?"));
//Repeating the prompt above until user enters a number between 8 and 128
while (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  var passwordLength = parseInt(prompt ("Password MUST be a number between 8 and 128. How long do you want your password to be?"));
}

//Criteria
var useCapitalLetter = confirm ("Do you want to use a Capital letter?");
var useLowerCase = confirm ("Do you want to use a Lower Case Letter?");
var useSpecialChar = confirm ("Do you want to use a Special Character?");
var useNumber = confirm ("Do you want to use a Number?");

//Choosing the criteria for the password
if(useCapitalLetter) {
  selectedPool += uppercase;
  newPassword += uppercase.charAt(Math.floor(Math.random()*uppercase.length));
 }

 if(useLowerCase) {
   selectedPool += lowercase;
   newPassword += lowercase.charAt(Math.floor(Math.random()*lowercase.length));
 }

 if(useSpecialChar) {
   selectedPool += specialCharcters;
   newPassword += specialCharcters.charAt(Math.floor(Math.random()*specialCharcters.length));
 }

 if(useNumber) {
   selectedPool += number;
   newPassword += number.charAt(Math.floor(Math.random()*number.length));
 }

 //For loop to generate a new password
 for (var i=newPassword.length; i <passwordLength; i++) {
   newPassword += selectedPool.charAt(Math.floor(Math.random()*selectedPool.length));
 }
 return newPassword
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
