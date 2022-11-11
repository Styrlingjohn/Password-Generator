// Assignment Code
var resultEL = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");



// Random selctor function
function generatePassword() {
  let generatePassword = '';
  let passwordLength = prompt("How many characters would you like your password to be?");
  var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numbers = "1234567890".split("");
  var symbols = "!@#$%^&*()".split("");
  var useLowercase = confirm(`The use of lower case letters`)
  var useUppercase = confirm(`The use of upper case letters`)
  var useNumbers = confirm(`The use of numbers`)
  var useSymbols = confirm(`The use of symbols`)
  var finalPassword = []
  if (passwordLength >= 8 && passwordLength <= 128) {
    var tempPassword = []
    for (var i = 0; i < passwordLength; i++) {
      if (useLowercase) {
        tempPassword.push(lowercase[Math.floor(Math.random() * lowercase.length)])
      }
      if (useUppercase) {
        tempPassword.push(uppercase[Math.floor(Math.random() * uppercase.length)])
      }
      if (useNumbers) {
        tempPassword.push(numbers[Math.floor(Math.random() * numbers.length)])
      }
      if (useSymbols) {
        tempPassword.push(symbols[Math.floor(Math.random() * symbols.length)])
      }
      for (let i = 0; i <= passwordLength; i++)
        finalPassword.push(tempPassword[Math.floor(Math.random() * tempPassword.length)])
    }
    resultEL.value = finalPassword.splice(0,passwordLength).join("")
  }
}

 
generatePassword()