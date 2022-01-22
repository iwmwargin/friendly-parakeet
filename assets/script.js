alert("Let's make a password!");

//List of available characters
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "`~!@#$%^&*()_-=+/.,<>?;:'][}{";


// Function that generates the password
function generatePassword() {

  var password = "";
  var passwordChar = "";
  // Prompt that will retrieve character length
  var length = prompt("How many characters would you like your password to be? (Pick between 8 and 128 characters)");

  // While loop that will specify length of password
    while (length < 8 || length > 128) {
      length = prompt("Your password must be between 8 and 128 characters. How many characters would you like it to be?");
    }
    
      // Continues once user input is validated
      var confirmNumber = confirm("Will this contain numbers?");
      var confirmSymbol = confirm("Will this contain special characters?");
      var confirmUppercase = confirm("Will this contain Uppercase letters?");
      var confirmLowercase = confirm("Will this contain Lowercase letters?");

// If statements that determine what character sets the user wants
      if (confirmNumber) {
        passwordChar += numbers;
      }


      if (confirmSymbol) {
        passwordChar += symbols;
      }


      if (confirmUppercase) {
        passwordChar += uppercase;
      }

      
      if (confirmLowercase) {
        passwordChar += lowercase;
      }

// Makes sure that the user has to select at least one valid character set.
      if (
        !confirmLowercase && 
        !confirmUppercase && 
        !confirmSymbol  && 
        !confirmNumber) 
        {
          alert("You must choose at least one valid character set. Please try again.");
          generatePassword();
        }
// For loop that will take the characters selected by user and create the random password
      for (var i = 0; i < length; i++) {
        
         password += passwordChar[Math.floor(Math.random() * passwordChar.length)];
      }

// This will send the password back to the function
  return password;
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

