// Assignment code here
function generatePassword() {
  alert('Hello! Lets build you a passowrd! I just have a few questions first.')


  //requests a length for password and asks again if the input is not valid
  do{
    var passwordLength = window.prompt('Between 8 and 128 characters, what length should the password be?', "");
}while(isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8);


//each asks if specific type of character should be included
  var passwordUppercase = prompt('Should I include any uppercase letters? (Type "Y" or "N")');
  var passwordLowercase = prompt('Should I include any lowercase letters? (Type "Y" or "N")');
  var passwordNumbers = prompt('Should I include any numbers? (Type "Y" or "N")');
  var passwordSpecial = prompt('Should I include any special characters? (Type "Y" or "N")');

  //initializes an array for character options
  let characterOptions = [];
  //arrays for certain character options
  let lowerAlphaOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let upperAlphaOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let numericOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let specialOptions = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '~', '`'];

  //adds each optional character array to the initialized array
  if (passwordUppercase = "Y"){
    characterOptions.push(upperAlphaOptions);
  }

  if (passwordLowercase = "Y"){
    characterOptions.push(lowerAlphaOptions);
  }

  if (passwordNumbers = "Y"){
    characterOptions.push(numericOptions);
  }

  if (specialOptions = "Y"){
    characterOptions.push(specialOptions);
  }

  //generates a password of the required length by choosing random characters from the full character list
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random() * characterOptions.length);
    password[i] = characterOptions[randomCharacter]
  }

  password = password.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
