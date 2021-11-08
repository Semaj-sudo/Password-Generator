// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];
var passwordResult = [];
var newPassword = ''
var getCharacter = 0
var specify1 = false
var specify2 = false
var specify3 = false
var specify4 = false

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//prompt user to character limit criteria
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  getCharacter = prompt("How long would you like your password to be? At least 8 and no more than 128 characters.");
  if (getCharacter >= 8 && getCharacter <= 128) {
    alert("Nice, I was just going to suggest that.");
    specifyCharacters();
  } else {
    alert("Please choose a valid character length.");
    generatePassword();
  }
  return newPassword
}

//confirm if user would like one or more of password critera
function specifyCharacters() {
  specify1 = confirm("Would you like to include lowercase characters?")
  specify2 = confirm("Would you like to include uppercase characters?")
  specify3 = confirm("Would you like to include numerical characters?")
  specify4 = confirm("Would you like to include special characters?")
  if (specify1 || specify2 || specify3 || specify4) {
    arrayJoiner()
  }
  else {
    alert("Please choose at least one character criteria.")
    specifyCharacters()
  }
}

//joins character arrays into a single empty array
function arrayJoiner() {
  if (specify1) {
    passwordResult = passwordResult.concat(lowerCase)
  }
  if (specify2) {
    passwordResult = passwordResult.concat(upperCase)
  }
  if (specify3) {
    passwordResult = passwordResult.concat(numerical)
  }
  if (specify4) {
    passwordResult = passwordResult.concat(special)
  }
  finalpassword()
}

//loops random characters from the previously empty array equal amount of times as getCharacter value
function finalpassword(){
  for (var i = 0; i < getCharacter; i++){
    newPassword = newPassword.concat(passwordResult[Math.floor(Math.random() * passwordResult.length)]) 
  }
}
