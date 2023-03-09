// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");
var symbols = "!@#$%^&*()".split("");

// Random selector function
function generatePassword() {
  var passwordFinal = '';
  let passwordLength = prompt("How many characters would you like your password to be?");
  var useLowercase = confirm(`The use of lower case letters`)
  var useUppercase = confirm(`The use of upper case letters`)
  var useNumbers = confirm(`The use of numbers`)
  var useSymbols = confirm(`The use of symbols`)
  console.log(passwordLength);
  console.log(lowercase);
  console.log(useLowercase);

  if (passwordLength >= 8 && passwordLength <= 128) {
    for (var i = 0; i < passwordLength; i++) {
      // console.log(passwordLength);
      if (useLowercase & passwordFinal.length < passwordLength) {
        var randomArray= Math.floor(Math.random() * lowercase.length);
        passwordFinal += lowercase[randomArray]
      }

      if (useUppercase & passwordFinal.length < passwordLength) {
        var randomArray = Math.floor(Math.random() * uppercase.length);
        passwordFinal += uppercase[randomArray]
      }
     
      if (useNumbers & passwordFinal.length < passwordLength) {
        var randomArray = Math.floor(Math.random() * numbers.length);
        passwordFinal += numbers[randomArray]
      }

      if (useSymbols & passwordFinal.length < passwordLength) {
        var randomArray= Math.floor(Math.random() * symbols.length);
        passwordFinal += symbols[randomArray]
      }
    }

      return passwordFinal;
      
  }  
  console.log(passwordFinal);


 
}
  //  console.log(passwordFinal);
function writePassword() {
  var generatedPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  // console.log(passwordText);
  passwordText.value = generatedPassword;

}

generateBtn.addEventListener("click", writePassword);
