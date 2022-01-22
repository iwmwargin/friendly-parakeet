//alert("Let's make a password!");

//List of available characters
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "`~!@#$%^&*()_-=+/.,<>?;:'][}{";


// Function that generates the password
function generatePassword() {

  var password = "";
  var passwordChar = uppercase + lowercase + numbers + symbols;
  // Prompt that will retrieve character length
  var length = prompt("How many characters would you like your password to be? (Pick between 8 and 128 characters)");

    while (length < 8 || length > 128) {
      length = prompt("Your password must be between 8 and 128 characters. How many characters would you like it to be?");
    }
    
      // Continues once user input is validated
      var confirmNumber = confirm("Will this contain numbers?");
      var confirmSymbol = confirm("Will this contain special characters?");
      var confirmUppercase = confirm("Will this contain Uppercase letters?");
      var confirmLowercase = confirm("Will this contain Lowercase letters?");

      if (confirmNumber) {
        password += numbers;
      }


      if (confirmSymbol) {
        password += symbols;
      }


      if (confirmUppercase) {
        password += uppercase;
      }

      
      if (confirmLowercase) {
        password += lowercase;
      }

      if (
        !confirmLowercase && 
        !confirmUppercase && 
        !confirmSymbol  && 
        !confirmNumber) 
        {
          alert("You must choose at least one valid character set. Please try again.");
          generatePassword();
        }

      for (var i = 0; i < length; i++) {
        
         password += passwordChar[Math.floor(Math.random() * passwordChar.length)];
      }


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
