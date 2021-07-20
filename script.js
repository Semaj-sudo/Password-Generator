// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];
var passwordResult = ("")

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//event listener to generate password button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  getCharacter = prompt("How long would you like your password to be? At least 8 and no more than 128 characters.");
  if (getCharacter >= 8 && getCharacter <= 128) {
    alert("Nice, I was just going to suggest that.")
    getSpecific1()
  }
  else {
    alert("Please choose a valid character length.");
    generatePassword()
  }
 }

//prompt for lowercase characters and generate lowercase character 
function getSpecific1() {
  getSpecific1 = prompt("Would you like your password to contain lowercase characters? y/n");
  if (getSpecific1 === "n") {
    alert("fine, no lowercase characters.");
    getSpecific2()
  }
  else (getSpecific1 === "y"); {
    getLowerCase()
    function getLowerCase() {
      randomLow = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    getSpecific2()
    }
  }
}

//prompt for uppercase characters and generate uppercase character
function getSpecific2() {
  getSpecific2 = prompt("Would you like your password to contain uppercase characters? y/n")
  if (getSpecific2 === "n") {
    alert("fine, no uppercase characters.")
    getSpecific3()
  }
else (getSpecific2 === "y"); {
    getUpperCase();
    function getUpperCase() {
      randomUp = upperCase[Math.floor(Math.random() * upperCase.length)];
      for (const i = 0; i < getCharacter; i++) {
        passwordResult + finalpassword[i];
        console.log(randomUp)
      getSpecific3()
    }
  }
}

//prompt for numerical characters and generate random number
function getSpecific3() {
  getSpecific3 = prompt("Would you like your password to contain numerical characters? y/n");
  if (getSpecific3 === "n") {
    alert("fine, no numerical characters.")
    getSpecific4()
  }
  else (getSpecific3 === "y"); {
    getNumerical()
    function getNumerical() {
      randomNumber = numerical[Math.floor(Math.random() * numerical.length)];
      getSpecific4()
    }
  }
}

//prompt for special characters and generate random character
function getSpecific4() {
  getSpecific4 = prompt("Would you like your password to contain special characters? y/n");
  if (getSpecific4 === "n") {
    alert("fine, no special characters.")
    finalpassword()
  }
  else (getSpecific4 === "y"); {
    getSpecial()
    function getSpecial() {
      randomSpecial = special[Math.floor(Math.random() * special.length)];
    finalpassword()
    }
  }
}

// display password in text box
function finalpassword() {
  finalpassword = (randomLow + randomUp + randomNumber + randomSpecial)
  for (var i = 0; i < getCharacter; i++) {
    passwordResult + finalpassword[i];
    console.log(finalpassword)
  }
 document.getElementById("password").innerHTML = finalpassword;
 }
}

