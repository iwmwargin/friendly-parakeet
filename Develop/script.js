alert("Let's make a password!");

//Global Variables
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "`~!@#$%^&*()_-=+/.,<>?;:'][}{";


// Function that generates the password
function generatePassword() {
  // Prompt that will retrieve character length
  var length = prompt("How many characters would you like your password to be? (Pick between 8 and 128 characters)");

    while (length < 8 || length > 128) {
      length = prompt("Your password must be between 8 and 128 characters. How many characters would you like it to be?");
    }
      // Continues once user input is validated
      var confirmNumber = confirm("Will this contain numbers?");


      var confirmCharacter = confirm("Will this contain special characters?");
      var confirmUppercase = confirm("Will this contain Uppercase letters?");
      var confirmLowercase = confirm("Will this contain Lowercase letters?");
 

    var uppercase = confirm()


//prompt user for the password criteria
// Password length 8 to 128 characters
//


  return "generated password goes here"
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
